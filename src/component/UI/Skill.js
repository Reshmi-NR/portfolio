import { FaHtml5,
    FaCss3Alt,
    FaJs, 
    FaReact,
    FaPython,
    FaJenkins,
    FaSass,
    FaDocker
} from "react-icons/fa"

const Skills = () => {
    return (
        <div className="grid gap-12">
            <div className="grid gap-8 text-2xl">
                <h1>Web Design & Development</h1>
                <div className="grid grid-cols-4 gap-1">
                <div className="box-content items-baseline border-black pl-1 rounded-lg dark:text-slate-400 dark:border-slate-400  flex text-xl  flex-row gap-2 place-content-center flex-wrap h-6 w-32 p-4 border-2">
                <FaHtml5 className="text-xl "/>
               <h2> HTML5</h2>
            </div>

            <div className="box-content items-baseline border-black pl-1 rounded-lg dark:text-slate-400 dark:border-slate-400  flex text-xl  flex-row gap-2 place-content-center flex-wrap h-6 w-32 p-4 border-2">
                <FaCss3Alt className="text-xl "/>
                <h2>CSS</h2>
            </div>

            <div className="box-content items-baseline border-black pl-1 rounded-lg dark:text-slate-400 dark:border-slate-400  flex text-xl  flex-row gap-2 place-content-center flex-wrap h-6 w-32 p-4 border-2">
                <FaSass className="text-xl "/>
                <h2>SASS</h2>
            </div>

            <div className="box-content items-baseline border-black pl-1 rounded-lg dark:text-slate-400 dark:border-slate-400  flex text-xl  flex-row gap-2 place-content-center flex-wrap h-6 w-32 p-4 border-2">
                <FaJs className="text-xl "/>
                <h2>JavaScript</h2>
            </div>
                </div>
            
            </div>

            <div className="grid gap-8 text-2xl">
                <h1>Frontend JavaScript framework</h1>
            <div className="box-content items-baseline border-black pl-1 rounded-lg dark:text-slate-400 dark:border-slate-400  flex text-xl  flex-row gap-2 place-content-center flex-wrap h-6 w-32 p-4 border-2">
                <FaReact className="text-xl "/>
                <h2>Reactjs</h2>
            </div>

            </div>

            <div className="grid gap-8 text-2xl">
                <h1>Backend Development</h1>
            <div className="box-content items-baseline border-black pl-1 rounded-lg dark:text-slate-400 dark:border-slate-400  flex text-xl  flex-row gap-2 place-content-center flex-wrap h-6 w-32 p-4 border-2">
                <FaPython/>
                <h1>Python</h1>
            </div>
            </div>
            
            <div className="grid gap-8 text-2xl">
                <h1>CI CD Tools</h1>
                <div className="grid grid-cols-3 gap-0">
                <div className="box-content items-baseline border-black pl-1 rounded-lg dark:text-slate-400 dark:border-slate-400  flex text-xl  flex-row gap-2 place-content-center flex-wrap h-6 w-32 p-4 border-2">
            <h1> Ansible</h1>
            </div>

            <div className="box-content items-baseline border-black pl-1 rounded-lg dark:text-slate-400 dark:border-slate-400  flex text-xl  flex-row gap-2 place-content-center flex-wrap h-6 w-32 p-4 border-2">
                <FaJenkins/>
                <h1>Jenkins</h1>
            </div>

            <div className="box-content items-baseline border-black pl-1 rounded-lg dark:text-slate-400 dark:border-slate-400  flex text-xl  flex-row gap-2 place-content-center flex-wrap h-6 w-32 p-4 border-2">
            <FaDocker/>
            <h2>Docker</h2>
            </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills;