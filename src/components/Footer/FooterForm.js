import React from 'react'
import "./Footer.css";

export default function FooterForm () {
  return (
    <div className='newsletter-component'>
      <form method='post'>
        <input id='member[email]' class='revue-form-field' placeholder='Enter Your Email Address' required='required' />
      </form>
      <button type='submit'>Subscribe</button>
    </div>
  )
}

