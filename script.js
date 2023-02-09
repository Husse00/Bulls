let root = document.getElementById("root");
// accessing Team Html paragraphs to populate them with the data
let sYear = document.getElementById("sYear");
let wins = document.getElementById("wins");
let draws = document.getElementById("draws");
let loses = document.getElementById("loses");
let precentage = document.getElementById("ratingP");
let games = document.getElementById("gamesNr");
// accessing player Html paragraphs to populate them with the data
//player 1
let name1 = document.getElementById("name1");
let pGames1 = document.getElementById("pGames1");
let pPoints1 = document.getElementById("pPoints1");
let pHeight1 = document.getElementById("pHeight1");
let pAge1 = document.getElementById("pAge1");
let pRating1 = document.getElementById("pRating1");
//player 2
let name2 = document.getElementById("name2");
let pGames2 = document.getElementById("pGames2");
let pPoints2 = document.getElementById("pPoints2");
let pHeight2 = document.getElementById("pHeight2");
let pAge2 = document.getElementById("pAge2");
let pRating2 = document.getElementById("pRating2");
//player 3
let name3 = document.getElementById("name3");
let pGames3 = document.getElementById("pGames3");
let pPoints3 = document.getElementById("pPoints3");
let pHeight3 = document.getElementById("pHeight3");
let pAge3 = document.getElementById("pAge3");
let pRating3 = document.getElementById("pRating3");
//player 4
let name4 = document.getElementById("name4");
let pGames4 = document.getElementById("pGames4");
let pPoints4 = document.getElementById("pPoints4");
let pHeight4 = document.getElementById("pHeight4");
let pAge4 = document.getElementById("pAge4");
let pRating4 = document.getElementById("pRating4");
//player 5
let name5 = document.getElementById("name5");
let pGames5 = document.getElementById("pGames5");
let pPoints5 = document.getElementById("pPoints5");
let pHeight5 = document.getElementById("pHeight5");
let pAge5 = document.getElementById("pAge5");
let pRating5 = document.getElementById("pRating5");
//player 6
let name6 = document.getElementById("name6");
let pGames6 = document.getElementById("pGames6");
let pPoints6 = document.getElementById("pPoints6");
let pHeight6 = document.getElementById("pHeight6");
let pAge6 = document.getElementById("pAge6");
let pRating6 = document.getElementById("pRating6");
// fetching the Team json file that was formatted from Excel
fetch("Team.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    // Populating the data
    sYear.innerHTML = data[0].Season;
    wins.innerHTML = data[0].Wins;
    draws.innerHTML = data[0].Draws;
    loses.innerHTML = data[0].Loses;
    precentage.innerHTML = data[0].sRating;
    games.innerHTML = data[0].Games;
  });
// fetching the Players json file that was formatted from Excel
fetch("Players.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data[0].Height);
    // player 1
    name1.innerHTML = data[0].Name;
    pGames1.innerHTML = "Games - " + data[0].Games;
    pPoints1.innerHTML = "Points - " + data[0].Points;
    pHeight1.innerHTML = "Height - " + data[0].Height;
    pAge1.innerHTML = "Age - " + data[0].Age;
    pRating1.innerHTML = "Rating - " + data[0].Rating;
    // player 2
    name2.innerHTML = data[1].Name;
    pGames2.innerHTML = "Games - " + data[1].Games;
    pPoints2.innerHTML = "Points - " + data[1].Points;
    pHeight2.innerHTML = "Height - " + data[1].Height;
    pAge2.innerHTML = "Age - " + data[1].Age;
    pRating2.innerHTML = "Rating - " + data[1].Rating;
    // player 3
    name3.innerHTML = data[2].Name;
    pGames3.innerHTML = "Games - " + data[2].Games;
    pPoints3.innerHTML = "Points - " + data[2].Points;
    pHeight3.innerHTML = "Height - " + data[2].Height;
    pAge3.innerHTML = "Age - " + data[2].Age;
    pRating3.innerHTML = "Rating - " + data[2].Rating;
    // player 4
    name4.innerHTML = data[3].Name;
    pGames4.innerHTML = "Games - " + data[3].Games;
    pPoints4.innerHTML = "Points - " + data[3].Points;
    pHeight4.innerHTML = "Height - " + data[3].Height;
    pAge4.innerHTML = "Age - " + data[3].Age;
    pRating4.innerHTML = "Rating - " + data[3].Rating;
    // player 5
    name5.innerHTML = data[4].Name;
    pGames5.innerHTML = "Games - " + data[4].Games;
    pPoints5.innerHTML = "Points - " + data[4].Points;
    pHeight5.innerHTML = "Height - " + data[4].Height;
    pAge5.innerHTML = "Age - " + data[4].Age;
    pRating5.innerHTML = "Rating - " + data[4].Rating;
    // player 6
    name6.innerHTML = data[5].Name;
    pGames6.innerHTML = "Games - " + data[5].Games;
    pPoints6.innerHTML = "Points - " + data[5].Points;
    pHeight6.innerHTML = "Height - " + data[5].Height;
    pAge6.innerHTML = "Age - " + data[5].Age;
    pRating6.innerHTML = "Rating - " + data[5].Rating;
  });
