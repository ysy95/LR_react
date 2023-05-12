import React, { useState, useEffect, useRef } from 'react';

import './css/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const answers = {
    '안녕': '안녕하세요! OFD STUDIO입니다, 무엇을 도와드릴까요?',
    '시간표': '저녁 7시부터 10시까지 수업을 진행합니다.',
    '결제': '공인 인증서를 확인해주세요.',
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
