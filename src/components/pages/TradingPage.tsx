import React from 'react';

import Chart from '../blocks/Chart';
import Trade from '../blocks/Trade';

import '../../styles/pages/TradingPage.scss';

const TradingPage = ( ) : JSX.Element => {
    return(
        <div id='TradingPage'>
            <Chart />
            <Trade />
        </div>
    );
}

export default TradingPage;