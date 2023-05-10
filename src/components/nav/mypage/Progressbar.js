import React from 'react';

function Progress(props) {
  let c_per = props.per + '%';
  let c_progress = {
    width:c_per,
    height:'100%',
    borderRadius:'5px',
    backgroundColor:'#F77F00'
  }
  return (
    <div>
      <div className='c_bar'>
        <div style={c_progress}>&nbsp;</div>
      </div>
    </div>
  );
}

export default Progress;