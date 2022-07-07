import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link, NavLink } from "react-router-dom";

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
        <ul>
            <li><NavLink to='/trading/buy' className={({ isActive }) => isActive ? 'link-active' : 'link'}>매수</NavLink></li>
            <li><NavLink to='/trading/sell' className={({ isActive }) => isActive ? 'link-active' : 'link'}>매도</NavLink></li>
            <li><NavLink to='/trading/revise' className={({ isActive }) => isActive ? 'link-active' : 'link'}>정정/취소</NavLink></li>
            <li><NavLink to='/trading/orderlist' className={({ isActive }) => isActive ? 'link-active' : 'link'}>체결/예약</NavLink></li>
        </ul>
    );
}

const Buy = () : JSX.Element => {
    return (
        <div id='buy'>
            <ul>
                <li><NavLink to=''>지정가</NavLink></li>
                <li><NavLink to=''>시장가</NavLink></li>
            </ul>
            <div><input type='number' />원</div>
            <div><input type='number' />주</div>
            <ul><li>현금최대가능</li><li>주</li></ul>
            <ul><li>미수최대가능</li><li>주</li></ul>
            <div >
                <p>주문금액</p>
                <button>예약매수</button>
                <button>현금매수</button>
            </div>
        </div>
    );
}

const Sell = () : JSX.Element => {
    return (
        <div id='sell'>
            <ul>
                <li><NavLink to=''>지정가</NavLink></li>
                <li><NavLink to=''>시장가</NavLink></li>
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