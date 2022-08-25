import React, { useState, useEffect } from 'react';
import Axios from '../../hooks/Axios';

import '../../styles/blocks/StockIndex.scss';

interface index{
    BSTP_NMIX_PRPR: number,         //업종 지수 현재가
    BSTP_NMIX_PRDY_CTRT: number,    //업종 지수 전일 대비율
    PRDY_NMIX: number               //전일 지수
};

const StockIndex = () : JSX.Element => {

    const [kospi, setKospi] = useState<index>({BSTP_NMIX_PRPR:0, BSTP_NMIX_PRDY_CTRT:0, PRDY_NMIX:0});
    const [kosdaq, setKosdaq] = useState<index>({BSTP_NMIX_PRPR:0, BSTP_NMIX_PRDY_CTRT:0, PRDY_NMIX:0});

    useEffect(()=>{
        Axios.get('/indexes')
        .then((res)=>{
            setKospi(res.data.KOSPI);
            setKosdaq(res.data.KOSDAQ);
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);
    
    return (
        <div id='StockIndex'>
            <ul>
                <li>코스피 <span>{kospi.BSTP_NMIX_PRPR} <span id={(kospi.PRDY_NMIX-kospi.BSTP_NMIX_PRPR)>0 ? 'decrease' : 'increase'}>{(kospi.PRDY_NMIX-kospi.BSTP_NMIX_PRPR)>0 ? '▼' : '▲'} {(Math.abs(kospi.PRDY_NMIX-kospi.BSTP_NMIX_PRPR)).toFixed(2)} {(kospi.PRDY_NMIX-kospi.BSTP_NMIX_PRPR)>0 ? '▼' : '▲'} {kospi.BSTP_NMIX_PRDY_CTRT}</span></span></li>
                <li>코스닥 <span>{kosdaq.BSTP_NMIX_PRPR} <span id={(kosdaq.PRDY_NMIX-kosdaq.BSTP_NMIX_PRPR)>0 ? 'decrease' : 'increase'}>{(kosdaq.PRDY_NMIX-kosdaq.BSTP_NMIX_PRPR)>0 ? '▼' : '▲'} {(Math.abs(kosdaq.PRDY_NMIX-kosdaq.BSTP_NMIX_PRPR)).toFixed(2)} {(kosdaq.PRDY_NMIX-kosdaq.BSTP_NMIX_PRPR)>0 ? '▼' : '▲'} {kosdaq.BSTP_NMIX_PRDY_CTRT}</span></span></li>
            </ul>
        </div>
    );
}



export default StockIndex;