import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from './routes/landingPage/App';
import BlogApp from './routes/blog/BlogApp';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App/> }/>
        <Route path='/blog' element={ <BlogApp/> }>
          <Route path=":title" element={ <BlogApp/>} />
        </Route>
        <Route path="*" element={<div class="p-5">There's nothing here!</div> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
