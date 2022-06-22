import React from 'react';
import { Link } from "react-router-dom";

import '../../styles/blocks/TopNavigator.scss';

const TopNavigator = ( ) => {
    return(
        <nav id='TopNavigator'>
            <ul>
                <li>
                    <Link to='/'>
                        <span>로고</span>
                    </Link>
                </li>
                <li>
                    <Link to=''>
                        <span>자산</span>
                    </Link>
                </li>
                <li>
                    <Link to='/Trading'>
                        <span>거래소</span>
                    </Link>
                </li>
                <li>
                    <Link to=''>
                        <span>관심목록</span>
                    </Link>
                </li>
                <li>
                    <Link to=''>
                        <span>로그인</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default TopNavigator;