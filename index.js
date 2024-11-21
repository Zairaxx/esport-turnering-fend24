// Add player input + Button
let playerName = document.querySelector("#playerName");
let addPlayer = document.querySelector("#addPlayer");
// Team lists
let teamAList = document.querySelector("ul#teamAList");
let teamBList = document.querySelector("ul#teamBList");

// Team A-name
let teamANameInput = document.querySelector("#teamANameInput");
let changeTeamABtn = document.querySelector("#changeTeamAName");

// Team B-name
let teamBNameInput = document.querySelector("#teamBNameInput");
let changeTeamBBtn = document.querySelector("#changeTeamBName");

// Lägger till spelare med tillhörande knappar. Tar in team som argument.
let changeTeamName = (event) => {
  let input = event.target.previousElementSibling; //input
  let teamName = event.target.nextElementSibling; //h2
  teamName.textContent = input.value;
};

let addTeamPlayer = (team) => {
  let listItem = document.createElement("li");
  listItem.textContent = playerName.value;

  let leaveButton = document.createElement("button");
  leaveButton.textContent = "Leave Team";

  let changeTeamButton = document.createElement("button");
  changeTeamButton.textContent = "Change Team";

  changeTeamButton.addEventListener("click", changeTeam);

  leaveButton.addEventListener("click", () => {
    leaveButton.parentElement.remove();
  });

  listItem.append(leaveButton, changeTeamButton);

  //Alternativ 1
  if (team === "A") {
    teamAList.appendChild(listItem);
  } else {
    teamBList.appendChild(listItem);
  }
  //Alternativ 2 - Hämta en global variable via window.objektet.
  window[`team${team}List`].append(listItem);
};


let changeTeam = (e) => {
  let currentTeam = e.target.closest("ul"); // Närmsta parent som är elementet ul
  
  let currentPlayer = e.target.parentElement; // <li> med spelarens namn
  if (currentTeam.id === "teamAList") {
    if (document.querySelectorAll("#teamBList li").length < 5) {
      teamBList.appendChild(currentPlayer); //Lägger in <li> med spelarens namn i teamListB.
    } else {
      alert("Team B is full!");
    }
  } else {
    if (document.querySelectorAll("#teamAList li").length < 5) {
      teamAList.appendChild(currentPlayer);
    } else {
      alert("Team A is full!");
    }
  }
};

addPlayer.addEventListener("click", () => {
  if (document.querySelectorAll("#teamAList li").length < 5) {
    addTeamPlayer("A");
  } else if (document.querySelectorAll("#teamBList li").length < 5) {
    addTeamPlayer("B");
  } else {
    alert("Both teams are full!");
  }
});

changeTeamABtn.addEventListener("click", changeTeamName);
changeTeamBBtn.addEventListener("click", changeTeamName);
