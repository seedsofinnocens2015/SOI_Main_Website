"use client";

import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import FertilityCalculatorsPage from '../resources/fertility-calculator/FertilityCalculatorsPage';

const headingData = {
  title: 'Fertility Calculator',
};

export default function FertilityCalculatorRootPage() {
  return (
    <div>
      <Section className={'cs_page_heading cs_bg_filed cs_center'} backgroundImage="/assets/img/Top-Header.webp">
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="50" topSpaceMd="60" bottomSpaceLg="50" bottomSpaceMd="60">
        <FertilityCalculatorsPage />
      </Section>
    </div>
  );
}

