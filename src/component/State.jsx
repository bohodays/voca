import { useState } from 'react';
import styles from "./Hello.module.css";
import UserName from './UserName';

const State = (props) => {
  const [name, setName] = useState('Mike');
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

  const changeName = () => {
    // const newName = name === 'Mike' ? 'Jane' : 'Mike';
    // setName(newName);
    setName(name === 'Mike' ? 'Jane' : 'Mike');
    setAge(age + 1);
  }

  return (
    <div>
      <h1>State</h1>
      <h2>현재 이름 : {name} ({age}) ({msg})</h2>
      <UserName name={name} />
      <button onClick={changeName}>이름변경</button>
    </div>
  );
}

export default State;