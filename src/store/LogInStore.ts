import { action, observable, makeObservable } from "mobx";
import { createContext } from "react";


class LogInStore{
    @observable
    isLogin: boolean = false;

    @observable
    userCode: number = 0;

    constructor(){
        makeObservable(this);
    }

    @action
    setIsLogin( isLogin : boolean ){
        this.isLogin = isLogin;
    }

    @action
    getIsLogin(){
        return this.isLogin;
    }

    @action
    setUserCode( userCode : number ){
        this.userCode = userCode;
    }

    @action
    getUserCode(){
        return this.userCode;
    }

}

export default createContext(new LogInStore());