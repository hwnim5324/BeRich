import React, { useContext } from 'react';

import Chart from '../blocks/Chart';
import Trade from '../blocks/Trade';
import SearchStore from '../../store/SearchStore';

import '../../styles/pages/TradingPage.scss';

const TradingPage = ( ) : JSX.Element => {

    const searchStore = useContext(SearchStore);
    const { keyword, startDate, endDate } = searchStore;

    return(
        <section id='TradingPage'>
            <Chart stockName={keyword} startDate={startDate} endDate={endDate} />
            <Trade />
        </section>
    );
}

export default TradingPage;