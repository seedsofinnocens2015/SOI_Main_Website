import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '72px', fontWeight: '800', color: '#df3655', marginBottom: '16px' }}>
        404
      </h1>
      <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px', color: '#1f2b3a' }}>
        Page Not Found
      </h2>
      <p style={{ color: '#667080', maxWidth: '480px', marginBottom: '28px', lineHeight: 1.6 }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '12px 32px',
          backgroundColor: '#df3655',
          color: '#ffffff',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '15px',
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
