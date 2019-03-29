//ok so we need to generate a random rumber each game
//i will make a var targetNumber and i will leave it as a empty array

    var targetNumber = Math.floor(Math.random() * 120) + 19

    $("#number-to-guess").text(targetNumber);

    var wins = 0
    var losses = 0
    var userscore = 0
    var crystal1 = Math.floor(Math.random() * 12) + 1 //this is a random number for the crystals 1-12
    var crystal2 = Math.floor(Math.random() * 12) + 1 //this is a random number for the crystals 1-12
    var crystal3 = Math.floor(Math.random() * 12) + 1 //this is a random number for the crystals 1-12
    var crystal4 = Math.floor(Math.random() * 12) + 1 //this is a random number for the crystals 1-12
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses)
    $("#score").text("Your Score:" + userscore)
    function reset(){
      if (userscore > targetNumber){
       var crystal1, crystal2, crystal3, crystal4 = Math.floor(Math.random() * 12) + 1 //this is a random number for the crystals 1-12

    }
  }
    $(document).ready(function(){
      $("#crystal-1").on("click", function(){
        userscore += crystal1
        $("#score").text(userscore)
       console.log(crystal1)
       console.log(userscore)
       if (userscore > targetNumber){
        losses++;
        $("#losses").html(losses)

      }
      if (userscore === targetNumber){
        wins++
        $("#wins").html(wins)
      }
     });
    });
    $("#crystal-2").on("click", function(){
      userscore += crystal2
      $("#score").text(userscore)
      console.log(crystal2)
      if (userscore > targetNumber){
        losses++;
        $("#losses").html(losses)
      }
      if (userscore === targetNumber){
        wins++
        $("#wins").html(wins)
      }
    });
    $("#crystal-3").on("click", function(){
      userscore += crystal3
      $("#score").text(userscore)
      console.log(crystal3)
      if (userscore > targetNumber){
        losses++;
        $("#losses").html(losses)
      }
      if (userscore === targetNumber){
        wins++
        $("#wins").html(wins)
      }
    });
    $("#crystal-4").on("click", function(){
      userscore += crystal4
      $("#score").text(userscore)
      console.log(crystal4)
      if (userscore > targetNumber){
        losses++;
        $("#losses").html(losses)
      }
      if (userscore === targetNumber){
        wins++
        $("#wins").html(wins)


      }
    });
