"use client";

import Link from 'next/link';
import { FaCalculator } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function FertilityCalculatorFab() {
  return (
    <>
      <Link
        href="https://wa.me/919810350512"
        target="_blank"
        rel="noopener noreferrer"
        className="cs_floating_chat_button"
        aria-label="Chat With Us"
        prefetch={false}
      >
        <span className="cs_floating_chat_button_icon" aria-hidden="true">
          <FaWhatsapp />
        </span>
        <span>Chat With Us</span>
      </Link>

      <Link
        href="/resources/fertility-calculator"
        className="cs_floating_calculator_button"
        aria-label="Fertility Calculator"
        prefetch={false}
      >
        <span className="cs_fertility_fab_icon" aria-hidden="true">
          <FaCalculator />
        </span>
        <span>Fertility Calculator</span>
      </Link>
    </>
  );
}

