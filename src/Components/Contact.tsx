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
                            <p style={{ verticalAlign: 'middle', display: 'table-cell', margin: 0, height: '40px' }}>
                                <ul className="sns_icons">
                                    <li><a href="https://fb.me/nanasess"><img src={fb} alt="Facebook" /></a></li>
                                    <li><a href="https://twitter.com/nanasess"><img src={twitter} alt="Twitter" /></a></li>
                                    <li><img src={line} alt="LINE" /></li>
                                    <li><a href="https://instagram.com/nanasess"><img src={instagram} alt="Instagram" /></a></li>
                                    <li><a href="https://github.com/nanasess"><img src={github} alt="Github" /></a></li>
                                </ul>
                                @nanasess
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>);
    }
}
export default Contact;
