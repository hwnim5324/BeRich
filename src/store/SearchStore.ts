import { action, observable, autorun } from "mobx";
import { createContext } from "react";

class SearchStore{
    @observable
    keyword: string = '삼성전자';

    @observable
    startDate: string = '';

    @observable
    endDate: string = '';
    
    constructor(){
        this.startDate = this.getDate(50);
        this.endDate = this.getDate(0);
    }

    @action
    setKeyword( keyword : string ){
        this.keyword = keyword;
    }


    getDate( num: number ){
        const date = new Date();
        date.setDate(date.getDate() - num);
    
        const year = date.getFullYear();
        const month = ("0" + (1 + date.getMonth())).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        return year + month + day;
    }
}

export default createContext(new SearchStore());