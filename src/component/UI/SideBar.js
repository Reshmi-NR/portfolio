import React, {useState} from "react";


const SideBar = (props) => {
    const [open, setOpen] = useState(false);


    function handleClickAction(title) {
        let element = document.getElementById(title);
        let fixedHeaderHeight = 75;
        element.scrollIntoView(true);
        let scrolledY = window.scrollY;

        if(scrolledY){
            window.scroll(0, scrolledY - fixedHeaderHeight);
        }
    }

    return (
        <div className="flex ">
            <div
                className={`${open ? "w-72 " : "w-11"} duration-300 h-screen dark:bg-dark-purple text-3xl absolute left-0 top-0`}>

                <button className={` cursor-pointer   border-dark-purple `} onClick={() => setOpen(!open)}>
                    <svg className={`${!open ? "absolute top-3 left-2" : "absolute top-3 left-60"}`}
                         fill="currentColor"
                         viewBox="0 0 16 16"
                         height="1em"
                         width="1em"
                         stroke="currentColor"
                         aria-hidden="true"
                    >
                        <path
                            d="M14.5 3a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h13zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z"/>
                        <path
                            d="M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-1-5a.5.5 0 11-1 0 .5.5 0 011 0zM4 8a.5.5 0 11-1 0 .5.5 0 011 0zm0 2.5a.5.5 0 11-1 0 .5.5 0 011 0z"/>
                    </svg>

                </button>

                <div>
                    <ul className="pt-6 divide-y divide-blue-200 divide-solid">
                        {props.menus.map((menus, index) => (
                            <li key={index}
                                className={`text-gray-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menus.gap ? "mt-9" : "mt-2"}`}
                                onClick={() => handleClickAction(menus.title)}>
                                <img src={menus.src}/>
                                <span
                                    className={`${!open ? "invisible" : "visible"} origin-left duration-200`}>{menus.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div
                className={`px-7 text-2xl font-semibold text-black dark:text-white ${!open ? "absolute top-2 left-6" : "absolute top-2 left-1/4"}`}>
                <h1>
                    Reshmi Radhakrishnan
                </h1>

            </div>

        </div>
    );
}

export default SideBar;