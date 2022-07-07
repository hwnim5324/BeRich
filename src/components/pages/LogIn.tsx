import React, {useState} from 'react';
import { Link } from "react-router-dom";

import '../../styles/pages/LogIn.scss';




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
            <button id='login-submit' onClick={login}>로그인</button>
            <p id='signup-link'>계정이 없으신가요? <Link to='/signup' id='link'><span>회원가입</span></Link></p>
        </section>
    );
}

function login(){
    
}

export default LogIn;