import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Follicular Monitoring',
};

const serviceData = {
  serviceHeading: '',
  services: [],
  mainImage: '/assets/img/ovarian.jpg',
  serviceDetails: [],
  footerText: '',
  additionalImages: '/assets/img/ovarian.jpg',
  iconBoxes: [],
  subtitle: '',
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/ovarian.jpg',
    '/assets/img/icons/PRP & Ovarian Rejuvenation.jpg'
  ],
};

const follicularContentData = {
  sections: [
    {
      heading: 'What is a Follicular Study?',
      paragraphs: [
        'Follicular study or follicular monitoring is the process through which the doctor watches the growth of this follicle from the beginning of the menstrual cycle to the time it is ready to release an egg.',
        'It is an important part of IVF assessment and timing. It uses a simple technique for assessing ovarian follicles at regular intervals and studies the pathway to ovulation. Medical experts study the follicle development in the ovaries and calculate when the next egg will be released. If a couple plans to have intercourse during that time, the chances of pregnancy are much higher.',
      ],
      sideImage: '/assets/img/Follicular.jpg',
    },
    {
      heading: 'Why is follicular Monitoring Done?',
      paragraphs: [
        'Follicular studies form a major part of fertility treatments. They are essential in checking whether the woman\'s body is responding to the treatment or not. If somebody has opted for the IVF (in-vitro fertilization) method of fertilization, then the follicle scans are very important.',
        'It determines the condition and the number of eggs produced in a single case of ovulation and checks the hormones involved. If the levels of hormones are incorrect, then with the alteration of medicine dosage there are higher chances of conception.',
        'Follicular monitoring can help pinpoint the exact time in the cycle when one will ovulate. It helps in planning intercourse during that time so that the chances of pregnancy are much higher. It also helps in diagnosing problems related to ovulation. Some of these problems could be hindering your pregnancy as well.',
        'However, it doesn\'t ensure fertilization of the egg by the sperm or implanting the fertilized egg on the uterine wall. Some problems don\'t let you conceive post-ovulation. These scans do not take care of them, as well.',
      ],
    },
    {
      heading: 'When is follicular monitoring necessary?',
      paragraphs: [
        'A follicle scan is a painless procedure that lets the doctor see the follicle\'s development inside the ovary. With the insertion of small plastic probes inside the vagina, sonographers understand the egg\'s development inside the follicle. Here are some of the reasons why you should consider doing follicular monitoring:',
        'The sonographer or the doctor will suggest you have these scans, usually on days 6 or 7 of your cycle. It is, however, based on the assumption that you have a 28-day cycle. She will continue to inform you every two to three days to come for the scans.',
      ],
      listItems: [
        'Suppose you are less than 35 years of age and have been actively trying to get pregnant for around one year. It is the first step where you can rule out ovulation-related problems.',
        'In case you are above 35 years of age and haven\'t been able to get pregnant in the last six months.',
        'If you have PCOD, you might have an irregular cycle and irregular ovulation. You might also have a cycle where you do not ovulate.',
        'If fertility drugs for ovulation or for producing multiple follicles through fertility procedures like IUI or IVF.',
      ],
    },
    {
      heading: 'How does follicle tracking work?',
      paragraphs: [
        'Follicle tracking is a series of ultrasound scans of the vagina which take between 5-10 minutes to perform. The follicles start developing from the 9th day of the cycle. The scans continue until the follicles have disappeared, and ovulation has started. Couples are then suggested to have intercourse. It helps in assisting conception as it optimizes the timing of the sperm and egg to meet.',
        'The doctor looks for the size of the follicles. He also checks the thickness of the endometrium, which is the wall of the uterus. The doctor might also use a Doppler scan to check the blood flow to the follicle and the endometrium. Usually, a mature follicle measures between 18-25mm, and an endometrium of more than 10mm is considered normal for a successful pregnancy.',
      ],
      bottomImage: '/assets/img/Follicular2.png',
    },
    {
      heading: 'Who needs follicle tracking?',
      paragraphs: [
        'It is usually suggested that women who do not know when they are ovulating or who have had miscarriages, or those who take Clomid or FSH.',
      ],
      listItems: [
        'If women do not know when she is ovulating despite using prediction kits might need follicle tracking.',
        'Women who have had unfortunate miscarriages in the early stages of pregnancy can use these scans to understand why it occurred.',
        'Women who have been taking medication to induce the ovulation process in them or drugs to counter other conception-related problems.',
      ],
    },
    {
      heading: 'Success rate of follicular study',
      paragraphs: [
        'People often have unrealistic expectations from follicular studies. One needs to know that the success rate is only 10%. Sometimes these scans can be extremely stressful for the couple.',
        'Doctors are often too casual while suggesting these scans as they tend to forget the strain it causes in a marital relationship. It is advisable to have only one cycle of ovulation tracking. It is helpful enough as it teaches you to correlate the scan with your body signals such as cervical mucus and ovulation pain.',
        'You can track ovulation discreetly at home which increases the chances of pregnancy rather than getting overburdened with the pressure of scans.',
      ],
    },
    {
      heading: 'Side effects of follicular ultrasound scan',
      paragraphs: [
        'There are no physical side effects of this scan. But it can be quite a taxing deal for any couple. Most couples who are prescribed this process have probably been trying for a baby for quite some time.',
        'When the doctors go through these scans, they tell you the exact time of ovulation and when are your chances of getting pregnant higher. This may result in the woman wanting to have sex only during that stipulated time, which may impact the libido of the partner.',
      ],
    },
    {
      heading: 'What are the advantages of folliculometry?',
      paragraphs: [
        'A follicle scan is done several times during a woman\'s menstrual cycle, usually between days 9-20. The scan detects when does a follicle rupture and release the egg. Follicle scans have several other uses listed below are some of them:',
      ],
      listItems: [
        'Follicles which do not grow till the time of rupture can be diagnosed.',
        'Some follicles do not grow at all. The scans help in detecting them.',
        'Some dominant follicles do not rupture.',
        'The endometrial lining might not be good enough in either thickness or quality.',
        'Scans can help to predict the time of ovulation for assisted pregnancy.',
        'They help to guide treatments with ovulation-inducing drugs or injections.',
        'To detect complications like OHSS and others.',
        'Lastly, follicular scans help in detecting luteal phase deficiency.',
      ],
    },
    {
      heading: 'How much time does take to undergo a follicle scan?',
      paragraphs: [
        'The total time for follicular scans is around fifteen to twenty minutes, but the preparations need to start a few hours before the scan.',
        'It can even take only ten minutes for the entire procedure if you cooperate with the doctor and follow the instructions of the sonographer. Usually, four to six scans take place in one in one cycle to accurately predict the time of ovulation.',
        'The initial scan is called the baseline scan. It helps the doctor understand the initial stage of the follicle. From here, the doctor schedules scans at the appropriate times to follow the development of uterine follicles. The inner lining of the uterus and the growth of the follicle are checked during each scan, and finally, the doctor gets a clear idea of when the woman will ovulate.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header2.jpg"
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
              <IVFContentSection data={follicularContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
