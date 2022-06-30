import React from 'react';

import '../../styles/blocks/Input.scss';


interface props {
    label : string,
    id : string,
    type : string
}

const Input = ( props : props ) : JSX.Element => {
    return(
        <div id='login-input'>
            <input id={props.id} type={props.type}/>
            <label>{props.label}</label>
        </div>
    );
}

//id 버리고 input에 대해서 상태관리 mobx통해서 위로 옮겨주기

export default Input;