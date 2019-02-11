
var randomNumber = 0;
var wins = 0;
var losses = 0;
var finalScore = 0;
var gemsValues;
var gemsValue;
var gemsOne;
var gemsTwo;
var gemsThree;
var gemsFour;

$(document).ready(function() { 
    function startGame() {
        reset();

        randomNumber = Math.floor(Math.random() * 120) + 19 ;
            randomNumber = parseInt(randomNumber);
            $("#random-number").text(randomNumber);
            $("#final-score").text(finalScore);

            for (var i = 1; i < 5; i++) {
                gemValue = [Math.floor(Math.random() * 12) + 1] ;
                gemValues.push(gemValue);
            }
        }
        // game play
            $(".one").on("click", function() { 
                gemOne = parseInt(gemValues[0]);
                finalScore += gemOne;
                $("#final-score").text(finalScore);
                winsLosses();
            });

            $(".two").on("click", function() { 
                gemsTwo = parseInt(gemValues[1]);
                finalScore += gemsTwo;
                $("#final-score").text(finalScore);
                winsLosses();
            });

            $(".three").on("click", function() {
                gemsThree = parseInt(gemValues[2]);
                finalScore += gemsThree;
                $("#final-score").text(finalScore);
                winsLosses();
            });

            $(".four").on("click", function() {
                gemsFour = parseInt(gemValues[3]);
                finalScore += gemsFour;
                $("#final-score").text(finalScore);
                winsLosses();
            });

            function reset() {
                finalScore = 0; 
                gemValues = [];
                gemValue = 0;
            }

            function winsLosses() {
                if (finalScore === randomNumber) {
                    wins++
                    $("#win-ct").text(wins);
                    
                    startGame();
                } else if (finalScore > randomNumber) {
                    losses++
                    $("#loss-ct").text(losses);
                    
                    startGame();
                }  
            } 



startGame();

});