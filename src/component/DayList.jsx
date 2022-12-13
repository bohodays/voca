// 더미 데이터 불러오기
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const DayList = () => {
  // const [days, setDays] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((data) => {
  //       setDays(data);
  //     })
  // }, []);       // 빈배열을 넣으면 렌더링직후 딱 한번만 실행시킨다!

  
  const days = useFetch("http://localhost:3001/days");
  
  if (days.length === 0) {
    return <span>Loading...</span>
  }

  return (
    <ul className='list_day'>
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DayList;