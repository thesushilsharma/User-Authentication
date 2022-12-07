// let yourGlobalVariable = "global value"; //global variable           
// function displayGlobalVal() {
//   alert(yourGlobalVariable); //global variable , result  is "global value"
// };


///////////////////////////////////////////////////TIMER FUNCTIONS/////////////////////////////////////////////
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;
// const total_score=localStorage.getItem('last_scores');
// var ts= parseInt(total_score);
// localStorage.setItem('last_scores', ts);

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

let TIME_LIMIT = 180;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
// const total_score=localStorage.getItem('last_scores');
// var ts= parseInt(total_score);
// localStorage.setItem('last_scores', ts);

function init() {
  document.getElementById("app").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `;
};

function onTimesUp() {
  clearInterval(timerInterval);
  document.getElementById("app").innerHTML = " " ;
  
  // const total_score1=parseInt(localStorage.getItem('current_scores'));
  // var ts= parseInt(total_score1);
  // alert("in time current score before "+ts);
  // ts=ts-5;
  // localStorage.setItem('current_scores', ts);
  // alert("in time current score after "+ts);

  //const current_score=localStorage.getItem('current_scores');

  
  //const total_score=localStorage.getItem('current_scores');

};


function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
      
      const last_score=localStorage.getItem('last_scores');
      var total_score1= parseInt(last_score);
      alert("last score in timer before"+total_score1);
      total_score1 -=5;
      //alert("current score in timer after "+total_score);
      alert("last score in timer after "+total_score1);
      localStorage.setItem('last_scores',  total_score1);
      localStorage.setItem('current_scores',   total_score1);
     
      alert("Times Up. \n Dont worry you can still continue with the task but 5 points will be deducted from you. \n you can also look at the past student's notes by clicking here.");
      
    }
  }, 1000);
};

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
};

function setRemainingPathColor(timeLeft) {
  const {
    alert,
    warning,
    info
  } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
};

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
};

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
};

function starTimer() {
  startTimer();
};

function pauseTimer() {
  //pause timer
  clearInterval(timerInterval);
};

function resumeTimer() {
  //resume timer
  startTimer();
};

function resetTimer() {
  TIME_LIMIT = 15;
  timePassed = 0;
  timeLeft = TIME_LIMIT;
  init();
};

// function resetTimer(){
//     if(timerInterval){
//       onTimesUp()
//     }
//     timePassed = 0;
//     timeLeft = TIME_LIMIT;
//     timerInterval = null;
  
//     document.getElementById("base-timer-label").innerHTML = formatTime(
//       timeLeft
//     );
//     setCircleDasharray();
//     setRemainingPathColor(timeLeft);
// }

function task_timer(){
 
  if (document.getElementById("app").innerHTML == " "){
    resetTimer();
    startTimer();
  }
  else{
    resetTimer();
  }
  //
};
//On page load
init();

// /////////////////////////////////////////////TASKS FUNCTIONS////////////////////////////////////////////////////////////
  

// // var task_num = parseInt(document.getElementById("task_num").innerHTML);
// function validate_form()
//     {
//       valid = false;
//       //document.getElementById('demo').innerHTML = 'You clicked the button, I am new paragraph.';
//       if ( document.form1.email.value == "#2AW87676CV7348127" )
//       // "#2AW87676CV7348127"
//       {
//         valid = true;
//         alert ( 'Accepted' );
//       }
//       else
//         alert ( 'You havnt filled the correct info' );
  
//       return valid;
//     };
  
//   function redo_form()
//   {
//   valid = false;
//   // document.getElementById('demo').innerHTML = 'You clicked the redo button, I am new paragraph.';
  
//   document.getElementById('email_found').innerHTML.value=" " ;
//   document.form1.email.value ="";
//   };

// var task_num= 1;
// function previous_task(){
// ///task_num=document.getElementById("task_num").innerHTML;
// ///document.getElementById("demo").innerHTML = "You clicked the button, I am new paragraph.";
// if (task_num==2){
// // document.getElementById('previous_task').style.visibility='hidden';
// location.replace("file:///C:/Users/garim/OneDrive/Desktop/tron_website/quest1_style.html")
// }
// task_num -= 1;
// document.getElementById("task_num").innerHTML = task_num;
// };


// function next_task(){
// ///task_num=document.getElementById("task_num").innerHTML;
// ///document.getElementById("demo").innerHTML = "You clicked the button, I am new paragraph.";
// if (task_num==6){
// document.getElementById('next_task').style.visibility='hidden';
// }
// task_num += 1;
// // num_tasks_done+=1;
// document.getElementById("task_num").innerHTML = task_num;

// // document.getElementById("app").innerHTML = 0;
// //last_task_num=task_num ;
// // return last_task_num;
// //alert(task_num);
// //document.getElementById("num").innerHTML = task_num;
// return task_num
// } ;

// var last_task_num;
// function get_last_task(){
//   alert("hello");
//   // last_task_num=task_num;
//   // last_task_num=next_task();
//   // last_task_num=9;
//   alert(task_num);
//   // document.getElementById("app").innerHTML = 0;
// };









// function get_content(){
// let content;
// let solution;
// let hint;
// // var task_num=document.getElementById("task_num").innerHTML;
// switch (task_num) {
// case 2:
// content = "Mirroring and downloading: This is a quick test for us to evaluate your pre-existing skills, one of them is using the tool httrack <br> In order to complete this task mirror and download your favorite site using the terminal provided on the side. ";
// solution-" "; //can we validate using the terminal
// hint = "httrack or any other website copier";
// task_title="Mirroring and downloading";
// break;
// case 3:
// content = " Mirroring and downloading <br>Use Harvester tool to find all the local emails from www.amazon.ae";
// solution-"amazon-pr@amazon.com";
// hint = "";
// task_title="Getting emails";
// break;
// //this is the begining of chapter 2 scanning
// case 4: //
// content = " Ping Sweep <br> Due to the current intrusion attack and since we as users have , we have received another system from the higher authorities as the current systems could be compromised <br> Task is to Scanning the IP address and check which one is still available <br> 190.2.131.205 <br>19.2.11.5<br>";
// solution-" ";
// hint = "Use the command ping";
// task_title="Ping Sweep";
// break;
// case 5: //nmap question for port scanning
// content = "Port Scanning <br> Once we have found the IP address that's still open, we do port scanning to get more info about seeing which port is open.";
// solution-"sun";
// hint = "sun";
// task_title="Port Scanning ";
// break;
// case 6: //quick move to john the reaper
// content = "Password Scanning <br> After we found the target systems Hash File, we are going decrypt the password file to get the plaintext file <br> 2b11185c557143e2755576ed1aee9a0afe04c8ec4d42b<br>50763f7ba2c761f90a838cf1328a3529f08b84d80453<br>215b154e81b571677afe18e82a9afe39b8246a0";
// solution-"secretpassword";
// hint = "Ask John";
// task_title="Password Scanning";
// }
// document.getElementById("demo").innerHTML =  content;
// document.getElementById("task_title").innerHTML = task_title;
// // document.getElementById("speech").innerHTML.value =  "content";
// textField = document.getElementById("speech");
// textField.value = content;
// };

//   ///////////////////////////////////////////TEXT TO SPEECH/////////////////////////////////
//   // text to speech
//     //   https://www.twilio.com/blog/speech-to-text-browser-web-speech-api#:~:text=On%20any%20web%20page%2C%20open,.%22%20in%20its%20default%20voice.
//     window.addEventListener('DOMContentLoaded', () => {
//        const form = document.getElementById('voice-form');
//        const input = document.getElementById('speech');
//        const voiceSelect = document.getElementById('voices');
//        let voices;
//        let currentVoice;
//        const main = document.getElementsByTagName('main')[0];

//        const populateVoices = () => {
//             const availableVoices = speechSynthesis.getVoices();
//             voiceSelect.innerHTML = '';

//             availableVoices.forEach(voice => {
//                 const option = document.createElement('option');
//                 let optionText = `${voice.name} (${voice.lang})`;
//                 if (voice.default) {
//                 optionText += ' [default]';
//                 if (typeof currentVoice === 'undefined') {
//                     currentVoice = voice;
//                     option.selected = true;
//                 }
//                 }
//                 if (currentVoice === voice) {
//                 option.selected = true;
//                 }
//                 option.textContent = optionText;
//                 voiceSelect.appendChild(option);
//             });
//             voices = availableVoices;
//         };

//         populateVoices();
//         speechSynthesis.onvoiceschanged = populateVoices;
        
//         voiceSelect.addEventListener('change', event => {
//             const selectedIndex = event.target.selectedIndex;
//             currentVoice = voices[selectedIndex];
//         });

//        form.addEventListener('submit', event => {
//             event.preventDefault();
//             const toSay = input.value.trim();
//             const utterance = new SpeechSynthesisUtterance(toSay);
//             utterance.voice = currentVoice;
//             utterance.addEventListener('start', () => {
//                 main.classList.add('speaking');
//             });
//             utterance.addEventListener('end', () => {
//                 main.addEventListener(
//                 'animationiteration',
//                 () => main.classList.remove('speaking'),
//                 { once: true }
//                 );
//             });
//             speechSynthesis.speak(utterance);
//             input.value = '';
//         });
    
//     });
  