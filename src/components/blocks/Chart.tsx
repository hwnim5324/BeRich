import React from 'react';
import { scaleLinear} from "d3-scale";

import useWindowSize from '../../hooks/useWindowSize';

import '../../styles/blocks/Chart.scss';



interface chartData {
    date : number,
    stck_hgpr : number,
    stck_lwpr : number,
    stck_oprc : number,
    stck_clpr : number
};

let exampleData = new Array<chartData>();
exampleData = [
    {date : 20220620, stck_hgpr : 59900, stck_lwpr : 58100, stck_oprc : 59800, stck_clpr : 58700},
    {date : 20220621, stck_hgpr : 59200, stck_lwpr : 58200, stck_oprc : 58700, stck_clpr : 58500},
    {date : 20220622, stck_hgpr : 59100, stck_lwpr : 57600, stck_oprc : 59000, stck_clpr : 57600}
];

const Chart = () : JSX.Element => {
    
    const YLABELSIZE = 30;  //날짜 표기 높이
    const XLABELSIZE = 70;  //가격 표기 넓이
    const RATIO = 9/16;     //가로 : 세로 = 16 : 9

    let chartWidth = useWindowSize().width * 0.7 * 0.9;
    let chartHeight = chartWidth * RATIO;

    const xAxisLength = chartWidth - XLABELSIZE;
    const yAxisLength = chartHeight - 2 * YLABELSIZE;

    const dataYMax = Math.max.apply(Math, exampleData.map(function(d) { return d.stck_hgpr; }))
    const dataYMin = Math.min.apply(Math, exampleData.map(function(d) { return d.stck_lwpr; }))

    const dataYRange = dataYMax - dataYMin;
    const yThicks = 9;
    const barPlotWidth = (chartWidth - XLABELSIZE) /exampleData.length;
    
    //후에 차트 라인 그리는 블럭과 캔들 그리는 블럭 분리 필요.

    return(
        <div id='CandleStick'>
            <svg width={chartWidth} height={chartHeight}>
                <line id='axis' x1={0} y1={chartHeight-YLABELSIZE} x2={chartWidth-XLABELSIZE} y2={chartHeight-YLABELSIZE} />
                <line id='axis' x1={chartWidth-XLABELSIZE} y1={YLABELSIZE} x2={chartWidth-XLABELSIZE} y2={chartHeight-YLABELSIZE} />

                {Array.from({ length: yThicks }).map((_, index) => {
                    let y = YLABELSIZE + index * (yAxisLength / yThicks);   //기준선 그리기
                    let yValue = Math.round(dataYMax - index * (dataYRange / yThicks));
                        return (
                            <g id='baseline' key={index}>
                                <line x1={0} x2={chartWidth - XLABELSIZE} y1={y} y2={y} />
                                <text x={XLABELSIZE + xAxisLength} y={y + 5} textAnchor="end">
                                    {yValue.toLocaleString()} ￦
                                </text>
                            </g>
                        );
                    })
                } 

                {
                    exampleData.map(function(d, index) {    //막대 그리기
                        let x = index * barPlotWidth;

                        const MAX = d.stck_oprc > d.stck_clpr ? d.stck_oprc : d.stck_clpr;
                        const MIN = d.stck_oprc > d.stck_clpr ? d.stck_clpr : d.stck_oprc;

                        const SCALEY = scaleLinear()
                            .domain([dataYMin, dataYMax])
                            .range([0, yAxisLength]);
                        const FILL = d.stck_clpr > d.stck_oprc ? "#c21524" : "#32b84f";

                        return (
                            <g id='data' key={ index }>
                                <line
                                    x1={x + ((barPlotWidth-5)/2)}
                                    y1={yAxisLength - SCALEY(d.stck_lwpr) + YLABELSIZE}
                                    x2={x + ((barPlotWidth-5)/2)}
                                    y2={yAxisLength - SCALEY(d.stck_hgpr) + YLABELSIZE}
                                    stroke={FILL} />
                                <rect fill={FILL}
                                    x = {x}
                                    y={ yAxisLength - SCALEY(MAX) + YLABELSIZE }
                                    width={barPlotWidth - 5} //5 = 막대간 패딩.
                                    height={ SCALEY(MAX) - SCALEY(MIN)} />
                            </g>
                        );
                    })
                }
            </svg>
        </div>
    );
}


export default Chart;