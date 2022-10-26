import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SetContext, StateContext } from "../context/ContextComp";

// 값을 추가 하는 내용
const Writeform = () => {
    const navigate = useNavigate(); // 이동 가능 

    const boardlist = useContext(StateContext);  
    const setBoard = useContext(SetContext);
    const [context, setContext] = useState(""); // 데이터가 다 들어왔다면 값 전달 저장

    // 데이터와 관련된 내용은 서버측에서 관리하는 내용
    // 서버를 사용하고 있지않기 때문에, 전체 데이터를 리액트에서 관리
    const addBoard = () => {
        const newList = boardlist.concat(
            {id: boardlist.length+1 , context : context}
            )
        setBoard(newList);
        // Link와 같은 일을 할 수 있다
        // -1 값을 넣어주면 뒤로가기도 가능
        navigate('/boardlist')
        // 이거 안하면 확인누르고도 작성내용이 남아 있음 
    }
    return (  
        <div>
            <h1>Writeform입니다</h1>
            <textarea onChange={(e)=>{setContext(e.target.value)}} 
                    cols="30" rows="10"
                    // 값을 추가하는 내용, 그걸 가지고오는건 onchange
                    ></textarea>
            <button onClick={addBoard}>추가</button>
        </div>
    );
}

export default Writeform;