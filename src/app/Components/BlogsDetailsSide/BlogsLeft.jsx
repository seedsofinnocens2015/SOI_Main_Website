"use client"
import { Rating } from '@smastrom/react-rating';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { submitUnifiedForm, WEBSITE_FORM_TYPES } from '@/app/utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '@/app/utils/thankYou';

const BlogsLeft = ({ data }) => {
  const router = useRouter();
  const [rating, setRating] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    const fd = new FormData(e.target);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      service: fd.get('service'),
      address: fd.get('address'),
      date: fd.get('date'),
    };
    try {
      const { ok, data: res } = await submitUnifiedForm(WEBSITE_FORM_TYPES.BLOG_APPOINTMENT, payload);
      if (ok) {
        router.push(getThankYouUrl(THANK_YOU_TYPE.blogAppointment));
      } else {
        setFormError(res.error || 'Something went wrong.');
        setIsSubmitting(false);
      }
    } catch {
      setFormError('Network error.');
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="col-lg-8">
        <div className="cs_post_details cs_style_1">
          <div className="cs_post_thumb_thumbnail">
          <Image src={data.imageSrc} alt="img" width={856} height={486}   />
          </div>
          <ul className="cs_post_meta cs_mp0">
            <li>
              <i>
                <FaUser />
              </i>
              {data.text}
            </li>
            <li>
              <i>
                <FaCalendarAlt />
              </i>
              {data.secText}
            </li>
          </ul>
          {data.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="cs_height_27 cs_height_lg_10" />
          <div className="row cs_row_gap_30 cs_gap_y_30">
            <div className="col-md-7">
              <div className="cs_testimonial cs_style_1 cs_type_1">
                <div className="cs_testimonial_info">
                  <div className="cs_rating_container">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={data.testimonial.rating}
                      onChange={() => setRating(data.testimonial.rating)}
                      isRequired
                    />
                  </div>
                  <p className="cs_testimonial_subtitle">
                    {data.testimonial.subtitle}
                  </p>
                </div>
                <div className="cs_avatar cs_style_1">
                  <div className="cs_avatar_thumbnail cs_center">
                  <Image src={data.testimonial.avatarSrc} alt={data.testimonial.avatarAlt} width={73} height={73}   />
                  </div>
                  <div className="cs_avatar_info">
                    <h3 className="cs_avatar_title">
                      {data.testimonial.avatarName}
                    </h3>
                    <p className="cs_avatar_subtitle mb-0">
                      {data.testimonial.avatarTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="cs_card cs_style_8">
                <h3 className="cs_card_title">{data.card.title}</h3>
                <p className="cs_card_subtitle">{data.card.subtitle}</p>
                <div className="cs_progress_bar_wrapper">
                  {data.card.progress.map((item, index) => (
                    <div className="cs_progress_item" key={index}>
                      <div className="cs_progress_head">
                        <span>{item.label}</span>
                        <span>{item.percentage}%</span>
                      </div>
                      <div className="cs_progress">
                        <div
                          className="cs_progress_in"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_47 cs_height_lg_30" />
          {data.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div className="cs_height_70 cs_height_lg_40" />
          <h2 className="cs_reply_title mb-0">{data.commentTitle}</h2>
          <ul className="cs_comment_list cs_mp0">
            {data.comments.map((comment, index) => (
              <li className="cs_comment_body" key={index}>
                <div className="cs_comment_thumbnail">
                <Image src={comment.avatarSrc} className="cs_radius_5" alt="img" width={90} height={90}   />
                </div>
                <div className="cs_comment_info">
                  <h3>{comment.name}</h3>
                  <p>{comment.text}</p>
                  <div className="cs_comment_meta_wrapper">
                    <div className="cs_comment_date">
                      <span>{comment.date}</span>
                      <span>{comment.time}</span>
                    </div>
                    <Link
                      href={comment.link}
                      className="cs_reply_btn cs_accent_color"
                    >
                      {comment.replay}
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cs_height_90 cs_height_lg_60" />
          <h2 className="cs_reply_heading">{data.thirdSecTitle}</h2>
          <form
            className="cs_reply_form row cs_row_gap_30 cs_gap_y_30"
            id="comment"
            onSubmit={handleAppointmentSubmit}
          >
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-6">
              <select className="cs_form_field" name="service">
                {data?.serviceOption.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="address"
                placeholder="Office Address"
                className="cs_form_field"
              />
            </div>
            <div className="col-md-6">
              <input type="date" name="date" className="cs_form_field" />
            </div>
            {formError ? (
              <div className="col-md-12" style={{ color: '#c00', fontSize: '14px' }}>
                {formError}
              </div>
            ) : null}
            <div className="col-md-12">
              <button type="submit" disabled={isSubmitting} className="cs_btn cs_style_1 cs_color_1">
                {isSubmitting ? 'Submitting…' : 'Make an Appointment'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BlogsLeft;
