import React, {useContext, useEffect, useState} from "react";

import Axios from "../../hooks/Axios";
import LogInStore from "../../store/LogInStore";

import '../../styles/pages/Assets.scss';

interface Stocks {
    stock: string,
    holds: number,
    price: number,
    nowPrice: number
};

interface Data {
    deposit: number,
    stocks: Array<Stocks>
}

const Assets = () : JSX.Element => {

    const LoginStore = useContext(LogInStore);
    
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState<Data>({ deposit: 0, stocks: [] });

    const [Total, setTotal] = useState(0);
    const [marketValue, setMarketValue] = useState(0);
    const [purchase, setPurchase] = useState(0);

    useEffect(()=>{
        if(LoginStore.isLogin){
            Axios.get(`/assets?userCode=${LoginStore.userCode}`)
            .then((res)=>{
                console.log(res);
                setIsLoaded(true);
                setData(res.data);

                let temp_MV = calcMarketValue(res.data.stocks);
                let temp_PC = calcPurchase(res.data.stocks);
                
                setMarketValue(temp_MV);
                setPurchase(temp_PC);
                setTotal(temp_MV+Number(res.data.deposit));
            }).catch((err)=>{
                console.log(err);
                setIsLoaded(true);
            });
        }
    },[]);

    if(!LoginStore.isLogin){ 
        return(
            <>
                {alert("로그인 후 이용해주세요.")}
                {document.location.href='/login'}
            </>
        )
    }else{
        return isLoaded?(
            <section id="assets">
                <div id="total">
                    <p id="title">총자산</p>
                    <p id="sum">{addComma(Total)}원</p>
                    <ul>
                        <li><span>예수금</span><span>{addComma(data.deposit)}원</span></li>
                    </ul>
                </div>
                <div id="pnl">
                    <p id="title">평가손익<span>%</span></p>
                    {/* 수정필요. */}
                    <ul>
                        <li>
                            <span>총평가금액</span>
                            {/* deposit + marketValue */}
                            <span>{addComma(Total)}원</span>
                        </li>
                        <li>
                            <span>평가금액</span>
                            <span>{addComma(marketValue)}원</span>
                        </li>
                        <li>
                            <span>예수금</span>
                            <span>{addComma(data.deposit)}원</span>
                        </li>
                        <li>
                            <span>매입금액</span>
                            <span>{addComma(purchase)}원</span>
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
                            {data.stocks.map((item, idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td>{item.stock}</td>
                                        <td>{addComma(item.holds)}</td>
                                        <td>{addComma(item.price)}</td>
                                        <td>{addComma(item.nowPrice)}</td>
                                        <td>{calcYield(item.nowPrice, item.price)}%</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        ):(
            <>
                로딩중...
                {/* 로딩중 컴포넌트 나중에 만들기 */}
            </>
        );
    }
    
}

function addComma( num: number ){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function calcYield( nowPrice: number, price: number ){
    return (((nowPrice-price)/price)*100).toFixed(2);
}

function calcPurchase( stocks: Array<Stocks> ){
    let sum = 0;
    stocks.map((i)=>{
        sum+=(Number(i.price)*Number(i.holds));
    });
    return sum;
}

function calcMarketValue( stocks: Array<Stocks> ){
    let sum = 0;
    stocks.map((i)=>{
        sum+=(Number(i.nowPrice)*Number(i.holds));
    });
    return sum;
}


export default Assets;