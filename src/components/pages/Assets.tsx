import React, {useContext, useState} from "react"
import { json } from "stream/consumers";

import Axios from "../../hooks/Axios";
import LogInStore from "../../store/LogInStore";

import '../../styles/pages/Assets.scss';

const Assets = () : JSX.Element => {

    const LoginStore = useContext(LogInStore);
    
    const [deposit, setDeposit] = useState(0);
    const [stocks, setStocks] = useState([]);

    if(LoginStore.isLogin){
        Axios.get(`/assets?userCode=${LoginStore.userCode}`)
        .then((res)=>{
            // setDeposit(res.data.deposit);
            // setStocks(res.data.stocks);
        }).catch((err)=>{
            console.log(err);
        });
    }
    // let deposit = 0;
    return (
        <section id="assets">
            <div id="total">
                <p id="title">총자산</p>
                <p id="sum">원</p>
                <ul>
                    <li><span>예수금</span><span>{addComma(deposit)}원</span></li>
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
                </ul>
            </div>
            {/* <Holdings stocks={stocks} /> */}
        </section>
    );
}

interface Stocks {
    stock: string,
    holds: number,
    price: number,
    nowPrice: number
};

interface Props{
    stocks: string
};

const Holdings = ( {stocks}: Props ) : JSX.Element => {
    //stocks.map 돌려서 통신 후 통신한 값으로 nowPrice 가져오기.
    
    // let stock = JSON.parse("[" + stocks + "]");
    // JSON.parse(stocks)
    // let a = new Array({'a':'b'},{'b':'c'},{'c':'d'});
    // 

    let a = new Array<Stocks>();
    console.log(a);
    return(
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
                        {/* {stocks.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.stock}</td>
                                    <td>{item.holds}</td>
                                    <td>{item.price}</td>
                                    <td>{item.nowPrice}</td>
                                    <td></td>
                                </tr>
                            );
                        })} */}
                    </tbody>
                </table>
            </div>
    );
}

function addComma( num: number ){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


export default Assets;