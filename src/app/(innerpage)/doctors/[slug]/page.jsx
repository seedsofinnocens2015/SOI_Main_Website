import DoctorDetailsSection from '@/app/Components/DoctorDetailsSection';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import doctorsData from '../doctors-data.json';
import { notFound } from 'next/navigation';
import { getAssetPath } from '@/app/utils/assetPath';

export async function generateStaticParams() {
  return doctorsData.map((doctor) => ({
    slug: doctor.slug,
  }));
}

const page = async ({ params }) => {
  const { slug } = await params;
  
  // Find doctor by slug
  const doctor = doctorsData.find((doc) => doc.slug === slug);

  if (!doctor) {
    notFound();
  }

  const headingData = {
    title: `${doctor.name} - ${doctor.subtitle}`,
  };

  const doctorDetails = {
    name: doctor.name,
    subtitle: doctor.subtitle,
    description: doctor.description,
    image: getAssetPath(doctor.image),
    location: doctor.location,
    experience: doctor.experience,
    qualification: doctor.qualification,
    specialization: doctor.specialization,
    progressBars: doctor.progressBars,
    workExperience: doctor.workExperience,
    education: doctor.education,
  };

  // Get other doctors for the sidebar (excluding current doctor)
  const otherDoctors = doctorsData
    .filter((doc) => doc.slug !== slug)
    .slice(0, 3)
    .map((doc) => ({
      name: doc.name,
      profession: doc.subtitle,
      imageUrl: doc.image,
      link: `/doctors/${doc.slug}`,
      experience: doc.experience,
    }));

  // Get other doctors for the team section (excluding current doctor)
  const teamDoctors = doctorsData
    .filter((doc) => doc.slug !== slug)
    .slice(0, 3)
    .map((doc) => ({
      name: doc.name,
      profession: doc.subtitle,
      imageUrl: doc.image,
      link: `/doctors/${doc.slug}`,
      facebook: '/',
      pinterest: '/',
      twitter: '/',
      instagram: '/',
    }));

  const teamData = {
    subtitle: 'OUR TEAM MEMBER',
    // title: 'Meet Our Other <br />IVF Specialists',
    sliderData: teamDoctors,
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="80" topSpaceMd="120">
        <DoctorDetailsSection data={doctorDetails} otherDoctors={otherDoctors} />
      </Section>

      {/* Start Team Section */}
      {/* <Section topSpaceLg="80" topSpaceMd="110">
        <TeamSection variant={'cs_pagination cs_style_2'} data={teamData} />
      </Section> */}
      {/* End Team Section */}
    </div>
  );
};

export default page;

