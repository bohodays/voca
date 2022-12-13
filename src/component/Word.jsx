import { useState } from 'react';

const Word = (props) => {
  const [word, setWord] = useState(props.word);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = () => {
    setIsShow(!isShow);
  }

  const toggleDone = () => {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        ...word,          // 기존 데이터 넣어주기
        isDone: !isDone,   // 변경할 데이터
      }),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          setIsDone(!isDone);
        }
      })
  }

  const del = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setWord({ id: 0});
          }
        })
    }
  }

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? 'off' : ''}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
        <button className='btn_del' onClick={del}>삭제</button>
      </td>
    </tr>
  );
}

export default Word;