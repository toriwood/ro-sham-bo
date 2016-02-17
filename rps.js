	var choicesArray = ["rock", "paper", "scissors"];
	var playerScore = 0;
	var computerScore = 0;
	var started = "no";
	var numberOfGames = 3;
	var gamesPlayed = 0;

	function start() {
		started = "yes";
		swal({ title: "How many games would you like to play?",   
		text: "Best of:",   
		type: "input",   
		showCancelButton: true,   
		closeOnConfirm: false,   
		animation: "slide-from-top",   
		inputPlaceholder: "3" },
			function(inputValue){   
				if (inputValue === false) return false;      
				if (inputValue === "") {     
					swal.showInputError("You need to write something!");     
					return false   
				}      
				numberOfGames = inputValue;
				swal("Nice!", "Let's play " + inputValue + " games.", "success");
		});
	}

$('#start').click(function() {
	$('.click, .instruction, .score').fadeIn();
	$('.click').css("display", "inline-block");
	$(this).css("display", "none");
	$('#startover').css("display", "inline-block");
	start();
});

$('#startover').click(function() {
	playerScore = 0;
	computerScore = 0;
	gamesPlayed = 0;
	$('.player-score').html("<h2>Player Score: <br>" + playerScore + "</h2>");
	$('.computer-score').html("<h2>Computer Score: <br>" + computerScore + "</h2>");
	$('.instruction').html("<h1>Click on your selection below:</h1>");
	start();
});


	$('.click').click( function() {

		if (started == "yes" && gamesPlayed < numberOfGames) {
			console.log(numberOfGames);
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
			
			gamesPlayed++;

	  if (gamesPlayed == numberOfGames) {
			if (computerScore > playerScore) {
				swal({ title: "You lose!",
							   text: "The computer is smarter than you.",
							   imageUrl: "https://media.giphy.com/media/xTiTnJ3BooiDs8dL7W/giphy.gif",
							   imageSize: "400x400"
							 });
			} else if	(computerScore < playerScore) {
					swal({ title: "Party!",
							   text: "You beat the computer!",
							   imageUrl: "https://media.giphy.com/media/LSNqpYqGRqwrS/giphy.gif",
							   imageSize: "400x400"
							 });
			} else {
				swal({ title: "Tie Game!",
							   text: "You both lose!",
							   imageUrl: "https://media.giphy.com/media/UlelV8vamKENi/giphy.gif",
							   imageSize: "400x400"
							 });
			}
		}
	}
});