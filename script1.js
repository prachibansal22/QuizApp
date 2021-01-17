window.onload= function (){
	const quizData=[
{
	question:'What is the capital of India?',
	a:'Chennai',
	b:'Delhi',
	c:'Kolkata',
	d:'Chandigarh',
	correct:'b'
},
{
	question:'The metal whose salts are sensitive to light is?',
	a:'Zinc',
	b:'Copper',
	c:'Silver',
	d:'Aluminum',
	correct:'c'
},
{
	question:'The hottest planet in the solar system?',
	a:'Mercury',
	b:'Venus',
	c:'Mars',
	d:'Jupiter',
	correct:'b'
},
{
	question:'Galileo was an Italian astronomer who',
	a:'developed the telescope',
	b:'discovered four satellites of Jupiter',
	c:'first pendulum clock',
	d:'All the above',
	correct:'a'
},
{
	question:'Entomology is the science that studies',
	a:'The origin and history of technical and scientific terms',
	b:'Behavior of human beings',
	c:'Insects',
	d:'The formation of rocks',
	correct:'c'
}
];

const answerEls=document.querySelectorAll('.answer');
const quiz=document.getElementById('quiz');

const question=document.getElementById('question');

const a_label=document.getElementById('a_label');
const b_label=document.getElementById('b_label');
const c_label=document.getElementById('c_label');
const d_label=document.getElementById('d_label');
const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let score=0;
loadQuiz();

function loadQuiz(){
	deselectAnswers();

	const currentQuizData=quizData[currentQuiz];
	question.innerHTML=currentQuizData.question;
	a_label.innerHTML=currentQuizData.a;
	b_label.innerHTML=currentQuizData.b;
	c_label.innerHTML=currentQuizData.c;
	d_label.innerHTML=currentQuizData.d;

	//currentQuiz++;
}

function getSelected(){
	//console.log("Hey");
	
	
	let answer=undefined;

	answerEls.forEach((answerEl)=>{
		if(answerEl.checked){
			answer=answerEl.id;
		}
	});

	return answer;
}

function deselectAnswers(){
	answerEls.forEach((answerEl)=>{
		answerEl.checked=false;
	});

}

submitBtn.addEventListener("click",()=>{
	
	//currentQuiz++;
	const answer=getSelected();
	console.log(answer);
	if(answer){
		if(answer===quizData[currentQuiz].correct){
			score++;
		}
		currentQuiz++;

		if(currentQuiz<quizData.length)
			loadQuiz();
		else{
			console.log(score);
			
			//saferInnerHTML(quiz, '<h2>You scored correctly at ${score}/{quizData.length} questions.</h2>');
			quiz.innerHTML="<center><h3 style='margin-top:50px'>You scored correctly at "+score+"/"+quizData.length+" questions.</h3></center><br><button id='reload' onclick='location.reload()'>Reload</button>";
			//'<h2>You scored correctly at ${score}/${quizData.length} questions.</h2>';
			//alert("YOU FINISHED THE QUIZ!!");
		}
	}
	
	/*if(currentQuiz<quizData.length)
	loadQuiz();
	else{
		alert("YOU FINISHED THE QUIZ!!");
	}*/
});

}