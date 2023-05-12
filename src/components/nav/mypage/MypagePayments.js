import React from 'react';


function MypagePayments() {
  return (
    <>
      <h2 className='payment_t'>구매내역</h2>
      <article className='payment_list'>
        <table>
          <caption>구매내역</caption>
          <thead>
            <th>총 구매건 수</th>
            <th>환불 진행건 수</th>
            <th>환불 완료건 수</th>
          </thead>
          <tbody>
            <td className='total'>6</td>
            <td className='refund'>1</td>
            <td className='refund_com'>1</td>
          </tbody>
        </table>
      </article>

  
    </>
  );
}

export default MypagePayments;