$(document).ready( function()
{
	// declaring different variables
	var crystalValues = [];

	var losses = 0;

	// Message for wins or loses
	var msg;

	var numCrystals = 4;

	var score;

	var target;	

	// Number of wins
	var wins = 0;
	
	setupGame();
	
	// Click handler for crystal images
	$(".crystal-img").on("click", function () {
		// Add the value of the crystal that was clicked to the score
		score += parseInt($(this).attr("data-crystalValue"));

		// Update the score display
		$("#score").html("<h1>" + score + "</h1>");

		// Check the score vs target score to determine if user has won or lost
		checkScore();
	});

	// Checks the current score vs target score to determine if user has won or lost
	function checkScore()
	{
		if (score === target)
		{
			wins++;
			msg = "You won!";
			notifyResults();
			setupGame();
		}
		else if (score > target)
		{
			losses++;
			msg = "You lost!";
			notifyResults();
			setupGame();
		}
	}

	// Return a random number between min and max
	function getRandomNum (min, max)
	{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// Notification for win and losses
	function notifyResults()
	{
		$("#result-notification").empty();
		$("#result-notification").text(msg);
	}

	// Initialize variables and update display for target number, wins, and losses
	function setupGame()
	{
		// Set values for each crystal to a random number between 1 and 12
		for (var i = 0; i < numCrystals; i++)
		{
			crystalValues[i] = getRandomNum(1, 12);
			console.log(crystalValues[i]);
		}

		$("#amethyst").attr("data-crystalValue", crystalValues[0]);
		$("#agate").attr("data-crystalValue", crystalValues[1]);
		$("#emerald").attr("data-crystalValue", crystalValues[2]);
		$("#citrin").attr("data-crystalValue", crystalValues[3]);
		
		// Initialize score to 0
		score = 0;

		// Set target score to a random number between 19 and 120
		target = getRandomNum(19, 120);	
		
		//updates
		$("#wins").text(wins);

		
		$("#losses").text(losses);

		// Update for target score
		$("#random-number").html("<h1>" + target + "</h1>");

		// This sets score display to empty
		$("#score").empty();
	}	
});