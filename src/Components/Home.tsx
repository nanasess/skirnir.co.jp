import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Home extends React.Component {
    public render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className="mt-5 text-left">E-Commerce Specialist</h1>
                            <p>&nbsp;</p>
                        </Col>
                    </Row>
                </Container>
            </section>);
    }
}
export default Home;
