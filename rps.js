	var choicesArray = ["rock", "paper", "scissors"];
	var playerScore = 0;
	var computerScore = 0;

$('#start').click(function() {
	$('.click, .instruction, .score').fadeIn();
	$('.click').css("display", "inline-block");
	$(this).css("display", "none");
	$('#startover').css("display", "inline-block");
});

$('#startover').click(function() {
	playerScore = 0;
	computerScore = 0;
	$('.player-score').html("<h2>Player Score: <br>" + playerScore + "</h2>");
	$('.computer-score').html("<h2>Computer Score: <br>" + computerScore + "</h2>");
	$('.instruction').html("<h1>Click on your selection below:</h1>");
});


	$('.click').click( function() {
		var playerChoice = "";
		var computerChoice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
		var computerIndex = null;
		var playerIndex = null;
		var winner = "";

		if (playerChoice === "") {
			playerChoice = $(this).find('h1').text().toLowerCase();
		} else {
			alert("You've already made your selection.");
		}
		console.log(playerChoice);
		$('.instruction').html("<h3>You selected " + playerChoice + ".</h3>");
		$('.instruction').append("<h3>The computer selected " + computerChoice + ".</h3>");

		computerIndex = choicesArray.indexOf(computerChoice);
		playerIndex = choicesArray.indexOf(playerChoice);

		console.log(computerIndex);
		console.log(playerIndex);

		winner = function() {
			if (computerIndex - playerIndex == 1 || computerIndex - playerIndex == -2) {
				$('.instruction').html("<h3>The computer wins!</h3>");
				computerScore += 1;
			} else if (computerIndex - playerIndex == 0) {
				$('.instruction').html("<h3>It's a tie.</h3>");
			} else {
				$('.instruction').html("<h3>You win!</h3>");
				playerScore += 1;
			}
			$('.computer-score').html("<h2>Computer Score: <br>" + computerScore + "</h2>");
			$('.player-score').html("<h2>Player Score: <br>" + playerScore + "</h2>");
		}

		setTimeout(function() {
			winner();
		}, 2000);

		setTimeout(function() {
			$('.instruction').html("<h3>Choose again to start the next round:</h3>");
		}, 3000);
	});