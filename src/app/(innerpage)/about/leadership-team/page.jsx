import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSuitcase, FaLocationDot } from 'react-icons/fa6';
import { getAssetPathClient } from '@/app/utils/assetPath';

const headingData = {
  title: 'Leadership Team',
};

const leadershipTeamData = [
  {
    name: 'Dr. Gauri Agarwal',
    profession: 'Founder & Chief Fertility Specialist',
    imageUrl: getAssetPathClient("/assets/img/Doctors/Dr%20Gauri%20maam.jpg"),
    profileLink: '/doctors/dr-gauri-agarwal-ivf-specialist/',
    experience: '15+ Years',
    location: 'Delhi/NCR',
  },
  {
    name: 'Dr. Rajat Arora',
    profession: 'Co-Founder & Director',
    imageUrl: getAssetPathClient("/assets/img/Doctors/rajat.png"),
    profileLink: '/doctors/dr-gauri-agarwal-ivf-specialist/',
    experience: '15+ Years',
    location: 'Delhi/NCR',
  },
];

const ivfContentData = {
  sections: [
    {
      heading: 'Meet Our Leadership Team',
      paragraphs: [
        'Our leadership team includes experienced and dedicated experts who bring together decades of combined expertise in fertility medicine, embryology, genetics, and patient care. Also, they are committed to providing the best quality of care, which ensures the best possible outcomes for the patients.',
      ],
      // sideImage: '/assets/img/recent_post2.jpg',
    },
    {
      heading: 'Our Vision',
      paragraphs: [
        'At Seeds of Innocens IVF, our leadership team is driven by a shared vision of making advanced fertility treatments accessible to all couples. Also, we believe in mixing cutting-edge technology with dedicated care to help families in achieving their parenthood dreams.',
      ],
    },
    {
      heading: 'Commitment to Excellence',
      paragraphs: [
        'Our leaders are dedicated to maintaining the best standards of medical excellence, innovation, and continuous improvement. Also, they work dedicatedly to ensure that every patient receives customized care, which is tailored to unique requirements.',
      ],
      listItems: [
        'Patient-centric approach',
        'Transparency and Ethical Practices',
        'Research and contribution to reproductive science',
        'Adapting Latest Technologies and Protocols',
      ],
    },
  ],
};

const Page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
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
              <IVFContentSection data={ivfContentData} accentHeadingStyle />
            </div>
          </div>

          {/* Leadership Team Cards Section */}
          <div className="cs_height_60" />
          <div className="row">
            <div className="col-lg-12">
              <AccentHeading style={{ marginBottom: '40px' }}>Our Leadership Team</AccentHeading>
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

