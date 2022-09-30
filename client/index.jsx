import React from 'react'; 
import { render } from 'react-dom'; 
// import { BrowserRouter}  from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'; 

const el = document.getElementById('root')
const root = createRoot(el)

root.render(root)

// render (
//     // <BrowserRouter>
//       <App/>,
//     // </BrowserRouter>,
//       document.getElementById('root') 
// )

// ReactDOM.render(<App />, document.querySelector('root'));