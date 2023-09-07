import IconSwitch from "../component/UI/IconSwitch"
import Contents from "./content/Contents";
import SideBar from "./UI/SideBar";
import aboutme from "../img/aboutme.png";
import achievements from "../img/achievements.png";
import certificate from "../img/certificate.png";
import contact from "../img/contact.png";
import education from "../img/education.png";
import language from "../img/language.png";
import project from "../img/project.png";
import skill from "../img/skill.png";
import workexperience from "../img/workexperience.png";
import Switcher from "../component/UI/IconSwitch";


const LoginPage = (props) => {


    const menus = [
        {title: "ABOUT ME", src: aboutme},
        {title: "WORK EXPERIENCE", src: workexperience},
        {title: "EDUCATION", src: education},
        {title: "SKILLS", src: skill},
        {title: "PROJECTS", src: project},
        {title: "LANGUAGES", src: language},
        {title: "ACHIEVEMENTS", src: achievements},
        {title: "CERTIFICATIONS", src: certificate},
        {title: "CONTACT", src: contact}
    ]

    return (
        <div className="dark:bg-slate-900 light:bg-amber-950">
            <header className="sticky top-0 z-50">
                <div>
                    <header
                        className="fixed top-0 left-0 w-full h-14 dark:bg-dark-purple items-center px-16 bg-blue-400 shadow-lg ">
                       <fragment>
                           <button onClick={props.onClick}
                                   className="bg-amber-300 dark:bg-white w-14 h-19 border-gray-50 rounded-full hover:bg-sky-700   border-solid border-2 border-blue-200 text-gray-500 light:text-black absolute top-3 right-1">
                            Home
                        </button>

                        <IconSwitch
                            className=" block container box-border h-7 w-8 px-2  leading-9 text-xl rounded fixed top--25px right-60px "/>
                       </fragment>


                        <SideBar menus={menus}/>
                    </header>
                </div>
            </header>
            <main className="relative"><Contents/></main>
        </div>
    );
};

export default LoginPage;