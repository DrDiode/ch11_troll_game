/*	Script file for the Trooll Game
	Andrew J. Noest 1/9/2020

	Decision making process for a 'Choose-your-own-adventure' type game.
	User will be prompted by dialog box, based on their response,
	they can either win or lose in various ways.
*/

"use strict";
// Set up an event listener for the button to trigger the game
document.getElementById("button").addEventListener("click", trollBattle);

// Function to run the game
function trollBattle() {
	// Initial prompt question for the user stored in a variable
	var action = window.prompt("You're walking through the forest minding your buisness, and a troll suddenly appears!\nDo you FIGHT the troll?\nDo you RUN from the troll?\nDo you BRIBE the troll?").toUpperCase();
	
	// Switch statement to handle te inital player's choice
	switch(action) {
		case "FIGHT":
			var smart = window.prompt("Are you a cunning warrior? (YES or NO)").toUpperCase();
			
			var strong = window.prompt("Are you stronger than a troll? (YES or NO)").toUpperCase();
			
			// If statement analyzes the user responses
			if(smart === "YES" || strong === "YES") {
				document.getElementById("result").innerHTML = "You can either be smarter or stronger than a troll to survive!<br/>You live another day!";
				
				// Clear any bad messages from the page
				document.getElementById("death").innerHTML = "";
				
				// Play the winning audio file
				document.getElementById("win").play();
			}
			
			else {
				document.getElementById("death").innerHTML = "You're not strong or smart? Why did you fight a troll?<br/>You have died...";
				
				// Clear any bad messages from the page
				document.getElementById("result").innerHTML = "";
				
				// Play the winning audio file
				document.getElementById("die").play();
			}
			break;
			
		case "RUN":
			var fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
			
			// If statement analyzes the user responses
			if(fast === "YES") {
				document.getElementById("result").innerHTML = "Your speed has allowed you to survive.<br/>But can you live with your cowardice??";
				
				// Clear any bad messages from the page
				document.getElementById("death").innerHTML = "";
				
				// Play the winning audio file
				document.getElementById("win").play();
			}
			
			else {
				document.getElementById("death").innerHTML = "You coward, if you choose to run at least faster than a troll!<br/>You have died...";
				
				// Clear any bad messages from the page
				document.getElementById("result").innerHTML = "";
				
				// Play the winning audio file
				document.getElementById("die").play();
			}
			break;
		
		case "BRIBE":
			var money = window.prompt("You have to pay the troll-toll!\nDo you have money? (YES or NO)").toUpperCase();
			
			if(money === "YES") {
				var amount = window.prompt("How much money do you have?\n(Please enter a NUMERIC VALUE)").toUpperCase();
				
				// Convert the string from the prompt to an integer
				amount = parseInt(amount);
				
				if(amount > 50) {
				document.getElementById("result").innerHTML = "Great job! The Troll is happy!.<br/>You get to live!";
				
				// Clear any bad messages from the page
				document.getElementById("death").innerHTML = "";
				
				// Play the winning audio file
				document.getElementById("win").play();
				}
				
				else {
					document.getElementById("death").innerHTML = "A troll needs more money then that to let you pass!<br/>Smashy-smashy, you are dead...";
					
					// Clear any bad messages from the page
					document.getElementById("result").innerHTML = "";
					
					// Play the winning audio file
					document.getElementById("die").play();
				}
			}
			
			else {
				document.getElementById("death").innerHTML = "That were you going to bribe with? Your looks?<br/>You are dead...";
				
				// Clear any bad messages from the page
				document.getElementById("result").innerHTML = "";
				
				// Play the winning audio file
				document.getElementById("die").play();
			}
			
			break;
		
		default:
			window.alert("Please enter a vaild choice! You damn idiot.")
			trollBattle();
			break;
	}
}