import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyersPage from './pages/BuyersPage';
import SellersPage from './pages/SellersPage';

export default function App() {
  return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<BuyersPage/>}/>
            <Route path='/sell' element={<SellersPage/>}/>
        </Routes>
        </BrowserRouter>
  )
}


