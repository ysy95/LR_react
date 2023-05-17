import React from 'react';
import {Link} from 'react-router-dom';

function Hotkey({searchInput, setsearchInput, margin, title}) {
  let hotkey = {
    marginTop : margin
  };

  // 입력값을 가져와서 소문자로변경

    // setsearchInput(e.target.value.toLowerCase());

  return (
    <dl class='hot_key flex' style={hotkey}>
      <dt><Link to='/search/result'>{title}</Link></dt>
      <dd><Link to='/search/result' onClick={() => setsearchInput("모니카")}>#모니카</Link></dd>
      <dd><Link to='/search/result' onClick={() => setsearchInput("runrun")}>#RUNRUN</Link></dd>
      <dd><Link to='/search/result' onClick={() => setsearchInput("꿈빛파티시엘")}>#꿈빛파티시엘</Link></dd>
      <dd><Link to='/search/result' onClick={() => setsearchInput("blackpink")}>#BLACKPINK</Link></dd>
      <dd><Link to='/search/result' onClick={() => setsearchInput("leejung")}>#리정</Link></dd>
      <dd><Link to='/search/result' onClick={() => setsearchInput("코레오그래피")}>#코레오그래피</Link></dd>
      <dd><Link to='/search/result' onClick={() => setsearchInput("hypeboy")}>#Hypeboy</Link></dd>
      <dd><Link to='/search/result' onClick={() => setsearchInput("jammin")}>#잼민</Link></dd>
    </dl>
  );
}

export default Hotkey;