"use client";
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import IVFContentSection from '@/app/Components/IVFContentSection';
import AccentHeading from '@/app/Components/AccentHeading';
import React, { useState } from 'react';
import Image from 'next/image';

const headingData = {
  title: 'Media & Press',
};

const ivfContentData = {
  sections: [
    {
      heading: 'Our Media Coverage',
      paragraphs: [
        'Seeds of Innocens has been featured in various media outlets, highlighting our innovative treatments, success stories, and contributions to the field of reproductive medicine.',
        'Our commitment to excellence and patient care has earned recognition from leading healthcare publications, news channels, and medical journals across India and internationally.',
        'We are proud to share our achievements, research breakthroughs, and patient success stories through various media platforms, helping to raise awareness about fertility treatments and reproductive health.',
      ],
      sideImage: '/assets/img/Media & Press.jpg',
    },
  ],
};

// const pressReleasesData = [
//   {
//     date: 'March 15, 2024',
//     title: 'Seeds of Innocens Launches Advanced PGT Testing Program',
//     description: 'Seeds of Innocens announces the launch of comprehensive preimplantation genetic testing services, offering couples improved success rates and reduced genetic risk.',
//     image: '/assets/img/recent_post2.jpg',
//   },
//   {
//     date: 'February 10, 2024',
//     title: 'Record-Breaking Success Rates at Seeds of Innocens',
//     description: 'The fertility centre reports exceptional success rates, with over 20,000 successful pregnancies achieved through advanced IVF techniques and personalized care.',
//     image: '/assets/img/recent_post2.jpg',
//   },
//   {
//     date: 'January 20, 2024',
//     title: 'International Expansion: Seeds of Innocens Opens Center in Africa',
//     description: 'Seeds of Innocens expands its global presence with the opening of a new state-of-the-art fertility centre in Zambia, bringing world-class fertility care to more regions.',
//     image: '/assets/img/recent_post2.jpg',
//   },
//   {
//     date: 'December 5, 2023',
//     title: 'Dr. Gauri Agrawal Honored for Excellence in Fertility Medicine',
//     description: 'Founder Dr. Gauri Agrawal receives recognition for outstanding contributions to reproductive medicine and commitment to advancing fertility treatments.',
//     image: '/assets/img/recent_post2.jpg',
//   },
// ];

