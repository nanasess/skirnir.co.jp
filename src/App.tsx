import * as React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Services from './Components/Services';
import TradeLaw from './Components/TradeLaw';
/* import background1 from './Images/background1.jpg'; */

/* import logo from './logo.svg'; */

class App extends React.Component {
    public render() {
        return (
            <HashRouter>
                <Navigation />
                <Routes>
                    <Route index={false} path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/tradelaw' element={<TradeLaw />} />
                </Routes>
            </HashRouter>
        );
    }
}

export default App;
