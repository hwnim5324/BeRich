import React from "react";

import LoginInput from "../blocks/LoginInput";

import '../../styles/pages/SignUp.scss';

const SignUp = () : JSX.Element => {
    return (
        <section>
            <div id="signup">
                <p id='title'>회원가입</p>
                <LoginInput label="이름" type="text" />
                <LoginInput label="아이디" type="text" />
                <LoginInput label="비밀번호" type="password" />
                <LoginInput label="비밀번호 확인" type="password" />
                <button>회원가입</button>
            </div>
        </section>
    );
}

export default SignUp;