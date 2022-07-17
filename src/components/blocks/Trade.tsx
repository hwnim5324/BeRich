import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";

import LogInStore from '../../store/LogInStore';
import SearchBar from './SearchBar';
import useWindowSize from '../../hooks/useWindowSize';

import '../../styles/blocks/Trade.scss';




const Trade = ( ) : JSX.Element => {
    return(
        <div id='Trade'>
            <SearchBar />
            <Trading>
                <TradeNavigator />
                <Routes>
                    <Route path='buy' element={<Buy />} />
                    <Route path='sell' element={<Sell />} />
                    <Route path='revise' element={<Revise />} />
                    <Route path='orderlist' element={<OrderList />} />
                </Routes>
            </Trading>
        </div>
    );
}

const Trading = ( props : { children : React.ReactNode } ) : JSX.Element => {
    return (
        <>
            {props.children}
        </>
    );
}

const TradeNavigator = () : JSX.Element => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/trading/buy' className={({ isActive }) => isActive ? 'link-active' : 'link'}>매수</NavLink></li>
                <li><NavLink to='/trading/sell' className={({ isActive }) => isActive ? 'link-active' : 'link'}>매도</NavLink></li>
                <li><NavLink to='/trading/revise' className={({ isActive }) => isActive ? 'link-active' : 'link'}>정정/취소</NavLink></li>
                <li><NavLink to='/trading/orderlist' className={({ isActive }) => isActive ? 'link-active' : 'link'}>체결/예약</NavLink></li>
            </ul>
        </nav>
    );
}

const Buy = () : JSX.Element => {

    const LoginStore = useContext(LogInStore);
    const [orderType,setOrderType] = useState('market');
    const [price,setPrice] = useState(0);
    const [number,setNumber] = useState(0);

    const divHeight = useWindowSize().height-153-130;
    const divWidth = useWindowSize().width*0.3

    return LoginStore.isLogin?(
        <div id='buy' style={{height: divHeight}}>
            <div style={{width: divWidth}} id='ordertype'>
                <button id={orderType==='market'?'clicked':'unclicked'} onClick={()=>{setOrderType('market');}}>지정가</button>
                <button id={orderType==='pending'?'clicked':'unclicked'} onClick={()=>{setOrderType('pending');}}>시장가</button>
                {/* 링크가 아니라 state에 따른 내부 컴포넌트 변경으로 바꾸기. */}
            </div>
            <div id='number'><input type='number' onChange={(e)=>{setPrice(Number(e.target.value));}} />원</div>
            <div id='number'><input type='number' onChange={(e)=>{setNumber(Number(e.target.value));}} />주</div>
            <ul id='canBuy'><li><p>현금최대가능<span>{calcCanBuy(5000000,price)} 주</span></p></li></ul>
            <p id='resultPrice' style={{width: divWidth-60}}>주문금액<span>{addComma(calcOrder(5000000, price, number))}원</span></p>
            <div id='order' style={{width: divWidth}}>
                <button id='black'>예약매수</button>
                <button id='red'>현금매수</button>
            </div>
        </div>
    ):(
        <>
            {alert("로그인 후 이용해주세요.")}
            {document.location.href='/login'}
        </>
    );
}

const Sell = () : JSX.Element => {
    return (
        <div id='sell'>
            <ul>
                <li><button>지정가</button></li>
                <li><button>시장가</button></li>
                {/* 링크가 아니라 state에 따른 내부 컴포넌트 변경으로 바꾸기. */}
            </ul>
            <div><input type='number' />원</div>
            <div><input type='number' />주</div>
            <ul><li>매도가능</li><li>주</li></ul>
            <div id='order'>
                <p id='resultPrice'>주문금액</p>
                <button>예약매도</button>
                <button>현금매도</button>
            </div>
        </div>
    );
}

const Revise = () : JSX.Element => {
    return (
        <div id='revise'>
            revise
        </div>
    );
}

const OrderList = () : JSX.Element => {
    return (
        <div id='orderlist'>
            orderlist
        </div>
    );
}

function calcCanBuy( deposit: number, price: number ){
    return isFinite(deposit/price) ? Math.floor(deposit/price):'-';
}

function calcOrder( deposit: number, price: number, number: number ){
    if(calcCanBuy(deposit, price)==='-'){
        return 0;
    }else{
        const buy = calcCanBuy(deposit, price)<number?Number(calcCanBuy(deposit, price)):number;
        return buy*price;
    }
}

function addComma( num: number ){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default Trade;