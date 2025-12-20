import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Varicocele Symptoms & Treatment',
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

const varicoceleContentData = {
  sections: [
    {
      heading: 'Varicocele Symptoms & Treatment',
      paragraphs: [
        'Varicoceles are the enlarged veins in the scrotum, a loose bag of skin in males that holds the testicles. It is a malfunction of the valves of the testicular vein that cause the blood to pool or collect in an area and enlarge the vein. This pooling of blood which is the main varicocele symptom, causes circulation problems in the testes, leading to temperature and environmental variations in the testicles.',
        'This has an adverse effect on the motility, count, and morphology of the sperm, thus, having an indirect effect on the fertility of a male. Statistics from around the world show that about 15% of the male population suffers from Varicoceles. A Varicocele Treatment or simply Varicocelectomy, is a procedure that ties the swollen veins in the scrotum, while preserving the normal blood vessels.',
        'At Seeds of Innocence our team of fertility specialists will help you with the right varicocele diagnosis and also identify the right varicocele causes.',
      ],
    },
    {
      heading: 'Symptoms of Varicoceles',
      paragraphs: [
        'The most daunting part about varicoceles is that they remain asymptomatic for a rather long time, often going unnoticed. In a majority of cases, men only find out about their varicoceles when they get checked for fertility issues. In the rare cases that varicoceles cause pain, the pain occurs due to long periods of sitting, and even then, it is just mild to moderate. The only viable symptom that they have is that they cause infertility in men.',
      ],
    },
    {
      heading: 'Benefits of Varicocelectomy',
      paragraphs: [
        'A Varicocelectomy is the most common operation or procedure that is performed to solve issues of male infertility. It is the best chance of repairing a Varicocele, with the goal of relieving pain, if any, and increasing the chances of pregnancy in couples that are facing infertility due to male factors. The stats with Varicocelectomy are astonishing, as close to half of the patients are able to conceive through natural way after the procedure, with almost 80% men seeing significant improvement in their health.',
        'Aside from this, Varicocelectomy is a great factor in preventing any hormonal damage and improves Leydig cell function in a vast majority of men.',
      ],
    },
    {
      heading: 'Treatment',
      paragraphs: [
        'At SOI, you can get one of the most common treatments of varicoceles and the most effective one as well; Microscopic Varicocelectomy. In this, the swollen veins are tied off while preserving the blood flow into the testicles. The result of this procedure is a dramatic improvement in reproductive health of men.',
      ],
    },
    {
      heading: 'Q. Do varicoceles go away?',
      paragraphs: [
        'No, varicoceles do not go away on their own.',
      ],
    },
    {
      heading: 'Q. What happens if varicocele is left untreated?',
      paragraphs: [
        'For most people, the blood around the testicle is bound to cause some pressure, resulting in the shrinkage of the testes. However, varicocele may have a strong possibility of causing infertility in men especially if left untreated for a long time.',
      ],
    },
    {
      heading: 'Q. Can heavy lifting cause varicocele?',
      paragraphs: [
        'Heavy lifting is the cause of varicocele in a significant number of men. Aside from this, heavy lifting is also known to worsen the symptoms in a number of cases as well.',
      ],
    },
    {
      heading: 'Q. Can I exercise with varicocele?',
      paragraphs: [
        'Exercising with Varicocele is a possibility if you know what possess danger to your health. It is important to identify what exercises are good for your health and what are not. Following specific precautions is important of you wish to exercise with a varicocele. For more information talk to one of our experts by booking an appointment.',
      ],
    },
    {
      heading: 'Q. How long does Varicocelectomy pain last?',
      paragraphs: [
        'After the treatment, it will take about 2 days to return to normal non-strenous activities. For strenuous activities, it may take up to 2 weeks to be prepared, which is also based on how comfortable you are. Pain is generally mild and may last for about a few days to a few weeks depending on your condition.',
      ],
    },
    {
      heading: 'Q. What causes pain in varicocele?',
      paragraphs: [
        'The pressure of the pooling blood on the testicles causes pain in a varicocele.',
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
              <IVFContentSection data={varicoceleContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;

