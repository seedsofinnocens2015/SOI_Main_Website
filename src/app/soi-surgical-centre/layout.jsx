import SurgicalSubdomainHeader from './SurgicalSubdomainHeader';

export default function SubdomainLayout({ children }) {
  return (
    <div className="subdomain-page-area">
      <SurgicalSubdomainHeader />
      {children}
    </div>
  );
}
