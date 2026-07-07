import Link from 'next/link';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import AccentHeading from '@/app/Components/AccentHeading';

const relatedPages = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

function isLegalHeading(line) {
  const text = line.trim();

  return (
    text.length > 0 &&
    text.length <= 80 &&
    !/^\d+\./.test(text) &&
    !/[.!?]$/.test(text) &&
    !text.includes(': ')
  );
}

export default function LegalPage({
  title,
  intro,
  effectiveDate,
  sections = [],
  rawContent,
  backgroundImage = '/assets/img/Top-Header.webp',
}) {
  const headingData = {
    uspTitle: `${title.replace('&', '<span class="cs_accent_color">&</span>')}`,
  };

  return (
    <div>
      <Section
        className="cs_page_heading cs_bg_filed cs_center"
        backgroundImage={backgroundImage}
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="90"
        bottomSpaceLg="80"
        bottomSpaceMd="100"
      >
        <div className="container">
          <div className="row cs_gap_y_40">
            <div className="col-lg-8">
              <div className="cs_legal_content">
                {rawContent ? (
                  <div>
                    {rawContent.split(/\r?\n/).map((line, index) => {
                      if (!line.trim()) {
                        return <div className="cs_legal_line_gap" key={index} />;
                      }

                      if (isLegalHeading(line)) {
                        return (
                          <AccentHeading
                            level={index === 0 ? 2 : 3}
                            className="cs_legal_heading"
                            key={index}
                          >
                            {line}
                          </AccentHeading>
                        );
                      }

                      return (
                        <p className="cs_legal_text cs_legal_raw_line" key={index}>
                          {line}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <>
                    <p className="cs_legal_updated">Effective Date: {effectiveDate}</p>
                    <p className="cs_legal_intro">{intro}</p>

                    {sections.map((section) => (
                      <div className="cs_legal_section" key={section.title}>
                        <AccentHeading level={3} className="cs_legal_heading">
                          {section.title}
                        </AccentHeading>
                        {section.content.map((item, index) => {
                          if (Array.isArray(item)) {
                            return (
                              <ul className="cs_legal_list" key={`${section.title}-${index}`}>
                                {item.map((point) => (
                                  <li key={point}>{point}</li>
                                ))}
                              </ul>
                            );
                          }

                          return (
                            <p className="cs_legal_text" key={`${section.title}-${index}`}>
                              {item}
                            </p>
                          );
                        })}
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="cs_legal_sidebar">
                <h3>Important Pages</h3>
                <div className="cs_legal_links">
                  {relatedPages.map((page) => (
                    <Link href={page.href} key={page.href}>
                      {page.label}
                    </Link>
                  ))}
                </div>
                <div className="cs_legal_help">
                  <h4>Need Assistance?</h4>
                  <p>
                    For privacy, appointment, or website-related questions, our
                    support team can help.
                  </p>
                  <a href="tel:+91-9810350512">+91-9810350512</a>
                  <a href="mailto:info@seedsofinnocens.com">info@seedsofinnocens.com</a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
}
