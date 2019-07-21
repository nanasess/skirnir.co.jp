import { createBrowserHistory } from 'history';
import * as React from 'react';
/* import Alert from 'react-bootstrap/Alert';
 * import Nav from 'react-bootstrap/Nav'; */
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Route, Router } from "react-router-dom";
import './App.css';
import background1 from './background1.jpg';
import About from './Components/About';
import Navigation from './Components/Navigation';

/* import logo from './logo.svg'; */

class App extends React.Component {
    public render() {
        const history = createBrowserHistory();
        return (
            <Router history={history}>
                <div className="App" data-background={background1}>
                    <Navigation />
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
                <Route exact={true} path='/' component={About} />
                <Route path='/about' component={About} />
                {/*<Route path='/service' component={About} />
                    <Route path='/contact' component={About} /> */}
            </Router>
        );
    }
}

export default App;
