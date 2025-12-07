import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import React from 'react';

const page = () => {
  const headingData = {
    title: 'All IVF Specialists',
  };

  const teamData = {
    subtitle: 'OUR IVF SPECIALISTS',
    title: 'Meet Our Expert <br />IVF Specialists',
    sliderData: [
      {
        name: 'Dr. Gauri Agarwal',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/Dr%20Gauri%20maam.jpg',
        link: '/doctors/dr-gauri-agarwal',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Aditi Bhatnagar',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/aditi.jpg',
        link: '/doctors/dr-aditi-bhatnagar',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Nivedita Nehal',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/nivedita.jpg',
        link: '/doctors/dr-nivedita-nehal',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Lisha Singh',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/lisha.jpg',
        link: '/doctors/dr-lisha-singh',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Beena Upadhyay',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/beena.jpg',
        link: '/doctors/dr-beena-upadhyay',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Debilina Roy',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/debilina.jpg',
        link: '/doctors/dr-debilina-roy',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Rashmi Singh',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/rashmi.jpg',
        link: '/doctors/dr-rashmi-singh',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Kriti Prasad',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/kriti.jpg',
        link: '/doctors/dr-kriti-prasad',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Pallavi Shrivastava',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/pallavi.jpg',
        link: '/doctors/dr-pallavi-shrivastava',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Divya Shivanand',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/divya.jpg',
        link: '/doctors/dr-divya-shivanand',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Aiman Akram',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/aiman.jpg',
        link: '/doctors/dr-aiman-akram',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Preeti',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/preeti.jpg',
        link: '/doctors/dr-preeti',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Disha Datta',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/disha.jpg',
        link: '/doctors/dr-disha-datta',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Monika Maan',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/monika.jpg',
        link: '/doctors/dr-monika-maan',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Vinod Kumar B',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/vinod.jpg',
        link: '/doctors/dr-vinod-kumar-b',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Julie Chhawchharia',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/julie.jpg',
        link: '/doctors/dr-julie-chhawchharia',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Varkha Chandra',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/varkha.jpg',
        link: '/doctors/dr-varkha-chandra',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Pratik Kakani',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/pratik.jpg',
        link: '/doctors/dr-pratik-kakani',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Mangla Kawade',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/mangla.jpg',
        link: '/doctors/dr-mangla-kawade',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Khushboo Singh',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/khushboo.jpg',
        link: '/doctors/dr-khushboo-singh',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Sonia Raju',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/sonia.jpg',
        link: '/doctors/dr-sonia-raju',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Jasna Mohammed',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/jasna.jpg',
        link: '/doctors/dr-jasna-mohammed',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
    ],
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Start IVF Specialists Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_team_section position-relative'}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="cs_text_style_1 text-center" style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
                Our team of experienced IVF specialists brings together years of expertise in reproductive medicine. Each specialist is dedicated to providing personalized, compassionate care to help couples achieve their dream of parenthood through advanced IVF techniques and treatments.
              </p>
            </div>
          </div>
        </div>
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End IVF Specialists Section */}
    </div>
  );
};

export default page;
