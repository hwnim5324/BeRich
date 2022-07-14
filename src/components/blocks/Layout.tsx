import React,{ useContext,useEffect } from 'react';
// import { Link } from "react-router-dom";

import LogInStore from '../../store/LogInStore';
import TopNavigator from './TopNavigator';
import StockIndex from './StockIndex';

const Layout = ( props : { children : React.ReactNode } ) : JSX.Element => {

    const LoginStore = useContext(LogInStore);

    if(sessionStorage.getItem("userCode")===null){
        LoginStore.setIsLogin(false);
    }else{
        let usercode = Number(sessionStorage.getItem("userCode"));
        LoginStore.setUserCode(usercode);
        LoginStore.setIsLogin(true);
    }

    return(
        <div>
            <header>
                <TopNavigator />
            </header>
            <main>
                { props.children }
            </main>
            <footer>
                <StockIndex />
            </footer>
        </div>
    );
}

export default Layout;