import React from 'react'; 
import { render } from 'react-dom'; 
import { BrowserRouter}  from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'; 
import 'styling/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>,
//     document.getElementById('app'),
//   );
