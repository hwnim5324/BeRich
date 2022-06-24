import React from 'react';

interface chartData {
    date : number;
    stck_hgpr : number;
    stck_lwpr : number;
    stck_oprc : number;
    stck_clpr : number;
};

let exampleData = new Array<chartData>();
exampleData = [{date : 20220401, stck_hgpr : 80000, stck_lwpr : 62000, stck_oprc : 78000, stck_clpr : 70000},
    {date : 20220402, stck_hgpr : 82000, stck_lwpr : 66000, stck_oprc : 74000, stck_clpr : 86000}
];

const YLABELSIZE = 30;  //날짜 표기 높이
const XLABELSIZE = 70;  //가격 표기 넓이
const RATIO = 9/16;     //가로 : 세로 = 16 : 9

let chartWidth = 1000;
let chartHeight = chartWidth * RATIO;

const dataYMax = Math.max.apply(Math, exampleData.map(function(d) { return d.stck_hgpr; }))
const dataYMin = Math.min.apply(Math, exampleData.map(function(d) { return d.stck_lwpr; }))

const dataYRange = dataYMax - dataYMin;
const yThicks = 7;
const barPlotWidth = (chartWidth - XLABELSIZE) /exampleData.length;

