import React from 'react';
import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

// Mock the react-router-dom Link component
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe('Header', () => {
  test('renders header with navigation and icons', () => {
 
    const { getByAltText, getByText } = 
      render(
        <Router>
          <Header />
        </Router>
      );
  
      // Check if the logo is rendered
  const logo = screen.getByAltText('shop-logo');

    console.log('logo', logo)
    expect(logo).toBeInTheDocument();
    });
});


  
