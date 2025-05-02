
import React from 'react';

export default function Front() {
  // Download handler for zipped file
  const handleDownload = () => {
    // This will trigger the browser to download the file from the public URL
    const link = document.createElement('a');
    link.href = 'https://iiti.in/files/Logins.zip';
       //link.href = 'https://ksrelectricals.in/files/Logins.zip';
    link.download = 'Logins.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      fontFamily: 'Comic Sans MS, Comic Sans, cursive, sans-serif',
    }}>
      <div style={{
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#222',
        marginBottom: '2rem',
        letterSpacing: '0.1em',
        textShadow: '2px 2px 10px #fff, 0 0 20px #fcb69f',
        borderRadius: '24px',
        background: 'rgba(255,255,255,0.7)',
        padding: '1.5rem 3rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '2px solid #fcb69f',
        transition: 'transform 0.3s',
      }}>
        Home Page
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <button style={{
          padding: '1rem 2.5rem',
          fontSize: '1.5rem',
          borderRadius: '16px',
          border: 'none',
          background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
          color: '#fff',
          fontWeight: 'bold',
          boxShadow: '0 4px 16px rgba(67,206,162,0.2)',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.target.style.transform = 'scale(1.1) rotate(-2deg)';
          e.target.style.boxShadow = '0 8px 32px rgba(67,206,162,0.4)';
        }}
        onMouseLeave={e => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 16px rgba(67,206,162,0.2)';
        }}
        >Simple</button>
        <button
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1.5rem',
            borderRadius: '16px',
            border: 'none',
            background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
            color: '#fff',
            fontWeight: 'bold',
            boxShadow: '0 4px 16px rgba(221,36,118,0.2)',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.target.style.transform = 'scale(1.1) rotate(2deg)';
            e.target.style.boxShadow = '0 8px 32px rgba(221,36,118,0.4)';
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 16px rgba(221,36,118,0.2)';
          }}
          onClick={handleDownload}
        >With Login (Download Logins.zip)</button>
      </div>
    </div>
  );
}
