import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Services extends React.Component {
    public render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className="mt-5 text-left">Services</h1>
                            <p>高度な技術力を活用して、E-Commerce を中心に技術開発をしています。</p>
                            <ul>
                                <li><a href="https://github.com/nanasess">Github のプロフィール</a></li>
                                <li><a href="https://www.ec-cube.net/evangelist/">「EC-CUBE」開発コミッター・公式エバンジェリスト</a></li>
                                <li><a href="https://www.slideshare.net/nanasess/emacs-5282932">GNU Emacs icons contributor</a></li>
                                <li><Link to="/contact">ご依頼はお気軽に</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>);
    }
}
export default Services;
