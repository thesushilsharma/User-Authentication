var messages = [], //array that hold the record of each string in chat
  userInput = "", //keeps track of the most recent input string from the user
  botOutput = "", //var keeps track of what the chatbot is going to say
  botName = ['Tronbot'], //name of the chatbot
  userName = [' not included in the database.'],/// get from db
  readAloud = true;

function chatbotResponse() {
  readAloud = true;
  botOutput = "Sorry couldnt understand you, try using different words."; //the default message
  //userInput = userInput.toLowerCase();
  
  if (userInput.includes('call you')||userInput.includes('your name is')) {
    botName.push (userInput.split(" ").splice(-1));
     botOutput = 'From now on, my name is  ' + botName[botName.length-1] + '.';
   }
  
  if (userInput.toLowerCase() === 'hi') {
    botOutput = 'Hello. ask us anything.';
  }
  if (userInput.includes('what') && userInput.includes('my name')) {
    botOutput = 'Your name is ' + userName[userName.length-1] + '.';
    }
  if (userInput === 'hi') {
    botOutput = 'Hello. Please ask a question about tron.';
  }
  if (userInput.includes('who') && userInput.includes('creater')) {
    botOutput = 'the team nerd herd';
    }
  
  if (userInput === 'hello') {
    botOutput = 'Hi. Please ask a question about tron.';
  }
  if (userInput === 'ai reset') {

  botName = ['Tronbot'], 
  userName = [' not included in the database.'];
    botOutput = "Done.";
  }
  if (userInput.includes('call me')||userInput.includes('my name is')||userInput.includes('i am')) {
    userName.push (userInput.split(" ").splice(-1));
     botOutput = 'Hi ' + userName[userName.length-1] + '.';
   }
  //--------------basic topic------------------
  
   if (userInput.includes('penetration testing')) {
    botOutput = 'A penetration test, also known as a pen test or ethical hacking, is an authorized simulated cyberattack on a computer system, performed to evaluate the security of the system; this is not to be confused with a vulnerability assessment.';
    }
  
    if (userInput.includes('cyber') && userInput.includes('security') || userInput.includes('cybersecurity')) {
      botOutput = 'Cybersecurity is the protection of internet-connected systems such as hardware, software and data from cyberthreats. The practice is used by individuals and enterprises to protect against unauthorized access to data centers and other computerized systems. Ethical hacking is one of thE way to achieve cybersecurity which is been taught in this game.';
      }

  //---- charcters ---
  if (userInput.includes('your creator')) {
    botOutput = 'The team nerd herd from UOWD. Who created as their graduation project. Their aim by craeting this was to make students learn ethical hacking in mosdt interesting way';
  }

  if (userInput === 'hello world') {
    botOutput = 'Hello World is the most basic program which shows a demo of a certain programming language. '
    //alert('Hello World!');
  }
  if (userInput.includes('trainer')) {
    botOutput = 'The trainer is the most important part character of this game who will train you to complete the quests in the game. She’s in charge of training the tech cadets in the arts of defense and offense. She likes having fun with work and teases people quiet often, but is very good at her job. It’s hinted that she’s one of the best and when she worked on field, no enemies could get past her. ';
  }
  if (userInput.includes('recruiter')) {
    botOutput = 'The recruiter is the one that has recruited you as one of teh trainee for th important mission. he is a cold, stoic, war hardened man who saves people and if they agree, brings them back on base to be trained to be a part of the military.  ';
  }
  
  if (userInput.includes('character')) {
    botOutput = 'This is one of the most important functionalities of this application. The character will represent the application and will also be the guide in game, showing new players around the application and telling them more about each module. ';
  }
  if (userInput.includes ('timer')) {
    botOutput = 'The timer will record time taken by you to complete a task , if it takes you more than 5 minutes , 5 points will be deducted from your total points';
  }
  
  if (userInput.includes ('score')||userInput.includes ('points')) {
    botOutput = 'the scores helps the recruiter to keep track of your performance. if it takes you more than 5 minutes to complete a quest , 5 points will be deducted from your total points. You can also play the game again from the beging to get better points.';
  }
  if (userInput.includes ('story')||userInput.includes ('plot')) {
    botOutput = 'Set in the distant future, this is a galaxy wide war-torn world. Our protagonist is rescued from the rubble of their home, destroyed thanks to bombs, and bought back by the recruiter to the main base of Terra-01, or as it was once known as- Earth. There, the protagonist will train in essential networking skills, and will learn how to defend Terra-01 from one of the greatest threats of war, the loss or stealing of information, while also learning how to gain enemies information crucial to winning the war.  Throughout their journey, they’ll be meeting a lot of new people who will become helpful friends in the future or present and will be rising from the rank of a cadet to the Tech General. ';
  }
  
    
  
//chatbot info
  if (userInput.includes ('your name') && userInput.includes('what')) {
    botOutput = 'My name is, ' + botName[botName.length-1] + '. At your service.';
  }
  if (userInput.includes ('who are you')) {
    botOutput = 'My name is, ' + botName[botName.length-1] + '. An information providing chatting software about ICCT Colleges.';
  }
  if (userInput.includes ('what are you'))
  {
    botOutput = 'I am ' + botName[botName.length-1] + '. An information providing chatting software about the tron. ';
  }

  //website  info
  if (userInput.includes ('change')||userInput.includes ('update')) {
    botOutput = 'Go to the dashboard ,click on the top right bar and click on update info button';
  }
  if (userInput.includes ('previous ')||userInput.includes ('next')) {
    botOutput = 'On the top middle of the screen you can see a navigation bar with back and next button';
  }
  if (userInput.includes ('voice')) {
    botOutput = 'The website has a read aloud feature which reads the quests and even the tronbots replies. so that users have immersive experience while playing thsi game';
  }
  
  if (userInput.includes ('sign in')||userInput.includes ('log in')) {
    botOutput = 'This is to check if the user trying to sign in has an account that is valid. The information provided is valid and what access is authorized and accordingly show the necessary UI. ';
  }
   
  if (userInput.includes ('register')) {
    botOutput = 'to register an account on the website. This means the user needs a username, email, password, and user information such as age, and full name. The Username input field includes both alphabets and integers but not any special characters. If these inputs are incorrect, then the database will not accept a new entry. ';
  }
  
  if (userInput.includes ('log out') || userInput.includes ('exit')) {
    botOutput = 'go to the dashboard page and click on the top right button . then choose log out option from it.';
  }
  
  if (userInput.includes('dashboard')){
    botOutput = 'In the dashboard you can do the following things:  1) Start or resume learning module. 2) Making changes to profile information 3) User can end the user session, and then redirect to a landing page.';
  }
  if (userInput.includes('quests')) {
    botOutput = 'This game includes 11 quests which explains a particular topic of the ethical hacking subject ';
  }
  
  if (userInput.includes ('book')) {
    botOutput = 'This includes all the information about ethical hacking , penetration testing and its steps.  This can be found in every quest or in dashboard page on the top right corner button.';
  }
  
  //courses info
  if (userInput.includes ('courses')) {
	  
    alert("Please type the selected Department.") //Dialog box
	botOutput = '1. COLLEGES OF ARTS AND SCIENCES, 2. COLLEGE OF BUSINESS, 3.COLLEGES OF COMPUTER STUDIES, 4.COLLEGE OF CRIMINOLOGY, 5.COLLEGE OF EDUCATION, 6.COLLEGE OF ENGINEERING, 7.COLLEGE OF HEALTH SCIENCES, 8.INTERNATIONAL SCHOOL OF HOSPITALITY & TOURISM MANAGEMENT, 9.SKILLS TRAINING CENTER OF TECHVOC PROGRAMS, 10.CALL CENTER OF SHORT TERM PROGRAMS. ';
	readAloud = false;
  }
    
  if (userInput.includes ('arts and sciences')) {
    botOutput = 'There are arts and sciences courses like, Bachelor of Science in Mathematics, Bachelor of Sciences in Psychology, Bachelor of Arts in Communication or Mass Communication, and Bachelor of Arts English. ';
  }
  if (userInput.includes ('business')) {
    botOutput = 'There are businesses courses such as Associate in Business Administration, Bachelor of Science in Business Management, Bachelor of Science in Accountancy, Bachelor of Science in Accounting Technology, and Bachelor of Science in Entrepreneurship. ';
  }
  if (userInput.includes ('computer studies')) {
    botOutput = 'There are computer courses such as B.S. Information Technology, B.S. Computer Science, and Associate in Computer Technology. ';
  }
  if (userInput.includes ('criminology')) {
    botOutput = 'Criminology Department have courses: the B.S. Criminology, Certificate in Security Services NC-1, and Certificate in Security Services NC-2.';
  }
  if (userInput.includes ('education')) {
    botOutput = 'There are education courses such as Bachelor in Elementary Education, Bachelor of Secondary Education, and Certificate in Teaching Program. ';
  }
  if (userInput.includes ('engineering')) {
    botOutput = 'There are engineering courses like Bachelor of Science in Computer Engineering and Bachelor of Science Electronic & Communication Engineering. ';
  }
  if (userInput.includes ('health sciences')) {
    botOutput = 'There are health sciences courses like Bachelor of Science in Medical Technology, Certificate in Health Care Assistant NC-II, Certificate in Caregiver, and Certificate in Professional Live-in Caregiver. ';
  }
  if (userInput.includes ('hospitality') || userInput.includes ('tourism')) {
    botOutput = 'There are hospitality and tourism courses like B.S. in Hotel & Restaurant Management, Bachelor of Science in Tourism, Certificate in Barrista Course, and Associate in Hotel & Restaurant Management. ';
  }
  
  if (userInput.includes ('vocational')) {
    botOutput = 'There are technical vocational programs like Diploma in Bookkeeping NC-III, Diploma in Consumer Electronics Servicing NC-II , Diploma in Computer Programming NC-IV, Diploma in Computer Hardware Servicing NC-II, Diploma in Bio-medical Servicing NC-II, Certificate in Shielded Metal Arc Welding NC-I, and Certificate in Shielded Metal Arc Welding NC-II. ';
  readAloud = false;
  }
  if (userInput.includes ('call center')) {
    botOutput = 'There are call center short term programs such as Certificate in Call Center, Finishing Courses in Call Center, Certificate in Therapeutic Massage , Certificate in Web Development, Certificate in Conversational English, Certificate in Advanced English Reading & Writing, Certificate in Daily Chinese, Spanish Language Course (Level 1), and Foreign Language Proficiency. ';
  readAloud = false;
  }
  //tuition fee info
  if (userInput.includes('tuition')) {
    botOutput = 'Only as low as 130 pesos per unit.';
  }

  //icct branches info
  if (userInput.includes ('campuses')) {
    botOutput = 'ICCT Colleges has campuses throughout Rizal. They are in Sumulong, Angono, Antipolo, Cogeo, San Mateo, Taytay, Binangonan and Cainta.';
  }
  if (userInput.includes ('branches')) {
    botOutput = 'ICCT Colleges has campuses throughout Rizal. They are in Sumulong, Angono, Antipolo, Cogeo, San Mateo, Taytay, Binangonan and Cainta.';
  }
    if (userInput.includes ('mission') && userInput.includes ('icct')) {
    botOutput = ' To prepare students for the manifold demands of technological efficiency needed in the fields of Information & Communication Technology, the Health Sciences and the various disciplines of educational pursuits through research, advance studies, and international linkages; and to temper this training with the inculcation of genuine love for work and the virtues of a value-based individual.. ';
  }
    if (userInput.includes ('vision') && userInput.includes ('icct')) {
    botOutput = ' To become the leading premier provider of higher education in Asia.';
  }
      if (userInput.includes ('mission')) {
    botOutput = ' To prepare students for the manifold demands of technological efficiency needed in the fields of Information & Communication Technology, the Health Sciences and the various disciplines of educational pursuits through research, advance studies, and international linkages; and to temper this training with the inculcation of genuine love for work and the virtues of a value-based individual.. ';
  }
    if (userInput.includes ('vision')) {
    botOutput = ' To become the leading premier provider of higher education in Asia.';
  }
      if (userInput.includes ('vision') && userInput.includes ('icct')) {
    botOutput = ' To become the leading premier provider of higher education in Asia.';
  }
  if (userInput.includes ('lost') && userInput.includes ('gradeslip')) {
    botOutput = ' You can get summary of grades in registrar window 6 as a replacement for your lost gradeslip.';
  }
  if (userInput.includes ('lost') && userInput.includes ('reg form')) {
    botOutput = ' Get an affidavit of loss from the office and follow the instructions written on it.';
  }
    if (userInput.includes ('lost') && userInput.includes ('registration form')) {
    botOutput = ' Get an affidavit of loss from the office and follow the instructions written on it.';
  } 
      if (userInput.includes ('lost') && userInput.includes ('id')) {
    botOutput = ' pay for another one on the accounting office and go to the library to get it printed.';
  } 
      if (userInput.includes ('lost') && userInput.includes ('registration form')) {
    botOutput = ' Get an affidavit of loss from the office and follow the instructions written on it.';
  }
    if (userInput.includes ('lost') && userInput.includes ('registration form')) {
    botOutput = ' Get an affidavit of loss from the office and follow the instructions written on it.';
  }
    if (userInput.includes ('shift')) {
    botOutput = ' Prepare a formal letter stating your reason, and go to the registrar for further processes to be followed.';
  }
    if (userInput.includes ('shift') && userInput.includes ('course')) {
    botOutput = ' Prepare a formal letter stating your reason, and go to the registrar for further processes to be followed.';
  }
    if ((userInput.includes ('TOR') || userInput.includes ('tor')) && userInput.includes ('how')) {
    botOutput = ' Bring your clearance form and request for TOR form.';
  }
    if (userInput.includes ('transcript')) {
    botOutput = ' Bring your clearance form and request for TOR form.';
  }
    if (userInput.includes ('stop') || userInput.includes('stopped')) {
    botOutput = ' Go to the admission office and from there you will be instructed of the requirements and things you need to comply for balik-aral program.';
  }
    if ((userInput.includes ('when')||userInput.includes ('date')) && (userInput.includes('enrollment')||userInput.includes('enroll'))) {
    botOutput = ' Each course are allotted a certain date for enrollment. see enrollment schedule posted on boards or check on school TVs.';
  }
  if ((userInput.includes ('scholar')||userInput.includes ('scholarship')) && userInput.includes('available')) {
    botOutput = ' there are various scholarships available that you can apply, but there are also requirements you need to meet.';
  }
      if (userInput.includes ('grade') && userInput.includes ('1.00')) {
    botOutput = 'grading scale 1.00 is Outstanding with percentage equivalent of 97 - 100.';
  }
        if (userInput.includes ('grade') && userInput.includes ('1.25')) {
    botOutput = 'grading scale 1.25 is Excellent with percentage equivalent of 94 - 95.';
  }
        if (userInput.includes ('grade') && userInput.includes ('1.50')) {
    botOutput = 'grading scale 1.50 is Very Good with percentage equivalent of 91 - 93.';
  }
        if (userInput.includes ('grade') && userInput.includes ('1.75')) {
    botOutput = 'grading scale 1.75 is Good with percentage equivalent of 88 - 90.';
  }
        if (userInput.includes ('grade') && userInput.includes ('2.00')) {
    botOutput = 'grading scale 2.00 is Average with percentage equivalent of 85 - 87.';
  }
        if (userInput.includes ('grade') && userInput.includes ('2.25')) {
    botOutput = 'grading scale 2.25 is Very Satisfactory with percentage equivalent of 82 - 84.';
  }
        if (userInput.includes ('grade') && userInput.includes ('2.50')) {
    botOutput = 'grading scale 2.50 is Satisfactory with percentage equivalent of 79 - 81.';
  }
        if (userInput.includes ('grade') && userInput.includes ('2.75')) {
    botOutput = 'grading scale 2.75 is Fair with percentage equivalent of 76 - 78.';
  }
        if (userInput.includes ('grade') && userInput.includes ('3.00')) {
    botOutput = 'grading scale 3.00 is passed with percentage equivalent of 75.';
  }
        if (userInput.includes ('grade') && userInput.includes ('5.00')) {
    botOutput = 'Grading scale 5.00 is Failed with percentage equivalent below 75. Please talk to your Professor and study harder next time.';
  }
          if (userInput.includes ('what') && userInput.includes ('UW')) {
    botOutput = 'UW means Unauthorized Withdrawal.';
  }
            if (userInput.includes ('what') && userInput.includes ('NA')) {
    botOutput = 'NA means No Attandance.';
  }
              if (userInput.includes ('what') && userInput.includes ('AW')) {
    botOutput = 'AW means Authorized Withdrawal.';
  }
                if (userInput.includes ('what') && userInput.includes ('DRP')) {
    botOutput = 'DRP means Officially Dropped.';
  }
                if (userInput.includes ('what') && userInput.includes ('NS')) {
    botOutput = 'NS means No Status.';
  }
}

