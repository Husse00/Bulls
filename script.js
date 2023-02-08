let root = document.getElementById("root");

fetch("Team.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data[0].Games);
    let div = document.createElement("div");
    div = data[0].Games + " ";
    // root.append(div);
  });


  fetch("Players.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data[0].Height);
    let div1 = document.createElement("div");
    div1 = data[0].Height;
    // root.append(div1);
  });