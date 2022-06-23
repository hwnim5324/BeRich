import React from 'react';
import {  } from 'react-chartjs-2';

// import '../../styles/blocks/Chart.scss';

interface chartData {
    date : number,
    stck_hgpr : number,
    stck_lwpr : number,
    stck_oprc : number,
    stck_clpr : number
};

let aapl = new Array<chartData>();
aapl = [{date : 20220401, stck_hgpr : 80000, stck_lwpr : 62000, stck_oprc : 78000, stck_clpr : 70000},
    {date : 20220402, stck_hgpr : 82000, stck_lwpr : 66000, stck_oprc : 74000, stck_clpr : 86000}
];

const Chart = ( ) : JSX.Element => {
    return(
        <div>하이</div>
    );
}

export default Chart;