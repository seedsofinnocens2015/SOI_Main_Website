import AccentHeading from '@/app/Components/AccentHeading';
import FAQAccordion from '@/app/Components/FAQAccordion';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import doctorsData from '@/app/data/doctors-data.json';
import { getSeoMetadata } from '@/app/utils/seoMetadata';
import { FaCheckCircle } from 'react-icons/fa';

const pageContent = doctorsData.find(
  (doctor) => doctor.bestIvfDoctorInIndiaContent
)?.bestIvfDoctorInIndiaContent;

export async function generateMetadata() {
  return getSeoMetadata({
    pageUrl: '/best-ivf-doctor-in-india',
    hierarchyCandidates: [['Doctors'], []],
  });
}

const BestIvfDoctorInIndiaPage = () => {
  const headingData = {
    title: pageContent?.title || 'Best IVF Doctor in India',
    uspTitle:
      pageContent?.uspTitle ||
      'WORLD-CLASS <span class="cs_accent_color"> IVF SPECIALISTS</span>',
    centerUspTitle: true,
    hideStatsGrid: true,
    hideAppointmentForm: true,
  };

  return (
    <div>
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage="/assets/img/Doctor-Headers/Doctors-Banner.webp"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <div
          className="container-fluid"
          style={{ paddingLeft: '4vw', paddingRight: '4vw' }}
        >
          <div className="row">
            <div
              className="col-12 cs_service_page_content"
              style={{ textAlign: 'center' }}
            >
              {pageContent?.blocks?.map((block, index) => {
                if (block.tag === 'ul') {
                  return (
                    <div
                      key={`list-${index}`}
                      className="row cs_gap_y_24 cs_list_boxes"
                      style={{
                        marginTop: '12px',
                        marginBottom: '30px',
                        justifyContent: 'center',
                      }}
                    >
                      {block.items.map((item) => (
                        <div key={item} className="cs_doctor_content_list_item">
                          <div className="cs_list_box">
                            <span className="cs_list_box_icon">
                              <FaCheckCircle />
                            </span>
                            <span className="cs_list_box_text">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }

                if (block.tag.startsWith('h')) {
                  return (
                    <AccentHeading
                      key={`${block.tag}-${index}`}
                      level={Number(block.tag.slice(1))}
                      className="cs_service_heading"
                      style={{
                        marginTop: index === 0 ? 0 : '34px',
                        marginBottom: '18px',
                      }}
                    >
                      {block.text}
                    </AccentHeading>
                  );
                }

                return (
                  <p
                    key={`p-${index}`}
                    style={{
                      maxWidth: '1400px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginBottom: '22px',
                    }}
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {pageContent?.faqs?.length > 0 && (
        <Section
          topSpaceLg="0"
          topSpaceMd="0"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <div className="container">
            <div className="cs_service_title_section mb-10 text-center">
              <h2 className="cs_service_main_title">
                <span className="cs_news_media_main_title" style={{ color: '#df3655' }}>
                  FREQUENTLY ASKED
                </span>{' '}
                <span style={{ color: '#000000' }}>QUESTIONS</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-12">
                <FAQAccordion faqs={pageContent.faqs} />
              </div>
            </div>
          </div>
        </Section>
      )}
    </div>
  );
};

export default BestIvfDoctorInIndiaPage;
