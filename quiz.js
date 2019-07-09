
// create an array to store all question topics as objects 
const QUESTIONS = [
    { 
        questionTitle: 'What does VR stand for?',
        imageSrc: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        altAttr: 'A woman with a VR HMD',
        imgLicense: '<a href="https://www.pexels.com/photo-license/">image by pexels.com</a>',
        options: ['Virtual Religion','Virtual Reality','Vertical Realization','Variable Recursion'],
        correct: 'Virtual Reality'          
    },
    { 
        questionTitle: 'What is Virtual Reality?',
        imageSrc: 'https://cdn.pixabay.com/photo/2018/05/18/11/09/virtual-reality-3410937_960_720.jpg', 
        altAttr: 'A man with a VR HMD',
        imgLicense: '<a href="https://pixabay.com/service/terms/#license">image by pixabay.com</a>',
        options: ['An organizational form aiming to optimize the supply chain of a company', 'A programming language created by Microsoft','The future of web development!','The use of computer technology to create an interactive simulated environment'],
        correct: 'The use of computer technology to create an interactive simulated environment'          
    },
    { 
        questionTitle: 'What does HMD stand for?',
        imageSrc: 'https://cdn.pixabay.com/photo/2017/06/14/05/47/products-2401149_960_720.jpg',
        altAttr: 'A VR HMD',
        imgLicense: '<a href="https://pixabay.com/service/terms/#license">image by pixabay.com</a>',
        options: ['Hey My Dude','Hold My Device','Head Mounted Device','Head Mounted Display'],
        correct: 'Head Mounted Display'          
    },
    { 
        questionTitle: 'How are VR Headsets powered?',
        imageSrc: 'https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        altAttr: 'Electricity',
        imgLicense: '<a href="https://www.pexels.com/photo-license/">image by pexels.com</a>',
        options: ['Via Internet', 'Using solar cells','Smartphone, Computer, Game Console, Battery','Via VR power core'],
        correct: 'Smartphone, Computer, Game Console, Battery'          
    },
     { 
        questionTitle: 'What is Cyberspace?',
        imageSrc: 'https://cdn.pixabay.com/photo/2018/04/01/18/46/fantasy-3281738_960_720.jpg',
        altAttr: 'A representaion of cyberspace',
        imgLicense: '<a href="https://pixabay.com/service/terms/#license">image by pixabay.com</a>',
        options: ['A synonym for "cloud computing"','Virtual, computer-generated space or virtual world','Biscuits with intoxicating substances (such as marijuana)','An alternative spelling for the territory in Siberia'],
        correct: 'Virtual, computer-generated space or virtual world'          
    },
    { 
        questionTitle: 'At what resolution will VR be indistinguishable from reality?',
        imageSrc: 'https://cdn.pixabay.com/photo/2017/03/12/02/20/triangle-2136288_960_720.jpg',
        altAttr: 'A representaion of cyberspace in high resolution',
        imgLicense: '<a href="https://pixabay.com/service/terms/#license">image by pixabay.com</a>',
        options: ['4k resolution','8k resolution','16k resolution','24k resolution'],
        correct: '16k resolution'          
    },
    { 
        questionTitle: 'What is foveated rendering?',
        imageSrc: 'https://cdn.pixabay.com/photo/2018/05/04/17/16/eye-3374462_960_720.jpg',
        altAttr: 'A representaion of fovea',
        imgLicense: '<a href="https://pixabay.com/service/terms/#license">image by pixabay.com</a>',
        options: ['A technique  to reduce the rendering workload in the peripheral vision','Depiction of an eye in anatomy','A medical term for astigmatism','A game engine for video games'],
        correct: 'A technique  to reduce the rendering workload in the peripheral vision'          
    },
    { 
        questionTitle: 'What is Field of View (FOV)?',
        imageSrc: 'https://cdn.pixabay.com/photo/2017/03/04/04/43/key-biscayne-2115493_960_720.jpg',
        altAttr: 'Field of view through the lenses',
        imgLicense: '<a href="https://pixabay.com/service/terms/#license">image by pixabay.com</a>',
        options: ['A field in the nature to contemplate a beautiful scenery','The name of a small village in France','The visible area when looking through the microscope','The open observable area a human can see through his/her eyes'],
        correct: 'The open observable area a human can see through his/her eyes'          
    },
    { 
        questionTitle: 'What is the typical FOV of the human vision?',
        imageSrc: 'https://cdn.pixabay.com/photo/2015/03/26/10/24/eye-691269_960_720.jpg',
        altAttr: 'A blue human eye',
        imgLicense: '<a href="https://pixabay.com/service/terms/#license">image by pixabay.com</a>',
        options: ['75 degrees','120 degrees','180 degrees','360 degrees'],
        correct: '180 degrees'          
    },
    { 
        questionTitle: 'What is the current best consumer VR device?',
        imageSrc: 'https://cdn.pixabay.com/photo/2018/05/02/14/53/virtual-reality-3368729_960_720.jpg',
        altAttr: 'A man with a VR HMD',
        imgLicense: '<a href="https://pixabay.com/service/terms/#license">image by pixabay.com</a>',
        options: ['HTC VivePro','Oculus Rift S aka Lenovo','Google Cardboard','Valve Index'],
        correct: 'Valve Index'          
    }  
];