const youtubeVideosData = [
  {
    date: 'June 19, 2025',
    title: 'IVF Expert Dr. Gauri Agarwal on MK Talks : डॉ. गौरी अग्रवाल IVF को लेकर खास Podcast With Mohsin Khan',
    description: 'The wait is almost over! Catch a glimpse of our upcoming podcast with IVF expert, Dr. Gauri Agarwal. Teaser out now! अक्सर शादी से पहले यानी बैचलर लाइफ में लड़के हस्तमैथुन करते हैं। मास्टरबेशन करने की आदत अधिकतर लड़कों में देखने को मिलती है। क्योंकि सेक्स लाइफ की जरूरतों को पूरा करने के लिए ऐसा करना जरूरी माना जाता है। डॉक्टर के अनुसार, हस्तमैथुन संभोग की एक सरल प्रक्रिया है। जिसे जवानी के दिनों में लड़के-लड़कियां खूब करते हैं। हस्तमैथुन सही है या गलत?, बता रही है हमारे एक्सपर्ट IVF Specialist Dr. Gauri Agarwal देखें वीडियो',
    youtubeUrl: 'https://www.youtube.com/watch?v=E04J-XxA1Y0&t=2s',
    videoId: 'E04J-XxA1Y0',
    channel: 'MK Talks Podcast',
    thumbnail: `https://img.youtube.com/vi/E04J-XxA1Y0/maxresdefault.jpg`,
  },
  {
    date: 'March 28, 2023',
    title: 'Sperm Count कितना होना जरूरी है कम होने पर सुधारने के तरीके Dr Gauri IVF Specialist ने बताए',
    description: 'Sperm Count कितना होना जरूरी है कम होने पर सुधारने के तरीके Dr Gauri IVF Specialist ने बताए',
    youtubeUrl: 'https://www.youtube.com/watch?v=OpgqOL4fpoU&t=1s',
    videoId: 'OpgqOL4fpoU',
    channel: 'The Lallantop',
    thumbnail: `https://img.youtube.com/vi/OpgqOL4fpoU/maxresdefault.jpg`,
  },
  {
    date: 'March 21, 2023',
    title: 'Dr. Gauri Agarwal on Guest In the Newsroom: Addressing Male & Female Infertility and IVF',
    description: 'Dr. Gauri was recently featured as a guest on the news program \'Guest In the Newsroom\' by @TheLallantop. During the interview, she addressed a range of questions related to male and female infertility, and provided insightful explanations on the reasons and indications for couples to opt for in vitro fertilization (IVF). The interactive session uncovered common misconceptions and clarified some of the myths surrounding fertility, leaving no questions unanswered. Watch this informative and engaging video to know more. Call for doctor gauri Agarwal Appointment 9810350512',
    youtubeUrl: 'https://www.youtube.com/watch?v=9_K6ksAefj4',
    videoId: '9_K6ksAefj4',
    channel: 'The Lallantop',
    thumbnail: `https://img.youtube.com/vi/9_K6ksAefj4/maxresdefault.jpg`,
  },
  {
    date: 'June 13, 2024',
    title: 'Unplugged FT. Dr. Gauri Agarwal | IVF Treatment | Test Tube Baby | Pregnancy',
    description: 'Unplugged FT. Dr. Gauri Agarwal | IVF Treatment | Test Tube Baby | Pregnancy, Fertility | Sperm Count | Shubhankar Mishra. Time Stamp: Teaser - 00:00, Intro - 02:10, Sperm freeze Kyu Krana CHahiye - 03:28, What Is IVF - 04:26, Why are people hesitant to ask about IVF? - 06:51, IVF Ki jarurt Kise Padti Hai - 08:21, IVF is not 100% successful or Charge kya hai - 09:25, IVF Safe Kitna hai - 12:45, Sidhu Moosewala Mother IVF - 14:52-15:35, Egg freeze and Sperm freeze Ka Charge - 16:59, Kya IVF Se maan Chaha Bacha Ho Sakta Hai - 20:32, IVF or ICSI Kya Hota Hai - 22:12, IVF or Surrogacy Main antar Kya Hai - 24:19, Single Men Are Not Allowed to Surrogacy - 26:37, Pregnancy Alcohol Consume krne par Baccho par Padta Hai - 27:08, Deepika Ki Pregnancy Fake? - 32:08, Parents Se Hormonal issues Transfer Hote Hai - 37:22, Female Body pr Abortion Ka Kitna Fark Padta Hai - 42:58, If Women Have Not Healthy Uterus - 45:48, Kaise decide Hota hai Ki baccha maa Par Jayega Ya pita pr- 46:21, Sperm Count kam hone 10 Reason - 51:15, Female or Male Jada Issue Kisme Hote Hai - 55:23, Gym ya Yoga For Sperm 1:00:25, Transgender Bacche Kyu Hote Hai? - 1:08:59, Male Main Erection Issues Kyu hota Hai - 1:12:11',
    youtubeUrl: 'https://www.youtube.com/watch?v=PzkrtU5dchg',
    videoId: 'PzkrtU5dchg',
    channel: 'Shubhankar Mishra',
    thumbnail: `https://img.youtube.com/vi/PzkrtU5dchg/maxresdefault.jpg`,
  },
  {
    date: 'April 8, 2024',
    title: 'अंतरराष्ट्रीय आईवीएफ सेंटर, Gorakhpur में खुला: आपके माता-पिता बनने के सपने को साकार करने का अवसर',
    description: 'सीड्स ऑफ़ इनोसेंस आईवीएफ सेंटर, गोरखपुर हाल ही में NB Bharat द्वारा कवर किया गया, हम अपने विशेष ध्यान के साथ नवीनतम चिकित्सा विज्ञान की सामग्री का उपयोग करते हैं ताकि यह हमें निरंतर नवाचार और उत्कृष्टता के क्षेत्र में सबसे आगे रहने में मदद कर सके। हमारे केंद्र में उन्नत तकनीकों की उपलब्धता हमें प्रत्येक रोगी की विशेष आवश्यकताओं के अनुसार उपचार योजनाओं को तैयार करने की सुविधा प्रदान करती है, जो सफल परिणाम प्राप्त करने की संभावनाओं को अधिकतम करती है। आईवीएफ और सीड्स ऑफ़ इनोसेंस के माध्यम से, हम उन जोड़ों की मदद करते हैं जो पहले संभव नहीं था। NB Bharat द्वारा हमारे केंद्र के कवर का स्वागत हमारे प्रतिबद्धता को साकार करता है जो निरंतर उत्कृष्टता और नवाचार में सहयोग करता है। हम गर्व से समाज में उम्मीद और सपनों को साकार करने में सहायक होते हैं। IVF विशेष्ज्ञ से मिलने के लिए आज ही कॉल करें 9459053333',
    youtubeUrl: 'https://www.youtube.com/watch?v=4q80QxstZS4',
    videoId: '4q80QxstZS4',
    channel: 'NB Bharat',
    thumbnail: `https://img.youtube.com/vi/4q80QxstZS4/maxresdefault.jpg`,
  },
  {
    date: 'May 29, 2024',
    title: 'Genetic Testing क्यों जरूरी है और आप आने वाली पीढ़ी में जेनेटिक बीमारियां होने से कैसे रोक सकते है?',
    description: 'Genetic Testing क्यों जरूरी है और आप आने वाली पीढ़ी में जेनेटिक बीमारियां होने से कैसे रोक सकते है? जेनेटिक टेस्टिंग द्वारा आपका माता-पिता बनने का सफर और भी आसान हो सकता है। ऐसी बहुत से जेनेटिक डिसऑर्डर है जिसकी वजह से बार-बार गर्भपात होता है। डॉ. गौरी अग्रवाल, IVF और इनफर्टिलिटी स्पेशलिस्ट, का पहला लल्लनटॉप इंटरव्यू बहुत सफल रहने के बाद, हाल ही में उन्हें "लल्लनटॉप सेहत" में आमंत्रित किया गया। उन्होंने इस इंटरव्यू में यह जानकारी दी कि ऐसे कोनसे जेनेटिक टेस्ट है जो दम्पतियों को पहले करवा लेने चाहिए, इनमे कितना खर्चा होगा और यह क्यों जरूरी है। अगर आप IVF के लिए विचार कर रहे हैं या जेनेटिक टेस्टिंग के बारे में जानना चाहते है तो आज ही संपर्क करें: 8276002727/9810350512',
    youtubeUrl: 'https://www.youtube.com/watch?v=xEYLHUi0XXI',
    videoId: 'xEYLHUi0XXI',
    channel: 'The Lallantop',
    thumbnail: `https://img.youtube.com/vi/xEYLHUi0XXI/maxresdefault.jpg`,
  },
  {
    date: 'March 23, 2023',
    title: 'Test Tube Baby कैसे होता है Dr. Gauri Agarwal ivf specialist ने आसान भाषा में समझाया -#lallantop',
    description: 'Test Tube Baby कैसे होता है Dr. Gauri Agarwal ivf specialist ने आसान भाषा में समझाया -#lallantop',
    youtubeUrl: 'https://www.youtube.com/watch?v=xxZPIcSuSz0',
    videoId: 'xxZPIcSuSz0',
    channel: 'The Lallantop',
    thumbnail: `https://img.youtube.com/vi/xxZPIcSuSz0/maxresdefault.jpg`,
  },
  {
    date: 'July 26, 2019',
    title: 'Success Rates of IVF | Seeds of Innocence | Dr. Gauri Agarwal',
    description: 'इनफर्टिलिटी यानी नि:संतानता कई दम्पतियों के लिए एक बहुत बड़ी समस्या है। उम्र का बढ़ना, तनाव, नशा-धुम्रपान और खराब जीवनशैली इनफर्टिलिटी के मुख्य कारक है। ऐसे में दंपत्ति IVF का सहारा ले रहे हैं। लेकिन ज्यादातर मामलों में IVF की सफलता 30 से 40 फीसदी तक ही रहती है। Seeds Of Innocence एक ऐसा IVF सेंटर है, जो IVF की सफलता को बढ़ाने के लिए काम कर रहा है। इसका अपना जेनेटिक लैब है। जहां IVF के साथ प्री-इम्प्लांटेशन जेनेटिक स्क्रीनिंग और प्री-इम्प्लांटेशन जेनेटिक डाइग्नोसिस किया जाता है, जिससे IVF की सफलता 40 से 70 फीसदी बढ़ सकती है! अधिक जानकारी के लिए सम्पर्क करें : 9810350512',
    youtubeUrl: 'https://www.youtube.com/watch?v=G0OPYoadM4M',
    videoId: 'G0OPYoadM4M',
    channel: 'Seeds of Innocens- IVF Centre',
    thumbnail: `https://img.youtube.com/vi/G0OPYoadM4M/maxresdefault.jpg`,
  },
  {
    date: 'June 11, 2021',
    title: 'Fibroid: Types, Symptoms and Treatment | Dr Gauri Agarwal | Seeds Of Innocence',
    description: 'Fibroid: Types, Symptoms and Treatment | Dr Gauri Agarwal | Seeds Of Innocence. Fibroid, the most common tumor found in the reproductive tract. Dr. Gauri Agrawal, gives a brief on what is Fibroid and on myths and facts that are related to Fibroid. Fibroids are the growth of fibrous tissue and smooth muscle cells. It is the most common tumor found in the female reproductive system. Fibroid size increases slowly over the year. But when the estrogen levels in the body rise, their rate of growth also increases. There are three types of Fibroid: -Subserosal Fibroids -Intramural Fibroids -Submucosal Fibroids. Some of the Fibroid Tumor Symptoms and Complications are: -Painful Period -Heavy bleeding during periods -Enlarged lower abdomen -Pregnancy Complications. Also, Dr. Gauri Agrawal has spoken about various myths and facts that are related to Fibroids. Visit our website ➡️https://www.seedsofinnocence.com/ Call us to book Appointment @ +91 9810350512 (IVF Specialist) WhatsApp us at https://wa.me/919810350512/',
    youtubeUrl: 'https://www.youtube.com/watch?v=ak-p69KkN0M',
    videoId: 'ak-p69KkN0M',
    channel: 'Seeds of Innocens- IVF Centre',
    thumbnail: `https://img.youtube.com/vi/ak-p69KkN0M/maxresdefault.jpg`,
  },
  {
    date: 'March 23, 2023',
    title: 'Masturbation से sperm count पर क्या असर पड़ता है Dr. gauri Agarwal IVF Specialist ने दिया जवाब',
    description: 'The Lallantop में ये सवाल पूछा गया - Masturbation से sperm count पर क्या असर पड़ता है Dr. gauri Agarwal IVF Specialist ने दिया जवाब',
    youtubeUrl: 'https://www.youtube.com/watch?v=EV1eyxLUmQ8',
    videoId: 'EV1eyxLUmQ8',
    channel: 'The Lallantop',
    thumbnail: `https://img.youtube.com/vi/EV1eyxLUmQ8/maxresdefault.jpg`,
  },
];

