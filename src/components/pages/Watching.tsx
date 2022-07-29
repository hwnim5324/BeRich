import React, { useContext } from "react";
import LogInStore from "../../store/LogInStore";

import '../../styles/pages/Watching.scss';

const Watching = () :JSX.Element => {

    const LoginStore = useContext(LogInStore);


    if(!LoginStore.isLogin){
        return(
            <>
                {alert("로그인 후 이용해주세요.")}
                {document.location.href='/login'}
            </>
        );
    }else{
        return (
            <section id="watching">
                관심목록
                <WatchingList />
            </section>
        );
    }
}

const WatchingList = () : JSX.Element => {
    return(
        <div id="list">
            <p id="graph">작은 그래프</p>
            <p id="name">이름</p>
            <p id="figure">등락수치</p>
        </div>
    );
}

export default Watching;