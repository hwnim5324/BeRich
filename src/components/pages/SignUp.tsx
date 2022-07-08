import React, {useState} from "react";
import axios from "axios";

import '../../styles/pages/SignUp.scss';

const SignUp = () : JSX.Element => {

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [check, setCheck] = useState('');

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
                <button onClick={()=>{signup({name,id,pw})}}>회원가입</button>
            </div>
        </section>
    );
}

interface user{
    name: string,
    id: string,
    pw: string
}

function signup( user : user){
    axios({
        url: 'http://localhost:8080/user/signup',
        method: 'post',
        data: user
    }).then(response => console.log(response))
    .catch(err=>console.log(err));
    
}
// http://localhost:8080/user/signup
export default SignUp;