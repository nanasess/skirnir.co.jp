import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fb from '../Images/FB.png';
import github from '../Images/GitHub.png';
import instagram from '../Images/Instagram.png';
import line from '../Images/LINE.png';
import twitter from '../Images/Twitter.png';

class Contact extends React.Component {
    public render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className="mt-5 text-left">Contact</h1>
                            <p>SNS にてお気軽にご連絡ください。</p>
                            <p style={{verticalAlign: 'middle'}}>
                                <a href="https://fb.me/nanasess"><img src={fb} style={{width: '30px', height: '30px'}} /></a>&nbsp;
            <a href="https://twitter.com/nanasess"><img src={twitter} style={{width: '30px', height: '30px'}} /></a>&nbsp;
            <img src={line} style={{width: '30px', height: '30px'}} />&nbsp;
            <a href="https://instagram.com/nanasess"><img src={instagram} style={{width: '30px', height: '30px'}} /></a>&nbsp;
            <a href="https://github.com/nanasess"><img src={github} style={{width: '30px', height: '30px'}} /></a>&nbsp;
            @nanasess
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>);
    }
}
export default Contact;
