import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'What is Ovarian Hyperstimulation?',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/recent_post2.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/recent_post2.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/recent_post2.jpg',
    '/assets/img/recent_post2.jpg'
  ],
};

const ovarianHyperstimulationContentData = {
  sections: [
    {
      heading: 'What is OHSS?',
      paragraphs: [
        'Ovarian hyperstimulation syndrome is one of the most dreaded and potentially serious complication that might occur during the fertility treatment, especially in vitro fertilisation (IVF).',
      ],
    },
    {
      heading: 'What causes Ovarian hyperstimulation syndrome?',
      paragraphs: [
        'IVF requires ovarian stimulation. Gonadotropins are the hormones used to achieve ovarian stimulation and multifollicular development (to help more eggs grow). Sometimes during the stimulation, there is an excessive and exaggerated response to these gonadotropin drugs, leading to OHSS.',
        'Overs stimulated / Hyperstimulated ovaries enlarge in size and release chemicals into the bloodstream. Due to sudden increase of VEGF/HCG levels, fluid from the blood vessels starts leaking into your abdomen and in severe cases into the space around the heart and lungs. Due to excessive fluid accumulation in abdomen, the functioning of the vital organs of body like kidney is hampered. In very severe cases OHSS can affect the kidneys, liver and lungs. If severe OHSS is left untreated, mortality might occur.',
      ],
    },
    {
      heading: 'Which patients are at risk of getting OHSS?',
      paragraphs: [
        'Mild OHSS is common in women undergoing IVF treatment; it affects as many as 30 to 35% of women. Severe OHSS is rare and can occur in 1% of patients undergoing treatment.',
        'The risk of developing OHSS is higher in women who:',
      ],
      listItems: [
        'have PCOS (polycystic ovarian syndrome)',
        'young women who are under 30 years',
        'high AMH',
        'history of OHSS',
        'Multiple pregnancy',
      ],
    },
    {
      heading: 'What are the symptoms of OHSS?',
      paragraphs: [
        'Symptoms of OHSS depends upon the severity of the disease. It can vary from nausea, vomiting to shock and breathlessness. OHSS can present with a plethora of symptoms.',
        'Mild abdominal pain is normal post ovum pick up, and does not necessarily means OHSS.',
        'OHSS can range from mild to severe:',
      ],
      listItems: [
        'Mild OHSS – It is a very common condition and can present as mild abdominal swelling, nausea, vomiting and discomfort',
        'Moderate OHSS – patient may experience abdominal distension, bloating sensation, discomfort, pain, exaggerated nausea and vomiting',
        'Severe OHSS – patient may experience breathlessness, decreased urine output, blood clots',
      ],
    },
    {
      heading: 'What should I do if I get diagnosed mild OHSS?',
      paragraphs: [
        'Patients with mild OHSS can be easily managed at home, with few out patient visits at clinic. As a patient, you must drink adequate amount of liquids at regular intervals guided by your thirst. In case you have pain, you can use hot water bags and the pain killers advised by your doctor. You should not remained confined to bed, as it increases the risk of blood clots, therefore, it is advisable to remain active.',
      ],
    },
    {
      heading: 'When will I need to get admitted in hospital?',
      paragraphs: [
        'Majority of women can be managed as outpatients but few may require admission. You will require hospital admission if:',
      ],
      listItems: [
        'your pain is not getting relieved by medications',
        'you are experiencing severe nausea and vomiting',
        'your condition is not improving',
        'You are feeling breathless',
        'Your urine output is decreasing',
      ],
    },
    {
      heading: 'What should I do if I get diagnosed with moderate to severe OHSS?',
      paragraphs: [
        'Patients with moderate to severe OHSS require hospitalisation and management by critical case team. Significant proportion of the patients improve with adequate hydration and treatment.',
      ],
    },
    {
      heading: 'What is the treatment?',
      paragraphs: [
        'OHSS usually gets better with time. There is so specific treatment. Prevention and supportive care is the main stay. Treatment is directed to help symptoms and to timely prevent complications.',
        'This includes:',
      ],
      listItems: [
        'pain relief such as paracetamol. use of anti inflammatory drugs is not advisable',
        'anti-emetic drugs to help reduce vomiting',
        'an intravenous drip to replace fluids lost',
        'Support compression stockings to prevent thrombosis. Low molecular weight heparin injections are also started in a selected few patients',
        'In very few cases, a procedure known as a paracentesis is done to reduce and drain the excessive fluid that is accumulated in the abdominal cavity. In this procedure a thin needle or tube is inserted under ultrasound guidance into the patients abdomen to drain fluid',
      ],
    },
    {
      heading: 'OHSS FREE CLINIC',
      paragraphs: [
        'Seeds of Innocence is a OHSS free clinic, where patient safety is our top priority. We have a group of highly trained specialised doctors.',
        'Risk of OHSS can be drastically reduced by usage of individualised ovarian stimulation protocol (antagonist protocol) and freezing technology.',
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

      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={ovarianHyperstimulationContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

