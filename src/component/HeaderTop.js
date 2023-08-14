import { Fragment, useState} from "react";
import SunIconButtons from "./button/SunIconButton";
import SideBar from "./UI/SideBar";



const HeaderTop = () => {
const[themes, setThemes] = useState();

const sunIconHandler = () => {
    setThemes();
}
     
    return (
        <Fragment>
            <header className="fixed top-0 left-0 w-full h-14 bg-dark-purple  items-center px-16 shadow-lg shadow-black">
                 <button className="bg-sky-500 w-14 h-19 border-gray-50 rounded-full hover:bg-sky-700   border-solid border-2 border-blue-200 text-gray-500 absolute top-3 right-12">
                Home
                </button>
                <SunIconButtons onClick={sunIconHandler}/>
                <SideBar/>
            </header>
        </Fragment>
    );
}

export default  HeaderTop;