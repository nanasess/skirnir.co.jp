import { createBrowserHistory } from 'history';
import * as React from 'react';
/* import Alert from 'react-bootstrap/Alert';
 * import Nav from 'react-bootstrap/Nav'; */
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Router } from "react-router-dom";
/* import { Link, Route, Router } from "react-router-dom"; */
/* import About from './About'; */
import './App.css';
import background1 from './background1.jpg';

/* import logo from './logo.svg'; */

class App extends React.Component {
    public render() {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <div className="App" data-background={background1}>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
                        <div className="container">
                            <a className="navbar-brand" href="#">スキルニル株式会社</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home
                                            <span className="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        {/* <Link to="/about">About</Link> */}
                                    </li>
                                    <li className="nav-item">
                                        {/* <Link to="/service">Services</Link> */}
                                        <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        {/* <Link to="/contact">Contact</Link> */}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <section>
                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <h1 className="mt-5">&nbsp;</h1>
                                    <p>&nbsp;</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                {/* <Route exact={true} path='/' component={About} />
                    <Route path='/about' component={About} />
                    <Route path='/service' component={About} />
                    <Route path='/contact' component={About} /> */}
            </Router>
        );
    }
}

export default App;
