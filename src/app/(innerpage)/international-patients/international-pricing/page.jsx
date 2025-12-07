import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import Link from 'next/link';

const headingData = {
  title: 'International Pricing',
};

const packages = [
  {
    name: 'Basic IVF Package',
    price: 'USD $2,500 - $3,500',
    originalPrice: 'USD $4,000',
    savings: 'Save up to 30%',
    features: [
      'Initial consultation and evaluation',
      'Ovarian stimulation medications',
      'Egg retrieval procedure',
      'IVF fertilization',
      'Embryo transfer',
      'Basic monitoring and follow-up',
    ],
    bestFor: 'Suitable for couples with no major complications',
    popular: false,
  },
  {
    name: 'Standard IVF Package',
    price: 'USD $3,500 - $4,500',
    originalPrice: 'USD $5,500',
    savings: 'Save up to 35%',
    features: [
      'Everything in Basic Package',
      'ICSI (if needed)',
      'Extended embryo culture (blastocyst)',
      'Comprehensive monitoring',
      'Additional consultations',
      'Extended follow-up support',
      'Travel assistance coordination',
    ],
    bestFor: 'Most popular choice for comprehensive care',
    popular: true,
  },
  {
    name: 'Premium IVF Package',
    price: 'USD $4,500 - $6,500',
    originalPrice: 'USD $7,500',
    savings: 'Save up to 40%',
    features: [
      'Everything in Standard Package',
      'Preimplantation Genetic Testing (PGT)',
      'Embryo freezing (1 year storage)',
      'Priority scheduling',
      'Dedicated care coordinator',
      'Extended follow-up',
      'Complimentary accommodation (3 nights)',
      'Airport transfer service',
    ],
    bestFor: 'For couples requiring advanced genetic testing',
    popular: false,
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
          <div className="row">
            <div className="col-lg-12">
              <div className="cs_service_details text-center mb-5">
                <h3 className="cs_service_heading">International Pricing Packages</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Transparent and competitive pricing designed specifically for international patients. Our packages offer significant savings compared to Western countries while maintaining the highest quality of care. All prices are in USD for easy reference.
                </p>
              </div>
            </div>
          </div>

          {/* Main Image Placeholder */}
          <div className="row mb-5">
            <div className="col-lg-12">
              <div className="cs_service_details_thumbnail">
                <Image 
                  src="/assets/img/recent_post_1.png" 
                  alt="International Pricing" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          {/* Pricing Packages */}
          <div className="row cs_gap_y_40 mb-5">
            {packages.map((pkg, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="cs_iconbox cs_style_2 cs_radius_15 cs_gray_bg" style={{ 
                  height: '100%', 
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: pkg.popular ? '3px solid var(--accent-color)' : '1px solid #e0e0e0',
                  position: 'relative'
                }}>
                  {pkg.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '-15px',
                      right: '20px',
                      backgroundColor: 'var(--accent-color)',
                      color: 'white',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      MOST POPULAR
                    </div>
                  )}
                  <div className="cs_iconbox_header mb-3">
                    <h3 className="cs_iconbox_title" style={{ fontSize: '24px', marginBottom: '15px' }}>
                      {pkg.name}
                    </h3>
                    <div style={{ marginBottom: '10px' }}>
                      <div style={{ 
                        fontSize: '32px', 
                        fontWeight: 'bold', 
                        color: 'var(--accent-color)',
                        marginBottom: '5px'
                      }}>
                        {pkg.price}
                      </div>
                      <div style={{ 
                        fontSize: '16px', 
                        color: '#999',
                        textDecoration: 'line-through',
                        marginBottom: '5px'
                      }}>
                        {pkg.originalPrice}
                      </div>
                      <div style={{ 
                        fontSize: '14px', 
                        color: '#4caf50',
                        fontWeight: '600'
                      }}>
                        {pkg.savings}
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
                  </div>
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
                    href="/international-patients/contact-team"
                    className="cs_btn cs_style_1 cs_color_1"
                    style={{ 
                      width: '100%', 
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'block',
                      marginTop: 'auto'
                    }}
                  >
                    <span>Get Quote</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '10px'
              }}>
                <h4 className="cs_service_heading mb-4">Important Information</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>•</span>
                        <strong>Medications:</strong> Additional costs apply (typically USD $500 - $1,500)
                      </li>
                      <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>•</span>
                        <strong>Payment:</strong> Multiple payment methods accepted (wire transfer, credit card, cash)
                      </li>
                      <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>•</span>
                        <strong>Currency:</strong> Prices in USD; local currency conversion available
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="cs_mp_0" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>•</span>
                        <strong>Financing:</strong> Flexible payment plans and financing options available
                      </li>
                      <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>•</span>
                        <strong>Transparency:</strong> No hidden costs - all charges clearly explained upfront
                      </li>
                      <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '0', color: 'var(--accent-color)', fontSize: '20px' }}>•</span>
                        <strong>Consultation:</strong> Free initial virtual consultation for international patients
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="row">
            <div className="col-lg-12">
              <div style={{ 
                padding: '40px', 
                backgroundColor: '#e8f5e9', 
                borderRadius: '10px',
                borderLeft: '4px solid #4caf50'
              }}>
                <h4 className="cs_service_heading mb-4" style={{ color: '#2e7d32', textAlign: 'center' }}>
                  Cost Comparison
                </h4>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div style={{ 
                      padding: '25px', 
                      backgroundColor: 'white', 
                      borderRadius: '10px',
                      textAlign: 'center',
                      height: '100%'
                    }}>
                      <h5 style={{ marginBottom: '15px', color: '#2e7d32' }}>USA/UK</h5>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#666', marginBottom: '10px' }}>
                        $12,000 - $20,000
                      </div>
                      <p style={{ fontSize: '14px', margin: 0, color: '#666' }}>
                        Average IVF cost in Western countries
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div style={{ 
                      padding: '25px', 
                      backgroundColor: 'white', 
                      borderRadius: '10px',
                      textAlign: 'center',
                      height: '100%'
                    }}>
                      <h5 style={{ marginBottom: '15px', color: 'var(--accent-color)' }}>Seeds of Innocens</h5>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: 'var(--accent-color)', marginBottom: '10px' }}>
                        $2,500 - $6,500
                      </div>
                      <p style={{ fontSize: '14px', margin: 0, color: '#666' }}>
                        Same quality treatment at fraction of cost
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div style={{ 
                      padding: '25px', 
                      backgroundColor: 'white', 
                      borderRadius: '10px',
                      textAlign: 'center',
                      height: '100%'
                    }}>
                      <h5 style={{ marginBottom: '15px', color: '#4caf50' }}>Savings</h5>
                      <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#4caf50', marginBottom: '10px' }}>
                        Up to 70%
                      </div>
                      <p style={{ fontSize: '14px', margin: 0, color: '#666' }}>
                        Significant cost savings without compromising quality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

