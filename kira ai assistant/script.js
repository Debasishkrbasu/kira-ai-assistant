let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
function speak(text){
    let textspace = new SpeechSynthesisUtterance (text)
    textspace.rate=1
    textspace.pitch=1
    textspace.volume=1
    textspace.lang="hi-GB"
    window.speechSynthesis.speak(textspace)
}
function wishMe(){
    let day= new Date()
    let hours= day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning sir")
    }
    else if(hours>12 && hours<4){
        speak("Good after Noon sir")
    }
    else{
        speak("Good Night sir")
    }
}
// window.addEventListener('load',() => {
//     wishMe()
// })

let speachRecognation= window.SpeechRecognition || window.webkitSpeechRecognition 
let recognation = new speachRecognation()
recognation.onresult = (event) =>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", ()=>{
    recognation.start()
    btn.style.display="none"
    voice.style.display = "block"
})

function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello")){
        speak("Hello Sir how can i help you")
    }
    else if(message.includes("who are you")){
        speak("i am kira virtual assistant created by debasish sir")
    }
    else if(message.includes("i love you ")){
        speak("sorry sir i am virtual assistant i have no feeling")
    }
    else if(message.includes("open youtube") || message.includes("opening youtube")){
        speak("opening Youtube sir")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook sir")
        window.open("https://www.facebook.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening instargram sir")
        window.open("https://www.instargram.com/","_blank")
    }
    else if(message.includes("i love you kira ")){
        speak("sorry sir i am virtual assistant i have no feeling")
    }
    else if(message.includes("i love you ")){
        speak("sorry sir i am virtual assistant i have no feeling")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator sir")
        window.open("calculator://","_blank")
    }
    else if(message.includes("time")){
       let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
     }
    else{
        speak(`this is what i am find in web ${message.replace("kira"," ")}|| ${message.replace("Akira"," ")}}`)
        window.open(`https://www.google.com/search?q=${message.replace("kira"," ")}`)
    }
  
}
