import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const CreateWord = () => {
  const days = useFetch('http://localhost:3001/days');
  const native = useNavigate();     // useHistory는 현재 버전에서 종료되어서 useNavigate를 사용해야한다. 생성 후 생성 위치로 보내기 위해서 사용한다.
  const [isLoading, setIsLoading] = useState(false);      // 이렇게 하지 않으면 버튼을 연속으로 여러번 누르면 요청이 연속으로 여러번간다. (통신 중 요청 방지)

  const onSubmit = (event) => {
    event.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      // console.log(engRef.current.value);
      // console.log(korRef.current.value);
      // console.log(dayRef.current.value);
  
      fetch(`http://localhost:3001/words/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone : false,
        }),
      })
        .then((response) => {
          if (response.ok) {
            alert('생성이 완료 되었습니다!');
            native(`/day/${dayRef.current.value}`);    // 생성 후 생성 위치로 보내기 위해서 사용한다.
            setIsLoading(false);                       // 모든 작업이 완료되면 false로 바꿔주어야 한다.
          }
        })
    }

  }

  const engRef = useRef(null);      //useRef는 DOM에 접근할 수 있게 해준다. 예를 들어, 스크롤 위치를 확인하거나 포커스를 줄 때 사용한다. 요소에 연결도 해주어야 한다!
  const korRef = useRef(null);      
  const dayRef = useRef(null);      

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder='computer' ref={engRef} />     {/* useRef 연결 */}
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder='컴퓨터' ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef} >
          {days.map((day) => (
            <option key={day.id} value={day.day}>{day.day}</option>
          ))}
        </select>
      </div>
      <button style={{
        opacity: isLoading ? 0.3 : 1,
      }}>{isLoading ? "Saving..." : "저장" }</button>
    </form>
  );
}

export default CreateWord;