/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const newList = document.createElement('UL');
const deck = document.getElementById('deck');

deck.addEventListener('click', function(ev) {

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
				alert("Great job! You finished the game!")
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



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
