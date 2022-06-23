import React from 'react';

import '../../styles/blocks/Chart.scss';

interface chartData {
    date : number,
    stck_hgpr : number,
    stck_lwpr : number,
    stck_oprc : number,
    stck_clpr : number
};

let exampleData = new Array<chartData>();
exampleData = [{date : 20220401, stck_hgpr : 80000, stck_lwpr : 62000, stck_oprc : 78000, stck_clpr : 70000},
    {date : 20220402, stck_hgpr : 82000, stck_lwpr : 66000, stck_oprc : 74000, stck_clpr : 86000}
];

const Chart = () : JSX.Element => {
    
    const YLABELSIZE = 30;  //날짜 표기 높이
    const XLABELSIZE = 70;  //가격 표기 넓이
    const RATIO = 9/16;     //가로 : 세로 = 16 : 9
    

    // let chartWidth = document.getElementById("TradingPage")?.offsetWidth !== undefined ? document.getElementById("TradingPage")?.offsetWidth as number * 8.5 : 1000;
    // chartWidth = chartWidth as number;
    let chartWidth = 1000;
    let chartHeight = chartWidth * RATIO;
        
    // 부모 컴포넌트의 가로를 가져와 변화에 따라 동적으로 차트 가로 길이를 설정해주어야함.
    
    // if(document.getElementById("TradingPage")?.offsetWidth===undefined){
    //     chartWidth = 1000;
    //     chartHeight = chartWidth * RATIO;
    // }else{
    //     chartWidth = document.getElementById("TradingPage")?.offsetWidth;
    //     chartHeight = chartWidth * RATIO;
    // }
    
    

    return(
        <div id='CandleStick'>
            <svg width={chartWidth} height={chartHeight}>
                <line x1={0} y1={chartHeight-YLABELSIZE} x2={chartWidth-XLABELSIZE} y2={chartHeight-YLABELSIZE} />
                <line x1={chartWidth-XLABELSIZE} y1={YLABELSIZE} x2={chartWidth-XLABELSIZE} y2={chartHeight-YLABELSIZE} />
            </svg>
        </div>
    );
}


export default Chart;