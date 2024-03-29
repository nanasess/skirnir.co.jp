import React from 'react';
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
                            <p>ご連絡は各種SNSにてお気軽にどうぞ。</p>
                            <p style={{ verticalAlign: 'middle', display: 'table-cell', margin: 0, height: '40px' }}>
                                <ul className="sns_icons">
                                    <li><a href="https://fb.me/nanasess" target="_blank"><img src={fb} alt="Facebook" /></a></li>
                                    <li><a href="https://twitter.com/nanasess" target="_blank"><img src={twitter} alt="Twitter" /></a></li>
                                    <li><img src={line} alt="LINE" /></li>
                                    <li><a href="https://instagram.com/nanasess" target="_blank"><img src={instagram} alt="Instagram" /></a></li>
                                    <li><a href="https://github.com/nanasess" target="_blank"><img src={github} alt="GitHub" /></a></li>
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
