import React from 'react';

const Product = ({ products }) => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#0f172a' }}>
        Product List
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '1.5rem'
      }}>
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} style={{
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              padding: '1rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: '100%', height: '140px', objectFit: 'contain', borderRadius: '6px' }}
              />
              <div style={{ marginTop: '1rem' }}>
                <h3 style={{ fontSize: '0.95rem', color: '#1e293b', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontWeight: '700', color: '#2563eb', fontSize: '1.1rem' }}>${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#64748b' }}>
            Loading products...
          </p>
        )}
      </div>
    </div>
  );
};

export default Product;