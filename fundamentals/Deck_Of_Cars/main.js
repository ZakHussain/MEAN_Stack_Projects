// need a deck class
	//cards 52
	// shuffle methods
	// clear methods
	//deal cards

// need a player class
// name
// hand
// take  a card method
// discard method 

// _________________________________________________________________________________
//Deck

function Deck() {

	var self = this; 
	self.cards = []; 

	function Card(suit, type) {
		this.suit = suit;
		this.type = type;
		return this;
	}
	this.shuffle = function() {
		for ( var i = 0; i < self.cards.length; i++) {
			var temp = self.cards[i];
			var swapValue = Math.floor(Math.random() * 52);
			self.cards[i] = self.cards[swapValue];
			self.cards[swapValue] = temp;
			// this.cards[i];
			// this.cards[swapValue];
			// this.cards[swapValue];
			// this.cards[i];
		}
	}

	this.reset = function () {
		self.cards = [];
		var suits = ['diamond', 'heart', 'club', 'spade']
		var type = [ 'A', '2','3','4','5','6','7','8','9','10','J','Q','K']
		for ( var i = 0; i < suits.length; i++ ) {
			for ( var j = 0; j < type.length; j ++) {
				// console.log(suits[i], type[j]);
				self.cards.push(new Card(suits[i], type[j]));
			}	
		}
		console.log("I am in the reset", self.cards);
	}


	this.deal = function () { 
		console.log("I am in deal");
		return (self.cards.pop());
	}
}
// _________________________________________________________________________________
//Player



function Player(name) {
	this.name = name;
	this.hand = [];
	this.hand.push();
	this.takeCard = function(deck) {
		this.hand.push(deck.deal());
		console.log('++++++++++++++');
		console.log(this.hand);
		console.log('++++++++++++++');
	}
	this.discard = function () {
		this.hand.pop();
		console.log('++++++++++++++');
		console.log(this.hand);
		console.log('++++++++++++++');
	}
}






// _________________________________________________________________________________
// calls


var deck = new Deck();
deck.reset();
deck.shuffle();
var player = new Player('zak');
player.takeCard(deck);
player.discard();



