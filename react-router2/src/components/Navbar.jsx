import { NavLink } from "react-router-dom";

const Navbar = () => {
    const activeStyle = {color:"green"} 
    return (  
        <div>
            {/* Home,Board,Write만들기 */}
            {/* NavLink는 디자인을 줄 수 있음  */}
            {/* NavLink의 경우는 isActive라는 값을 통해서 활성화가 되었을 때 디자인추가 */}
            {/* classNmae도 동일한 형태로 작성할 수 있다 */}
            <NavLink to='/' 
            // 사용할 때는 아래와 같은 화살표 함수 형태로 사용
            // {isActive} 형식으로 구조화 할당을 통해 가져 옴 
            style={ ({isActive})=> isActive ? activeStyle : undefined } end>Home</NavLink> 
            <NavLink to='/boardlist'  style={ ({isActive})=> isActive ? activeStyle : undefined } >Board</NavLink> 
            <NavLink to='/writeform'  style={ ({isActive})=> isActive ? activeStyle : undefined } >Write</NavLink> 
            {/* 주소 작성할 땐, 명사보다 동사로 더 명확하게 작성 */}
        </div>
    );
}

export default Navbar;


