import LegalPage from '@/app/Components/LegalPage';

export const metadata = {
  title: 'Terms & Conditions | Seeds of Innocens IVF',
  description:
    'Read the Terms and Conditions for Seeds of Innocens IVF.',
};

const rawContent = `Seeds Of Innocence IVF is a trademark of  SEEDS OF INNOCENCE INFERTILITY & MATERNITY CLINIC PRIVATE LIMITED, which is incorporated under the Companies Act, 2013 (18 of 2013). The Corporate Identity Number of the company is U85191UP2013PTC058685
Disclaimer
The material contained on this Website has been prepared solely for the purpose of providing selected information about Seeds Of Innocence IVF and its services.
Seeds Of Innocence IVF may make changes to the material on this Website, or to the Products described in it, at any time without notice.
Seeds Of Innocence IVF does not make any warranty that material contained on this Website, or on any site linked to this Website, is complete, accurate or up-to-date; and Seeds Of Innocence IVF is not responsible for the results of reliance on any such information.
Seeds Of Innocence IVF accepts no responsibility for the content of sites unrelated to www.seedsofinnocens.com, with which we may have links with or for any content displayed on this site. The existence of links to other sites does not imply www.seedsofinnocens.com endorsement of the sites’ entire content (due to the changing nature of the net) or of their officers or employees.
Seeds Of Innocence IVF does not make any warranty that use of the Website will be uninterrupted, virus-free or error-free; or that use of the Website will not affect other software or operating systems used to access the Website. Any warranties provided under the general law are expressly excluded to the fullest extent possible. In particular, Seeds Of Innocence IVF does not warrant that use of the Website will not infringe the rights of any other person or organisation; nor that the Website is of reasonable quality or fit for any particular purpose, even if Seeds Of Innocence IVF has received notice of an intention to use the Website for that purpose.
Unless they are contained in Seeds Of Innocence IVF Information, or unless expressly stated otherwise, opinions given on this Website, like in the testimonial section, are those of the individuals making them, and not those of Seeds Of Innocence IVF and is not responsible for such opinions or any claims resulting from them.
To the extent permitted in law, Seeds Of Innocence IVF accepts no liability for any loss or damage which may be suffered by other parties as a direct or indirect result of using this Website (including loss of profit, loss of opportunity, loss of business, and consequential loss).
Persons submitting material other than Seeds Of Innocence IVF Information to this Website are solely responsible for the material and for any claims relating to its content, whether made against Seeds Of Innocence IVF or otherwise. Whilst Seeds Of Innocence IVF does not exercise editorial control over any content posted to the Website by users, Seeds Of Innocence IVF reserves the right at its sole discretion to remove any content which it has been notified is objectionable, whether or not the objection is substantiated, and otherwise to review, edit or delete any comments posted by users which it deems defamatory, unlawful, threatening or otherwise objectionable. Notwithstanding the foregoing, and to the extent permitted in law, Seeds Of Innocence IVF accepts no responsibility or liability for any material communicated by third parties via the Website.
To the maximum extent permitted by law, we provide you with this Website on the basis that we exclude all representations, warranties, conditions and other terms which but for these Terms might have effect in relation to this Website. This clause does not affect your statutory rights.
Privacy and Usage Policy
Enquiry forms
When you send an email or complete an enquiry form, Seeds Of Innocence IVF will not share your email address or private information with anyone outside of Seeds Of Innocence IVF, except our consultants who provide the services about which you are enquiring. If you sign up for one of our email lists, we’ll only send you the kind of information you’ve requested. We won’t share your email address with anyone outside of Seeds Of Innocence IVF except healthcare providers who provide the services about which you are enquiring and expressed to know about.
By submitting the form, you agree to be contacted by Seeds Of Innocence IVF and associate partners through email/Call/SMS/WhatsApp, and other communication mediums.
Reliability of Information
The resources made available on Seeds Of Innocence IVF, are for information only. The Website is not intended in any way to replace any other existing channel of external communication, consultation, advice diagnosis. Nothing on the Website is intended to constitute advice to anyone.
Logged Information
Seeds Of Innocence IVF may keep a record of the number of times a page is accessed in order to analyze trends, administer the site, and to see what pages are accessed the most. These records do not contain personal information.
Exclusion of Liability
The service and materials on this Website are provided “as is” and Seeds Of Innocence IVF and the hosts of this Website expressly disclaim any and all warranties, express or implied, to the extent permitted by law including but not limited to warranties of satisfactory quality, merchantability or fitness for a particular purpose, with respect to the service or any materials. Except in respect of death or personal injury arising from negligence, Seeds Of Innocence IVF and the hosts of this website hereby exclude liability for any claims, losses, demands or damages of any kind whatsoever with respect to any information and/or services provided on Seeds Of Innocence IVF, including, but not limited to, direct, indirect, incidental or consequential loss or damages, compensatory damages or loss of profits or data whether based on a breach of contract or warranty, delict or tort (including negligence), product liability or otherwise.
Video Disclaimer
The mere appearance of Video Content on any website does not constitute an endorsement by Seeds Of Innocence IVF or its affiliates of such Video Content.
The Video Content has been made available for informational and awareness purposes only. The Video Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read, heard or seen on the Site.
`;

export default function TermsAndConditionsPage() {
  return <LegalPage title="Terms & Conditions" rawContent={rawContent} />;
}
