import React, { useState } from "react";

import Axios from "../../hooks/Axios";

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
            <button id="btn-change" onClick={()=>{checkPw(pw, check);}}>비밀번호 변경</button>
            <button id="btn-logout" onClick={()=>{logOut();}}>로그아웃</button>
            <button id="btn-quit" onClick={()=>{quit();}}>탈퇴</button>
        </section>
    );
};


function checkPw(pw: string, check: string){
    const DIFF = '비밀번호와 확인용 비밀번호가 일치하지 않습니다.';
    if(pw===check){
        //통신.
    }else{
        alert(DIFF);
    }
}

function logOut(){
    sessionStorage.removeItem('userCode');
    document.location.href='/';
}

function quit(){
    let answer = window.confirm('탈퇴하시면 가지고있는 재산과 주식은 사라집니다.\n정말 탈퇴하시겠습니까?');
    if(answer){
        let userCode = sessionStorage.getItem('userCode');
        //통신
    }else{

    }
}

export default MyPage;