import * as React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Services from './Components/Services';
import TradeLaw from './Components/TradeLaw';
import background1 from './Images/background1.jpg';

/* import logo from './logo.svg'; */

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="App" data-background={background1}>
                    <Navigation />
                    <Route exact={true} path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/services' component={Services} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/tradelaw' component={TradeLaw} />
                </div>
            </Router>
        );
    }
}

export default App;
