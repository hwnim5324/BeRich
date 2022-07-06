import React from 'react';
import { Link } from "react-router-dom";

import '../../styles/blocks/TopNavigator.scss';

const TopNavigator = ( ) : JSX.Element => {
    return(
        <nav id='TopNavigator'>
            <ul>
                <li>
                    <Link to='/'>
                        <span id='logo'>BeRich</span>
                    </Link>
                </li>
                <li>
                    <Link to='/assets'>
                        <span>자산</span>
                    </Link>
                </li>
                <li>
                    <Link to='/trading'>
                        <span>거래소</span>
                    </Link>
                </li>
                <li>
                    <Link to='/watching'>
                        <span>관심목록</span>
                    </Link>
                </li>
                <li>
                    <Link to='/login'>
                        <span>로그인</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default TopNavigator;