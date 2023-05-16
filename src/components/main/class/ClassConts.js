import React from 'react';
import ClassCont from './ClassCont';

function ClassConts({memberclasslist, select, sortDate2, sortByLowPrice}) {

  return (
    <>
        <ul className='cards flex'>
          {select === "recently" ? sortDate2(memberclasslist).map(items =>
          <li key={items.MC_num}>
            <ClassCont id={items.MC_num} level={items.MC_level} title={items.MC_title} price={items.MC_price} desc={items.MC_desc} />
          </li>
          ):null}
          {select === "zim" ? sortDate2(memberclasslist).map(items =>
          <li key={items.MC_num}>
            <ClassCont id={items.MC_num} level={items.MC_level} title={items.MC_title} price={items.MC_price} desc={items.MC_desc} />
          </li>
          ):null}
          {select === "lowPrice" ? sortByLowPrice(memberclasslist).map(items =>
          <li key={items.MC_num}>
            <ClassCont id={items.MC_num} level={items.MC_level} title={items.MC_title} price={items.MC_price} desc={items.MC_desc} />
          </li>
          ):null}
        </ul>
    </>
  );
}

export default ClassConts;