import React, { useEffect, useState } from 'react';
import Axios from '../../hooks/Axios';

import '../../styles/pages/Main.scss';

interface newsData{
    date: string,
    source: string,
    title: string,
    text: string,
    link: string
}

const Main = () : JSX.Element => {
    
    const [news, setNews] = useState<Array<newsData>>([]);

    useEffect(()=>{
        Axios.get('/news')
        .then((res)=>{
            console.log(res.data);
            setNews(res.data);
            
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    return (
        <section id='main'>
            <div id='banner'>
                <div id='blockTitle'>배너</div>
            </div>
            <article>
                <div id='left-side'>
                    <div id='rank'>
                        <div id='blockTitle'>랭킹</div>
                    </div>
                </div>
                <div id='center'>
                    <div id='blockTitle'>증권 주요 뉴스</div>
                    <ul id='newsList'>
                        {news.map((el, idx)=>{
                            return(
                                <li key={idx} id='news'>
                                    <a href={'https://finance.naver.com/'+el.link}>
                                        <p id='title'>{el.title}</p>
                                        <p id='text'>{el.text.split(el.source)[0]}</p>
                                        <p id='dateSource'>{el.date} {el.source}</p>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div id='right-side'>
                <div id='notice'>
                    <div id='blockTitle'>공지</div>
                </div>
                <div id='board'>
                    <div id='blockTitle'>게시판</div>
                </div>
                </div>
            </article>
        </section>
    );
}



export default Main;