import React, { useEffect, useState } from 'react';
import { scaleLinear} from "d3-scale";

import Axios from '../../hooks/Axios';
import useWindowSize from '../../hooks/useWindowSize';

import '../../styles/blocks/Chart.scss';



interface chartData {
    date : number,
    stck_hgpr : number,
    stck_lwpr : number,
    stck_oprc : number,
    stck_clpr : number
};

const Chart = () : JSX.Element => {
    
    const now = new Date();

    const [stockName, setStockName] = useState('삼성전자');
    const [endDate, setEndDate] = useState(getEndDate());
    const [startDate, setStartDate] = useState(getStartDate(60));
    const [Data, setData] = useState<Array<chartData>>([]);
    useEffect(()=>{
        Axios.get(`/stocks?isnm=${stockName}&startDate=${startDate}&endDate=${endDate}`)
        .then((res)=>{
            console.log(res);
            setData(transformData(res.data));
        }).catch((err)=>{
            console.log(err);
        });
    },[]);

    
    const YLABELSIZE = 30;  //날짜 표기 높이
    const XLABELSIZE = 70;  //가격 표기 넓이
    const RATIO = 9/16;     //가로 : 세로 = 16 : 9

    let chartWidth = useWindowSize().width * 0.7 * 0.9;
    let chartHeight = chartWidth * RATIO;

    const xAxisLength = chartWidth - XLABELSIZE;
    const yAxisLength = chartHeight - 2 * YLABELSIZE;

    const dataYMax = Math.max.apply(Math, Data.map(function(d) { return d.stck_hgpr; }))
    const dataYMin = Math.min.apply(Math, Data.map(function(d) { return d.stck_lwpr; }))

    const dataYRange = dataYMax - dataYMin;
    const yThicks = 9;
    const barPlotWidth = (chartWidth - XLABELSIZE) /Data.length;
    
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
                    Data.map(function(d, index) {    //막대 그리기
                        let x = index * barPlotWidth;

                        const MAX = d.stck_oprc > d.stck_clpr ? d.stck_oprc : d.stck_clpr;
                        const MIN = d.stck_oprc > d.stck_clpr ? d.stck_clpr : d.stck_oprc;

                        const SCALEY = scaleLinear()
                            .domain([dataYMin, dataYMax])
                            .range([0, yAxisLength]);
                        const FILL = d.stck_clpr > d.stck_oprc ? "#E0585A" : "#597BE4";

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

interface originData{
    stck_bsop_date: number,
    stck_hgpr: number,
    stck_clpr: number,
    stck_lwpr: number,
    stck_oprc: number,
    acml_tr_pbmn: string,
    acml_vol: string,
    prdy_vrss_sign: string,
    revl_issu_reas: string,
    prtt_rate: string,
    prdy_vrss: string,
    mod_yn: string,
    flng_cls_code: string,
    
}

function getStartDate( num: number ){
    const now = new Date();
    const date = new Date(now.setDate(now.getDate() - num));
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return year + month + day;
}

function getEndDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return year + month + day;
}

function transformData( data: Array<originData> ){
    
    let result: Array<chartData> = data.map((item)=>{
        let aDay: chartData = {
            date: item.stck_bsop_date,
            stck_hgpr : item.stck_hgpr,
            stck_lwpr : item.stck_lwpr,
            stck_oprc : item.stck_oprc,
            stck_clpr : item.stck_clpr 
        }
        return aDay;
    });

    return result.sort((a, b)=>{
        if(a.date < b.date)return -1;
        if(a.date > b.date)return 1;
        return 0;
    });
}


export default Chart;