import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Image from 'next/image';
import React from 'react';

const headingData = {
  title: 'Online Payment',
};

const page = () => {
  return (
    <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/Top-Header.jpg"
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
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <h2 style={{ marginBottom: '30px', color: '#333' }}>Make Online Payment</h2>
                <p style={{ marginBottom: '30px', color: '#666', fontSize: '16px' }}>
                  Scan the QR code below to make your payment securely. You can use any UPI app or payment method to complete your transaction.
                </p>
                
                <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ 
                    width: '500px', 
                    height: '500px', 
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Image
                      src="/assets/img/Online Payment.webp"
                      alt="Payment QR Code"
                      width={300}
                      height={300}
                      style={{ 
                        maxWidth: '100%', 
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                  <h3 style={{ marginBottom: '15px', color: '#333', fontSize: '18px' }}>Payment Instructions:</h3>
                  <ul style={{ textAlign: 'left', color: '#666', lineHeight: '1.8', paddingLeft: '20px' }}>
                    <li>Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</li>
                    <li>Scan the QR code displayed above</li>
                    <li>Enter the payment amount</li>
                    <li>Complete the payment</li>
                    <li>Save the payment receipt for your records</li>
                  </ul>
                </div>

                <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#e8f4f8', borderRadius: '8px' }}>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                    <strong>Note:</strong> After making the payment, please share the payment receipt with us via WhatsApp or email for confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default page;
