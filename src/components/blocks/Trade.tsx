import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";

import LogInStore from '../../store/LogInStore';
import SearchBar from './SearchBar';

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

    return LoginStore.isLogin?(
        <div id='buy'>
            <ul>
                <li><button id={orderType==='market'?'clicked':'unclicked'} onClick={()=>{setOrderType('market');}}>지정가</button></li>
                <li><button id={orderType==='pending'?'clicked':'unclicked'} onClick={()=>{setOrderType('pending');}}>시장가</button></li>
                {/* 링크가 아니라 state에 따른 내부 컴포넌트 변경으로 바꾸기. */}
            </ul>
            <div id='number'><input type='number' onChange={(e)=>{setPrice(Number(e.target.value));}} />원</div>
            <div id='number'><input type='number' onChange={(e)=>{setNumber(Number(e.target.value));}} />주</div>
            <ul><li>현금최대가능<span>주</span></li></ul>
            <ul><li>미수최대가능<span>주</span></li></ul>
            <div>
                <p>주문금액</p>
                <button>예약매수</button>
                <button>현금매수</button>
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
            <div >
                <p>주문금액</p>
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

export default Trade;