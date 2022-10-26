import { useContext } from "react";
import { Link,Outlet } from "react-router-dom";
import { StateContext } from "../context/ContextComp";

const BoardList = () => {
    {/** 값을 가져올때, value에 객체로 들어오지 않았다면 구조화할당 할 필요가 없음 */}
    const boardlist = useContext(StateContext); // usecontext로 전체를 가져옴 
    // app에 value안에 <StateContext.Provider value={boardlist}> 보드리스트 그대로 들고 옴
    return (  
        <div>
             {/* 문자열을 변수와 같이 쓸땐 {}씀 */}
            { 
            // ajax와 같이 비동기를 이용하여 값을 가져올 때
            // 값이 없을 때(값을 가져오는 시간 동안) 
            // 출력하지 않거나, 로딩중이라는 UI를 띄워서 오류가 나지 않게 한다
            // 빈 데이터의 속성으로 들어가면 타입오류가 생김.
            
            // 보드리스타가 참일때 화면 출력 : 이유는 위에 
            // ajsx는 값을 관리 할 때 주의 : 객체가 아닌데 속성으로 들어갈때(아래)
                boardlist && boardlist.map((item)=>(
                    <Link to={'/boardlist/'+item.id} key={item.id}>{item.id}</Link>))
                    // 링크는 주소를 작성 -> '/:id'로 들어가는 주소 적어줌 , id값이 여러개 들어갈 수 있으므로 
                    // {}를 통해 js로 사용함(문자열+숫자 ->문자출력)
            }
            {/* outlet을 통해 props값을 전달할 수 없다 */}
            {/* props값을 전달할 때는 검포넌트를 통해서 직접 전달 : App에 있는 컴포넌트로 전달*/}
            <Outlet />
        </div>
    );
}

export default BoardList;

