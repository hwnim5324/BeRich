import React from 'react';
// import { observer } from 'mobx-react';

import '../../styles/pages/Main.scss';


const Main = () : JSX.Element => {

    return (
        <section id='main'>
            <div id='banner'>배너</div>
            <article>
                <div id='left-side'>
                    <div id='rank'>랭킹</div>
                </div>
                <div id='center'>
                    <div>내용</div>
                </div>
                <div id='right-side'>
                <div id='notice'>공지</div>
                <div id='board'>게시판</div>
                </div>
            </article>
        </section>
    );
}

export default Main;