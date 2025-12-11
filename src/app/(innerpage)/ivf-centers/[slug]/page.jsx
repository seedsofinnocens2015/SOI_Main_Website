import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import Link from 'next/link';
import { FaSuitcase, FaLocationDot } from 'react-icons/fa6';
import centersData from '../india-centers-data.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  try {
    // Only generate params for international centers
    return centersData
      .filter((center) => center.isInternational === true)
      .map((center) => ({
        slug: center.slug || '',
      }))
      .filter((param) => param.slug);
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

const page = async ({ params }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams || {};
  
  if (!slug) {
    notFound();
  }
  
  // Find center by slug - only international centers
  const center = centersData.find(
    (c) => c.slug === slug && c.isInternational === true
  );

  if (!center) {
    notFound();
  }

  // Extract city name from center name (e.g., "Lusaka, Zambia, Africa" -> "Lusaka")
  const cityName = center.name.split(',')[0].trim();

  // Get doctors directly from center.doctors array
  const centerDoctors = center.doctors || [];

  const headingData = {
    title: center.name,
  };

  const serviceData = {
    serviceHeading: '',
    services: [],
    mainImage: center.image || '/assets/img/recent_post2.jpg',
    serviceDetails: [],
    footerText: '',
    additionalImages: center.image || '/assets/img/recent_post2.jpg',
    iconBoxes: [],
    subtitle: '',
    readMoreUrl: '/appointments',
    readMoreText: 'Book Appointment',
    benefitImages: [
      center.image || '/assets/img/recent_post2.jpg',
      center.image || '/assets/img/recent_post2.jpg'
    ],
  };

  // Generate Google Maps embed URL
  const mapAddress = encodeURIComponent(center.location);
  const mapUrl = `https://www.google.com/maps?q=${mapAddress}&output=embed`;

  const centerContentData = {
    sections: [
      {
        heading: `Best IVF Centre in ${cityName} – Bringing Hope to Parenthood`,
        paragraphs: [
          `Struggling with infertility can be emotionally and physically draining, but you are not alone. At Seeds of Innocens, our IVF Centre in ${cityName} is dedicated to turning your hopes of becoming a parent into reality. We offer advanced fertility treatments combined with personal care, giving couples the best chance of conceiving a healthy baby.`,
        ],
        sideImage: center.image || '/assets/img/recent_post2.jpg',
      },
      {
        heading: `Why Choose Seeds of Innocens IVF Centre in ${cityName}?`,
        paragraphs: [
          `We understand that every couple's fertility journey is different. That is why we offer customised treatment plans at our modern and fully equipped IVF hospital in ${cityName}. Here's what makes us stand out:`,
        ],
        listItems: [
          `Experienced IVF Specialists: Our IVF specialists in ${cityName} are some of the most experienced fertility experts. With years of successful treatments and compassionate care, they help couples feel confident and supported throughout their journey.`,
          `Modern Infrastructure: Seeds of Innocens boasts a cutting-edge lab and fertility unit. From egg retrieval to embryo transfer, all processes are handled using the most advanced technology, making us a trusted IVF clinic in ${cityName}.`,
          `Full Range of Fertility Services: Our fertility centre in ${cityName} provides a wide variety of services under one roof.`,
        ],
      },
      {
        heading: 'Services Offered',
        paragraphs: [
          'Our comprehensive fertility services include:',
        ],
        listItems: [
          'IVF (In Vitro Fertilisation)',
          'IUI (Intrauterine Insemination)',
          'ICSI (Intracytoplasmic Sperm Injection)',
          'Donor Egg and Donor Sperm programs',
          'Surrogacy coordination',
          'Genetic Testing for healthier embryo selection',
          'Egg freezing and sperm freezing for future family planning',
        ],
      },
      {
        heading: 'Transparent Process and Emotional Support',
        paragraphs: [
          'We make sure our patients are involved in every step. There are no hidden costs or procedures. Our caring team ensures that you feel emotionally supported from consultation to delivery.',
        ],
      },
      {
        heading: `The IVF Process at Seeds of Innocens ${cityName}`,
        paragraphs: [
          `At our IVF Centre in ${cityName}, we believe in making the process as smooth as possible. Here is what the journey looks like:`,
        ],
        listItems: [
          'Consultation and Testing: Our expert IVF specialist conducts a detailed medical review and performs essential fertility tests for both partners.',
          'Creating a Treatment Plan: Based on test results, a personalised treatment plan is made for you. We clearly explain the approach and what to expect at each stage.',
          'Ovarian Stimulation and Egg Retrieval: Medications are given to stimulate the ovaries. Once the eggs mature, they are collected safely from the ovaries.',
          'Fertilisation and Embryo Monitoring: In our advanced lab, the eggs are fertilised with sperm. We closely monitor embryo development and also perform genetic testing if required.',
          'Embryo Transfer: Healthy embryos are carefully placed in the uterus. This is a simple procedure, but highly important.',
          'Pregnancy Test and Continued Support: Two weeks later, a blood test confirms pregnancy. If positive, we will continue to monitor and support you until a healthy delivery.',
        ],
      },
      {
        heading: `Trusted IVF Clinic in ${cityName}`,
        paragraphs: [
          `We are proud to be known as the best IVF clinic in ${cityName} due to our:`,
        ],
        listItems: [
          'High success rates',
          'Individualised treatment plans',
          'Ethical and transparent practices',
          'Experienced team of doctors and embryologists',
          'Warm and compassionate patient care',
        ],
      },
      {
        heading: 'Your Reliable Partner',
        paragraphs: [
          `Whether you're looking for a well-known IVF centre near me or planning your fertility journey in ${cityName}, Seeds of Innocens is your reliable partner.`,
        ],
      },
      {
        heading: `Special Services Offered at Our ${cityName} Centre`,
        paragraphs: [
          `In addition to regular IVF services, we also offer:`,
        ],
        listItems: [
          'Egg Freezing: Preserve your eggs today for a future pregnancy. Ideal for career planning, medical conditions, or personal reasons.',
          'Genetic Testing (PGT-A/PGT-M): Ensure healthy pregnancies and lower risk of inherited conditions.',
          'Donor Programs: We offer egg, sperm, and embryo donor support to suit your needs.',
          'Fertility Counselling: A licensed counsellor is always available to support your emotional well-being during treatment.',
        ],
      },
      {
        heading: 'Easy to Reach, Easy to Trust',
        paragraphs: [
          `Our IVF centre in ${cityName} is located at a convenient spot, making it accessible for patients from ${cityName} and nearby regions. With Seeds of Innocens, your search for an expert IVF centre near me ends here.`,
        ],
      },
      {
        heading: `Affordable IVF Treatment in ${cityName}`,
        paragraphs: [
          'Infertility treatment should be accessible to everyone. That\'s why we offer fair and transparent pricing. Our packages for IVF treatment are designed to suit various needs without compromising on quality or care.',
        ],
      },
      {
        heading: 'Words from Our Happy Parents',
        paragraphs: [
          'We are honoured to have helped thousands of couples bring their babies into the world. Many have shared their inspiring stories of success after receiving treatment from our IVF hospital.',
        ],
      },
      {
        heading: 'Let Us Help You Begin Your Journey',
        paragraphs: [
          `Seeds of Innocens is more than just a fertility centre in ${cityName}. It is a place where science meets hope. If you are dreaming of becoming a parent, we are here to make that dream come true with care, commitment, and compassion.`,
        ],
      },
    ],
  };

  const locationContentData = {
    sections: [
      {
        heading: `Seeds of Innocens - Best IVF Centre in ${cityName}`,
        paragraphs: [
          `Open Days: All Days (Monday to Sunday)`,
          `Timings: ${center.timing || '9:00 AM to 6:00 PM'}`,
          `Email: ${center.email}`,
          `Phone: ${center.phone}`,
          `Address: ${center.location}`,
        ],
        sideImage: mapUrl,
        isMapEmbed: true,
      },
    ],
  };

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
              <IVFContentSection data={centerContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>

      {/* Doctor Information Section */}
      {centerDoctors.length > 0 && (
        <Section
          topSpaceLg="0"
          topSpaceMd="0"
          bottomSpaceLg="50"
          bottomSpaceMd="60"
        >
          <div className="container">
            <h2 className="cs_ivf_content_heading" style={{marginBottom: '30px' }}>
              Available Doctors at {center.name}
            </h2>
            <div className="cs_doctors_grid cs_style_1">
              {centerDoctors.map((doctor, index) => (
                <div className="cs_team cs_style_1 cs_blue_bg" key={index}>
                  <div className="cs_team_shape cs_accent_bg" />
                  {doctor.slug ? (
                    <Link href={`/doctors/${doctor.slug}`} className="cs_team_thumbnail">
                      <Image 
                        src={doctor.image} 
                        alt={`${doctor.name} Thumbnail`} 
                        width={302} 
                        height={423}
                      />
                    </Link>
                  ) : (
                    <div className="cs_team_thumbnail">
                      <Image 
                        src={doctor.image} 
                        alt={`${doctor.name} Thumbnail`} 
                        width={302} 
                        height={423}
                      />
                    </div>
                  )}
                  <div className="cs_team_bio">
                    <h3 className="cs_team_title cs_extra_bold mb-0">
                      {doctor.slug ? (
                        <Link href={`/doctors/${doctor.slug}`}>{doctor.name}</Link>
                      ) : (
                        <span>{doctor.name}</span>
                      )}
                    </h3>
                    <p className="cs_team_subtitle">{doctor.subtitle}</p>
                    {doctor.experience && (
                      <p className="cs_team_experience" style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <FaSuitcase style={{ fontSize: '14px' }} />
                        <span>{doctor.experience} Experience</span>
                      </p>
                    )}
                    {doctor.location && (
                      <p style={{ color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0' }}>
                        <FaLocationDot style={{ fontSize: '14px' }} />
                        <span>{doctor.location}</span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Location Section */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="70"
        bottomSpaceMd="120"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={locationContentData} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

