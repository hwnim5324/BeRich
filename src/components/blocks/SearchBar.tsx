import React from 'react';

import '../../styles/blocks/SearchBar.scss';

const SearchBar = ( ) : JSX.Element => {
    return(
        <div id='SearchBar'>
            <input type='text' id='Keyword' />
        </div>
    );
}

export default SearchBar;