import React from 'react';

import Hotkey from './Hotkey';
import SearchForm from './SearchForm';

function SearchInput({searchInput, setsearchInput}) {

  let search_form = {
    background : 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(../images/u_common/search_back.jpg) no-repeat center center',
    backgroundSize : 'cover'
  }
  return (
    <div id='search_form' style={search_form}>
      <strong>
        검색어를 입력해 보세요!
      </strong>
      <SearchForm searchInput={searchInput} setsearchInput={setsearchInput} />
      <Hotkey title='인기 검색어' margin='50' searchInput={searchInput} setsearchInput={setsearchInput} />
    </div>
  );
}

export default SearchInput;