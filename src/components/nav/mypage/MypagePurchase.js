import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function MypagePurchase() {
  return (
    <>
    <article className='payment_com'>
    <div className='flex'>
    <h3>결제완료</h3>
    <a href='#none'>상세보기     <FontAwesomeIcon icon={faAngleRight} /></a>
    </div>
    <div className='flex'>
    <p>[모니카]지애는 늘 집에 가고 싶다.</p>
    <p>39,000원</p>
    </div>
    <p>결제일 2023. 04. 05</p>
    </article>
    </>
  );
}

export default MypagePurchase;