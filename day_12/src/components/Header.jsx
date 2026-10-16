import React from 'react';

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.2rem 2.5rem',
      backgroundColor: '#1e293b',
      color: '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#38bdf8' }}>
        My website
      </div>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#product" style={linkStyle}>Product</a>
        <a href="#cart" style={linkStyle}>cart</a>
        <a href="#contact" style={linkStyle}>contact</a>
      </nav>
    </header>
  );
};

const linkStyle = {
  color: '#f1f5f9',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '1rem',
  textTransform: 'lowercase'
};

export default Header;