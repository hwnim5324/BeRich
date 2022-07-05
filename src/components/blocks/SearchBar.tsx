import { observer } from 'mobx-react';
import SearchStore from '../../store/SearchStore';
import React, {useContext, useState } from 'react';

import '../../styles/blocks/SearchBar.scss';

const SearchBar = ( ) : JSX.Element => {

    const [KeyWord, setKeyWord] = useState('');
    const searchStore = useContext(SearchStore);
    const { setKeyword, setSearching } = searchStore;

    return(
        <div id='SearchBar'>
            <input type='text' id='Keyword' onChange={(e) => {setKeyWord(e.target.value);}} />
            <button onClick={()=>{setKeyword(KeyWord); setSearching(true);}}>검색</button>
        </div>
    );
}
// mobx사용해서 검색어 넘겨준 뒤, 검색어에 따라서 csv읽고 종목번호 통신 

export default observer(SearchBar);