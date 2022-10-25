import './App.css';
// 3. Routes와 Route를 가져와서 사용
import { Routes, Route, Link }  from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Test from './page/Test';
import KoreanPage from './page/KoreanPge';
import NonFound from './page/NonFound';
import Number from './page/Number';
import { useState } from 'react';
import NumberId from './page/NumberId';
import Board from './page/Board';
import BoardId from './page/BoardId';

function App() {
  const [list, setList] = useState([1,2,3,4,5]);

  return (
    <div className="App">
      <h1>리액트 라우터를 사용하게 된 것을 환영합니다</h1>
      <div>
        {/* Link를 통해서 컴포넌트산의 이동을 할 수 있다 */}
        <Link to="/about">about</Link> | {/* 새로고침 활성화X */}
        <p></p> {/* a태그도 가능하지만 새로고침이 일어남으로 데이터가 리셋된다 */}
        <a href='/about'>about-a tag</a> | {/* 새로고침 활성화 */}
        <p></p>
        <Link to="/test">test</Link>
        <p></p>
        <Link to="/number/1">1</Link> | {" "}
        <Link to="/number/2">2</Link>
        <br />
        {
          list.map((item)=>(
            <Link to ={"/number/"+item}>{item}
            {/* 각각의 위치값을 가진 number가 생성됨 */}
            </Link> 
            
          ))
        }
      </div>
      {/* 주고마다 하나의 화면을 가지게 됨 :
       Route에 보여질 화면을 Routes로 묶어줌  */}
      <Routes>
        {/* path를 통해 주소를 연결, element를 통해 컴포넌트 연결 */}
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />} />
        {/* Route를 통해서 test입니다를 출력하는 Test페이지를 만들고
        Link를 통해서 들어갈 수 있도록 작성해주세요 */}
        <Route path='test' element={<Test />}> 
        {/* 중첩 Route
        <Route path='ko' element={<KoreanPage />} ></Route> */}
        </Route>
        {/* 여러 주소로 하나에 컴포넌트에 연결가능, 원하는 주소작성 가능 */}
        <Route path='test/ko' element={<KoreanPage />} />
        <Route path='test/es' element={<KoreanPage />} />
        <Route path='test/fr' element={<KoreanPage />} />
        {/* 지정한 주소 이외에 들어갔을때 *을 통해 모든 주소접근을 확인할 수 있다 */}
        {/* 존재하는 페이지가 없다고 알려주는데 사용 */}
        <Route path="*" element={<NonFound />}/>

        {/* :id는 변수이름 id를 갖는 값을 주소를 통해 전달할 수 있다 */}
        {/* id 위치에 값을 적어주면 그 값이 id:값 과 같은 형채로 params에 전달 */}
        {/* 위치를 정해주는 params값에 한번 더 적어주면 더 안전함: number/:id/page/:name  */}
        <Route path='number' element={<Number />}>
          {/* Outlet을 통해 그 공간에 NumberId를 출력한다 */}
          {/* 중첩 : 페이지 안에 바뀌는 페이지가 있는 것 */}
          <Route path=':id' element={<NumberId />} />
        </Route>

        {/* Board페이지를 만들어서 BoardId페이지에 params값을 출력하세요
        Board 페이지에는 /board/1 과 같이 1~10까지로 접근 할 수 있는 Link있음
        Board 페이지에는 params을 가져와서 출력 */}
        <Route path='board' element={<Board />}>
          <Route path='id' element={<BoardId />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
