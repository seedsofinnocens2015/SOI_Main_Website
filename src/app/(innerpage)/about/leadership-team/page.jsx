import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import React from 'react';
import { getAssetPath } from '@/app/utils/assetPath';
import LeadershipTeamCards from '@/app/Components/LeadershipTeamCards';

const headingData = {
  title: 'Our Leadership Team',
  /** Banner: red (h2) + black (.cs_accent_color) — same pattern as default PageHeading USP */
  uspTitle: 'Our  <span class="cs_accent_color">Leadership Team</span>',
};

const leadershipTeamData = [
  {
    id: 'gauri',
    name: 'Dr. Gauri Agarwal',
    profession: 'Founder & Chief Fertility Specialist',
    imageUrl: getAssetPath('/assets/img/Doctors/Dr%20Gauri%20maam.jpg'),
    experience: '15+ Years',
    location: 'Delhi/NCR',
    bio: [
      'Dr. Gauri Agarwal is Founder and Director of Seeds of Innocens IVF & Genestring Labs, with 15+ years in advanced fertility and reproductive genetics.',
      'Trained in Belgium and Singapore, she has helped expand Seeds of Innocens across India and internationally, including IVF centres in Muscat and Lusaka.',
      'Under her leadership, the network is known for ethical, personalised care, strong embryology standards, and integrated genetic testing supporting better outcomes.',
    ],
  },
  {
    id: 'rajat',
    name: 'Dr. Rajat Arora',
    profession: 'Co-Founder & Director',
    imageUrl: getAssetPath('/assets/img/Doctors/rajat.png'),
    experience: '15+ Years',
    location: 'Delhi/NCR',
    bio: [
      'Dr. Rajat Arora is the Managing Director(MD) of Yashoda Group of Hospitals, Uttar Pradesh, as well as the Co-Founder of Seeds of Innocence (Infertility & IVF Centres) and Genestrings Diagnostic Centre (Genetic Testing Lab) in Delhi NCR. Dr. Rajat Arora has exceptional educational qualifications, starting from M.B.B.S. and M.D. in India to MRCP & FRCP in internal medicine from the UK. Dr. Rajat Arora has also been a fellow in Non-Interventional Cardiology at KLE University and completed his D.M. in cardiology from KLE’s Hospital.',
      'Dr. Rajat Arora is a proficient and experienced interventional cardiologist with more than 1000 PCIs (Percutaneous Coronary Intervention) and 12000 coronary angiographies to his credit. Dr. Rajat Arora performs all kinds of congenital heart disease interventions, such as ASD device closure, VSD device closure, and RSOV closure. He also has expertise in performing Endovascular Aortic Repairs independently. Besides this, he performs all types of pacemaker insertions, ICD device, and CRT therapy.',
    ],
  },
  {
    id: 'yashpal',
    name: 'Yashpal Singh Rao',
    profession: 'Chief Growth Officer',
    imageUrl: getAssetPath('/assets/img/Doctors/yashpal.png'),
    experience: '17+ Years',
    location: 'Delhi/NCR',
    bio: [
      'Yashpal Singh is a seasoned healthcare leader with over 17 years of experience in scaling multi-location healthcare and fertility businesses. As Chief Growth Officer at Seeds of Innocence IVF & Home IVF, he leads national growth strategy across patient acquisition, digital ecosystems, and network expansion.',
      'He brings deep expertise in driving operational excellence, strengthening patient conversion systems, and building scalable growth platforms across clinic networks. Prior to this, he has held leadership roles at leading organizations such as Indira IVF and ART Fertility Clinics, contributing to large-scale business transformation and expansion initiatives.',
    ],
  },
  {
    id: 'aditi',
    name: 'Dr. Aditi Bhatnagar',
    profession: 'Medical Director',
    imageUrl: getAssetPath('/assets/img/Doctors/aditi.jpg'),
    experience: '10+ Years',
    location: 'Delhi/NCR',
    bio: [
      'Dr. Aditi Bhatnagar is a fertility and IVF specialist with extensive and Voluminous experience of more than 10 years. Also, she has a special interest in recurrent IVF & Secondary Infertility failures. She has completed her MBBS degree from Mullana Medical College, Ambala. Post to that, she has also pursued her master in obstetrics and gynaecology from DY Patil Medical College, Pune, receiving a Gold Medal. She further pursued her fellowship in reproductive medicine (infertility). Since then, she has been working with the established high-volume fertility centres of Delhi-NCR. She has extensive knowledge, a wide skill set, and vast experience.',

    ],
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
          <LeadershipTeamCards members={leadershipTeamData} />
        </div>
      </Section>
    </div>
  );
};

export default Page;

