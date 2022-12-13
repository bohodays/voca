import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import State from './component/State';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<DayList />} />
          <Route path='/day/:day' element={<Day />} />      {/* :을 써야 동적인 주소를 사용할 수 있다. 장고에서 /<int: pk>/ 했던것처럼 */}
          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
          <Route path='*' element={<EmptyPage />} />        {/* path에 *을 적으면 앞의 모든 조건에 해당하지 않는 경우 해당 Route로 이동한다. */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
