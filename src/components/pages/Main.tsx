import React from 'react';
// import { observer } from 'mobx-react';

import '../../styles/pages/Main.scss';


const Main = () : JSX.Element => {

    return (
        <section id='main'>
            <div id='banner'>배너</div>
            <div id='rank'>랭크</div>
            <div id='notice'>공지</div>
            <div id='board'>게시판</div>
        </section>
    );
}

export default Main;