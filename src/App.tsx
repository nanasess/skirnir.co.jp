import { createBrowserHistory } from 'history';
import * as React from 'react';
/* import Alert from 'react-bootstrap/Alert';
 * import Nav from 'react-bootstrap/Nav'; */
import { Route, Router } from "react-router-dom";
import './App.css';
import background1 from './background1.jpg';
import About from './Components/About';
import Home from './Components/Home';
import Navigation from './Components/Navigation';

/* import logo from './logo.svg'; */

class App extends React.Component {
    public render() {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <div className="App" data-background={background1}>
                    <Navigation />
                    <Route exact={true} path='/' component={Home} />
                    <Route path='/about' component={About} />
                </div>

                {/*<Route path='/service' component={About} />
                    <Route path='/contact' component={About} /> */}
            </Router>
        );
    }
}

export default App;
