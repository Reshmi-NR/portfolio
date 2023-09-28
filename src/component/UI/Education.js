 import nirmala from "../../img/nirmala.jpg"
 import ghsskalamassery from "../../img/ghsskalamassery.png"
 import mets from "../../img/mets.jpg"
 import { FaPaperPlane } from "react-icons/fa"

 
 const Education = () => {
    return(
        <div>
            <div>
                <div>
                    <img src={mets}/>
                </div>
                <div>
                    <h1>MET's School of Engineering (2016-2020)</h1>
                    <h2>Bachelor's Degree, Engineering</h2>
                    <h3><FaPaperPlane/> Kerala, India</h3>
                </div>
            </div>

            <div>

            <div>
                <img src={ghsskalamassery}/>
                </div>
                <div>
                    <h1>Government Higher Secondary School, Kalamasseri (2014-2016)</h1>
                    <h2>Higher Secondary, EMHSS</h2>
                    <h3><FaPaperPlane/> Kerala, India</h3>
                </div>
            </div>

            <div>
            <div>
                <img src={nirmala}/>
                </div>
                <div>
                    <h1>Nirmala Higher Secondary School (2006-2014)</h1>
                    <h2>High School, EMHSS</h2>
                    <h3><FaPaperPlane/> Kerala, India</h3>
                </div>
            </div>


        </div>
    )
 }

 export default Education;