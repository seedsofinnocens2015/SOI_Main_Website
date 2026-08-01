import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import styles from "./services.module.css";
import helpingStyles from "./helping.module.css";
import bookingStyles from "./booking.module.css";
import podcastStyles from "./podcast.module.css";
import appointmentStyles from "./appointment.module.css";
import TestimonialSlider from "./TestimonialSlider";
import ctaStyles from "./cta.module.css";
import blogStyles from "./blog.module.css";
import galleryStyles from "./gallery.module.css";
import footerStyles from "./footer.module.css";
import awardsStyles from "./awards.module.css";
import MobileMenu from "./MobileMenu";
import AppointmentForm from "./AppointmentForm";
import ScrollReveal from "./ScrollReveal";
import {
  DEFAULT_BLOG_IMAGE,
  getLatestBlogs,
} from "@/app/utils/blogsData";

const latestBlogs = getLatestBlogs(3, { preferWithImage: true });

export default function DrGauriAgarwalPage() {
  return (
    <main className="gauri-site page">
      <section className="hero">
        <header className="site-header">
          <a className="brand" href="#" aria-label="Home">
            <Image
              src="/gauri-agarwal/logo.png"
              alt="Dr. Gauri Agarwal"
              width={150}
              height={54}
              priority
            />
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            {/* <a href="#">
              Home
              <span aria-hidden="true">⌄</span>
            </a>
            <a href="#">
              Services
              <span aria-hidden="true">⌄</span>
            </a>
            <a href="#">
              Pages
              <span aria-hidden="true">⌄</span>
            </a>
            <a href="#">Blog</a>
            <a href="#">Contacts</a>
            <button className="search-button" type="button" aria-label="Search">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.6-3.6" />
              </svg>
            </button> */}
          </nav>

          <a className="nav-cta" href="#schedule">
            Schedule a Visit
          </a>

          <MobileMenu />
        </header>

        <div className="hero-content">
          <h1>
            Begin Your
            <br />
            IVF Journey with
            <br />
            Expert Fertility
            <br />
            Care
          </h1>

          <p>
            Dr. Gauri Agarwal offers compassionate IVF and fertility care
            <br />
            with advanced, personalised treatment plans.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#schedule">
              Schedule a Visit
            </a>
            <a className="phone-button" href="tel:+919810350512">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span>+91 98103 50512</span>
            </a>
          </div>
        </div>

        <div className="hero-image-placeholder" aria-hidden="true">
          <Image
            src="/gauri-agarwal/gauri-.png"
            alt=""
            fill
            priority
            sizes="(max-width: 820px) 88vw, 48vw"
          />
        </div>

        <svg
          className="hero-bottom-curve"
          viewBox="0 0 19 8"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M 0 0 C 8 13 11 -8 21 0 V 8 H 0 Z" />
        </svg>
      </section>

      <section className="ivf-info-section" aria-labelledby="ivf-info-title">
        <div className="ivf-info-inner">
          {/* <div className="ivf-info-mark" aria-hidden="true" /> */}
          <h2 id="ivf-info-title">What is IVF Treatment?</h2>
          <p>
            IVF is a specialised fertility treatment that brings eggs and sperm
            together in a carefully controlled lab setting, helping couples and
            individuals take a hopeful step toward parenthood with expert care.
          </p>
          <a className="ivf-info-button" href="/fertility-treatments/ivf/">
            Find Out More
          </a>
        </div>
      </section>

      <section className="about-doctor" aria-labelledby="about-doctor-title">
        <ScrollReveal className="about-visual">
          <div className="about-photo">
            <Image
              src="/gauri-agarwal/about-us.png"
              alt="Dr. Gauri Agarwal"
              fill
              sizes="(max-width: 900px) 82vw, 480px"
            />
          </div>
        </ScrollReveal>

        <div className="about-copy">
          <p className="about-eyebrow">
            <span aria-hidden="true">✣</span>
            ABOUT DR. GAURI
          </p>
          <h2 id="about-doctor-title">
            Meet Your IVF <br /> Fertility Specialist
          </h2>
          <p>
            Dr. Gauri Agarwal is dedicated to helping couples and individuals
            understand their fertility options with clarity, compassion, and
            evidence-based care.
          </p>
          <p>
            Her approach focuses on personalised IVF treatment plans, advanced
            reproductive support, and emotional guidance through every stage of
            the parenthood journey.
          </p>
          <a className="about-button" href="/ivf-doctor/dr-gauri-agarwal-ivf-specialist/">
            More About Me
          </a>
        </div>
      </section>

      <section className={styles.servicesSection} aria-labelledby="services-title">
        <p className={styles.servicesEyebrow}>
          <span aria-hidden="true">✣</span>
          OUR SERVICES
        </p>
        <h2 id="services-title">
          My practice supports a wide range
          <br />
          of fertility needs including:
        </h2>

        <div className={styles.servicesGrid}>
          {[
            {
              icon: "/gauri-agarwal/IUI, IVF & ICSI.svg",
              title: "IUI, IVF & ICSI",
              text: "Personalised fertility treatments designed around your diagnosis, cycle response, and parenthood goals.",
            },
            {
              icon: "/gauri-agarwal/Genetic%20Testing.svg",
              title: "Genetic Testing",
              text: "PGT-A and PGT-M screening support to help identify healthy embryos before transfer.",
            },
            {
              icon: "/gauri-agarwal/Blastocyst%20Transfer.svg",
              title: "Blastocyst Transfer",
              text: "Advanced embryo transfer planning at the blastocyst stage for carefully selected IVF cycles.",
            },
            {
              icon: "/gauri-agarwal/Cryopreservation.svg",
              title: "Cryopreservation",
              text: "Egg, sperm, and embryo freezing options for future fertility preservation and treatment flexibility.",
            },
            {
              icon: "/gauri-agarwal/PRP%20&%20Ovarian%20Rejuvenation.svg",
              title: "PRP & Ovarian Rejuvenation",
              text: "Supportive regenerative options for selected patients seeking ovarian function and fertility care.",
            },
            {
              icon: "/gauri-agarwal/TESA-PESA.svg",
              title: "TESA/PESA",
              text: "Surgical sperm retrieval options for male factor infertility and advanced assisted reproduction cycles.",
            },
            {
              icon: "/gauri-agarwal/Donor%20Program.svg",
              title: "Donor Program",
              text: "Guidance for donor egg, donor sperm, and donor embryo pathways with ethical counselling support.",
            },
            {
              icon: "/gauri-agarwal/Surrogacy.svg",
              title: "Surrogacy",
              text: "Coordinated surrogacy guidance with medical planning, counselling, and treatment cycle support.",
            },
            {
              icon: "/gauri-agarwal/Genetic%20Counselling.svg",
              title: "Genetic Counselling",
              text: "Clear counselling for inherited conditions, embryo testing choices, and family planning decisions.",
            },
            {
              icon: "/gauri-agarwal/Laparoscopy%20&%20Hysteroscopy.svg",
              title: "Laparoscopy & Hysteroscopy",
              text: "Minimally invasive procedures to evaluate and treat uterine, tubal, and pelvic fertility concerns.",
            },
          ].map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <Image
                src={service.icon}
                className="service-icon"
                alt=""
                width={48}
                height={48}
              />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={helpingStyles.helpingSection} aria-labelledby="helping-title">
        <div className={helpingStyles.helpingCopy}>
            <p className={helpingStyles.helpingEyebrow}>
              <span aria-hidden="true">✣</span>
              WHO I HELP
            </p>
            <h2 id="helping-title">I specialize in helping...</h2>

            <ul className={helpingStyles.helpingList}>
              {[
                "Couples who have gone through failed IVF cycles;",
                "Women with low AMH and reduced ovarian reserve;",
                "Couples navigating difficult fertility journeys with advanced genetic testing;",
                "Patients seeking personalised IVF, ICSI, or donor programme guidance;",
                "Women with recurrent pregnancy loss or repeated implantation failure;",
                "Couples who need compassionate clarity before choosing their next fertility step.",
              ].map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        <div className={helpingStyles.helpingVisuals} aria-hidden="true">
          <div className={`${helpingStyles.helpingImage} ${helpingStyles.helpingImageOne}`}>
            <Image src="/gauri-agarwal/specialize-1.png" alt="" fill sizes="260px" />
          </div>
          <div className={`${helpingStyles.helpingImage} ${helpingStyles.helpingImageTwo}`}>
            <Image src="/gauri-agarwal/specialize-2.png" alt="" fill sizes="240px" />
          </div>
        </div>
      </section>

      <section className={bookingStyles.bookingSection}  aria-labelledby="booking-title">
        <div className={bookingStyles.bookingHeader}>
          <h2 id="booking-title">Simple Booking Process</h2>
          <p>
            If you are planning fertility treatment or need clarity about your
            next step, we can guide you with a calm, personalised consultation.
          </p>
        </div>

        <div className={bookingStyles.bookingGrid}>
          {[
            "Book a Discovery Call",
            "Arrange an Appointment",
            "Review Your Fertility Plan",
            "Follow-up Care and Guidance",
          ].map((step, index) => (
            <article className={bookingStyles.bookingCard} key={step}>
              <span className={bookingStyles.stepNumber}>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>

        <a className={bookingStyles.bookingButton} href="#schedule">
          Schedule a Visit
        </a>
      </section>

      <section className={podcastStyles.podcastSection} aria-labelledby="podcast-title">
        <div className={podcastStyles.podcastPanel}>
          <div className={podcastStyles.podcastCopy}>
            <p className={podcastStyles.podcastEyebrow}>
              <span aria-hidden="true">✣</span>
              LISTEN TO MY PODCAST
            </p>
            <h2 id="podcast-title">
              Fertility Care
              <br />
              Podcast
            </h2>
            <p>
              Dr. Gauri shares thoughtful conversations on IVF, fertility
              treatment, reproductive health, and the emotional journey toward
              parenthood.
            </p>
            <strong>
              New episodes share expert guidance for couples planning their next
              step.
            </strong>
            <a
              className={podcastStyles.podcastButton}
              href="/#fertility-expert-videos"
            >
              Listen to Podcast
            </a>
          </div>

          <ScrollReveal
            className={podcastStyles.podcastImage}
            direction="right"
          >
            <Image
              src="/gauri-agarwal/mobile.png"
              alt=""
              fill
              sizes="(max-width: 900px) 80vw, 430px"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className={appointmentStyles.appointmentSection} id="schedule" aria-labelledby="appointment-title">
        <ScrollReveal className={appointmentStyles.appointmentImage}>
          <Image
            src="/gauri-agarwal/appointment.png"
            alt=""
            fill
            sizes="(max-width: 900px) 80vw, 520px"
          />
        </ScrollReveal>

        <div className={appointmentStyles.appointmentCopy}>
          <p className={appointmentStyles.appointmentEyebrow}>
            <span aria-hidden="true">✣</span>
            BOOK APPOINTMENT
          </p>
          <h2 id="appointment-title">
            Begin Your
            <br />
            Fertility Journey
          </h2>
          <p>
            Enter your details and our team will help you schedule a
            personalised consultation with Dr. Gauri Agarwal.
          </p>

          <AppointmentForm styles={appointmentStyles} />
        </div>
      </section>

      <TestimonialSlider />

      <section className={ctaStyles.ctaStats} aria-label="Practice statistics">
        {[
          { number: "21,000+", label: "Healthy Babies, Countless Smiles" },
          { number: "20+", label: "Years of experience" },
          { number: "78%", label: "Success Rate Bringing Hope to Families" },
        ].map((stat) => (
          <div className={ctaStyles.ctaStat} key={stat.label}>
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className={blogStyles.blogSection} aria-labelledby="blog-title">
        <h2 id="blog-title">Latest Blog Posts</h2>

        <div className={blogStyles.blogGrid}>
          {latestBlogs.map((post) => {
            const postLink = `/blog/${post.slug}`;

            return (
              <article className={blogStyles.blogCard} key={post.slug}>
                <Link className={blogStyles.blogImage} href={postLink}>
                  <Image
                    src={post.image || DEFAULT_BLOG_IMAGE}
                    alt={post.title}
                    fill
                    sizes="(max-width: 900px) 90vw, 360px"
                  />
                </Link>
                <div className={blogStyles.blogMeta}>
                  <p className={blogStyles.blogCategory}>
                    {post.category || "Fertility"}
                  </p>
                  {post.date ? (
                    <time className={blogStyles.blogDate}>{post.date}</time>
                  ) : null}
                </div>
                <h3>
                  <Link href={postLink}>{post.title}</Link>
                </h3>
                <p className={blogStyles.blogExcerpt}>{post.excerpt}</p>
                <Link className={blogStyles.blogReadMore} href={postLink}>
                Read More
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>

        <Link className={blogStyles.blogButton} href="/blogs/fertility/">
          View All Posts
        </Link>
      </section>

      <section className={awardsStyles.awardsSection} aria-labelledby="awards-title">
        <p className={awardsStyles.awardsEyebrow} id="awards-title">
          <span aria-hidden="true">✣</span>
          Achievements and Awards
        </p>
        <h2>
        Award-Winning Fertility Pioneer
        </h2>

        <div className={awardsStyles.awardsGrid}>
          {[
            { src: "/gauri-agarwal/award1.png", alt: "Award logo 1" },
            { src: "/gauri-agarwal/award2.png", alt: "Award logo 2" },
            { src: "/gauri-agarwal/award3.png", alt: "Award logo 3" },
            { src: "/gauri-agarwal/award4.png", alt: "Award logo 4" },
            { src: "/gauri-agarwal/award5.png", alt: "Award logo 5" },
            { src: "/gauri-agarwal/award6.png", alt: "Award logo 6" },
          ].map((award) => (
              <ScrollReveal
                className={awardsStyles.awardLogo}
                direction="up"
                key={award.alt}
              >
                <Image
                  src={award.src}
                  alt={award.alt}
                  width={150}
                  height={70}
                />
              </ScrollReveal>
            ))}
        </div>
      </section>

      <section className={galleryStyles.galleryStrip} aria-label="Gallery">
        {[
          { image: "/gauri-agarwal/gallery1.png", className: galleryStyles.cropOne },
          { image: "/gauri-agarwal/gallery2.png", className: galleryStyles.cropTwo },
          { image: "/gauri-agarwal/gallery3.png", className: galleryStyles.cropThree },
          { image: "/gauri-agarwal/gallery4.png", className: galleryStyles.cropFour },
          { image: "/gauri-agarwal/gallery5.png", className: galleryStyles.cropFive },
          { image: "/gauri-agarwal/gallery6.png", className: galleryStyles.cropSix },
        ].map((item, index) => (
          <div className={galleryStyles.galleryItem} key={`${item.image}-${index}`}>
            <Image
              className={item.className}
              src={item.image}
              alt=""
              fill
              sizes="(max-width: 900px) 50vw, 17vw"
            />
          </div>
        ))}
      </section>

      <footer className={footerStyles.footer}>
        <div className={footerStyles.footerGrid}>
          <div className={footerStyles.footerBrand}>
            <Link className={footerStyles.footerLogo} href="/" aria-label="Home">
              <Image src="/gauri-agarwal/logo.png" alt="Dr. Gauri Agarwal" width={166} height={60} />
            </Link>
            <a className={footerStyles.phone} href="tel:+919810350512">
              +91 98103 50512
            </a>
            <a className={footerStyles.email} href="mailto:info@seedsofinnocens.com">
              info@seedsofinnocens.com
            </a>

            <h2 className={footerStyles.followTitle}>Follow Us</h2>
            <div className={footerStyles.socials} aria-label="Social links">
              <a
                href="https://www.instagram.com/gauriagarwal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dr. Gauri Agarwal on Instagram"
              >
                <FaInstagram aria-hidden="true" />
              </a>
              <a
                href="https://x.com/drgauriagarwal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dr. Gauri Agarwal on X"
              >
                <FaXTwitter aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/drgauriagarwal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dr. Gauri Agarwal on LinkedIn"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/Dr.GauriAgarwal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dr. Gauri Agarwal on Facebook"
              >
                <FaFacebookF aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className={footerStyles.footerNav} aria-label="Fertility Treatment">
            <h2>Fertility Treatment</h2>
            <Link href="/fertility-treatments/ivf/">IVF</Link>
            <Link href="/fertility-treatments/icsi/">ICSI</Link>
            <Link href="/fertility-treatments/iui/">IUI</Link>
            <Link href="/male-infertility-treatments/male-infertility-treatment-in-india/">
              Male Infertility
            </Link>
            <Link href="/ivf-procedures-preservation/egg-freezing/">Egg Freezing</Link>
            <Link href="/fertility-treatments/blastocyst-transfer/">Blastocyst Transfer</Link>
            <Link href="/fertility-treatments/ovulation-induction/">Ovulation Induction</Link>
            <Link href="/fertility-treatments/follicular-monitoring/">Follicular Monitoring</Link>
            <Link href="/male-infertility-treatments/tesa-pesa/">TESA/PESA</Link>
          </nav>

          <nav className={footerStyles.footerNav} aria-label="Quick Links">
            <h2>Quick Links</h2>
            <Link href="/ivf-doctor/">Our Doctors</Link>
            <Link href="/contact/centre-locator/">Our Centres</Link>
            <Link href="/contact/careers/">Careers</Link>
            <Link href="/contact/feedback/">Feedback</Link>
            <Link href="/contact/call-back-form/">Contact</Link>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms-and-conditions/">Terms &amp; Conditions</Link>
            <Link href="/disclaimer/">Disclaimer</Link>
          </nav>

          <div className={footerStyles.locations} aria-label="Our Locations">
            <h2>Our Locations</h2>

            <a
              className={footerStyles.locationItem}
              href="https://maps.app.goo.gl/8XwEsr6pwaKETVDz9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Ghaziabad</h3>
              <p>
                Opp. Nehru Stadium Jogging Track, Ram Nagar, Pocket L, Nehru
                Nagar III, Ghaziabad, UP 201001
              </p>
            </a>

            <a
              className={footerStyles.locationItem}
              href="https://maps.app.goo.gl/hGPHxVYrB8PbP5YXA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Malviya Nagar</h3>
              <p>
                3, Opposite Aurobindo College, MMTC Colony, Malviya Nagar, New
                Delhi 110017
              </p>
            </a>

            <a
              className={footerStyles.locationItem}
              href="https://maps.app.goo.gl/chEJhvmZJxEEZRqh6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Gurugram</h3>
              <p>
                Plot No-2, Near Nagar Nigam Office, Sector 42, Gurugram,
                Haryana 122009
              </p>
            </a>
          </div>
        </div>

        <div className={footerStyles.footerBottom}>
          <p className={footerStyles.copyright}>
            © 2026 - All Rights Reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
