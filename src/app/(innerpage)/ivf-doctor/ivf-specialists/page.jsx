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
        link: '/ivf-doctor/dr-gauri-agarwal-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Aditi Bhatnagar',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/aditi.jpg',
        link: '/ivf-doctor/dr-aditi-bhatnagar-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Nivedita Nehal',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/nivedita.jpg',
        link: '/ivf-doctor/dr-nivedita-nehal-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Lisha Singh',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/lisha.jpg',
        link: '/ivf-doctor/dr-lisha-singh-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Beena Upadhyay',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/beena.jpg',
        link: '/ivf-doctor/dr-beena-upadhyay-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Debilina Roy',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/debilina.jpg',
        link: '/ivf-doctor/dr-debilina-roy-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Rashmi Singh',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/rashmi.jpg',
        link: '/ivf-doctor/dr-rashmi-singh-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Kriti Prasad',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/kriti.jpg',
        link: '/ivf-doctor/dr-kriti-prasad-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Pallavi Shrivastava',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/pallavi.jpg',
        link: '/ivf-doctor/dr-pallavi-shrivastava-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Divya Shivanand',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/divya.jpg',
        link: '/ivf-doctor/dr-divya-shivanand-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Aiman Akram',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/aiman.jpg',
        link: '/ivf-doctor/dr-aiman-akram-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Preeti',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/preeti.jpg',
        link: '/ivf-doctor/dr-preeti-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Disha Datta',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/disha.jpg',
        link: '/ivf-doctor/dr-disha-datta-choudhury-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Monika Maan',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/monika.jpg',
        link: '/ivf-doctor/dr-monika-mann-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Vinod Kumar B',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/vinod.jpg',
        link: '/ivf-doctor/dr-vinod-kumar-b-ivf-specialists',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Julie Chhawchharia',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/julie.jpg',
        link: '/ivf-doctor/dr-julie-chhawchharia-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Varkha Chandra',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/varkha.jpg',
        link: '/ivf-doctor/dr-varkha-chandra-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Pratik Kakani',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/pratik.jpg',
        link: '/ivf-doctor/dr-pratik-kakani-ivf-specialists',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Mangla Kawade',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/mangla.jpg',
        link: '/ivf-doctor/dr-mangla-kawade-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Khushboo Singh',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/khushboo.jpg',
        link: '/ivf-doctor/dr-khushboo-singh-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Sonia Raju',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/sonia.jpg',
        link: '/ivf-doctor/dr-sonia-raju-aluvilayil-ivf-specialist',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Jasna Mohammed',
        profession: 'IVF Specialist',
        imageUrl: '/assets/img/Doctors/jasna.jpg',
        link: '/ivf-doctor/dr-jasna-mohammed-ivf-specialist',
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
        backgroundImage="/assets/img/Top-Header.png"
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
            <div className="col-lg-12 cs_service_page_content">
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
