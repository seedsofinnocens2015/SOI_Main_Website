"use client";

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { FaSuitcase, FaLocationDot } from 'react-icons/fa6';

const btnReset = {
  border: 'none',
  background: 'none',
  padding: 0,
  cursor: 'pointer',
  font: 'inherit',
};

/** Title must stay white + centred; avoid color/textAlign inherit (overrides .cs_team_title button) */
const titleBtnStyle = {
  ...btnReset,
  display: 'block',
  width: '100%',
  textAlign: 'center',
  color: '#ffffff',
};

export default function LeadershipTeamCards({ members }) {
  const [openId, setOpenId] = useState(null);
  const selected = members.find((m) => m.id === openId);
  const close = useCallback(() => setOpenId(null), []);

  useEffect(() => {
    if (!openId) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [openId, close]);

  return (
    <>
      <div className="cs_doctors_grid cs_style_1">
        {members.map((member) => (
          <div className="cs_team cs_style_1 cs_blue_bg" key={member.id}>
            <div className="cs_team_shape cs_accent_bg" />
            <button
              type="button"
              className="cs_team_thumbnail"
              style={{ ...btnReset, color: 'inherit', textAlign: 'inherit' }}
              onClick={() => setOpenId(member.id)}
              aria-haspopup="dialog"
              aria-label={`View profile: ${member.name}`}
            >
              <Image
                src={member.imageUrl}
                alt={`${member.name} Thumbnail`}
                width={302}
                height={423}
              />
            </button>
            <div className="cs_team_bio">
              <h4
                className="cs_team_title cs_extra_bold mb-0"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <button
                  type="button"
                  style={titleBtnStyle}
                  onClick={() => setOpenId(member.id)}
                >
                  {member.name}
                </button>
              </h4>
              <p className="cs_team_subtitle">{member.profession}</p>
              <div className="cs_team_info_items">
                {member.experience ? (
                  <div className="cs_team_info_item">
                    <i>
                      <FaSuitcase />
                    </i>
                    <span>{member.experience} Experience </span>
                  </div>
                ) : null}
                {member.location ? (
                  <div className="cs_team_info_item">
                    <i>
                      <FaLocationDot />
                    </i>
                    <span>{member.location}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="leadership-modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
          onClick={close}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              maxWidth: '440px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.18)',
              border: '1px solid #eee',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                background: '#f0f0f0',
                color: '#333',
                fontSize: '22px',
                lineHeight: 1,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ×
            </button>

            <div style={{ padding: '24px 22px 22px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    flexShrink: 0,
                    position: 'relative',
                  }}
                >
                  <Image
                    src={selected.imageUrl}
                    alt=""
                    width={72}
                    height={72}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div style={{ minWidth: 0, paddingRight: '28px' }}>
                  <h3
                    id="leadership-modal-title"
                    style={{
                      fontSize: '18px',
                      fontWeight: 700,
                      margin: '0 0 6px',
                      lineHeight: 1.3,
                      color: '#111',
                    }}
                  >
                    {selected.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', color: '#df3655', fontWeight: 600 }}>
                    {selected.profession}
                  </p>
                </div>
              </div>

              <div style={{ fontSize: '14px', lineHeight: 1.65, color: '#444' }}>
                {selected.bio.map((paragraph, i) => (
                  <p key={i} style={{ margin: i === 0 ? '0 0 12px' : '0 0 12px' }}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div
                style={{
                  marginTop: '16px',
                  paddingTop: '14px',
                  borderTop: '1px solid #eee',
                  fontSize: '13px',
                  color: '#666',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                {selected.experience ? (
                  <span>
                    <strong style={{ color: '#333' }}>Experience:</strong> {selected.experience}
                  </span>
                ) : null}
                {selected.location ? (
                  <span>
                    <strong style={{ color: '#333' }}>Location:</strong> {selected.location}
                  </span>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
