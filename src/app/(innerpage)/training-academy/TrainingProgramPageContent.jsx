import AccentHeading from '@/app/Components/AccentHeading';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import React from 'react';
import { FaAward, FaCalendarAlt, FaFlask, FaUserGraduate } from 'react-icons/fa';
import TrainingProgramRegistrationForm from './TrainingProgramRegistrationForm';

const programDetails = {
  'embryo-biopsy': {
    name: 'Embryo Biopsy Training Program',
    duration: '20 Days',
    audience: 'Embryologists & IVF professionals',
  },
  'embryologist-training': {
    name: 'Embryologist Training Program',
    duration: '3 Months / 1 Year',
    audience: 'Life science graduates & ART professionals',
  },
  'andrology-technician': {
    name: 'Andrology Technician Training Program',
    duration: '1 Month',
    audience: 'Life science graduates & lab professionals',
  },
  'gynecologic-surgical': {
    name: 'Gynecologic Surgical Training Program',
    duration: '2 Weeks / 1 Month / 3 Months / 6 Months',
    audience: 'DGO, DNB, MD/MS (OBGY)',
  },
};

const TrainingProgramPageContent = ({
  contentData,
  defaultProgram,
}) => {
  const program = programDetails[defaultProgram] || programDetails['embryologist-training'];
  const highlights = [
    {
      icon: FaCalendarAlt,
      title: 'Duration',
      text: program.duration,
    },
    {
      icon: FaFlask,
      title: 'Practical Training',
      text: 'Hands-on learning in fertility and laboratory workflows.',
    },
    {
      icon: FaUserGraduate,
      title: 'Eligibility',
      text: program.audience,
    },
    {
      icon: FaAward,
      title: 'Certificate',
      text: 'Training certificate after successful completion.',
    },
  ];

  return (
    <Section
      topSpaceLg="50"
      topSpaceMd="60"
      bottomSpaceLg="90"
      bottomSpaceMd="90"
    >
      <div className="container">
        <div className="cs_training_intro">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-6">
              <div className="cs_training_eyebrow">Seeds of Innocens Training Academy</div>
              <AccentHeading level={2} className="cs_training_intro_title">
                {program.name}
              </AccentHeading>
              <p className="cs_training_intro_text">
                Build practical confidence with focused training, guided learning, and exposure to real reproductive medicine workflows.
              </p>
              <div className="cs_training_highlights">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div className="cs_training_highlight" key={index}>
                      <span className="cs_training_highlight_icon"><Icon /></span>
                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.text}</small>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_training_intro_image">
                <Image
                  src="/assets/img/Embryology Lab.png"
                  alt="Embryology lab training at Seeds of Innocens"
                  width={640}
                  height={420}
                  priority={false}
                />
                <div className="cs_training_image_note">
                  <strong>Advanced Lab Exposure</strong>
                  <span>Learn with experienced fertility specialists.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row cs_gap_y_50 align-items-start">
          <div className="col-lg-7 col-xl-8">
            <div className="cs_service_page_content cs_training_content_panel">
              <IVFContentSection data={contentData} />
            </div>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="cs_training_sidebar">
              <div className="cs_training_sidebar_note">
                <span>Direct Registration</span>
                <p>Students can submit the form from this page. Our team will call back with slot and fee details.</p>
              </div>
              <TrainingProgramRegistrationForm defaultProgram={defaultProgram} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrainingProgramPageContent;
