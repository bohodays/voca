import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';     // useParams hook을 사용하면 url에 있는 정보를 사용할 수 있다.
import useFetch from '../hooks/useFetch';
import Word from './Word';

const Day = () => {
  const { day } = useParams();      // 구조분해할당
  // const wordList = dummy.words.filter((word) => (
  //   word.day === Number(day)
  // ));

  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     })
  // }, [day]);

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <div>
      <h2>Day {day}</h2>
      {words.length === 0 && (<span>Loading...</span>)}       {/* 느린 인터넷 환경에서는 words가 처음엔 기본값인 빈 배열이다. */}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Day;