const Page = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.png"
      >
        <PageHeading data={headingData} />
      </Section>

      {/* Main Content Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          {/* Content Section - Centered and Full Width */}
          <div className="row">
            <div className="col-12">
              <IVFContentSection data={ivfContentData} accentHeadingStyle />
            </div>
          </div>
        </div>
      </Section>

      {/* YouTube Videos Section */}
      <Section
        topSpaceLg="50"
        topSpaceMd="60"
        bottomSpaceLg="50"
        bottomSpaceMd="60"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <AccentHeading style={{ marginBottom: '40px' }}>Our YouTube Videos</AccentHeading>
            </div>
          </div>
          <div className="row cs_gap_y_30" style={{ gap: '30px 0' }}>
            {youtubeVideosData.map((video, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #e8e8e8',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', cursor: 'pointer' }}
                    onClick={() => openModal(video)}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      width={800}
                      height={450}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      unoptimized
                    />
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '68px',
                      height: '48px',
                      backgroundColor: 'rgb(248, 1, 1)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(228, 83, 82, 0.9)';
                        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgb(254, 2, 2)';
                        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '10px'
                    }}>
                      <span style={{
                        fontSize: '14px',
                        color: '#df3655',
                        fontWeight: '500'
                      }}>
                        {video.date}
                      </span>
                      <span style={{
                        fontSize: '12px',
                        color: '#666',
                        fontWeight: '400'
                      }}>
                        {video.channel}
                      </span>
                    </div>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#000000',
                      marginBottom: '10px',
                      lineHeight: '1.4',
                      cursor: 'pointer'
                    }}
                      onClick={() => window.open(video.youtubeUrl, '_blank')}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#df3655';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000000';
                      }}
                    >
                      {video.title}
                    </h4>
                    <div>
                      <p style={{
                        fontSize: '14px',
                        color: '#666',
                        lineHeight: '1.6',
                        margin: 0,
                        marginBottom: '8px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {video.description}
                      </p>
                      <button
                        onClick={() => openModal(video)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#df3655',
                          fontSize: '14px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          padding: 0,
                          textDecoration: 'underline'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#c0392b';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#df3655';
                        }}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* YouTube Video Modal */}
      {selectedVideo && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            overflowY: 'auto'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(0, 0, 0, 0.7)',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#ffffff',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(228, 83, 82, 0.9)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              ×
            </button>

            {/* Video Embed */}
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#000' }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>

            {/* Video Details */}
            <div style={{ padding: '25px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <span style={{
                  fontSize: '14px',
                  color: '#df3655',
                  fontWeight: '500'
                }}>
                  {selectedVideo.date}
                </span>
                <span style={{
                  fontSize: '12px',
                  color: '#666',
                  fontWeight: '400'
                }}>
                  {selectedVideo.channel}
                </span>
              </div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '15px',
                lineHeight: '1.4'
              }}>
                {selectedVideo.title}
              </h3>
              <div style={{
                fontSize: '15px',
                color: '#666',
                lineHeight: '1.8',
                whiteSpace: 'pre-wrap'
              }}>
                {selectedVideo.description}
              </div>
              <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e8e8e8' }}>
                <a
                  href={selectedVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#df3655',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#c0392b';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#df3655';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

