"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { getAssetPathClient } from "../../utils/assetPath";

const WhyChooseUsSection = ({ data }) => {

  // Desktop View (Original Layout)
  const DesktopView = () => (
    <>
      <div className="row cs_gap_y_40">
        {/* Top Row - Left: Family Image */}
        <div className="col-lg-6" style={{ position: 'relative' }}>
          {/* Design Image - Left Side Background */}
          {data.designImage && (
            <div 
              style={{
                position: 'absolute',
                left: '-170px',
                top: '50%',
                transform: 'translateY(-72%) rotate(-1deg)',
                width: '390px',
                height: 'auto',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            >
              <Image
                src={getAssetPathClient(data.designImage)}
                alt="Design Background"
                width={150}
                height={200}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}
          <div className="cs_why_choose_image_wrapper" style={{ position: 'relative', zIndex: 1 }}>
            <Image
              src={getAssetPathClient(data.familyImage)}
              alt="Happy Family"
              width={600}
              height={500}
              className="cs_why_choose_image"
              loading="eager"
            />
          </div>
        </div>

        {/* Top Row - Right: Why Choose Us Content */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="cs_why_choose_content">
            <h2 className="cs_why_choose_heading">{data.whyChooseHeading}</h2>
            {Array.isArray(data.whyChooseText) ? (
              <ul className="cs_why_choose_list" style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '20px' }}>
                {data.whyChooseText.map((point, index) => (
                  <li key={index} style={{ marginBottom: '12px', paddingLeft: '30px', position: 'relative', fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
                    <span style={{ position: 'absolute', left: '0', top: '2px', width: '25px', height: '30px', display: 'inline-block' }}>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <rect width="24" height="24" fill="white"></rect>
                          <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#CCC968"></path>
                        </g>
                      </svg>
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="cs_why_choose_text">{data.whyChooseText}</p>
            )}
            <Link href={data.callUsLink || '/contact'} className="cs_why_choose_btn">
              <FaPhoneAlt className="cs_btn_icon" />
              <span>{data.callUsText || 'CALL US'}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="row cs_gap_y_40">
        {/* Bottom Row - Left: Self Cycle Content */}
        <div className="col-lg-6 d-flex align-items-center">
          <div className="cs_why_choose_content">
            <h2 className="cs_why_choose_heading">
              {data.selfCycleHeading.includes('™') ? (
                data.selfCycleHeading.split('™').map((part, index, arr) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < arr.length - 1 && <sup style={{ fontSize: '0.6em', marginLeft: '2px' }}>™</sup>}
                  </React.Fragment>
                ))
              ) : (
                <>
                  {data.selfCycleHeading}
                  <sup style={{ fontSize: '0.6em', marginLeft: '2px' }}>™</sup>
                </>
              )}
            </h2>
            <p className="cs_why_choose_text">{data.selfCycleText}</p>
            <Link href={data.bookAppointmentLink || '/contact/book-appointment'} className="cs_why_choose_btn">
              <FaCalendarAlt className="cs_btn_icon" />
              <span>{data.bookAppointmentText || 'BOOK AN APPOINTMENT'}</span>
            </Link>
          </div>
        </div>

        {/* Bottom Row - Right: Selfie Image with Speech Bubble */}
        <div className="col-lg-6" style={{ position: 'relative' }}>
          {/* Design Image - Right Side Background */}
          {data.designImage && (
            <div 
              style={{
                position: 'absolute',
                right: '-175px',
                top: '50%',
                transform: 'translateY(-46%) rotate(24deg)',
                width: '390px',
                height: 'auto',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            >
              <Image
                src={getAssetPathClient(data.designImage)}
                alt="Design Background"
                width={150}
                height={200}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}
          <div className="cs_why_choose_image_wrapper cs_relative" style={{ position: 'relative', zIndex: 1 }}>
            <Image
              src={getAssetPathClient(data.selfieImage)}
              alt="Self Cycle"
              width={600}
              height={500}
              className="cs_why_choose_image"
              loading="eager"
            />
            {data.speechBubbleText && (
              <div className="cs_speech_bubble">
                <p className="cs_speech_bubble_text">
                  {data.speechBubbleText.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < data.speechBubbleText.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  // Mobile View (Stacked Layout)
  const MobileView = () => (
    <>
      {/* Section 1: Why Choose Us */}
      <div className="cs_why_choose_mobile_slide" style={{ marginBottom: '40px', position: 'relative', overflow: 'visible' }}>
        <div style={{ position: 'relative', overflow: 'visible' }}>
          {/* Design Image - Left Side Background */}
          {data.designImage && (
            <div 
              style={{
                position: 'absolute',
                left: '-90px',
                top: '50%',
                transform: 'translateY(-74%) rotate(-7deg)',
                width: '180px',
                height: 'auto',
               
                zIndex: 0,
                pointerEvents: 'none'
              }}
            >
              <Image
                src={getAssetPathClient(data.designImage)}
                alt="Design Background"
                width={120}
                height={180}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}
          <div className="cs_why_choose_image_wrapper" style={{ position: 'relative', zIndex: 1 }}>
            <Image
              src={getAssetPathClient(data.familyImage)}
              alt="Happy Family"
              width={600}
              height={400}
              className="cs_why_choose_image"
              loading="eager"
            />
          </div>
        </div>
        <div className="cs_why_choose_content">
          <h2 className="cs_why_choose_heading">{data.whyChooseHeading}</h2>
          {Array.isArray(data.whyChooseText) ? (
            <ul className="cs_why_choose_list" style={{ listStyle: 'none', paddingLeft: 0, marginBottom: '20px' }}>
              {data.whyChooseText.map((point, index) => (
                <li key={index} style={{ marginBottom: '12px', paddingLeft: '30px', position: 'relative', fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
                  <span style={{ position: 'absolute', left: '0', top: '2px', width: '20px', height: '20px', display: 'inline-block' }}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <rect width="24" height="24" fill="white"></rect>
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L12.0243 14.3899C11.4586 14.9556 10.5414 14.9556 9.97568 14.3899L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="#CCC968"></path>
                      </g>
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          ) : (
            <p className="cs_why_choose_text">{data.whyChooseText}</p>
          )}
          <Link href={data.callUsLink || '/contact'} className="cs_why_choose_btn">
            <FaPhoneAlt className="cs_btn_icon" />
            <span>{data.callUsText || 'CALL US'}</span>
          </Link>
        </div>
      </div>

      {/* Section 2: Vision and Mission */}
      <div className="cs_why_choose_mobile_slide" style={{ position: 'relative', overflow: 'visible' }}>
        <div style={{ position: 'relative', overflow: 'visible' }}>
          {/* Design Image - Right Side Background */}
          {data.designImage && (
            <div 
              style={{
                position: 'absolute',
                right: '-90px',
                top: '50%',
                transform: 'translateY(-74%) rotate(7deg)',
                width: '180px',
                height: 'auto',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            >
              <Image
                src={getAssetPathClient(data.designImage)}
                alt="Design Background"
                width={120}
                height={180}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}
          <div className="cs_why_choose_image_wrapper cs_relative" style={{ position: 'relative', zIndex: 1 }}>
            <Image
              src={getAssetPathClient(data.selfieImage)}
              alt="Vision and Mission"
              width={600}
              height={400}
              className="cs_why_choose_image"
              loading="eager"
            />
            {data.speechBubbleText && (
              <div className="cs_speech_bubble">
                <p className="cs_speech_bubble_text">
                  {data.speechBubbleText.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < data.speechBubbleText.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="cs_why_choose_content">
          <h2 className="cs_why_choose_heading">
            {data.selfCycleHeading.includes('™') ? (
              data.selfCycleHeading.split('™').map((part, index, arr) => (
                <React.Fragment key={index}>
                  {part}
                  {index < arr.length - 1 && <sup style={{ fontSize: '0.6em', marginLeft: '2px' }}>™</sup>}
                </React.Fragment>
              ))
            ) : (
              <>
                {data.selfCycleHeading}
                <sup style={{ fontSize: '0.6em', marginLeft: '2px' }}>™</sup>
              </>
            )}
          </h2>
          <p className="cs_why_choose_text">{data.selfCycleText}</p>
          <Link href={data.bookAppointmentLink || '/contact/book-appointment'} className="cs_why_choose_btn">
            <FaCalendarAlt className="cs_btn_icon" />
            <span>{data.bookAppointmentText || 'BOOK AN APPOINTMENT'}</span>
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="container">
        {/* Desktop View */}
        <div className="cs_why_choose_desktop_view">
          <DesktopView />
        </div>

        {/* Mobile View */}
        <div className="cs_why_choose_mobile_view">
          <MobileView />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsSection;

