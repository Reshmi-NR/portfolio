import { NavLink } from "react-router-dom";

const ButtonProfile = (props) => {
    
    return (
        <div className="absolute top-4 right-0 h-16 w-16 dark:text-gray-500 text-black  hover:underline underline-offset-4">
            <NavLink to='/reshmi' onClick={props.onClick}>
                Home
            </NavLink> 
        </div>
    )
}

export default ButtonProfile;