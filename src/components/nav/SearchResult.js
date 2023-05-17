import React from 'react';

import SearchForm from './SearchForm';
import Hotkey from './Hotkey';
import ResultCards from './ResultCards';

function SearchResult({memberclasslist, searchInput, setsearchInput}) {
  
  return (
    <div className='s_result'>
      <strong>검색 결과</strong>
      <SearchForm top='0' searchInput={searchInput} setsearchInput={setsearchInput} />
      <Hotkey title='인기 검색어' margin='50' searchInput={searchInput} setsearchInput={setsearchInput} />

      <ResultCards memberclasslist={memberclasslist} searchInput={searchInput} />
    </div>
  );
}

export default SearchResult;