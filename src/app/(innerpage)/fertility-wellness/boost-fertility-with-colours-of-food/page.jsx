import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'How To Boost Up Fertility With The Colours Of Food',
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

const boostFertilityFoodContentData = {
  sections: [
    {
      heading: 'How to Boost Up Fertility With The Colours Of Food',
      paragraphs: [
        'Fertility in women is a direct reflection of the overall health of their bodies. If everything is correct and running in perfect condition, there is usually nothing that they need to be worried about. However, as fertility is connected to the overall health, the instant coffee and fast food lifestyle is bound to take a toll on both them in the current world.',
        'While lifestyle changes are not the only way of keeping factors of infertility at bay, they are certainly an important step taken towards creating a healthier body. The body from which the baby will also take shape, completing the family. If you feed the body a lot of junk, it will indirectly feed all that unhealthy food to your baby as well, irrespective of whether you are pregnant or not. This is true in the sense that an unhealthy will never respond positively to any thing, even if it is an attempt to get pregnant successfully.',
        'That is why it is not only important to get rid of all the toxins in your body before attempting pregnancy but it is also necessary to eat food that may boost your fertility factors to get the best results. Here are some fertility boosting food tips, based on their colours.',
      ],
      sideImage: '/assets/img/fertility-foods.jpg',
    },
    {
      heading: 'How to Improve Fertility?',
      paragraphs: [
        'Eating a colorful, nutrient-rich diet can significantly improve fertility. Here are fertility-boosting foods organized by color:',
      ],
    },
    {
      heading: 'Yellow - Bananas',
      paragraphs: [
        'Yellow is for Bananas, a rich source of phosphorus and Vitamin B6, both of which improve the quality of both, sperms and the eggs. Not only will this keep you both healthy, but will also improve the likelihood of getting pregnant. Bananas have no fat and also improve the body\'s metabolism.',
      ],
    },
    {
      heading: 'Brown - Whole Grains',
      paragraphs: [
        'Brown is for whole grains, a perfect source of antioxidants. These antioxidants remove all toxins from the body, while helping in the production of healthy sperms and eggs. Consider whole wheat, pulses, and beans in your diet.',
      ],
    },
    {
      heading: 'Green - Green Vegetables',
      paragraphs: [
        'Green is for all the green vegetables. They are not only great for your overall health, but green vegetables also contain a lot of folate and iron that are both important in increasing the fertility in both men and women. Folate, especially increases ovulation. So introducing more of cabbage, broccoli, spinach, peas, beans, and capsicum will be especially beneficial.',
      ],
    },
    {
      heading: 'Red - Fatty Fish and Meat',
      paragraphs: [
        'Red is for all the fatty fish and meat rich in omega-3 fatty acids. Omega-3 is considered good for the body to produce estrogen, which in turn increases your likelihood of successful pregnancy. Apart from this, fishes like mackerel and salmon are also good sources of Vitamin D.',
      ],
    },
    {
      heading: 'White - Eggs',
      paragraphs: [
        'White is for the eggs, which are themselves known to be a fertility boosting food. It has proteins, vitamin D, and is a great source of energy. Eggs also improve the quality of the eggs and sperms, both.',
      ],
    },
    {
      heading: 'Orange - Citrus Foods',
      paragraphs: [
        'Orange is for the citrussy foods, which are always highly recommended for improving fertility. Lime, oranges, and tangerines are rich in antioxidants and vitamin C. The overall effect is that of regulating menstrual cycles, aiding ovulation, and improving sperm health.',
      ],
    },
    {
      heading: 'The Power of Healthy Eating',
      paragraphs: [
        'What you eat defines what you become. Eating healthy is the first step towards becoming healthy, something that will go a long way in staying fertile. If you are looking for any assistance in conceiving, visit the best fertility center in Delhi, Seeds of Innocence, today. With a wide variety treatments and counseling services for couples, Seeds of Innocence has a presence in 7 states, and has successfully served 12,000+ couples. Join the family to complete your family today.',
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
              <IVFContentSection data={boostFertilityFoodContentData} benefitImages={serviceData.benefitImages} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
