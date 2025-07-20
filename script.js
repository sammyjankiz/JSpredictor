const champs = [
  "Aatrox", "Ahri", "Akali", "Annie", "Ashe", "Caitlyn", "Camille", "Darius", "Ekko"
];

const teamA = [];
const teamB = [];

window.onload = () => {
  const champPool = document.getElementById("champPool");
  champs.forEach(champ => {
    const div = document.createElement("div");
    div.className = "champ";
    div.innerText = champ;
    div.onclick = () => pickChamp(champ);
    champPool.appendChild(div);
  });
};

function pickChamp(champ) {
  if (teamA.length <= teamB.length) {
    teamA.push(champ);
    updateList("teamA", teamA);
  } else {
    teamB.push(champ);
    updateList("teamB", teamB);
  }
}

function updateList(teamId, list) {
  const ul = document.getElementById(teamId);
  ul.innerHTML = "";
  list.forEach(champ => {
    const li = document.createElement("li");
    li.innerText = champ;
    ul.appendChild(li);
  });
}

function predict() {
  const scoreA = Math.random() * 100;
  const scoreB = Math.random() * 100;
  const winner = scoreA > scoreB ? "Team A" : "Team B";
  document.getElementById("result").innerText =
    `🏆 ${winner} vince! (${scoreA.toFixed(1)} vs ${scoreB.toFixed(1)})`;
}
