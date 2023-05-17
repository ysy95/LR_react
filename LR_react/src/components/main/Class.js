import React from 'react';
import { Routes, Route } from 'react-router-dom';

import '../css/class.css';
import ClassList from './class/ClassList';
import ClassView from './class/ClassView';


function Class(props) {
  return (
    <div>
        <Routes>
          
          <Route path='/' element={<ClassList />} />
          <Route path='view' element={<ClassView />} />

        </Routes>
    </div>
  );
}

export default Class;