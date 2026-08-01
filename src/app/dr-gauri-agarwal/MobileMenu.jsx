"use client";

import { useState } from "react";

const mobileLinks = [
  { href: "#", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Pages" },
  { href: "#blog", label: "Blog" },
  { href: "#contacts", label: "Contacts" },
  { href: "#schedule", label: "Schedule a Visit" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu-button"
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`mobile-menu-backdrop ${isOpen ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
      />

      <aside className={`mobile-menu-drawer ${isOpen ? "is-open" : ""}`}>
        <button
          className="mobile-menu-close"
          type="button"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>

        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {mobileLinks.map((link) => (
            <a href={link.href} key={link.label} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}
