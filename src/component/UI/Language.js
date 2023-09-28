import Typewriter from "typewriter-effect";


//let typeUpper = ["എന്റെ മാതൃഭാഷ മലയാളമാണ്", "मैं हिंदी समझ और बोल सकता हूं", "I am good in English and can communicate fluently in the language"];
//let count = 0; 

const languagesList= [
    {
        id: 1,
        language: "English",
        text: "I'm pretty fluent in English.",
    },
    {
        id: 2,
        language: "Malayalam",
        text: "മലയാളം എന്റെ മാതൃഭാഷയാണ്.",
        translation: "Malayalam is my native language.",
    },
    {
        id: 3,
        language: "Hindi",
        text: "मैं हिंदी समझ और बोल सकता हूं",
        translation: "I can understand and speak hindi.",
    },
   
];
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

            <Typewriter
                options={{
                    delay: 40,
                    loop: true,
                    cursor: "",
                }}
                onInit={(typewriter) => {
                    for (let language of languagesList) {
                        typewriter
                            .typeString(`<div class="text-3xl font-bold">${language.text}</div>`)
                            .typeString(language.translation ? `<div class="mt-2 text-base">${language.translation}</div>` : "")
                            .pauseFor(3000)
                            .deleteAll();
                    }
                    typewriter.start();
                }}
            />


            <div className="flex flex-wrap gap-5 prose prose-sm prose-neutral dark:prose-invert">
                {languagesList.map(({ id, language }, index) => (
                    <fragment key={id}>
                        <span>{language}</span>
                    </fragment>
                ))}
            </div>
            
          {/*  <Typerwriter
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
            />*/}
           {/* <div>Malayalam/Hindi/English</div>*/}
        </div>
    )
 }

 export default Language;