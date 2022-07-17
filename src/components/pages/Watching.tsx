import React, { useContext } from "react";
import LogInStore from "../../store/LogInStore";

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
            <section>

            </section>
        );
    }
}

export default Watching;