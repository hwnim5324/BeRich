import React from 'react';

import '../../styles/pages/LogIn.scss';



const LogIn = ( ) : JSX.Element => {
    return(
        <section id='login'>
            <div id='login-border'>
                <div id='login-input'>
                    <label>아이디</label>
                    <input type='text' />
                </div>
                <div id='login-input'>
                    <label>비밀번호</label>
                    <input type='password' />
                    
                </div>
                <button id='login-submit'>로그인</button>
                <p>계정이 없으신가요? <span>회원가입</span></p>
            </div>
        </section>
    );
}

export default LogIn;