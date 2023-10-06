// import React from 'react';
// import { render } from '@testing-library/react';
// import Header from './Header';
// import { BrowserRouter as Router } from 'react-router-dom';


// describe('Header Component', () => {

    // test('renders logo', () => {
    //   const {getByAltText} = render(<Header /> );
    //   const logo = getByAltText('shop-logo');
    //   expect(logo).toBeInTheDocument();
    // });
  
    // test('renders navigation links', () => {
    //   const { getByText } = render(<Header />);
    //   const homeLink = getByText('Home');
    //   const shopLink = getByText('Shop');
    //   const aboutLink = getByText('About');
    //   const contactLink = getByText('Contact');
      
    //   expect(homeLink).toBeInTheDocument();
    //   expect(shopLink).toBeInTheDocument();
    //   expect(aboutLink).toBeInTheDocument();
    //   expect(contactLink).toBeInTheDocument();
    // });
  
  //   test('renders user icons', () => {
  //     const { getByTestId } = render(Header );
  //     const userIcon = getByTestId('user-icon');
  //     const searchIcon = getByTestId('search-icon');
  //     const heartIcon = getByTestId('heart-icon');
  //     const cartIcon = getByTestId('cart-icon');
  
  //     expect(userIcon).toBeInTheDocument();
  //     expect(searchIcon).toBeInTheDocument();
  //     expect(heartIcon).toBeInTheDocument();
  //     expect(cartIcon).toBeInTheDocument();
  //   });
  // });

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

// Mock the react-router-dom Link component
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

describe('Header', () => {
  test('renders header with navigation and icons', () => {
    const { getByAltText, getByText } = render(
      <Router>
        <Header />
      </Router>
    );

    // Check if the logo is rendered
    const logo = getByAltText('shop-logo');
    expect(logo).toBeInTheDocument();

    // Check if navigation links are rendered
    // const homeLink = getByText('Home');
    // const shopLink = getByText('Shop');
    // const aboutLink = getByText('About');
    // const contactLink = getByText('Contact');
    // expect(homeLink).toBeInTheDocument();
    // expect(shopLink).toBeInTheDocument();
    // expect(aboutLink).toBeInTheDocument();
    // expect(contactLink).toBeInTheDocument();

    // Check if icons are rendered
    // const cartIcon = getByText('Shopping Cart');
    // const searchIcon = getByText('Search');
    // const heartIcon = getByText('Heart');
    // const userIcon = getByText('User');
    // expect(cartIcon).toBeInTheDocument();
    // expect(searchIcon).toBeInTheDocument();
    // expect(heartIcon).toBeInTheDocument();
    // expect(userIcon).toBeInTheDocument();
  });
});


  
