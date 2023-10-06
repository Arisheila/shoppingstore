import React from 'react';

export default function Delivery() {
  return (
    <div className='Container'>
      <div className='container flex justify-between' style={{backgroundColor:" #FAF4F4"}}>
        {/* Secure Payment */}
        <div className='card'>
          <h2 className='text-xl font-bold mb-2'>SECURE PAYMENT</h2>
          <p>For all oders over $50, consectetur<br/> adipim scing elit.</p>
        </div>

        {/* 90 Days Return */}
        <div className='card'>
          <h2 className='text-xl font-bold mb-2'>90 Days Return</h2>
          <p>If goods have problems, consectetur<br/> adipim scing elit.</p>
        </div>

        {/* Free Delivery */}
        <div className='card'>
          <h2 className='text-xl font-bold mb-2'>FREE DELIVERY</h2>
          <p>100% secure payment, consectetur <br/> adipim scing elit.</p>
        </div>
      </div>
    </div>
  );
}
