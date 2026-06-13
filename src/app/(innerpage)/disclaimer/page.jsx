import LegalPage from '@/app/Components/LegalPage';

export const metadata = {
  title: 'General Disclaimer | Seeds of Innocens IVF',
  description:
    'Read the General Disclaimer for Seeds of Innocens IVF.',
};

const rawContent = `Seeds of Innocence is a trademark of SEEDS OF INNOCENCE INFERTILITY & MATERNITY CLINIC PRIVATE LIMITED which is incorporated under the Companies Act, 2013 (18 of 2013). The Corporate Identity Number of the company is U85191UP2013PTC058685

General Disclaimer

The information provided on Seeds of Innocence and related websites and mobile apps is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. All medical procedures, treatments, and services offered are subject to eligibility criteria as outlined under the Assisted Reproductive Technology (ART) Act, 2021, Surrogacy (Regulation) Act, 2021, and other applicable laws in India.

Patients are advised to consult with our qualified medical professionals and counselors before making decisions regarding their fertility treatments.
Specific Disclaimers
1. Success Rates: Success rates mentioned on Seeds of Innocence or its partner websites and mobile apps are based on past data and outcomes of our partner IVF Clinics and empaneled doctors, which can vary significantly depending on patient profiles, medical conditions, and treatment responses. No guarantee or assurance of results is provided.
2. Donor Anonymity: All gamete donations (sperm or eggs) are conducted in compliance with Indian regulations. Donor identities remain strictly anonymous, and only non-identifying information may be shared as permitted by law.
3. Genetic Testing: All genetic testing services, including PGT-A, PGT-M, and PGT-SR, are offered strictly for medical purposes and in compliance with Indian regulations. Testing for non-medical traits or sex selection is prohibited by law.
4. Storage of Embryos and Gametes: The storage of embryos and gametes is governed by Indian laws, with a maximum allowable storage period of 10 years. Patients will be required to renew consent for storage as per the legal guidelines.
5. Surrogacy Services: Surrogacy services are regulated under the Surrogacy (Regulation) Act, 2021. Only altruistic surrogacy is permitted in India, and eligibility is restricted to married heterosexual couples with proven medical conditions requiring surrogacy. At Seeds of Innocence, we have partnered with IVF clinics which are duly registered to offer such services via duly authorized and registered ART Banks & Surrogate Agencies.
6. Treatment for Single Women and Same-Sex Couples: ART services are available to single women but not for same-sex couples as per Indian regulations. Surrogacy services are not available to single individuals under current laws.
7. HLA Matching: Any references to HLA Matching or other advanced genetic procedures are for informational purposes only and subject to legal and ethical considerations under Indian ART laws. Such procedures are strictly offered for approved medical indications through partner labs after thorough review of their accreditations, quality & standards.
Verification of Empaneled Doctors and Clinics
At Seeds of Innocence, we take great care to verify the credentials, qualifications, and licenses of all empanelled doctors and IVF clinics listed on our platform. This includes:
1. Reviewing medical degrees, certifications, and specializations.
2. Verifying registration with relevant medical councils and compliance with the Assisted Reproductive Technology (ART) Act, 2021.
3. Evaluating clinic infrastructure, laboratory standards, and adherence to ethical medical practices.
However, while we strive to ensure that only qualified and licensed professionals are empanelled, we encourage patients to conduct their own due diligence and seek clarification during consultations if needed.
Platform Disclaimer
Our platform acts as a facilitator, connecting patients with verified doctors and clinics offering fertility treatments. The actual medical advice, diagnosis, and treatment plans are the sole responsibility of the treating doctors and clinics. We do not directly perform medical procedures or guarantee specific outcomes.
Limitation of Liability for Third-Party Services
While Seeds of Innocence thoroughly reviews and vets the credentials of our empanelled doctors and clinics, we are not responsible for:
1. The accuracy or quality of medical advice or treatment provided by empanelled professionals.
2. Outcomes or side effects resulting from medical treatments or procedures.
3. Any disputes or grievances arising between patients and the empanelled doctors/clinics.
Patients are encouraged to carefully review and understand all treatment plans, costs, and risks before proceeding. For any concerns regarding the services of empanelled providers, patients can contact our support team for assistance at info@seedsofinnocence.com 
Compliance and Reporting
We are committed to ensuring compliance with the ART Act, 2021, and other relevant regulations. If you suspect unethical or non-compliant practices by any empanelled doctor or clinic, please report them to us immediately for investigation 
Financial Transparency Disclaimer
All prices mentioned on Seeds of Innocence are indicative and subject to change. Additional costs may apply for diagnostic tests, medications, and other services.
Ethical Compliance
Seeds of Innocence strictly adheres to the highest standards of ethical medical practice and complies with all legal and regulatory requirements. We do not support or participate in illegal, unethical, or non-compliant practices, including commercial surrogacy, sex selection, or non-consented genetic testing.
Limitation of Liability
Seeds of Innocence assumes no liability for errors or omissions in the content of this website. All users are advised to verify information with medical professionals before proceeding with treatments.
Consent and Counseling
By choosing to undergo treatments at clinics empaneled with Seeds of Innocence, patients agree to participate in mandatory counseling sessions as required by law and to provide informed consent before undergoing any medical procedures.
Non-Refundable Policy
All consultation fees, medical procedures, and associated charges are strictly non-refundable. Once a service has been initiated or a procedure booked, no refunds will be provided under any circumstances, including but not limited to change of mind, personal reasons, or incomplete treatment. Patients are advised to review all details carefully before proceeding.
`;

export default function DisclaimerPage() {
  return <LegalPage title="General Disclaimer" rawContent={rawContent} />;
}
