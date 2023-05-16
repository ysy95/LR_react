import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import '../css/class.css';
import ClassList from './class/ClassList';
import ClassView from './class/ClassView';


function Class({memberclasslist}) {

  const [select, setselect] = useState("recently");

  // 내림차순
function sortDate2(list) {
	const sorted_list = list.sort(function(a, b) {
		return new Date(a.MC_registdata).getTime() - new Date(b.MC_registdata).getTime();
	}).reverse();
    return sorted_list;
}

function getPrice(priceStr){
  return Number(priceStr.slice(-priceStr.length,-4) + priceStr.slice(-3))
}


function sortByLowPrice(arr){
  const sortedArr = arr.slice();
  for(let i = 0 ; i < sortedArr.length ; i++){
    let swap;
    for(let j = 0; j < sortedArr.length - 1 - i ; j++){
      if(getPrice(sortedArr[j].MC_price) > getPrice(sortedArr[j + 1].MC_price)){
        swap = sortedArr[j];
        sortedArr[j] = sortedArr[j + 1];
        sortedArr[j + 1] = swap;
      }
    }
    if(!swap){
      break;
    }
  }
  return sortedArr;
}

  return (
    <div>
        <Routes>
          
          <Route path='/' element={<ClassList memberclasslist={memberclasslist} select={select} setselect={setselect} sortDate2={sortDate2} sortByLowPrice={sortByLowPrice} />} />
          <Route path='view/:viewId' element={<ClassView memberclasslist={memberclasslist} />} />
          

        </Routes>
    </div>
  );
}

export default Class;