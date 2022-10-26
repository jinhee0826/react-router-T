import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    // layout으로 전체 구성을 만들어 쥼
    return (  
        <div>
            <Navbar /> {/** 고정된 공간  */}
            <br></br>
            <Outlet /> {/** 화면이 바뀌는 공간 => 주소에 따라서 내용들이 바뀜 (boardlist, writeform) */}
        </div>
    );
}

export default Layout;