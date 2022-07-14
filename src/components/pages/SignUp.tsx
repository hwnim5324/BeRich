import React, {useState} from "react";
import Axios from "../../hooks/Axios";
import { Router } from "react-router-dom";

import '../../styles/pages/SignUp.scss';

interface user{
    name: string,
    userId: string,
    password: string
}

const SignUp = () : JSX.Element => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [check, setCheck] = useState('');

    const DIFFERENT_PW = '비밀번호와 확인용 비밀번호가 일치하지 않습니다.';

    return (
        <section>
            <div id="signup">
                <p id='title'>회원가입</p>
                <div id='signup-input'>
                    <label>이름</label>
                    <input type='text' onChange={(e)=>{setName(e.target.value);}}/>
                </div>
                <div id='signup-input'>
                    <label>아이디</label>
                    <input type='text' onChange={(e)=>{setId(e.target.value);}}/>
                </div>
                <div id='signup-input'>
                    <label>비밀번호</label>
                    <input type='password' onChange={(e)=>{setPw(e.target.value);}}/>
                </div>
                <div id='signup-input'>
                    <label>비밀번호 확인</label>
                    <input type='password' onChange={(e)=>{setCheck(e.target.value);}}/>
                </div>
                <button onClick={()=>{isValidPw(pw,check) ? signup(id,pw,name) : alert(DIFFERENT_PW)}}>회원가입</button>
            </div>
        </section>
    );
}



function isValidPw( pw: string, check: string){
    return pw!==check ? false : true;
}

function signup( id: string, pw: string, name: string ){
    let user : user = {
        userId : id,
        password : pw,
        name: name
    }
    Axios.post('/signup',user)
        .then((res)=>{
            console.log(res);
            document.location.href='/login';
        }).catch((err)=>{
            console.log(err);
        });
}

export default SignUp;