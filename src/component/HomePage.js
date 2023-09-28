//import homepageimg from "../img/homepageimg.jpg";
//import Reshmi1 from "../img/Reshmi1.jpg"
import reshmi from "../img/reshmi.jpg"
//import reshmi3 from "../img/reshmi3.jpg"
import{useNavigate} from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
  
const HomePage = () => {
    const navigate = useNavigate();

    function navigateHandler () {
        navigate('/profile');
    }
  
return(
    <div className="">
        
        <div >
            <img className="bg-cover h-full bg-scroll w-full grayscale-0 contrast-50 " src={reshmi}/>
        </div>
        <div className="flex space-x-6">
            <div  className="font-extrabold">
           <h2 className=" ml-1 fixed top-44 left-20  text-5xl font-sans font-semibold italic animate-text-slide-1 text-center text-white">I'M</h2>
           <h1 className="mr-2.5 fixed top-60 left-20 text-6xl font-sans font-bold italic  text-center animate-pulse bg-gradient-to-r  from-yellow-600 to-lime-300 bg-clip-text text-transparent stroke-slate-50 stroke-[20px]">RESHMI RADHAKRISHNAN</h1>
           <h2 className="pr-2 fixed top-80 left-20 text-7xl font-sans font-semibold italic animate-text-slide text-center text-white">I'M A FRONT END DEVELOPER</h2>
           <p className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-white duration-30 fixed bottom-96 left-20 text-3xl font-sans font-medium italic text-center text-white ">Explore More About My Porfile..</p>
           </div>
                <button onClick={navigateHandler} className=" fixed mt-11 bottom-96 left-1/4 border-2 border-white text-lg text-white font-bold py-2 px-4 rounded  bg-gradient-to-r from-green-400 to-blue-500  ">View Profile</button>
           </div>

           <div>
            <a href="https://www.instagram.com/reshmi526/?next=%2F" target="_blank" ><FaInstagram className="fixed bottom-96 right-28 w-11 h-11 stroke-1 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:animate-bounce"/></a>
            <a href="https://www.linkedin.com/in/reshmi-nr-8488b5246/" target="_blank" ><FaLinkedinIn className="fixed bottom-64 right-28  w-11 h-11 stroke-1  text-white bg-blue-500 hover:animate-bounce"/></a>
            <a href="https://www.facebook.com/profile.php?id=61551691354786" target="_blank" ><FaFacebookF className="fixed bottom-28 right-28  w-11 h-11 stroke-1 text-white bg-blue-400 hover:animate-bounce"/></a>
           
           </div>
    </div>
)
};

export default HomePage;