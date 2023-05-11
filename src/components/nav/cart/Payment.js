import React from 'react';


function Payment() {
  return (
    <>
        <h2>구매내역</h2>
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

      <article className='payment_com'>
        <h3>결제완료 <a href='#none'>상세보기 &gt;</a></h3>
        <p>[모니카] <span>39,000</span></p>
        <p><span>결제일 2023. 04. 05</span></p>
      </article>
    </>
  );
}

export default Payment;