import React from 'react';

import LoginInput from '../blocks/LoginInput';

import '../../styles/pages/LogIn.scss';




const LogIn = ( ) : JSX.Element => {
    return(
        <section id='login'>
            <p id='title'>로그인</p>
            <LoginInput label='아이디' type='text' />
            <LoginInput label='비밀번호' type='password'/>
            <button id='login-submit'>로그인</button>
            <p id='signup-link'>계정이 없으신가요? <span>회원가입</span></p>
        </section>
    );
}

export default LogIn;