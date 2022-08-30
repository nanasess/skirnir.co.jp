import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class TradeLaw extends React.Component {
    public render() {
        return (
            <section>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h1 className="mt-5 text-left">特定商取引に基づく表記</h1>
                            <table className="table">
                                <tr>
                                    <th>販売事業者</th>
                                    <td>スキルニル株式会社</td>
                                </tr>
                                <tr>
                                    <th>運営統括責任者</th>
                                    <td>大河内健太郎</td>
                                </tr>
                                <tr>
                                    <th>所在地</th>
                                    <td>〒530-0001 大阪市北区梅田1-1-3 29F 1-1-1</td>
                                </tr>
                                <tr>
                                    <th>電話番号</th>
                                    <td>06-4980-2537</td>
                                </tr>
                                <tr>
                                    <th>お支払い方法</th>
                                    <td>クレジットカード</td>
                                </tr>
                                <tr>
                                    <th>商品代金以外の必要金額</th>
                                    <td>
                                        デジタル商品: 必要なし<br />
                                        物販: 送料
                                    </td>
                                </tr>
                                <tr>
                                    <th>商品引き渡し時期</th>
                                    <td>
                                        デジタル商品: お支払い完了後、自動送信メールにてご連絡致します<br />
                                        物販: 指定日が無ければ、お支払い完了後、5営業日以内に発送致します
                                    </td>
                                </tr>
                                <tr>
                                    <th>返品・キャンセルについて</th>
                                    <td>商品の性質上、原則商品の返品・キャンセルはお受けしておりません。</td>
                                </tr>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </section>);
    }
}
export default TradeLaw;
