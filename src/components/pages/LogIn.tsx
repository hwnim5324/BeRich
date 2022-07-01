import React from 'react';

import LoginInput from '../blocks/LoginInput';

import '../../styles/pages/LogIn.scss';




const LogIn = ( ) : JSX.Element => {
    return(
        <section id='login'>
            <div id='login-border'>
                <LoginInput label='아이디' id='id' type='text' />
                <LoginInput label='비밀번호' id='pw' type='password'/>
                <button id='login-submit'>로그인</button>
                <p>계정이 없으신가요? <span>회원가입</span></p>
            </div>
        </section>
    );
}

export default LogIn;