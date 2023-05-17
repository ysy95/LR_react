import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

function Search({memberclasslist, searchInput, setsearchInput}) {

  
  return (
    <>

      <Routes>
        <Route path='/' element={<SearchInput searchInput={searchInput} setsearchInput={setsearchInput} />} />
        <Route path='result' element={<SearchResult memberclasslist={memberclasslist} searchInput={searchInput} setsearchInput={setsearchInput} />} />
      </Routes>
    </>
  );
}

export default Search;