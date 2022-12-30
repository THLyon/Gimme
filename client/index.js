import React from 'react';
import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';
import App from './App'; 
import './styling/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React>
  //   <App />
  //</React>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//reportWebVitals(); 

// render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     document.getElementById('app'),
//   );
