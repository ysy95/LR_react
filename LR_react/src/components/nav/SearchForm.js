import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchForm(props) {
  let marginTop = {
    marginTop : props.top
  }
  return (
    <form name='search' className='s_form' style={marginTop}>
      <fieldset className='flex'>
        <legend className='hidden'>검색폼</legend>
        <input type="text" placeholder='ex)모니카, 립제이, 코레오그래피' />
        <span type='submit'>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </span>
      </fieldset>
    </form>
  );
}

export default SearchForm;