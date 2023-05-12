import React from 'react';
import '../css/class.css';
import ClassView from './class/ClassView';
import ClassList from './class/ClassList';
import ClassViewRelated from './class/ClassViewRelated';
import QnaMove from './qna/QnaMove';

function Class(props) {
  return (
    <div>
      <ClassView />
      <ClassList />
      <ClassViewRelated />
      <QnaMove />
    </div>
  );
}

export default Class;