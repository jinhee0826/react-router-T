import './App.css';
import Layout from './page/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Writeform from './page/Writeform';
import BoardList from './page/BoardList';
import BoardContext from './page/BoardContext';
import { useEffect, useState } from 'react';
import { SetContext, StateContext } from './context/ContextComp';



function App() {
  const [boardlist, setBoard] = useState([]);
  // 실행하자 마자 ajax를 통해 값을 들고 올 수 있다
  useEffect(()=>{
    // Fetch를 사용한 ajax
    async function getData(){
      // response로 값을 받아오는 시간이 걸림 
      // > 데이터가 없는 동안에 어떻게 표현할지 작성
      const response = await fetch('boardlistdata.json');
      const data = await response.json();
      console.log(data);
      setBoard(data.boardlist)
    }
    getData();
  },[]);

  return (
    <div className="App">
      {/* 데이터를 전체적으로 관리하기 위해 Context사용 */}
      <StateContext.Provider value={boardlist}>
        <SetContext.Provider value={setBoard}>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* pat='/'대신에 index사용 */}
            <Route path='/' element={<Home />} />
              <Route path='writeform' element={<Writeform />} />
            <Route path='boardlist' element={<BoardList />}>
              <Route path=':id' element={<BoardContext />} />
              {/* id앞에 :쓰는거는 params값을 쓰는것 : 값전달, 동일한 화면 => ex) 게시물 화면 */}
            </Route>
          </Route>
        </Routes>
        </SetContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
