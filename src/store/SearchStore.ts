import { action, observable } from "mobx";
import { createContext } from "react";


class SearchStore{
    @observable
    keyword = '';

    @observable
    searching = true;

    @action
    setKeyword( keyword : string ){
        this.keyword = keyword;
    }

    @action
    getKeyword(){
        return this.keyword;
    }

    @action
    setSearching( searching : boolean ){
        this.searching = searching;
    }

    @action
    getSearching(){
        return this.searching;
    }
    

}

export default createContext(new SearchStore());