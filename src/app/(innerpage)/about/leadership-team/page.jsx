import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSuitcase, FaLocationDot } from 'react-icons/fa6';

const headingData = {
  title: 'Leadership Team',
};

const leadershipTeamData = [
  {
    name: 'Dr. Gauri Agarwal',
    profession: 'Founder & Chief Fertility Specialist',
    imageUrl: '/assets/img/Doctors/Dr%20Gauri%20maam.jpg',
    profileLink: '/about/dr-gauri-agrawal',
    experience: '15+ Years',
    location: 'Delhi/NCR',
  },
  {
    name: 'Dr. Rajat Arora',
    profession: 'Co-Founder & Director',
    imageUrl: '/assets/img/Doctors/rajat.png',
    profileLink: '/doctors/doctor-details',
    experience: '15+ Years',
    location: 'Delhi/NCR',
  },
];

const ivfContentData = {
  sections: [
    {
      heading: 'Meet Our Leadership Team',
      paragraphs: [
        'Our leadership team consists of experienced and dedicated professionals who bring together decades of combined expertise in fertility medicine, embryology, genetics, and patient care. They are committed to providing the highest quality of care and ensuring the best possible outcomes for our patients.',
      ],
      sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Our Vision',
      paragraphs: [
        'At Seeds of Innocens, our leadership team is driven by a shared vision of making advanced fertility treatments accessible to all couples. We believe in combining cutting-edge technology with compassionate care to help families achieve their dreams of parenthood.',
      ],
    },
    {
      heading: 'Commitment to Excellence',
      paragraphs: [
        'Our leaders are committed to maintaining the highest standards of medical excellence, continuous learning, and innovation. They work tirelessly to ensure that every patient receives personalized care tailored to their unique needs.',
      ],
      listItems: [
        'Continuous professional development and training',
        'Adoption of latest technologies and treatment protocols',
        'Patient-centric approach to care',
        'Ethical practices and transparency',
        'Research and contribution to medical science',
      ],
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Main Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          {/* Content Section - Centered and Full Width */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={ivfContentData} />
            </div>
          </div>

          {/* Leadership Team Cards Section */}
          <div className="cs_height_60" />
          <div className="row">
            <div className="col-lg-12">
              <h2 className="cs_ivf_content_heading" style={{ marginBottom: '40px' }}>
                Our Leadership Team
              </h2>
            </div>
          </div>
          <div className="cs_doctors_grid cs_style_1">
            {leadershipTeamData.map((member, index) => (
              <div className="cs_team cs_style_1 cs_blue_bg" key={index}>
                <div className="cs_team_shape cs_accent_bg" />
                <Link href={member.profileLink} className="cs_team_thumbnail">
                  <Image 
                    src={member.imageUrl} 
                    alt={`${member.name} Thumbnail`} 
                    width={302} 
                    height={423} 
                  />
                </Link>
                <div className="cs_team_bio">
                  <h3 className="cs_team_title cs_extra_bold mb-0">
                    <Link href={member.profileLink}>{member.name}</Link>
                  </h3>
                  <p className="cs_team_subtitle">{member.profession}</p>
                  <div className="cs_team_info_items">
                    {member.experience && (
                      <div className="cs_team_info_item">
                        <i>
                          <FaSuitcase />
                        </i>
                        <span>{member.experience} Experience </span>
                      </div>
                    )}
                    {member.location && (
                      <div className="cs_team_info_item">
                        <i>
                          <FaLocationDot />
                        </i>
                        <span>{member.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Page;

