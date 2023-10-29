import React from 'react';
import Header from './header/Header';
import Banner from './banner/Banner';

export default function NotFound() {
  return (
    <>
       <Header />
    <div className="bg-gray-200 h-screen flex flex-col items-center justify-center">
    
      <h1 className="text-6xl font-bold text-black-500">404</h1>
      <p className="text-xl text-gray-600">Page not Found</p>
    </div>
    
    </>
 
  );
}
