import React from 'react';

export default function Logo({ className }) {
  return (
    <img 
      src="/assets/logo.png" 
      alt="Logo" 
      className={className}
      style={{ height: '500px', width: 'auto' }} 
    />
  );
}
