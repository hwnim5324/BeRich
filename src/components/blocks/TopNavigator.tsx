import React, {useContext} from 'react';
import { Link } from "react-router-dom";

import LogInStore from '../../store/LogInStore';

import '../../styles/blocks/TopNavigator.scss';

const TopNavigator = ( ) : JSX.Element => {

    const LoginStore = useContext(LogInStore);

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
                    <Link to='/trading/buy'>
                        <span>거래소</span>
                    </Link>
                </li>
                <li>
                    <Link to='/watching'>
                        <span>관심목록</span>
                    </Link>
                </li>
                <li>
                    {LoginStore.isLogin?
                    <Link to='/mypage'>
                        <span>마이페이지</span>
                    </Link>:
                    <Link to='/login'>
                        <span>로그인</span>
                    </Link>}
                </li>
            </ul>
        </nav>
    );
}

export default TopNavigator;