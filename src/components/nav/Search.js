import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

function Search(props) {
  return (
    <>

      <Routes>
        <Route path='/' element={<SearchInput />} />
        <Route path='result' element={<SearchResult />} />
      </Routes>
    </>
  );
}

export default Search;