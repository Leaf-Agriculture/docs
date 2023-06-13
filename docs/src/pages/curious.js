import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
        Poking around, hm?
        </p>
        <img width="400" src='https://withleaf.io/wp-content/uploads/2020/08/FO515DB56CD07-flat-1.png' alt="loading..." />
      </div>
    </Layout>
  );
}

export default Hello;
