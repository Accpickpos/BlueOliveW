'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#25d366',
        color: '#fff',
        padding: '10px 16px',
        borderRadius: '10px',
        textDecoration: 'none',
        zIndex: 1000,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 1024 1024"
        style={{ marginRight: '8px' }}
      >
        {/* Paste your SVG path and gradient here */}
      </svg>
      <span>WhatsApp us</span>
    </a>
  );
}
