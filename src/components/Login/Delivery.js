import React from 'react';

export default function Delivery() {
  return (
    <div className='deliveryLayout'>
      <div className='container flex justify-around items-center ' style={{gap:"50px", backgroundColor:" #FAF4F4"}}>
        {/* Secure Payment */}
        <div className='card-image'>
          <h2 className='card-image-text'>SECURE PAYMENT</h2>
          <p className='card-image-para'>For all oders over $50, consectetur<br/> adipim scing elit.</p>
        </div>

        {/* 90 Days Return */}
        <div className='card-image'>
          <h2 className='card-image-text'>90 Days Return</h2>
          <p className='card-image-para'>If goods have problems, consectetur<br/> adipim scing elit.</p>
        </div>

        {/* Free Delivery */}
        <div className='card-image'> 
          <h2 className='card-image-text'>FREE DELIVERY</h2>
          <p className='card-image-para'>100% secure payment, consectetur <br/> adipim scing elit.</p>
          </div>
        </div>
      </div>
    
  );
}
