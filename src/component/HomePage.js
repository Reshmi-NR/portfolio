import homepageimg from "../img/homepageimg.jpg";
import reshmi from "../img/reshmi.jpg"
  
const HomePage = (porps) => {
  
return(
    <div>
        <div>
            < h1 className=" absolute top-1/2 right-1/3 mr-20  text-white font-sans text-2xl italic font-medium text-center text-white ">Hi I'am
             RESHMI RADHAKRISHNAN
             Front-end developer</h1>
             <img class="w-1/4 absolute bottom-1/2 left-1/3 rounded-ss-full rounded-se-full rounded-es-full rounded-ee-full " src={reshmi}/>

            <div>
                <button onClick={porps.onClick} className=" absolute  bottom-1/4 right-1/2 h-13 rounded-full ring-0 ring-blue-500 text-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 border-2 ">View Profile</button>
            </div>

        <div>
            <img className="bg-cover  h-full w-full  " src={homepageimg}/>
        </div>

        </div>
    </div>
)
};

export default HomePage;