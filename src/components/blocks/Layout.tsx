import React from 'react';
// import { Link } from "react-router-dom";

import TopNavigator from './TopNavigator';

const Layout = ( props : { children : React.ReactNode } ) => {
    return(
        <div>
            <header>
                <TopNavigator />
            </header>
            <main>
                { props.children }
            </main>
            <footer>
                <div>푸터</div>
            </footer>
        </div>
    );
}

export default Layout;