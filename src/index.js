import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import FilePage from './routes/FilePage';
import "./index.css"
import Analyse from './routes/Analyse';
import AnalyseSelected from './routes/AnalyseSelected';
import AnalyseAll from './routes/AnalyseAll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FilePage></FilePage>} ></Route>
            <Route path='/analyse' element={<Analyse></Analyse>}></Route>
            <Route path="/analyse/selected" element={<AnalyseSelected></AnalyseSelected>}></Route>
            <Route path="/analyse/all" element={<AnalyseAll></AnalyseAll>}></Route>
        </Routes>
    </BrowserRouter>
);
