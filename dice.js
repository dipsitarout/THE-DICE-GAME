

	// Player name 
	let p1;
	let p2;
	let player1 = "Player 1"; 
	let player2 = "Player 2"; 
	

	// Function to change the player name 
	function editNames() { 
		player1 = prompt("Change Player1 name"); 
		p1=player1.toUpperCase();

		player2= prompt("Change player2 name"); 
		p2=player2.toUpperCase();

		document.querySelector("p.Player1").innerHTML = p1; 
		document.querySelector("p.Player2").innerHTML = p2; 
} 

	// Function to roll the dice 
	function rollTheDice() { 
		setTimeout(function () { 
			var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
			var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
            
            

			document.querySelector(".img1").setAttribute("src", 
				"images/dice" + randomNumber1 + ".png"); 

			document.querySelector(".img2").setAttribute("src", 
				"images/dice" + randomNumber2 + ".png"); 

			if (randomNumber1 === randomNumber2) { 
				document.querySelector("h1").innerHTML = "Draw!"; 
			} 
			else if (randomNumber1 < randomNumber2) { 
				document.querySelector("h1").innerHTML 
								= (p2 + " WINS!"); 
			} 
			else { 
				document.querySelector("h1").innerHTML 
								= (p1 + " WINS!"); 
			} 
		}, 2000); 
	} 

