"use client";

import Image from "next/image";
import { useState } from "react";
import testimonialStyles from "./testimonial.module.css";

const testimonials = [
  {
    quote:
      "After several difficult fertility experiences, Dr. Gauri's team helped us feel informed, supported, and hopeful again. Every step of our IVF journey was explained with patience and genuine care.",
    name: "Aarav & Neha",
    issue: "IVF JOURNEY",
    image: "/gauri-agarwal/1.png",
  },
  {
    quote:
      "We came in feeling anxious after a failed cycle, but the consultation gave us real clarity. The treatment plan felt personal, practical, and deeply reassuring from the very first visit.",
    name: "Ritika S.",
    issue: "FAILED IVF CYCLE",
    image: "/gauri-agarwal/2.png",
  },
  {
    quote:
      "Dr. Gauri explained my low AMH results in a way I could finally understand. I felt heard, guided, and confident about the choices available for my fertility treatment.",
    name: "Meera K.",
    issue: "LOW AMH SUPPORT",
    image: "/gauri-agarwal/3.png",
  },
  {
    quote:
      "The team guided us through genetic testing and embryo selection with so much patience. It made a complex journey feel less overwhelming and helped us make informed decisions together.",
    name: "Kabir & Ananya",
    issue: "GENETIC TESTING",
    image: "/gauri-agarwal/4.png",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      className={testimonialStyles.testimonialSection}
      aria-labelledby="testimonial-title"
    >
      <Image
        className={testimonialStyles.testimonialBg}
        src="/gauri-agarwal/testimonial.webp"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
      />
      <div className={testimonialStyles.testimonialOverlay} aria-hidden="true" />

      <button
        className={`${testimonialStyles.testimonialArrow} ${testimonialStyles.prev}`}
        type="button"
        aria-label="Previous testimonial"
        onClick={showPrevious}
      >
        <span aria-hidden="true" />
      </button>

      <div className={testimonialStyles.testimonialContent}>
        <div className={testimonialStyles.testimonialAvatar}>
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="90px"
          />
        </div>
        <h2 id="testimonial-title">{testimonial.quote}</h2>
        <p className={testimonialStyles.testimonialName}>{testimonial.name}</p>
        <p className={testimonialStyles.testimonialIssue}>
          {testimonial.issue}
        </p>
      </div>

      <button
        className={`${testimonialStyles.testimonialArrow} ${testimonialStyles.next}`}
        type="button"
        aria-label="Next testimonial"
        onClick={showNext}
      >
        <span aria-hidden="true" />
      </button>
    </section>
  );
}
