import React from 'react';
import {Link} from 'react-router-dom';

function Hotkey(props) {
  let hotkey = {
    marginTop : props.margin
  };
  return (
    <dl class='hot_key flex' style={hotkey}>
      <dt><Link to='/search/result'>{props.title}</Link></dt>
      <dd><Link to='/search/result'>#모니카쌤</Link></dd>
      <dd><Link to='/search/result'>#립제이쌤</Link></dd>
      <dd><Link to='/search/result'>#뉴진스</Link></dd>
      <dd><Link to='/search/result'>#아이브</Link></dd>
      <dd><Link to='/search/result'>#부석순</Link></dd>
      <dd><Link to='/search/result'>#무슨노래들으세요</Link></dd>
      <dd><Link to='/search/result'>#Hypeboy</Link></dd>
      <dd><Link to='/search/result'>#Move</Link></dd>
    </dl>
  );
}

export default Hotkey;