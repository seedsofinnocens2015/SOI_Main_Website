import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'MicroTESE Procedure & Cost',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/male.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/male.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/contact/book-appointment',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/male.jpg',
    '/assets/img/male.jpg'
  ],
};

const microteseContentData = {
  sections: [
    {
      heading: 'MicroTESE Procedure & Cost',
      paragraphs: [
        'Microtese or Micro-Dissection tese is an invasive procedure of locating and extracting sperm from men who are suffering from non-obstructive Azoospermia or severe testicular failure. Microtese is especially helpful to men with these conditions as it allows the identification of very localized areas of sperm production that may have been missed in blind biopsies or needle aspiration techniques.',
        'During the microtese surgery, an expert opens the testes surgically to inspect the tissues under a microscope. Almost the entirety of the testes is carried out to locate healthy areas of sperm production. At this stage, the doctors can collect the sperm for a Natural IVF Cycle or for cryopreservation, to be used later.',
        'Book an appointment with Seeds of Innocens to know more about microtese cost and other details.',
      ],
      sideImage: '/assets/img/MicroTESE.png',
    },
    {
      heading: 'Microtese Procedure',
      paragraphs: [
        'In most cases, a male patient can do with a simple testicular mapping procedure, which is usually performed before Microtese. However, in cases where no sperm is found, the doctors proceed with Microtese, following a certain set of steps.',
      ],
      listItems: [
        'The patient is put under general anaesthesia so they are sleeping during the procedure.',
        'The surgeon makes a small incision of about 2-3 cm in the midline of the scrotum.',
        'Through this incision, the doctor will then open up your testicles and look under a high powered microscope to find the tubules inside that are swollen and may contain sperm.',
        'From one of these tubules, a sample will be collected and sent for further analysis',
        'The doctor will then close up the incision with a very fine suture that will then dissolve on its own, and will not leave behind any kind of scaring.',
        'The sample is then studied under a standard microscope to find sperm, which are then frozen in liquid nitrogen and either used for a Natural IVF Cycle or preserved for later use.',
      ],
    },
    {
      heading: 'Q. How much does Microtese cost?',
      paragraphs: [
        'Microtese, as a procedure, has different results depending on a person\'s body. This means that the complications, or ease, depends on the person\'s body, which creates a significant difference in the cost of procedure. For more information on the cost of the procedure, get in touch with one of our experts now when you book an appointment.',
      ],
    },
    {
      heading: 'Q. How successful is Microtese?',
      paragraphs: [
        'The success rate of Microtese in men depends on the number of biopsies a person has had before. Men with zero biopsies before Microtese have a 68% chance of sperm retrieval. As the number of biopsies increase, the chance falls down to about only 20%. So it would be advised that a person does not go through a biopsy before Microtese.',
      ],
    },
    {
      heading: 'Q. What is Microtese ICSI?',
      paragraphs: [
        'When the sperm retrieved through Microtese are used for fertilization of an egg inside the cytoplasm, the process is called Microtese ICSI. It is a well-known technique used in IVF.',
      ],
    },
    {
      heading: 'Q. How successful is Microtese ICSI in couples with non obstructive azoospermia?',
      paragraphs: [
        'There are a number of research studies that take various sets and subsets of observations to answer this question. The most prominent answer depends on the chance of finding the sperm in Microtese. When there is sperm retrieval and a successful IVF-ICSI cycle, the chances of a successful pregnancy stand at about 78%, which is a promising number.',
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
              <IVFContentSection data={microteseContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
