import React from 'react';

const CustomLoader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div style={{ height: '10px', background: 'red', width: '100%', margin: '0px'}}>
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#007bff',
          animation: 'loading 1.5s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default CustomLoader;
