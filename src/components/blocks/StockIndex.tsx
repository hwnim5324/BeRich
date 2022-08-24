import React, { useState, useEffect } from 'react';
import Axios from '../../hooks/Axios';

import '../../styles/blocks/StockIndex.scss';

interface index{
    BSTP_NMIX_PRPR: number,
    BSTP_NMIX_PRDY_CTRT: number,
    PRDY_NMIX: number
};

const StockIndex = () : JSX.Element => {

    const [kospi, setKospi] = useState<index>();
    const [kosdaq, setKosdaq] = useState<index>();

    useEffect(()=>{
        Axios.get('/indexes')
        .then((res)=>{
            setKospi(res.data.kospi);
            setKosdaq(res.data.kosdaq);
        }).catch((err)=>{
            console.log(err);
        })
    },[]);
    
    return(
        <div id='StockIndex'>
            <ul>
                <li>코스피 <span>▲{kospi?.BSTP_NMIX_PRPR}</span></li>
                <li>코스닥 <span>▲{kosdaq?.BSTP_NMIX_PRPR}</span></li>
            </ul>
        </div>
    );
}



export default StockIndex;