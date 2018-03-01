function shuffle() {
	var ul = document.getElementById("deck");
	for (var i = ul.children.length; i >= 0; i--) {
	    ul.appendChild(ul.children[Math.random() * i | 0]);
	}
}

shuffle();

const newList = document.createElement('UL');
const deck = document.getElementById('deck');

deck.addEventListener('click', function(ev) {
	document.getElementById("moves").textContent = (parseInt(document.getElementById("moves").textContent) + 1).toString();
	
	if (parseInt(document.getElementById("moves").textContent) === 15) {
		const thirdStar = document.getElementById("thirdStar");
		thirdStar.classList.replace("fa-star", "fa-star-o");
		console.log("check");
	}

	if (parseInt(document.getElementById("moves").textContent) === 30) {
		const secondStar = document.getElementById("secondStar");
		secondStar.classList.replace("fa-star", "fa-star-o");
		console.log("check2")
	}

	if (newList.childElementCount<2) {
		ev.preventDefault();
			
		const card = ev.target;
		card.classList.add('open', 'show');
			
		const clonedCard = card.cloneNode(true);
		newList.appendChild(clonedCard);
	
		if (newList.childElementCount===2 && newList.childNodes[0].innerHTML === newList.childNodes[1].innerHTML) {
			const openCards = document.getElementsByClassName('show', 'open');
			for (i=0; i<openCards.length; i++) {
				openCards[i].classList.add('match');
			}
			const matchedCards = document.getElementsByClassName('match');
			for (j=0; j<matchedCards.length; j++) {
				matchedCards[j].classList.remove('open', 'show');
			}	

			while (newList.hasChildNodes()) {
 				newList.removeChild(newList.lastChild);
 			}

 			if (document.getElementsByClassName("match").length > 15) {
				const emptyStars = document.getElementsByClassName("fa-star").length;
				alert("Great job! You finished the game in " + document.getElementById("moves").textContent + " moves and" + " you got a " + emptyStars + " star rating."); 
				




				document.getElementById("moves").textContent = "0";
				const allCards = document.getElementsByClassName("card");
				for (k=0; k<allCards.length; k++) {
					allCards[k].classList.remove('match');
				}


			}
		}

		else if (newList.childElementCount===2 && newList.childNodes[0].innerHTML !== newList.childNodes[1].innerHTML) {
			const openCards = document.getElementsByClassName('show', 'open');
		 	setTimeout(function () {
		 		openCards[0].classList.remove('open', 'show');
		 		openCards[0].classList.remove('open', 'show');
		 	 },1000);
		 	
		 	while (newList.hasChildNodes()) {
 				newList.removeChild(newList.lastChild);
			}
		}
	}
});			

const restartButton = document.getElementById("restart");
restartButton.addEventListener('click', function() {
	location.reload();
});




//TO DO:
//Stars?
//Animations
//Bugs
//clean up code
//Rest of rubric
