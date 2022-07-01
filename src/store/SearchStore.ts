import { action, observable } from "mobx";
import { createContext } from "react";


class SearchStore{
    @observable
    keyword = '';

    @action
    setKeyword( keyword : string ){
        this.keyword = keyword;
    }

    @action
    getKeyword(){
        return this.keyword;
    }

    @action
    doSearch( keyword : string ){
        this.setKeyword( keyword );
        console.log(this.keyword);
    }

}

export default createContext(new SearchStore());