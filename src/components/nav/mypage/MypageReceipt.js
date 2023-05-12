import React from 'react';
import MypagePayments from './MypagePayments';
import MypagePurchase from './MypagePurchase';

function MypageReceipt(props) {
  return (
    <div>
      <MypagePayments />
      <MypagePurchase />
    </div>
  );
}

export default MypageReceipt;