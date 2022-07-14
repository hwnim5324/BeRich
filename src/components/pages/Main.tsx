import React, {useState, useEffect} from 'react';
import { observer } from 'mobx-react';
import { useContext } from 'react';

import LogInStore from '../../store/LogInStore';

import '../../styles/pages/Main.scss';

const Main = () : JSX.Element => {

    const LoginStore = useContext(LogInStore);
    const [islogin, setislogin] = useState(false);
    const { isLogin, setIsLogin, userCode, setUserCode } = LoginStore;

    // try{
    //     if(sessionStorage.getItem("userCode")!=null){
    //         let usercode = Number(sessionStorage.getItem("userCode"));
    //         setUserCode(usercode);
    //         setIsLogin(true);
    //     }
    // }catch{
    //     console.log("err");
    // }
    

    useEffect(()=>{
        if(sessionStorage.getItem("userCode")===null){
            // setislogin(false);
            setIsLogin(false);
        }else{
            // let usercode = Number(sessionStorage.getItem("userCode"));
            // setUserCode(usercode);
            // setislogin(true);
            setIsLogin(true);
        }
    },)
    

    return (
        <section>
            <p>이 페이지는 메인 페이지입니다.</p>
        </section>
    );
}

export default observer(Main);