import React from "react";
import { FaGraduationCap, FaTools, FaSuitcase, FaUser, FaCode, FaLanguage, FaMedal, FaCertificate,  FaRegPaperPlane } from "react-icons/fa";
import MyForm from "../UI/MyForm";

const  Contents = () => {

    return(
        <div className="flex flex-col justify-center  justify-items-start gap-10 content-center items-center m-10 font-sans antialiased ">
             <div className="flex-wrap  order-1 justify-self-center m-20 w-1/2 h-1/2">
          <div className="flex items-baseline text-lg m-4 font-medium text-left text-sky-400 underline relative right-5">
             <span  > <FaUser/></span>
            <h1 >
          ABOUT ME
            </h1 >
            </div>
            <p className="place-self-start font-normal leading-loose text-left text-slate-400  whitespace-pre-line">
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

        <div className="order-2 relative right-20 mr-20">
            <div className="flex items-baseline relative right-5 text-lg m-2 font-medium text-left text-sky-400 underline uppercase  ">
            <span ><FaSuitcase/></span>
            <h1 >
                Work Experience
            </h1> 
            </div>
            <div className="text-left text-slate-400">
                <p >Front End web developer in Inspired Entertainment for 6 months</p>
            </div>
        </div>

        <div className="order-3 text-left relative right-20">
            <div className="flex items-baseline relative right-10 text-lg m-4 font-medium text-sky-400 underline uppercase">
                <span><FaGraduationCap/></span>
            <h1 >
                Education
            </h1>
            </div>
            <ul className="list-outside list-disc text-slate-400">
            <li>
            Nirmala H.S.S S Aluva
            10th-80%
            </li>
            <li>
                Gov.H.S.S.Kalamassery
                pluse2-80% 
            </li>
            <li>
                MET's School of Engineering
                Electrical and Electronics Engineering-7.45CGPA
            </li>
            </ul>
        </div>

        <div className="order-4 text-left relative right-1/4 ml-20">
            <div className="flex items-baseline text-lg ml-10  relative right-10 font-medium text-sky-400 underline uppercase">
                <span><FaTools/></span>
            <h1>
                Skills
            </h1>
            </div>
        </div>

        <div className="order-5 text-left relative right-1/4 ml-20">
            <div className="flex items-baseline text-lg relative mr-10 font-medium text-sky-400 underline uppercase">
                <span><FaCode/></span>
                <hi>Project</hi>        
            </div>
        </div>

        <div className="order-6 text-left relative right-1/4 ml-20 pl-20">
        <div className="flex items-baseline text-lg relative ml-20 font-medium text-sky-400 underline uppercase">
            <span><FaLanguage/></span>
            <h1>
                Languages
            </h1>
            </div>
            <div className="text-slate-400 ml-20">
                <p>React,JavaScript,HTML5,CSS,Tailwind CSS</p>
            </div>
        </div>

        <div className="order-7 text-left relative right-1/4 ml-20">
        <div className="flex items-baseline text-lg m-4 font-medium text-sky-400 underline uppercase">
            <span><FaMedal/></span>
            <h1>
                Achievements
            </h1>
            </div>
        </div>

         <div className="order-8 text-left relative right-1/4 ml-20">
         <div className="flex items-baselineex text-lg m-4 font-medium text-sky-400 underline uppercase">
            <span><FaCertificate/></span>
           <h1>
            Certifications
           </h1> 
           </div>
        </div>

           <div className="order-9   ">
            <div>
                <div className="flex items-baseline text-lg m-4 font-medium text-left text-sky-400 underline uppercase relative right-20 mr-20 ">
                    <span><FaRegPaperPlane/></span>
                <h1>
                    Contact
                    </h1> 
                    </div>
            </div>


            <div className=" w-full ">
                <MyForm/>
            </div>

            
        </div>
        
        </div>
    );
}

export default Contents;