import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import DoctorDetailsSection from '@/app/Components/DoctorDetailsSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaSuitcase, FaLocationDot } from 'react-icons/fa6';
import indiaCentresData from '../ivf-centres/india-centres-data.json';
import centerContentConfig from '../ivf-centres/centerContent.json';
import doctorsData from '../doctors/doctors-data.json';
import { notFound } from 'next/navigation';
import { getAssetPath } from '@/app/utils/assetPath';

// Helper function to convert city name to slug
function cityNameToSlug(cityName) {
  return cityName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export async function generateStaticParams() {
  try {
    const doctorParams = doctorsData
      .map((doctor) => ({
        slug: doctor.newSlug || doctor.slug + '-ivf-specialist',
      }))
      .filter((param) => param.slug);

    return doctorParams;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

const page = async ({ params }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams || {};
  
  if (!slug) {
    notFound();
  }
  
  // Remove trailing slash if present
  const cleanSlug = slug.replace(/\/$/, '');
  
  // Only handle doctor routes here (IVF centres now use /[city]/[slug])
  const isDoctorRoute = cleanSlug.startsWith('dr-') && (cleanSlug.endsWith('-ivf-specialist') || cleanSlug.endsWith('-ivf-specialists'));
  
  if (isDoctorRoute) {
    // Handle doctor route
    const doctor = doctorsData.find((d) => {
      const doctorSlug = d.newSlug || d.slug + '-ivf-specialist';
      return doctorSlug === cleanSlug;
    });

    if (!doctor) {
      console.error(`Doctor not found for slug: ${cleanSlug}`);
      notFound();
    }

    // Get other doctors for sidebar (exclude current doctor)
    const otherDoctors = doctorsData
      .filter((d) => d.slug !== doctor.slug)
      .slice(0, 5)
      .map((d) => ({
        name: d.name,
        profession: d.subtitle,
        imageUrl: d.image,
        experience: d.experience,
        link: `/${d.newSlug || d.slug + '-ivf-specialist'}`,
      }));

    const headingData = {
      title: doctor.name,
    };

    return (
      <div>
        <Section
          className={'cs_page_heading cs_bg_filed cs_center'}
          backgroundImage="/assets/img/Top-Header.jpg"
        >
          <PageHeading data={headingData} />
        </Section>

        <Section
          topSpaceLg="50"
          topSpaceMd="60"
          bottomSpaceLg="70"
          bottomSpaceMd="120"
        >
          <DoctorDetailsSection data={doctor} otherDoctors={otherDoctors} />
        </Section>
      </div>
    );
  }
  
  // If not a doctor route, this dynamic path does not apply
  notFound();
};

export default page;

