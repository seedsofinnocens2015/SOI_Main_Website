"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { getAssetPathClient } from '@/app/utils/assetPath';
import styles from './surgicalHeader.module.scss';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact-us', isButton: true },
];

export default function SurgicalSubdomainHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetId = href.replace('#', '');
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', ' ');
        return;
      }
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <header
      className={`${styles.subdomainHeader} ${scrolled ? styles.scrolled : ''}`}
      aria-label="Surgical Centre Header"
    >
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.branding}>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className={styles.logoLink}
              aria-label="Seeds of Innocence Surgical Centre - Home"
            >
              <Image
                src={getAssetPathClient('/assets/img/Header Logo.svg')}
                alt="Seeds of Innocence Surgical Centre"
                width={260}
                height={55}
                priority
                className={styles.logo}
              />
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.label} className={styles.navItem}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={link.isButton ? styles.ctaNavButton : styles.navLink}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobileBackdrop}
          onClick={() => setIsMobileMenuOpen(false)}
          role="presentation"
        >
          <div
            className={styles.mobileDrawer}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className={styles.mobileDrawerHeader}>
              <Image
                src={getAssetPathClient('/assets/img/Header Logo.svg')}
                alt="Seeds of Innocence Surgical Centre"
                width={190}
                height={42}
                className={styles.mobileLogo}
              />
              <button
                type="button"
                className={styles.mobileCloseBtn}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaXmark size={22} />
              </button>
            </div>
            <ul className={styles.mobileNavList}>
              {NAV_LINKS.map((link) => (
                <li key={link.label} className={styles.mobileNavItem}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={link.isButton ? styles.mobileCtaButton : styles.mobileNavLink}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
