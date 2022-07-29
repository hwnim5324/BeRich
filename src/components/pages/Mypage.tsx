import React, { useState } from "react";

import '../../styles/pages/Mypage.scss';

const MyPage = () : JSX.Element => {

    const [pw, setPw] = useState('');
    const [check, setCheck] = useState('');

    return (
        <section id="Mypage">
            <div id='password-input'>
                <label>비밀번호</label>
                <input type='password' onChange={(e)=>{setPw(e.target.value);}}/>
            </div>
            <div id='password-input'>
                <label>비밀번호 확인</label>
                <input type='password' onChange={(e)=>{setCheck(e.target.value);}}/>
            </div>
            <button id="btn-change">비밀번호 변경</button>
            <button id="btn-logout">로그아웃</button>
            <button id="btn-quit">탈퇴</button>
        </section>
    );
}

export default MyPage;