"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getAssetPathClient } from '../../utils/assetPath';
import { submitBookAppointment } from '../../utils/websiteForms';
import { getThankYouUrl, THANK_YOU_TYPE } from '../../utils/thankYou';

const PageHeading = ({ data }) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hideStatsGrid = Boolean(data?.hideStatsGrid);
  const hideAppointmentForm = Boolean(data?.hideAppointmentForm);
  const centerUspTitle = Boolean(data?.centerUspTitle);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const dataObj = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      time: formData.get('time'),
      // Keep email blank for header quick form (no email input here),
      // so LSQ duplicate checks are not triggered by a fixed placeholder email.
      email: '',
      center: 'Header Common Form',
      message: 'Appointment requested from header form',
    };

    try {
      const { ok, data: result } = await submitBookAppointment(dataObj);
      if (ok) {
        router.push(getThankYouUrl(THANK_YOU_TYPE.appointment));
      } else {
        alert(result.error || 'Something went wrong.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Network error.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        {/* USP Content Section */}
        <div className={centerUspTitle ? 'col-lg-12 col-md-12' : 'col-lg-8 col-md-12 mb-4 mb-lg-0'}>
          <div className={`cs_header_usp_wrapper ${hideAppointmentForm ? 'cs_header_usp_wrapper_no_form' : ''} ${centerUspTitle ? 'text-center cs_header_usp_wrapper_center_title' : ''}`}>
            <h2 className={`cs_header_usp_topline ${centerUspTitle ? 'text-center' : ''}`}>
              {data?.uspTitle ? (
                <span dangerouslySetInnerHTML={{ __html: data.uspTitle }} />
              ) : (
                <>
                  EXPERT HANDS, PROVEN SUCCESS. <br />
                  <span className="cs_accent_color">YOUR MIRACLE AWAITS</span>
                </>
              )}
            </h2>
            {!hideStatsGrid && (
              <div className="cs_header_stats_grid">
                <div className="cs_header_stat_item">
                  <div className="cs_stat_number cs_stat_1">
                    <Image src={getAssetPathClient("/assets/img/icons/Healthy Babies.svg")} alt="Healthy Babies+" className="cs_stat_icon cs_stat_1" width={24} height={24} loading="eager" /> 20,000+
                  </div>
                  <div className="cs_stat_text">Healthy Babies, Countless <br /> Smiles</div>
                </div>
                <div className="cs_header_stat_item">
                  <div className="cs_stat_number cs_stat_2">
                    <Image src={getAssetPathClient("/assets/img/icons/IVF Centres.svg")} alt="IVF Centres" className="cs_stat_icon cs_stat_2" width={24} height={24} loading="eager" /> 35+
                  </div>
                  <div className="cs_stat_text">IVF Centres Spreading <br /> Parenthood Joy</div>
                </div>
                <div className="cs_header_stat_item">
                  <div className="cs_stat_number cs_stat_3">
                    <Image src={getAssetPathClient("/assets/img/icons/Success Rate.svg")} alt="Success Rate" className="cs_stat_icon cs_stat_3" width={24} height={24} loading="eager" /> 78%
                  </div>
                  <div className="cs_stat_text">Success Rate Bringing <br /> Hope to Families</div>
                </div>
                <div className="cs_header_stat_item">
                  <div className="cs_stat_number cs_stat_4">
                    <Image src={getAssetPathClient("/assets/img/icons/Dedicated Fertility.svg")} alt="Dedicated Fertility" className="cs_stat_icon cs_stat_4" width={24} height={24} loading="eager" /> 30+
                  </div>
                  <div className="cs_stat_text">Dedicated Fertility <br /> Specialists</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {hideAppointmentForm && !centerUspTitle ? (
          <div className="col-lg-4 d-none d-lg-block" />
        ) : !hideAppointmentForm ? (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="cs_header_form_wrapper">
              <h3 className="cs_header_form_title"><span className="cs_accent_color">Book </span>Appointment</h3>

              <form onSubmit={handleSubmit}>
                <div className="cs_form_group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    required
                    className="cs_form_field"
                  />
                </div>
                <div className="cs_form_group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    className="cs_form_field"
                  />
                </div>
                <div className="cs_form_row">
                  <div className="cs_form_col">
                    <label className="cs_form_label_small">Preferred Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="cs_form_field cs_date_input"
                    />
                  </div>
                  <div className="cs_form_col">
                    <label className="cs_form_label_small">Preferred Time</label>
                    <select
                      name="time"
                      required
                      className="cs_form_field cs_time_select"
                    >
                      <option value="">Time *</option>
                      <option value="09:00">09 AM</option>
                      <option value="10:00">10 AM</option>
                      <option value="11:00">11 AM</option>
                      <option value="12:00">12 PM</option>
                      <option value="14:00">02 PM</option>
                      <option value="15:00">03 PM</option>
                      <option value="16:00">04 PM</option>
                      <option value="17:00">05 PM</option>
                    </select>
                  </div>
                  </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cs_btn cs_style_1 cs_color_1 cs_header_form_btn"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Book Appointment'}</span>
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PageHeading;