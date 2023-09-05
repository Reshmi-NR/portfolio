import Typerwriter from "typewriter-effect";


//let typeUpper = ["എന്റെ മാതൃഭാഷ മലയാളമാണ്", "मैं हिंदी समझ और बोल सकता हूं", "I am good in English and can communicate fluently in the language"];
//let count = 0; 


 const Language = ()  => {


 //let typeLower= ["Malayalam is my native language", "I can understood and speak Hindi", ""];
 //let count = 0;

 


    return (
       // <div>
         //   <div>
           //<Typerwriter
           //onInit={(typewrite) => {
            //typewrite.typeString(cycleArray).pauseFor(3000).deleteAll().start();
          // }}
           ///>
          // </div>
           //<div>
           //<Typerwriter
           //onInit={(typewrite) => {
            //typewrite.typeString().pauseFor(1000).deleteAll().start();
           //}}
           ///>
           //</div>
        //</div>
        <div>
            
            <Typerwriter
            options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                    "എന്റെ മാതൃഭാഷ മലയാളമാണ്.",
                    "मैं हिंदी समझ और बोल सकता हूं",
                    "I am pretty fluently in English.",
                ],
            }}
            />

            <Typerwriter
            options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: [
                    "Malayalam is my native language.",
                    "I can understood and speak Hindi",
                    "",
                ],
            }}
            />
            <div>Malayalam/Hindi/English</div>
        </div>
    )
 }

 export default Language;