//-----------------ian's--------------
if (userInput.includes ('who is your crush')) {
    botOutput = 'Julian Lorenzo De Sierra.';
}

if (userInput.includes ('where are you from')) {
    botOutput = 'AI';
}





//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run 
  if (document.getElementById("chatbox").value != "") {
    //pulls the value from the chatbox ands sets it to userInput
    userInput = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
	nlp = window.nlp_compromise;
    messages.push(userInput);
    //Speech(userInput);  //says what the user typed outloud
    //sets the variable botOutput in response to userInput
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push("<b>" + botName[botName.length-1] + ":</b> " + botOutput);
    // says the message using the text to speech function written below
    Speech(botOutput);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && readAloud) {
    var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13) {
    //runs this function when enter is pressed
    newEntry();
  }
}

//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
//---------------------------------
var player;

function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'autohide': 1,
            'wmode': 'opaque',
            'showinfo': 0,
            'loop': 1,
            'mute': 1,
			'modestbranding': 1,
            //'start': 15,
            //'end': 110,
            'playlist': 'K7Pk2_7-UWI'
        },
        videoId: 'K7Pk2_7-UWI',
        events: {
            'onReady': onPlayerReady
        }
    });

}

function onPlayerReady(event) {
    event.target.mute();
    $('#text').fadeIn(400);
    //why this? Well, if you want to overlay text on top of your video, you
    //will have to fade it in once your video has loaded in order for this
    //to work in Safari, or your will get an origin error.
}