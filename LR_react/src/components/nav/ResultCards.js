import React from 'react';
import Result from './ResultCard';

function ResultCards(props) {
  return (
    <ul className='cards flex'>
      <li>
        <Result />
      </li>
      <li>
        <Result />
      </li>
      <li>
        <Result />
      </li>
      <li>
        <Result />
      </li>
    </ul>
  );
}

export default ResultCards;