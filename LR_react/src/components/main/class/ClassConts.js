import React from 'react';
import ClassCont from './ClassCont';

function ClassConts(props) {
  return (
    <ul className='cards flex'>
      <li>
      <ClassCont />
      </li>
      <li>
      <ClassCont />
      </li>
      <li>
      <ClassCont />
      </li>
      <li>
      <ClassCont />
      </li>
    </ul>
  );
}

export default ClassConts;