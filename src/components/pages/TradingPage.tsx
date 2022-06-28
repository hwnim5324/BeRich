import React from 'react';

import Chart from '../blocks/Chart';
import Trade from '../blocks/Trade';

import '../../styles/pages/TradingPage.scss';

const TradingPage = ( ) : JSX.Element => {
    return(
        <section id='TradingPage'>
            <Chart />
            <Trade />
        </section>
    );
}

export default TradingPage;