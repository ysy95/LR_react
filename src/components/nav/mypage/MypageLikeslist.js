import React from 'react';
import MypageLikes from './MypageLikes';

function MypageLikeslist({setUserInfo, userInfo, zimList, setzimList, memberclasslist}) {
  // const zimList = memberclasslist.filter((item) =>
  //   item.MC_title.toLowerCase().includes()
  // );
  return (
    <section className='likes_list'>
      <h2>찜한 강의 목록</h2>
      <MypageLikes />
    </section>
  );
}

export default MypageLikeslist;