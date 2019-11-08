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
                            <p>EC-CUBEなど、ネットショップのパッケージ開発や E-Commerce の技術開発をしています。</p>
                            <ul>
                                <li><a href="https://github.com/nanasess" target="_blank">GitHub のプロフィール</a></li>
                                <li><a href="https://www.ec-cube.net/evangelist/" target="_blank">「EC-CUBE」開発コミッター・公式エバンジェリスト</a></li>
                                <li><a href="https://www.slideshare.net/nanasess/emacs-5282932" target="_blank">GNU Emacs icons contributor</a></li>
                                <li><Link to="/contact">ご依頼はお気軽に</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>);
    }
}
export default Services;
