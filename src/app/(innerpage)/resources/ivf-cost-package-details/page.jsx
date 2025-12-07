import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'IVF Cost & Package Details',
};

const packages = [
  {
    name: 'Basic IVF Package',
    price: '₹1,50,000 - ₹2,50,000',
    features: [
      'Initial consultation and evaluation',
      'Ovarian stimulation medications',
      'Egg retrieval procedure',
      'IVF fertilization',
      'Embryo transfer',
      'Basic monitoring',
    ],
    bestFor: 'Suitable for couples with no major complications',
  },
  {
    name: 'Standard IVF Package',
    price: '₹2,50,000 - ₹3,50,000',
    features: [
      'Everything in Basic Package',
      'ICSI (if needed)',
      'Extended embryo culture (blastocyst)',
      'Comprehensive monitoring',
      'Additional consultations',
      'Follow-up support',
    ],
    bestFor: 'Most popular choice for comprehensive care',
  },
  {
    name: 'Premium IVF Package',
    price: '₹3,50,000 - ₹5,00,000',
    features: [
      'Everything in Standard Package',
      'Preimplantation Genetic Testing (PGT)',
      'Embryo freezing (1 year)',
      'Priority scheduling',
      'Dedicated care coordinator',
      'Extended follow-up',
    ],
    bestFor: 'For couples requiring advanced genetic testing',
  },
];

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-12">
              <div className="cs_service_details text-center mb-5">
                <h3 className="cs_service_heading">Transparent IVF Pricing & Packages</h3>
                <p className="cs_service_subtitle">
                  At Seeds of Innocens, we believe in transparent pricing with no hidden costs. Our comprehensive packages are designed to provide complete care at competitive prices. All packages include consultations, procedures, and follow-up care.
                </p>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="cs_service_details_thumbnail">
                <Image 
                  src="/assets/img/recent_post_1.png" 
                  alt="IVF Packages" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Package Cards */}
          <div className="row cs_gap_y_40">
            {packages.map((pkg, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg" style={{ 
                  height: '100%', 
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: index === 1 ? '2px solid var(--accent-color)' : '1px solid #e0e0e0'
                }}>
                  <div className="cs_iconbox_header mb-3">
                    <h3 className="cs_iconbox_title" style={{ fontSize: '24px', marginBottom: '10px' }}>
                      {pkg.name}
                    </h3>
                    <div style={{ 
                      fontSize: '28px', 
                      fontWeight: 'bold', 
                      color: 'var(--accent-color)',
                      marginBottom: '15px'
                    }}>
                      {pkg.price}
                    </div>
                  </div>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#666', 
                    marginBottom: '20px',
                    fontStyle: 'italic'
                  }}>
                    {pkg.bestFor}
                  </p>
                  <ul className="cs_mp_0" style={{ 
                    listStyle: 'none', 
                    paddingLeft: '0',
                    flex: 1,
                    marginBottom: '20px'
                  }}>
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{ 
                        marginBottom: '12px', 
                        paddingLeft: '25px', 
                        position: 'relative' 
                      }}>
                        <span style={{ 
                          position: 'absolute', 
                          left: '0', 
                          color: 'var(--accent-color)', 
                          fontSize: '18px' 
                        }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ 
                      width: '100%', 
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    <span>Get Quote</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="cs_height_50 cs_height_lg_50" />

          {/* Additional Information */}
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="cs_service_details" style={{ 
                padding: '40px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px' 
              }}>
                <h4 className="cs_service_heading mb-3">Important Information</h4>
                <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                  <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>•</span>
                    <strong>Medications:</strong> Medication costs are additional and vary based on individual requirements (typically ₹30,000 - ₹80,000)
                  </li>
                  <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>•</span>
                    <strong>Insurance:</strong> We accept most insurance plans and offer flexible financing options
                  </li>
                  <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>•</span>
                    <strong>Payment Plans:</strong> Zero-interest EMI options available for up to 12 months
                  </li>
                  <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>•</span>
                    <strong>Consultation:</strong> Free initial consultation to discuss your specific needs and get a personalized quote
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cs_height_40 cs_height_lg_40" />

          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="cs_service_subtitle mb-4">
                For a personalized cost estimate based on your specific situation, please schedule a consultation with our team.
              </p>
              <Link 
                href="/contact" 
                className="cs_btn cs_style_1 cs_color_1"
                style={{ textDecoration: 'none', display: 'inline-block' }}
              >
                <span>Schedule Free Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

