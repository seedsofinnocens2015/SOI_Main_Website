import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import DoctorDetailsSection from '@/app/Components/DoctorDetailsSection';
import { notFound } from 'next/navigation';
import doctorsData from '@/app/data/doctors-data.json';
import { getDoctorProfilePath } from '@/app/utils/doctorProfilePath';

export async function generateMetadata({ params }) {
  const { doctorSlug } = await params;
  const doctor = doctorsData.find(
    (d) => d.newSlug === doctorSlug || doctorSlug === d.slug + '-ivf-specialist'
  );
  if (!doctor) return { title: 'Not Found' };
  return {
    title: `${doctor.name} | ${doctor.subtitle} | Seeds of Innocens`,
    description: doctor.description
      ? doctor.description[0]
      : `Meet ${doctor.name}, ${doctor.subtitle} at Seeds of Innocens IVF Centre.`,
  };
}

export async function generateStaticParams() {
  return doctorsData.map((d) => ({
    doctorSlug: d.newSlug || d.slug + '-ivf-specialist',
  }));
}

const DoctorPage = async ({ params }) => {
  const { doctorSlug } = await params;
  const doctor = doctorsData.find(
    (d) => d.newSlug === doctorSlug || doctorSlug === d.slug + '-ivf-specialist'
  );
  if (!doctor) notFound();

  const otherDoctors = doctorsData
    .filter((d) => d.slug !== doctor.slug)
    .slice(0, 5)
    .map((d) => ({
      name: d.name,
      imageUrl: d.image,
      profession: d.subtitle,
      experience: d.experience,
      link: getDoctorProfilePath(d),
    }));

  return (
    <div className="cs_doctor_details_page">
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage={doctor.headerImage || '/assets/img/Top-Header.png'}
      >
        <PageHeading
          data={{
            title: doctor.name,
            ...(doctor.uspTitle ? { uspTitle: doctor.uspTitle } : {}),
          }}
        />
      </Section>
      <Section topSpaceLg="80" topSpaceMd="110" bottomSpaceLg="80" bottomSpaceMd="120">
        <DoctorDetailsSection data={doctor} otherDoctors={otherDoctors} />
      </Section>
    </div>
  );
};

export default DoctorPage;
