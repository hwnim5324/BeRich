import React from "react"

import '../../styles/pages/Assets.scss';

const Assets = () : JSX.Element => {
    return (
        <section id="assets">
            <div id="total">
                <p id="title">총자산</p>
                <p id="sum">원</p>
                <ul>
                    <li><span>예수금</span><span>원</span></li>
                    <li><span>출금가능금액</span><span>원</span></li>
                </ul>
            </div>
            <div id="pnl">
                <p id="title">평가손익</p>
                <ul>
                    <li>
                        <span>총평가금액</span>
                        <span>원</span>
                    </li>
                    <li>
                        <span>평가금액</span>
                        <span>원</span>
                    </li>
                    <li>
                        <span>예수금</span>
                        <span>원</span>
                    </li>
                    <li>
                        <span>추정자산</span>
                        <span>원</span>
                    </li>
                    <li>
                        <span>매입금액</span>
                        <span>원</span>
                    </li>
                    <li>
                        <span>D+2예수금</span>
                        <span>원</span>
                    </li>
                </ul>
            </div>
            <div id="holdings">
                <p id="title">보유잔고</p>
                <table>
                    <thead>
                        <tr>
                            <th>종목명</th>
                            <th>보유수량</th>
                            <th>매입가</th>
                            <th>현재가</th>
                            <th>수익률</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>삼성전자</td>
                            <td>5</td>
                            <td>80,000</td>
                            <td>62,000</td>
                            <td>-20%</td>
                        </tr>
                        <tr>
                            <td>삼성전자</td>
                            <td>5</td>
                            <td>80,000</td>
                            <td>62,000</td>
                            <td>-20%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Assets;