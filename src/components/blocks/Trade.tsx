import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
            <li>매수</li>
            <li>매도</li>
            <li>정정/취소</li>
            <li>체결/예약</li>
        </ul>
    );
}

const Buy = () : JSX.Element => {
    return (
        <>
            buy
        </>
    );
}

const Sell = () : JSX.Element => {
    return (
        <>
            sell
        </>
    );
}

const Revise = () : JSX.Element => {
    return (
        <>
            revise
        </>
    );
}

const OrderList = () : JSX.Element => {
    return (
        <>
            orderlist
        </>
    );
}

export default Trade;