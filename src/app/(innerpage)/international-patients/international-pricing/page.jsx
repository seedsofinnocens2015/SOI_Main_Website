import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import React from 'react';

const headingData = {
  title: 'International Pricing',
};

const serviceData = {
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const pricingContentData = {
  sections: [
    {
      heading: 'Transparent International Pricing Packages',
      paragraphs: [
        'Transparent and competitive pricing designed specifically for international patients. Our packages offer significant savings compared to Western countries while maintaining the highest quality of care. All prices are in USD for easy reference and comparison.',
        'We believe in complete transparency when it comes to pricing. There are no hidden costs - everything is clearly explained upfront, allowing you to plan your treatment journey with confidence.',
      ],
      sideImage: '/assets/img/International Pricing.jpeg',
    },
    {
      heading: 'Basic IVF Package - USD $2,500 - $3,500',
      paragraphs: [
        'Our Basic IVF Package is suitable for couples with no major complications and includes:',
      ],
      listItems: [
        'Initial consultation and comprehensive evaluation',
        'Ovarian stimulation medications',
        'Egg retrieval procedure',
        'IVF fertilization process',
        'Embryo transfer procedure',
        'Basic monitoring and follow-up consultations',
        'Save up to 30% compared to standard pricing',
      ],
    },
    {
      heading: 'Standard IVF Package - USD $3,500 - $4,500',
      paragraphs: [
        'Our most popular choice for comprehensive care, the Standard Package includes everything in the Basic Package plus:',
      ],
      listItems: [
        'ICSI (Intracytoplasmic Sperm Injection) if needed',
        'Extended embryo culture to blastocyst stage',
        'Comprehensive monitoring throughout the cycle',
        'Additional consultations with specialists',
        'Extended follow-up support',
        'Travel assistance coordination',
        'Save up to 35% compared to standard pricing',
      ],
    },
    {
      heading: 'Premium IVF Package - USD $4,500 - $6,500',
      paragraphs: [
        'For couples requiring advanced genetic testing, our Premium Package includes everything in the Standard Package plus:',
      ],
      listItems: [
        'Preimplantation Genetic Testing (PGT)',
        'Embryo freezing with 1 year storage included',
        'Priority scheduling for all appointments',
        'Dedicated care coordinator',
        'Extended follow-up and support',
        'Complimentary accommodation (3 nights)',
        'Airport transfer service',
        'Save up to 40% compared to standard pricing',
      ],
    },
    {
      heading: 'Important Pricing Information',
      paragraphs: [
        'Understanding the details of our pricing structure:',
      ],
      listItems: [
        'Medications: Additional costs apply (typically USD $500 - $1,500) depending on individual requirements',
        'Payment: Multiple payment methods accepted including wire transfer, credit card, and cash',
        'Currency: Prices are quoted in USD; local currency conversion available upon request',
        'Financing: Flexible payment plans and financing options available for qualifying patients',
        'Transparency: No hidden costs - all charges are clearly explained upfront',
        'Consultation: Free initial virtual consultation for international patients',
      ],
    },
    {
      heading: 'Cost Comparison',
      paragraphs: [
        'How our prices compare with Western countries:',
      ],
      listItems: [
        'USA/UK: Average IVF cost ranges from $12,000 to $20,000',
        'Seeds of Innocens: Same quality treatment at $2,500 to $6,500',
        'Savings: Up to 70% cost savings without compromising on quality',
        'Quality: World-class facilities and experienced specialists',
        'Value: Best value for money in international fertility care',
      ],
    },
    {
      heading: 'What Makes Our Pricing Competitive?',
      paragraphs: [
        'Our competitive pricing is made possible through:',
      ],
      listItems: [
        'Lower operational costs in India without compromising quality',
        'Efficient healthcare delivery systems',
        'Access to same advanced technology and medications',
        'Experienced medical professionals with international training',
        'Established infrastructure for medical tourism',
        'Government support for medical tourism initiatives',
      ],
    },
    {
      heading: 'Customized Packages',
      paragraphs: [
        'We understand that every patient has unique needs. Our team can create customized packages based on your specific requirements, medical condition, and budget. Contact us to discuss a personalized treatment plan and pricing that works for you.',
      ],
    },
  ],
};

const page = () => {
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
              <IVFContentSection data={pricingContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
