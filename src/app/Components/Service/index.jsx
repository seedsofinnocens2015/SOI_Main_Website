import { FaAngleDoubleRight } from 'react-icons/fa';
import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import Image from 'next/image';

const Service = ({ data, cardBg }) => {
  return (
    <>
      <div className="container">
        {data.subtitle && (
          <SectionHeading
            variant={'text-center'}
            SectionTitle={data.title || ''}
            SectionSubtitle={data.subtitle}
            SectionDescription={data.description || ''}
          />
        )}
        <div className="cs_height_30 cs_height_lg_30" />
        <div className="row cs_service_simple_grid">
          {data?.services.map((service, index) => (
            <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              <div className="cs_service_simple_item">
                <Link href={service.link} className="cs_service_simple_link">
                  <div className="cs_service_simple_icon">
                    <Image src={service.iconUrl} alt={service.title} width={40} height={40} />
                  </div>
                  <h4 className="cs_service_simple_title">{service.title}</h4>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {data.footerText && data.footerLink && (
          <div className="cs_service_footer" data-aos="fade-up">
            <div className="cs_service_footer_text cs_medium">
              <span dangerouslySetInnerHTML={{ __html: data.footerText }} />
              <Link href={data.footerLink}>
                {data.footerLinkText}
                <span>
                  <i>
                    <FaAngleDoubleRight />
                  </i>
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Service;
