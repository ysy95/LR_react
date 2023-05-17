import React from 'react';
import Result from './ResultCard';

function ResultCards({memberclasslist, searchInput}) {
  // 데이터 목록중, name에 사용자 입력값이 있는 데이터만 불러오기
  // 사용자 입력값을 소문자로 변경해주었기 때문에 데이터도 소문자로
  const searched = memberclasslist.filter((item) =>
    item.MC_title.toLowerCase().includes(searchInput)
  );
  console.log(searched);
  return (
    <ul className='cards flex'>
        {searched.map((key)=>(
          <li key={key.MC_num} ><Result key={key.MC_num} id={key.MC_num} title={key.MC_title} price={key.MC_price} desc={key.MC_desc} level={key.MC_level} /></li>
        ))}
    </ul>
  );
}

export default ResultCards;