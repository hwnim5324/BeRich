import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Axios from '../../hooks/Axios';

import '../../styles/pages/LogIn.scss';

interface user{
    userId:string,
    password:string
}


const LogIn = ( ) : JSX.Element => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    return(
        <section id='login'>
            <p id='title'>로그인</p>
            <div id='login-input'>
                <label>아이디</label>
                <input type='text' onChange={(e)=>{setId(e.target.value);}}/>
            </div>
            <div id='login-input'>
                <label>비밀번호</label>
                <input type='password' onChange={(e)=>{setPw(e.target.value);}}/>
            </div>
            <button id='login-submit' onClick={()=>{login({userId:id,password:pw});}}>로그인</button>
            <p id='signup-link'>계정이 없으신가요? <Link to='/signup' id='link'><span>회원가입</span></Link></p>
        </section>
    );
}

function login( user: user ){
    const PWFAIL = "비밀번호가 틀렸습니다.";
    const IDFAIL = "아이디가 존재하지 않습니다.";

    Axios.post('/login',user)
        .then((res)=>{
            console.log(res);
            if(res.data.result===0){
                sessionStorage.setItem("userCode", res.data.userCode);
                document.location.href = '/';
            }else if(res.data.result===-1){
                alert(PWFAIL)
            }else{
                alert(IDFAIL);
            }
        }).catch((err)=>{
            console.log(err);
        });
}

export default LogIn;