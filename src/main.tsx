import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cards from './cards/Cards';
import Collapse from './collapse/Collapse';
import Navigator from "./Navigator";
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigator />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/collapse" element={<Collapse />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
