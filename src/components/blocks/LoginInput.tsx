import React from 'react';

import '../../styles/blocks/LoginInput.scss';


interface props {
    label : string,
    type : string
}

const LoginInput = ( props : props ) : JSX.Element => {
    return(
        <div id='login-input'>
            <label>{props.label}</label>
            <input type={props.type}/>
        </div>
    );
}


export default LoginInput;