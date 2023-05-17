import React from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchForm({searchInput, setsearchInput}) {
  let marginTop = {
    marginTop : '50'
  }

    // 입력값을 가져와서 소문자로변경
    const getValue = (e) => {
      setsearchInput(e.target.value.toLowerCase())
      console.log(searchInput);
    };

  return (
    <div className='s_form' style={marginTop}>
      <div className='flex'>
        <legend className='hidden'>검색폼</legend>
        <input type="text" placeholder='ex)모니카, 립제이, 코레오그래피' onChange={getValue} />
        <Link to='/search/result'>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
}

export default SearchForm;