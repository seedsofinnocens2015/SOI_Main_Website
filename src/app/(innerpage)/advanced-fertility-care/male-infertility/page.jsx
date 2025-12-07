import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Male Infertility',
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
  readMoreUrl: '/appointments',
  readMoreText: 'Book Appointment',
  benefitImages: [
    '/assets/img/male.jpg',
    '/assets/img/male.jpg'
  ],
};

const maleInfertilityContentData = {
  sections: [
    {
      heading: 'What is male infertility?',
      paragraphs: [
        'Infertility can concern both male and female individuals. Specifically, male infertility is a condition that affects men. It interferes with the ability of their reproductive system to impregnate a female.',
        'If you have male infertility, it means you have repeated unprotected sexual intercourse for over a year but your female partner doesn\'t get pregnant.',
        'Infertility affects 186 million people worldwide, and the male partner is the cause in about half of the cases. Some studies show that male infertility affects about 10% to 15% of males in the United States who are trying to conceive.',
      ],
      sideImage: '/assets/img/Male Infertility1.jpg',
    },
    {
      heading: 'Is it easy to conceive?',
      paragraphs: [
        'No, it isn\'t easy to conceive. The human species is considered a species with low reproductive capacity. A fertile and young couple, for every month of free intercourse, has only a 20-25% chance of conceiving.',
        'Conception is a complicated process that depends on many factors in the male and female reproductive systems, including:',
        'For the pregnancy to continue to full term (39 to 40 weeks and six days), the embryo must be healthy, and the female\'s hormonal environment must be adequate enough for the embryo to develop. Infertility can happen if something affects just one of these factors.',
      ],
      listItems: [
        'Producing healthy male reproductive cells (sperm) and a healthy female reproductive cell (egg).',
        'Unblocked fallopian tubes that allow sperm to reach the egg.',
        'The sperm\'s ability to fertilize the egg when they meet.',
        'The ability of the fertilized egg (embryo) to implant in the uterus.',
      ],
    },
    {
      heading: 'Symptoms and Causes',
      paragraphs: [
        'The primary symptom of male infertility is being unable to have a biological child. But male infertility can also lead to many psychological and emotional symptoms, including feelings of:',
        'If you or your partner experiences any of these feelings, it\'s a good idea to talk to a therapist or psychiatrist.',
        'Sometimes, male infertility can be associated with a low production of testosterone from the testicles. In this case, symptoms such as tiredness, impotence, depression, weight gain and apathy may occur. If you or your partner experiences these symptoms, talking to a urologist who specializes in male infertility or a reproductive endocrinologist can help.',
      ],
      listItems: [
        'Depression.',
        'Loss.',
        'Grief.',
        'Inadequacy.',
        'Failure.',
      ],
    },
    {
      heading: 'What causes male infertility?',
      paragraphs: [
        'Many biological and environmental factors can cause male infertility. These include:',
      ],
      listItems: [
        'Sperm problems, including malformed sperm, low sperm count (oligospermia) and the absence of sperm in your semen (azoospermia).',
        'Genetic disorders, including Klinefelter syndrome and myotonic dystrophy.',
        'Some medical conditions, including diabetes, certain autoimmune diseases that attack your sperm and cystic fibrosis.',
        'Infections, including epididymitis, orchitis and sexually transmitted infections (STIs), including gonorrhea or HIV.',
        'Swollen veins in your testicles (varicoceles).',
        'Cancer treatments, including chemotherapy, radiation therapy or surgical removal of your testicles (orchiectomy).',
        'Testicular trauma.',
        'Hormonal disorders that affect your hypothalamus or pituitary glands.',
      ],
    },
    {
      heading: 'Who does male infertility affect?',
      paragraphs: [
        'Any male may have infertility. But your chances of having male infertility may be higher if you:',
      ],
      listItems: [
        'Have a body mass index (BMI) greater than 25 (overweight/obesity).',
        'Are 40 or older.',
        'Have been exposed to radiation.',
        'Have been exposed to environmental toxins, including lead, calcium, pesticides or mercury.',
        'Use tobacco, marijuana or alcohol.',
        'Take certain medications, including flutamide, spironolactone and bicalutamide.',
        'Spend a lot of time around heat that raises the temperature of your testicles, including saunas or hot tubs. Using a wheelchair can also increase the temperature of your testicles.',
        'Have a history of undescended testicles.',
        'Have a history of varicoceles.',
        'Take testosterone to treat low testosterone.',
        'Take anabolic-androgenic steroids (AAS) or supplements containing traces of hormones to increase muscle mass.',
      ],
    },
    {
      heading: 'Is healthy sperm thick or runny?',
      paragraphs: [
        'Semen is the whitish-gray liquid that releases from a penis upon orgasm (ejaculation). Semen contains sperm, as well as fluids that help deposit sperm toward the back of the vagina, and proteins, vitamins and minerals that help nourish the sperm.',
        'Typically, semen is thick and sticky. Runny or watery semen may indicate a low sperm count, which may cause male infertility.',
      ],
      bottomImage: '/assets/img/Male Infertility2.jpg',
    },
    {
      heading: 'Diagnosis and Tests',
      paragraphs: [
        'A primary care physician (PCP) can diagnose male infertility. Or they may refer you to a urologist who specializes in male infertility or a reproductive endocrinologist.',
        'A PCP will perform a complete physical examination to help determine your overall health and identify any physical problems that may affect your fertility. They may also ask you and your partner questions about your sexual habits and health history, including:',
        'The provider may order tests if the physical exam and review of your health history don\'t indicate any apparent cause for male infertility.',
      ],
      listItems: [
        'How long have you been trying to get your partner pregnant?',
        'Have you gotten a partner pregnant in the past?',
        'Have you ever tested positive for an STI? If so, which STI and when?',
        'Have you ever received treatment for an STI?',
        'Have you used birth control (contraceptives)? If so, which one(s) and when?',
        'Has a provider diagnosed any of your biological family members with male infertility?',
        'Do you smoke, drink alcohol or use recreational/nonprescription drugs?',
        'Which medications do you take?',
      ],
    },
    {
      heading: 'What tests will be done to diagnose male infertility?',
      paragraphs: [
        'A semen analysis is one of the primary tests healthcare providers use to help diagnose male infertility. It\'s a lab test of a semen sample that examines the volume and quality of your sperm.',
        'Other tests that a provider may order to help identify or rule out the cause of male infertility may include:',
      ],
      listItems: [
        'Imaging tests. These may include noninvasive tests, such as an ultrasound or magnetic resonance imaging (MRI), or invasive tests such as a venogram.',
        'Blood tests. Blood tests can measure your hormone levels and look for abnormalities with your genes or chromosomes.',
        'Urinalysis (urine test). A urine (pee) test can help diagnose STIs and diabetes.',
        'Testicular biopsy. A provider will remove a small amount of testicular tissue to determine how well your testicles produce sperm.',
      ],
    },
    {
      heading: 'Management and Treatment',
      paragraphs: [
        'Yes, many different treatment options can reverse male infertility. Depending on the cause, your treatment may include:',
      ],
    },
    {
      heading: 'Lifestyle changes',
      paragraphs: [
        'You may be able to increase the production of healthy sperm by making certain lifestyle changes, including:',
      ],
      listItems: [
        'Maintaining a healthy weight for you.',
        'Eating more fruits and vegetables.',
        'Engaging in regular physical activity, including walking, jogging, bicycling, dancing or lifting weights.',
        'Managing stress.',
        'Stopping smoking, drinking and using recreational/nonprescription drugs.',
        'Avoiding the use of sexual lubricants (lube) during sexual intercourse.',
      ],
    },
    {
      heading: 'Medications',
      paragraphs: [
        'Hormone therapy can regulate hormone levels that are too high or low and affect your sperm quality. You may also need to stop using, or find alternatives to, certain medications, including:',
      ],
      listItems: [
        'Tricyclic antidepressants.',
        'Calcium channel blockers.',
        'Anti-androgens.',
      ],
    },
    {
      heading: 'Surgery',
      paragraphs: [
        'Surgical treatments may include:',
      ],
      listItems: [
        'Vasectomy reversal. If you had a vasectomy to prevent sperm from entering your semen, a vasectomy reversal reconnects your vas deferens to make pregnancy possible again.',
        'Vasoepididymostomy. This surgery removes a blockage in your epididymis (the coiled tube that lies against your testicle where sperm mature) that prevents sperm from entering your semen.',
        'Sperm retrieval. A healthcare provider will perform a biopsy to retrieve sperm from your testicles or epididymis.',
        'Varicocelectomy. Varicocele is a condition in which there\'s pooling of blood in the testicles due to varicose veins in the scrotum. It may have a negative effect on sperm quality. Surgery removes varicose veins, and this can increase the chance of pregnancy, in some cases.',
      ],
    },
    {
      heading: 'Assisted reproductive technology',
      paragraphs: [
        'Assisted reproductive technology (ART) procedures involve removing an egg from your partner\'s ovaries and combining it with your sperm in a lab.',
      ],
      listItems: [
        'Intracytoplasmic sperm injection (ICSI). During ICSI, a provider physically injects a single sperm cell into an egg.',
        'In vitro fertilization (IVF). During the IVF process, a provider will inject your partner with fertility medications that cause multiple eggs to mature in your partner\'s ovaries. A provider will collect the eggs when they\'re ready and expose them to sperm in a lab. After a sperm cell fertilizes the egg, a provider will place the fertilized egg (embryo) inside a uterus.',
      ],
    },
  ],
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/All_Page_Header.jpg"
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
              <IVFContentSection data={maleInfertilityContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
