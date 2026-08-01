"use client";

import Link from "next/link";
import { useState } from "react";
import centresAllData from "@/app/data/centres-data.json";
import { submitBookAppointment } from "@/app/utils/websiteForms";
import { getThankYouUrl, THANK_YOU_TYPE } from "@/app/utils/thankYou";

const APPOINTMENT_SUBMITTED_KEY = "soi_appointment_submitted";
const centresData = centresAllData.centres;

const getPhoneError = (phone) => {
  const digits = String(phone || "").replace(/\D/g, "");
  if (!digits) return "";
  if (!/^[6-9]/.test(digits)) return "Invalid number";
  if (digits.length !== 10) return "Phone number must be exactly 10 digits.";
  return "";
};

export default function AppointmentForm({ styles }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextPhoneError = getPhoneError(formData.get("phone"));
    setPhoneError(nextPhoneError);
    if (nextPhoneError) return;

    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: "",
      center: formData.get("center"),
      captchaAccepted: formData.get("captchaAccepted") === "on",
      message: "",
    };

    if (!payload.center) {
      window.alert("Please select your nearest centre.");
      return;
    }

    if (!payload.captchaAccepted) {
      window.alert("Please accept the Privacy Policy and T&C.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { ok, data } = await submitBookAppointment(payload);

      if (!ok) {
        window.alert(data.error || "Something went wrong.");
        form.captchaAccepted.checked = false;
        setIsSubmitting(false);
        return;
      }

      window.localStorage.setItem(APPOINTMENT_SUBMITTED_KEY, "true");
      window.location.assign(getThankYouUrl(THANK_YOU_TYPE.appointment));
    } catch (error) {
      console.error("Appointment submission error:", error);
      window.alert("Network error.");
      form.captchaAccepted.checked = false;
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.appointmentForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name *"
        autoComplete="name"
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number *"
        autoComplete="tel"
        inputMode="numeric"
        maxLength={10}
        pattern="[6-9][0-9]{9}"
        required
        aria-describedby={phoneError ? "gauri-phone-error" : undefined}
        aria-invalid={phoneError ? "true" : "false"}
        onChange={(event) => setPhoneError(getPhoneError(event.target.value))}
        onBlur={(event) => setPhoneError(getPhoneError(event.target.value))}
      />
      {/* {phoneError ? (
        <span id="gauri-phone-error" className={styles.formError}>
          {phoneError}
        </span>
      ) : null} */}

      <select name="center" defaultValue="" required>
        <option value="" disabled>
          Select Centre *
        </option>
        <optgroup label="India Centres">
          {centresData
            .filter((centre) => !centre.isInternational)
            .map((centre) => (
              <option
                key={centre.slug}
                value={centre.name.split(",")[0].trim()}
              >
                {centre.name}
              </option>
            ))}
        </optgroup>
        <optgroup label="International Centres">
          {centresData
            .filter((centre) => centre.isInternational)
            .map((centre) => (
              <option
                key={centre.slug}
                value={centre.name.split(",")[0].trim()}
              >
                {centre.name}
              </option>
            ))}
        </optgroup>
      </select>

      <label className={styles.consent}>
        <input type="checkbox" name="captchaAccepted" required />
        <span>
          By clicking &quot;Book Appointment&quot;, you agree to our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/terms-and-conditions">T&amp;C</Link> *
        </span>
      </label>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Book Your Appointment"}
      </button>
    </form>
  );
}
