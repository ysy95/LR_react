import React, { useState, useEffect, useRef } from 'react';
import './css/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const answers = {
    '안녕': '안녕하세요! OFD STUDIO입니다, 무엇을 도와드릴까요?',
    '시간표': '저녁 7시부터 10시까지 수업을 진행합니다.',
    '결제': '공인 인증서를 확인해주세요.',
    '강잼': '2019년 하반기쯤 트위치에서 만들어진 신조어로, 좁게는 여러 곳에서 민폐를 끼치는 무개념 저연령층을 지칭하고, 넓게는 모든 저연령층을 통틀어 지칭할 때 사용되는 용어다. 반대말로는 꼰대, 틀딱이 있다.',
    '지애': '전(前) 로저 해적단의 부선장. 해적왕의 오른팔이라고 불리는 사나이로 누구나 한번은 그 이름을 들었을만한 해적계의 전설이다. 이명은 명왕(冥王).',
    '서영': '2012년 9월 15일부터 2013년 3월 3일까지 넝쿨째 굴러온 당신의 후속으로 방영한 KBS 2TV 주말 드라마. 소현경 작가가 집필했다.',
    '병규': '윤곽주사 30cc의 주인공으로 최근 2023년 04월경 레이저 제모를 시작했다. 쿠션으로는 롬앤의 톤업 쿠션을 사용중이다. 주로 청계천 하류에 서식하고있다. 이명으로는 남메기, 남쉥이 등이 있다.',
    '허리케인': '가해자 명모씨에 의한 3월 모일 발생한 사건으로 피해자가 2명이나 속출되었다.',
    '김민돌': '키보드21 마우스34 차슈1 기침3 이렇게4 이제4의 남자',
  };

  useEffect(() => {
    setTimeout(() => {
      addMessage('병규', '안녕하세요! OFD STUDIO입니다. 무엇을 도와드릴까요?');
    }, 1000);
  }, []);

  const addMessage = (sender, message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: sender, message: message },
    ]);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    if (inputValue === '') return;

    addMessage('나', inputValue);

    const answer = answers[inputValue];
    if (!answer) {
      addMessage('병규', '죄송합니다. 그에 대한 답변을 찾지 못했습니다.');
    } else {
      setTimeout(() => {
        addMessage('병규', answer);
      }, 1000);
    }

    setInputValue('');
  };

  const chatlogRef = useRef(null);

  useEffect(() => {
    const chatlogContainer = chatlogRef.current;
    if (chatlogContainer) {
      chatlogContainer.scrollTop = chatlogContainer.scrollHeight;
    }
  }, [messages]);

  return (
    <article className='chatbot'>
      <div id="chatlog" ref={chatlogRef} className='chatlog flex'>
      <h2>챗봇</h2>

        {messages.map((message, index) => (
          <div key={index} className='bubble'>
              <p>{message.sender} : {message.message}</p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} className='chat_form flex'>
        <input
          type="text"
          placeholder="질문을 입력해주세요."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">보내기</button>
      </form>
    </article>
  );
};

export default Chatbot;
