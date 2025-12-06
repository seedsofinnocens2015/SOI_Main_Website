"use client"
import { useEffect, useRef, useState } from 'react';

const LocationsMap = ({ locations }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    setIsClient(true);
    
    // Dynamically import Leaflet only on client side
    Promise.all([
      import('leaflet'),
      import('leaflet/dist/leaflet.css')
    ]).then(([LModule]) => {
      const L = LModule.default || LModule;
      
      if (!mapRef.current || mapInstanceRef.current) return;

      // Initialize map centered on India
      const map = L.map(mapRef.current, {
        zoomControl: true,
        attributionControl: true,
      }).setView([20.5937, 78.9629], 5); // Center on India

      // Add tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
        tileSize: 256,
      }).addTo(map);

      // Create custom pin icon (teardrop shape like in image)
      const createPinkPinIcon = () => {
        return L.divIcon({
        className: 'custom-pink-pin',
        html: `
          <div style="
            position: relative;
            width: 30px;
            height: 40px;
            filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.3));
          ">
            <svg width="30" height="40" viewBox="0 0 30 40" style="position: relative; z-index: 2;">
              <path d="M15 0 C6.716 0 0 6.716 0 15 C0 23.284 15 40 15 40 C15 40 30 23.284 30 15 C30 6.716 23.284 0 15 0 Z" 
                    fill="#0A2A43" 
                    stroke="#B8E8E5" 
                    stroke-width="1"
                    style="filter: drop-shadow(0px 2px 4px rgba(24, 117, 238, 0.5));"/>
              <circle cx="15" cy="15" r="8" fill="#E3F7F6" style="filter: drop-shadow(0px 1px 2px rgba(0,0,0,0.2));"/>
            </svg>
          </div>
        `,
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -40],
      });
    };

      // Add markers for each location
      locations.forEach((location) => {
        if (location.coordinates && location.coordinates.length === 2) {
          const marker = L.marker(
            [location.coordinates[0], location.coordinates[1]],
            { icon: createPinkPinIcon() }
          ).addTo(map);

          if (location.title) {
            marker.bindPopup(`<strong>${location.title}</strong>`);
          }
        }
      });

      // Fit map to show all markers
      if (locations.length > 0) {
        const validLocations = locations.filter(
          (loc) => loc.coordinates && loc.coordinates.length === 2
        );
        
        if (validLocations.length > 0) {
          const bounds = L.latLngBounds(
            validLocations.map((loc) => [loc.coordinates[0], loc.coordinates[1]])
          );
          map.fitBounds(bounds, { padding: [50, 50] });
        }
      }

      mapInstanceRef.current = map;
    }).catch((error) => {
      console.error('Error loading Leaflet:', error);
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [locations]);

  if (!isClient) {
    return <div style={{ width: '100%', height: '100%', minHeight: '500px', background: '#f0f0f0' }} />;
  }

  return <div ref={mapRef} style={{ width: '100%', height: '100%', minHeight: '500px' }} />;
};

export default LocationsMap;

