//ok so we need to generate a random rumber each game
//i will make a var targetNumber and i will leave it as a empty array

    var targetNumber = Math.floor(Math.random() * 120) + 19

    $("#number-to-guess").text(targetNumber);

    var wins = 0
    var losses = 0
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses)
