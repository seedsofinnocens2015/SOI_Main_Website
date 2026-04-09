"use client";

import Link from 'next/link';
import { FaCalendarCheck } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

export default function FertilityCalculatorFab() {
  return (
    <>
      <Link
        href="https://wa.me/919810350512"
        target="_blank"
        rel="noopener noreferrer"
        className="cs_floating_whatsapp_button"
        aria-label="WhatsApp Chat"
        prefetch={false}
      >
        <span className="cs_floating_chat_button_icon" aria-hidden="true">
          <FaWhatsapp />
        </span>
      </Link>

      <Link
        href="/contact/book-appointment"
        className="cs_floating_calculator_button"
        aria-label="Book Appointment"
        prefetch={false}
      >
        <span className="cs_fertility_fab_icon" aria-hidden="true">
          <FaCalendarCheck />
        </span>
        <span>Book Appointment</span>
      </Link>

      <Link
        href="tel:+919810350512"
        className="cs_floating_chat_button"
        aria-label="Call Now"
        prefetch={false}
      >
        <span className="cs_floating_chat_button_icon" aria-hidden="true">
          <FaPhoneAlt />
        </span>
        <span>Call Now</span>
      </Link>
    </>
  );
}

