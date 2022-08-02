import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaiTapThucHanhLayout from './BaiTapLayoutComponent/BaiTapThucHanhLayout';
import BaiTapGioHangComponent from './BaiTapGioHang/BaiTapGioHangComponent';
import Home from './Pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='' element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='BaiTapGioHangComponent' element={<BaiTapGioHangComponent/>}></Route>
          </Route>
          <Route path='BaiTapLayOutComponent' element={<BaiTapThucHanhLayout/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
