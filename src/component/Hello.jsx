import styles from "./Hello.module.css";

// App.js에서 같은 클래스 이름을 가진 요소가 있다면 css가 같이 적용되어버린다.
// 그래서 Hello.css가 아니라 Hello.module.css로 만들어야한다.
const Hello = () => {
  // 이벤트 적용 방법 1
  const showName = () => {
    alert('Mike');
  }

  const showAge = (age) => {
    alert(age);
  }

  const showText = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show name</button>
      <button onClick={
        // 이벤트 적용 방법 2
        // () => {
        //   alert(30);
        // }
        () => {
          showAge(10);
        }
      }>
        Show age
      </button>
      <input type="text" onChange={showText}/>
    </div>
  );
}

export default Hello;