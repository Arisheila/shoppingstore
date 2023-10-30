import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './components/Redux/Store';
import GlobalStyle  from './GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  // <Provider store={store}>
    
    <GlobalStyle />
    
    <App />

    </Provider>
 
    </>
);


