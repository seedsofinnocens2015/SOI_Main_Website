import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import FAQ from '@/app/Components/FAQ';
import Image from 'next/image';

const headingData = {
  title: 'FAQs',
};

const faqsData = [
  {
    question: 'What is IVF and how does it work?',
    answer: 'IVF (In Vitro Fertilization) is a fertility treatment where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory. The resulting embryos are then transferred to the uterus. The process involves ovarian stimulation, egg retrieval, fertilization, and embryo transfer. IVF is one of the most effective fertility treatments available.',
  },
  {
    question: 'What is the success rate of IVF?',
    answer: 'IVF success rates vary based on several factors including age, cause of infertility, and treatment history. At Seeds of Innocens, our overall success rate is approximately 65-70% for women under 35, with rates decreasing slightly with age. We use advanced techniques and personalized treatment plans to maximize success rates.',
  },
  {
    question: 'How long does the IVF process take?',
    answer: 'A complete IVF cycle typically takes 4-6 weeks from the start of medication to the pregnancy test. This includes 2-3 weeks of ovarian stimulation, egg retrieval, 3-5 days of embryo culture, embryo transfer, and then a 10-14 day wait before the pregnancy test.',
  },
  {
    question: 'What is the cost of IVF treatment?',
    answer: 'IVF costs vary depending on the specific treatment plan, medications required, and any additional procedures like ICSI or genetic testing. At Seeds of Innocens, we offer transparent pricing and various package options. We also provide financing options and accept insurance where applicable. Contact us for a detailed cost estimate based on your specific needs.',
  },
  {
    question: 'Are there any side effects of IVF?',
    answer: 'Common side effects include mild bloating, mood swings, and injection site discomfort. More serious but rare complications include Ovarian Hyperstimulation Syndrome (OHSS). Our experienced team monitors you closely throughout treatment to minimize risks and manage any side effects promptly.',
  },
  {
    question: 'What is the difference between IVF and ICSI?',
    answer: 'In traditional IVF, eggs and sperm are placed together and fertilization occurs naturally. In ICSI (Intracytoplasmic Sperm Injection), a single sperm is directly injected into each egg. ICSI is recommended for male infertility issues, low sperm count, or when previous IVF attempts have failed.',
  },
  {
    question: 'Can I choose the gender of my baby?',
    answer: 'Gender selection is possible through Preimplantation Genetic Testing (PGT), but it is only available for medical reasons in India, such as preventing gender-linked genetic disorders. Social gender selection is not permitted by law.',
  },
  {
    question: 'How many embryos should be transferred?',
    answer: 'The number of embryos transferred depends on several factors including your age, embryo quality, and previous IVF history. Generally, 1-2 embryos are transferred to balance success rates with the risk of multiple pregnancies. Our doctors will discuss the best option for your specific situation.',
  },
  {
    question: 'What should I do to prepare for IVF?',
    answer: 'Preparation includes maintaining a healthy lifestyle, taking prescribed supplements, avoiding smoking and alcohol, managing stress, and following your doctor\'s specific instructions. We provide detailed pre-treatment guidelines and support throughout your preparation phase.',
  },
  {
    question: 'What happens if my first IVF cycle is unsuccessful?',
    answer: 'If the first cycle is unsuccessful, our team will review the cycle, analyze what happened, and adjust the treatment plan. Many couples achieve success in subsequent cycles. We offer support and counseling to help you through the process and discuss next steps.',
  },
];

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
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
                <h3 className="cs_service_heading">Frequently Asked Questions</h3>
                <p className="cs_service_subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  Find comprehensive answers to commonly asked questions about IVF, fertility treatments, and your journey with Seeds of Innocens. If you have additional questions, our team is always available to help.
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
                  alt="FAQs" 
                  width={1200} 
                  height={400}
                  className="w-100"
                  style={{ borderRadius: '10px' }}
                />
              </div>
            </div>
          </div>

          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_service_details">
                <FAQ faqs={faqsData} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cs_sidebar">
                <div className="cs_sidebar_widget cs_gray_bg mb-4">
                  <h3 className="cs_widget_title">Still Have Questions?</h3>
                  <p style={{ marginBottom: '15px' }}>
                    Our fertility specialists are here to help. Contact us for personalized answers to your questions.
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <strong>Phone:</strong><br />
                    <a href="tel:+91-XXXXXXXXXX">+91-XXXXXXXXXX</a>
                  </p>
                  <p style={{ marginBottom: '5px' }}>
                    <strong>Email:</strong><br />
                    <a href="mailto:info@seedsofinnocens.com">info@seedsofinnocens.com</a>
                  </p>
                </div>

                <div className="cs_sidebar_widget cs_gray_bg">
                  <h3 className="cs_widget_title">Related Resources</h3>
                  <ul className="cs_mp_0">
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/resources/ivf-process-patient-journey" style={{ color: 'var(--body-color)' }}>IVF Process / Patient Journey</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/resources/ivf-cost-package-details" style={{ color: 'var(--body-color)' }}>IVF Cost & Package Details</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/resources/blogs/fertility" style={{ color: 'var(--body-color)' }}>Fertility Blogs</a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                      <a href="/contact" style={{ color: 'var(--body-color)' }}>Contact Us</a>
                    </li>
                  </ul>
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

