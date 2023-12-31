import React from "react";
import {
    FaGraduationCap,
    FaTools,
    FaSuitcase,
    FaUser,
    FaCode,
    FaLanguage,
    FaMedal,
    FaRegPaperPlane,

} from "react-icons/fa";
import MyForm from "../UI/MyForm";
import Language from "../UI/Language";
import reshmi2 from "../../img/reshmi2.jpg"
import Skills from "../UI/Skill";
import Education from "../UI/Education";
import WorkExperience from "../UI/WorkExperience";
import Certifications from "../UI/Certifications";

const Contents = () => {

    return (
        <div
            className="flex flex-col gap-10 justify-center  justify-items-start  content-center items-center m-4 font-sans antialiasing  dark:bg-slate-900">
                
            <div className="flex-wrap  order-1 justify-self-center m-20 w-1/2 h-1/2">
                <div
                    className="flex items-baseline text-lg m-4 font-medium text-left text-sky-400 dark:text-emerald-600 underline relative right-5" id={"ABOUT ME"}>
                    <span> <FaUser/></span>
                    <h1>
                        &nbsp;ABOUT ME
                    </h1>
                </div>

                <div>
                <img src={reshmi2} className=" w-80 h-80 object-right-top rounded-full  outline-offset-8 outline-8 dark:outline-blue-200 outline-blue-300 outline contrast-125 hue-rotate-15 drop-shadow-2xl shadow-2xl  bg-cyan-500 shadow-cyan-500/50 float-right"/>
                <p className="place-self-start clear-left font-normal leading-loose text-left text-black dark:text-slate-400 whitespace-pre-line">
                    Hi there,

                    my name is Reshmi Radhakrishnan and I'm a React JS front-end developer with 4 months of
                    experience in the web bet gaming industry. I'm passionate about creating engaging and
                    interactive user experiences for online gamblers.

                    I have a strong understanding of React's component-based architecture and I'm proficient in
                    using React hooks, Redux, and other React libraries. I'm also familiar with HTML, CSS, and
                    JavaScript, and I have experience working with a variety of front-end frameworks and tools.

                    In my previous role at Inspired Entertainment, I was responsible for developing and maintaining
                    the front-end of a new web bet gaming site.In addition to my front-end development skills, I
                    also have experience with Jenkins deployment, Ansible, Bitbucket, and Git.
                </p>
                </div>
                <div
                    className="flex items-baseline text-lg m-4 font-medium text-left text-sky-400 dark:text-emerald-600 underline relative right-5" id={"WORK EXPERIENCE"}>
                    <span><FaSuitcase/></span>
                    <h1>
                        &nbsp;Work Experience
                    </h1>
                </div>
                <div className="text-left text-black dark:text-slate-400">
                   <WorkExperience/>
                </div>

                <div
                    className="flex items-baseline text-lg m-4 font-medium text-left text-sky-400 dark:text-emerald-600 underline relative right-5" id={"EDUCATION"}>
                    <span><FaGraduationCap/></span>
                    <h1>
                        &nbsp;Education
                    </h1>
                </div>
                <div className="text-left text-black dark:text-slate-400 m-4">
                    <ul className="list-outside list-disc">
                        <div>
                            <Education/>
                        </div>
                    </ul>
                </div>
                <div
                    className="flex items-baseline text-3xl m-4 font-medium text-left text-sky-400 dark:text-emerald-600 underline relative right-5" id={"SKILLS"}>
                    <span><FaTools/></span>
                    <h1>
                        &nbsp;Skills
                    </h1>
                </div>
                <div className="text-left  text-black dark:text-slate-400">
                 <Skills/>
                </div>
                <div
                    className="flex items-baseline text-lg m-4 font-medium text-left text-sky-400 dark:text-emerald-600 underline relative right-5" id={"PROJECTS"}>
                    <span><FaCode/></span>
                    <h1>&nbsp;Project</h1>
                </div>
                <div className="text-left text-black dark:text-slate-400">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        adiqua minim veniam quis nostrud exercitation ullamco</p>
                </div>
                <div
                    className="flex items-baseline text-lg m-4 font-medium text-left text-sky-400 dark:text-emerald-600 underline relative right-5" id={"LANGUAGES"}>
                    <span><FaLanguage/></span>
                    <h1>
                        &nbsp;Languages
                    </h1>
                </div>
                <div className="text-left text-black dark:text-slate-400 ml-4">
                    <Language/>
                  
                </div>
                <div
                    className="flex items-baseline text-lg m-4 font-medium text-left text-sky-400 dark:text-emerald-600 underline relative right-5" id={"ACHIEVEMENTS"}>
                    <span><FaMedal/></span>
                    <h1>
                        &nbsp;Achievements
                    </h1>
                </div>
                <div className="text-left text-black dark:text-slate-400">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        adiqua minim veniam quis nostrud exercitation ullamco</p>
                </div>
                <div
                    className="flex items-baseline text-lg m-4 font-medium text-left text-sky-400 dark:text-emerald-600 underline relative right-5" id={"CERTIFICATIONS"}>
                    <span><FaMedal/></span>
                    <h1>
                        &nbsp;Certifications
                    </h1>
                </div>
                <div className="text-left text-black dark:text-slate-400">
                    <Certifications/>
                </div>
                <div className="order-9">
                    <div>
                        <div
                            className="flex items-baseline text-lg m-4 font-medium text-left text-sky-400 dark:text-emerald-600 underline relative right-5" id={"CONTACT"}>
                            <span><FaRegPaperPlane/></span>
                            <h1>
                                &nbsp;Contact
                            </h1>
                        </div>
                    </div>
                    <div className=" w-full ">
                        <MyForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contents;