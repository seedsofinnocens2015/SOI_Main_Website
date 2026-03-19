"use client";

import Link from 'next/link';
import { FaCalculator } from 'react-icons/fa';

export default function FertilityCalculatorFab({
  href = '/resources/fertility-calculator',
  label = 'Fertility Calculator',
}) {
  return (
    <Link href={href} className="cs_fertility_fab" aria-label={`Open ${label}`} prefetch={false}>
      <span className="cs_fertility_fab_icon" aria-hidden="true">
        <FaCalculator />
      </span>
      <span className="cs_fertility_fab_text">{label}</span>
    </Link>
  );
}

