var questions = [ 
	{
		question: "What's my name?",
		answer: "Edwin"
	},
	{
		question: "Where do I live?",
		answer: "San Francisco"
	},
	{
		question: "How many siblings do I have?",
		answer: 2
	},
	{
		question: "What's my favorite game console",
		answer: "Nintendo 64"
	},
	{
		question: "What's my favorite car I have owned",
		answer: "MR2"
	},
	{
		question: "What's my favorite place to travel?",
		answer: "Pismo Beach"
	},
	{
		question: "What car am I currently driving?",
		answer: "Prius"
	},
	{
		question: "What's the name of my dog?",
		answer: "Jay Jay"
	},
	{
		question: "What school am I attending?",
		answer: "Codify Academy"
	},
	{
		question: "What's my favorite food?",
		answer: "sushi"
	},
	{
		question: "what's my favorite restaurant",
		answer: "China Palace"
	},

]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var right = 0;
	var wrong = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'right'
			right++
			
		} else {
			questionSpot.className = 'wrong'
			wrong++
		}
	}
	document.getElementById('right').textContent = right
	document.getElementById('wrong').textContent = wrong
}








