import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Female Genital Tuberculosis',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/genetic.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/genetic.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/genetic.jpg',
    '/assets/img/genetic.jpg'
  ],
};

const genitalTuberculosisContentData = {
  sections: [
    {
      heading: 'Female Genital Tuberculosis',
      paragraphs: [
        'Female Genital Tuberculosis, or FGTB is a bacterial infection of the female reproductive system that is often associated with infertility in women. A highly asymptomatic condition in its early stages of development, the most common cause of genital tuberculosis is the spread of the mycobacterium from the lungs to the reproductive tract of the female.',
        'The tuberculosis in uterus first arrives into the fallopian tubes of the female reproductive system, from where it can either block the tubes, or spread to the uterus and/or to the ovaries. On rarer occasions, the disease also spreads to the cervix, vagina, and the vulva as well. Genital Tuberculosis is known to be a major cause of infertility in India, where the disease can stay up to 10 to 20 years without any major uterus tuberculosis symptoms showing up. It is only upon investigation for infertility do doctors arrive on the conclusion.',
        'If you want to know more about what is genital tuberculosis, book an appointment at Seeds of Innocence.',
      ],
      sideImage: '/assets/img/Genital Tuberculosis.jpg',
    },
    {
      heading: 'Common Symptoms of Genital Tuberculosis',
      paragraphs: [
        'Symptoms of Genital Tuberculosis may include:',
      ],
      listItems: [
        'Pelvic Pain, painful menstrual cycles, pain during intercourse',
        'Pain in lower abdomen, discomfort, and back pain',
        'Rarely, but local tuberculous lesions appear on external parts of genitalia, cervix, or vagina.',
      ],
    },
    {
      heading: 'SOI Expertise in Genital Tuberculosis',
      paragraphs: [
        'The team at SOI is well trained in looking for and eradicating the condition of Tuberculosis by focusing on the main problem; the infection. It must be understood that in a situation like this, it is highly unlikely to get pregnant through natural conception. This is why the doctors at SOI often direct the couples with this proble to try their luck with IVF as it bypasses the prime focus of the condition, the blocked or damaged fallopian tubes.',
      ],
    },
    {
      heading: 'Q. Can tuberculosis cause miscarriage?',
      paragraphs: [
        'Although it is highly unlikely, one of the severe obstetric complication of Tuberculosis does include spontaneous miscarriage.',
      ],
    },
    {
      heading: 'Q. Can latent TB affect pregnancy?',
      paragraphs: [
        'The answer to this question is not straightforward. A latent tuberculosis is just an underlying condition that is waiting to be woken up. It might or might not "wake up" during the pregnancy. If you wish to know more about the effects and consequences of latent tuberculosis with pregnancy, book an appointment with one of our experts right now.',
      ],
    },
    {
      heading: 'Q. What happens if you are pregnant and exposed to TB?',
      paragraphs: [
        'First of all, if you have a hunch that you have been exposed to TB while you are pregnant, get yourself checked. An untreated TB can result in low birth weight and the child may even get TB at birth. For the mother, the stress can even kill her. It is better to understand the actual condition before treating, as treatment is possible. The time of treatment depends on whether it is latent or active TB.',
      ],
    },
    {
      heading: 'Q. Is TB testing safe during pregnancy?',
      paragraphs: [
        'Yes. A skin test for TB is completely safe for Expecting Mothers.',
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
              <IVFContentSection data={genitalTuberculosisContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
