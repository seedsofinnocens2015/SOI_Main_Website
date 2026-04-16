import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import CounterSection from '@/app/Components/FunSection/CounterSection';

const headingData = {
  uspTitle: 'Success <span class="cs_accent_color">Rates </span>',
};

/** Home jaisi counter line (rang + typography); badge/heading / peach band nahi */
const countersData = {
  counters: [
    { number: '20,000+', title: 'Healthy Babies' },
    { number: '78%', title: 'Up to Success Rate*' },
    { number: '30+', title: 'Certified Trained Clinicians' },
    { number: '35+', title: 'IVF Centres' },
  ],
};

const firstSectionData = {
  sections: [
    {
      heading: 'Our Success Rates',
      paragraphs: [
        'At Seeds of Innocens, we are proud of our consistently high success rates. Our commitment to excellence, advanced technology, and personalized care has helped thousands of couples achieve their dream of parenthood.',
        'Our success rates reflect our dedication to providing the highest quality of fertility care, utilizing state-of-the-art technology, and maintaining the highest standards in embryology and patient care.',
      ],
      sideImage: '/assets/img/Success Rates.jpg',
    },
  ],
};

const remainingSectionsData = {
  sections: [
    {
      heading: 'Success Rate by Treatment Type',
      paragraphs: [
        'Our success rates vary by treatment type and patient factors. Below are our average success rates for different fertility treatments:',
      ],
      listItems: [
        'IVF-ICSI: Our IVF-ICSI program maintains a success rate of approximately 65-70% for women under 35 years, with personalized protocols tailored to each patient\'s needs.',
        'IUI (Intrauterine Insemination): Our IUI procedures show success rates of 15-20% per cycle, with higher success rates when combined with appropriate ovarian stimulation.',
        'Frozen Embryo Transfer (FET): Our advanced freezing techniques ensure high survival rates, with FET success rates comparable to fresh cycles at approximately 60-65%.',
        'PGT (Preimplantation Genetic Testing): PGT cycles show improved success rates, with up to 70-75% pregnancy rates when genetically normal embryos are transferred.',
        'Blastocyst Transfer: Our blastocyst transfer program shows success rates of 65-70% for women under 35 years, with higher implantation rates compared to day 3 transfers.',
        'Donor Egg IVF: Donor egg cycles show excellent success rates of 70-80%, as donor eggs are typically from younger, healthy donors.',
      ],
    },
    {
      heading: 'Factors Affecting Success Rates',
      paragraphs: [
        'Several factors can influence the success rates of fertility treatments. Understanding these factors helps us provide personalized care and realistic expectations:',
      ],
      listItems: [
        'Patient Age: Success rates are highest for women under 35 years, gradually decreasing with age. Our team provides personalized counseling based on age-related factors.',
        'Treatment History: Previous treatment history, medical conditions, and lifestyle factors all play a role in determining the best treatment approach for optimal success.',
        'Technology & Expertise: Our state-of-the-art laboratory, advanced equipment, and experienced embryologists contribute significantly to our high success rates.',
        'Embryo Quality: The quality of embryos plays a crucial role in success rates. Our advanced embryo selection techniques help identify the best embryos for transfer.',
        'Lifestyle Factors: Factors such as BMI, smoking, alcohol consumption, and stress can impact success rates. We provide comprehensive counseling on lifestyle modifications.',
        'Underlying Medical Conditions: Conditions such as endometriosis, PCOS, and male factor infertility can affect success rates. Our personalized treatment protocols address these factors.',
      ],
    },
    {
      heading: 'Our Commitment to Excellence',
      paragraphs: [
        'At Seeds of Innocens, we are committed to maintaining and improving our success rates through:',
      ],
      listItems: [
        'Continuous quality improvement and monitoring of outcomes',
        'Regular training and professional development for our medical team',
        'Investment in the latest technology and equipment',
        'Personalized treatment protocols based on individual patient needs',
        'Comprehensive pre-treatment evaluation and counseling',
        'Ongoing research and adoption of best practices in reproductive medicine',
      ],
    },
    {
      heading: 'Understanding Success Rates',
      paragraphs: [
        'It\'s important to understand that success rates can vary based on individual circumstances. Our team provides detailed counseling during your initial consultation to discuss your specific situation and expected outcomes.',
        'We believe in transparency and will always provide honest, realistic expectations while doing everything possible to maximize your chances of success.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.webp"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* First Content Section */}
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
              <IVFContentSection data={firstSectionData} accentHeadingStyle />
            </div>
          </div>
        </div>
      </Section>

      {/* Counter row: home jaisa number/label design; poora home section nahi */}
      <Section
        topSpaceLg="60"
        topSpaceMd="70"
        bottomSpaceLg="40"
        bottomSpaceMd="50"
      >
        <CounterSection data={countersData} inline />
      </Section>

      {/* Remaining Content Sections */}
      <Section
        topSpaceLg="0"
        topSpaceMd="0"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          {/* Content Section - Centered and Full Width */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={remainingSectionsData} accentHeadingStyle />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

