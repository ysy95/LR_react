import React from 'react';

import SearchForm from './SearchForm';
import Hotkey from './Hotkey';
import ResultCards from './ResultCards';

function SearchResult(props) {
  return (
    <div className='s_result'>
      <strong>검색 결과</strong>
      <SearchForm top='0' />
      <Hotkey title='인기 검색어' />
      <ResultCards />
    </div>
  );
}

export default SearchResult;