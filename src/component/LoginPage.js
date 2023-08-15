import React, {Fragment} from "react";
import Contents from "./content/Contents";
import SunIconButtons from "./button/SunIconButton";
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
        <div>
            <header className="sticky top-0 z-50">return(
                <div>
                    <header
                        className="fixed top-0 left-0 w-full h-14 bg-dark-purple  items-center px-16 shadow-lg shadow-black">
                        <button onClick={props.onClick}
                                className="bg-sky-500 w-14 h-19 border-gray-50 rounded-full hover:bg-sky-700   border-solid border-2 border-blue-200 text-gray-500 absolute top-3 right-12">
                            Home
                        </button>
                        <SunIconButtons/>
                        <SideBar menus={menus}/>
                    </header>
                </div>
                );
            </header>
            <main className="relative"><Contents/></main>
        </div>
    );
};

export default LoginPage;