//Start the quiz by hiding the start page, show the question form, render the question and show score section
function startQuiz(){
    $(".start-page").on('click', '.submit-start', function(){
        console.log('Quiz started');
        $('.start-page').addClass('hidden');
        $('.questions').removeClass('hidden');
        $('.score').removeClass('hidden'); 
        renderQuestion();          
 });
}

// Gather the current question topic object from the array and render it into the form 
let currentQuestion = 0;
function renderQuestion(){
    console.log('rendering started');
    //Render the title question and the image
    let question = QUESTIONS[currentQuestion].questionTitle;
    let image = QUESTIONS[currentQuestion].imageSrc;
    let alt = QUESTIONS[currentQuestion].altAttr;
    let license = QUESTIONS[currentQuestion].imgLicense;
    $('#question-title').text(question);
    $('.vr-img').attr('src', image).attr('alt', alt).addClass('fade-in');
    $('.img-license').html(license);
    //Render the questions and the submit answer button
    let option0 = `${QUESTIONS[currentQuestion].options[0]}`;
    let option1 = `${QUESTIONS[currentQuestion].options[1]}`;
    let option2 = `${QUESTIONS[currentQuestion].options[2]}`;
    let option3 = `${QUESTIONS[currentQuestion].options[3]}`; 
    $('label[for="option0"]').text(option0);
    $('label[for="option1"]').text(option1);
    $('label[for="option2"]').text(option2);
    $('label[for="option3"]').text(option3);
  }

function submitAnswer(){
    $(".submit-answer").on('click', function(event){
      /* event.preventDefault(); */
      console.log('answer sent');
      //find out what the user answered
      let selectedOption = $("input[name='option']:checked").next('label').text();
      //get the correct answer from current object
      correctAnswer = QUESTIONS[currentQuestion].correct;
      //Evaluate
      let check = evaluateAnswer(selectedOption, correctAnswer);
      //Check if user made a selection. If yes, render the result message based on evaluation, then enable the Next button
      if (selectedOption.length){
        if (check) {
            renderCorrectAnswerResult();
        }else{
            renderWrongAnswerResult();
        }
      }else{
          alert('Select your answer first!');
          return;
      }
      $('.vr-img').removeClass('fade-in');
      //Swap buttons
      $('.submit-answer').addClass('hidden');
      $('.submit-next').removeClass('hidden');
    });
}

// Render the same form with checkboxes disabled. Show success message and highlight selection 
function renderCorrectAnswerResult(){
    $('input[type="radio"]').attr('disabled', 'disabled');
    $('.submit-answer').before('<div class="message correct fade-in"></div>');
    $("input[name='option']:checked").parent().addClass('correct-answer');
    updateScore();
    console.log('correct!');
}

// Render the same form with checkboxes disabled. Show failure message with correct answer and highlight selection 
function renderWrongAnswerResult(){ 
    $('.submit-answer').before(`<div class="message fade-in">Wrong answer! The correct answer is <span class="correct-answer">"${correctAnswer}"</span>.</div>`);
    $('input[type="radio"]').attr('disabled', 'disabled');
    $("input[name='option']:checked").parent().addClass('wrong-answer');
    console.log(`Wrong answer! The correct answer is ${correctAnswer}`);
}

// Evaluate the checked selection by comparing it to the correct answer from the object
function evaluateAnswer(userAnswer, correctAnswer){
    console.log('evaluating answer');
    if(userAnswer === correctAnswer){
        return true;
    }else {
        return false;
    }   
}

//Render the next question by incrementing the counter to access the next question object. Reset the state of the radio inputs 
//and remove the result message
function askNextQuestion(){   
    $('.questions').on('click', '.submit-next', function(){
        currentQuestion++; 
        if (currentQuestion > QUESTIONS.length-1){
            showFinalResult();
        }else{
            console.log('next question asked');
            resetOptions();
            renderQuestion();
            updateProgress();
            $('.submit-answer').removeClass('hidden');
            $('.submit-next').addClass('hidden');
        }       
    });
}

//Reset the state of the radio inputs and remove the result message
function resetOptions(){
    $('input[type="radio"]').prop('disabled', false).prop('checked', false);
    $('.message').remove();
    $('.answer-chioce').removeClass('correct-answer');
    $('.answer-chioce').removeClass('wrong-answer');   
    console.log('resetting options');
}

//Update the progress bar
function updateProgress(){
    $('.progress-bar').append('<li class="single-bar  glow"></li>');
}

//Update the score based on submitted correct answers
let score = 0;
function updateScore(){
    score++;
    console.log(`score updated to ${score}`);
    $('.show-score').text(`Score: ${score}`);
}

// Handle the final result page
function showFinalResult(){
    $('.questions').addClass('hidden');
    $('.score').addClass('hidden'); 
    $('.result').removeClass('hidden');
    $('.final-result li').text(`Final Score: ${score}/${QUESTIONS.length}`);
    if (score < (Math.floor(QUESTIONS.length/1.4))){
        $('h2').text('Not ready yet ...').addClass('wrong-answer');
    }
    else{
        $('h2').text('You may enter ...').addClass('correct-answer');
    }
    console.log('showing final result');
}
//Reload the page to restart the quiz
function restartQuiz(){
    $('.submit-restart').on('click', function(){
        location.reload();
    });
}

// Main function
function initiateVrQuiz(){
    startQuiz();
    submitAnswer();
    askNextQuestion();
    restartQuiz();     
}

$(initiateVrQuiz);
