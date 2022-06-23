import React from 'react';
// import { Link } from "react-router-dom";

import TopNavigator from './TopNavigator';
import StockIndex from './StockIndex';

const Layout = ( props : { children : React.ReactNode } ) : JSX.Element => {
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