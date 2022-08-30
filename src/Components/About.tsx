import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class About extends React.Component {
    public render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className="mt-5 text-left">About</h1>
                            <p>スキルニル株式会社 / Skirnir Inc.</p>
                            <p>〒530-0001 大阪市北区梅田1-1-3 29F 1-1-1</p>
                            <p>令和元年7月17日 設立</p>
                            <p>代表取締役 大河内健太郎(&#111;&#104;&#107;&#111;&#117;&#99;&#104;&#105;&#64;&#115;&#107;&#105;&#114;&#110;&#105;&#114;&#46;&#99;&#111;&#46;&#106;&#112;)</p>
                        </Col>
                    </Row>
                </Container>
            </section>);
    }
}
export default About;
