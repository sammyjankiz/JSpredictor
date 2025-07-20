const teamA = [];
const teamB = [];

window.onload = () => {
  const champPool = document.getElementById("champPool");
  champions.forEach(champ => {
    const div = document.createElement("div");
    div.className = "champ-card";
    div.setAttribute("data-name", champ);
    div.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ}_0.jpg')`;
    div.onclick = () => pickChamp(champ, div);
    champPool.appendChild(div);
  });
};

function pickChamp(champ, element) {
  if (teamA.includes(champ) || teamB.includes(champ)) return;

  element.classList.add("selected");

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
  if (teamA.length === 0 || teamB.length === 0) {
    document.getElementById("result").innerText = "⚠️ Seleziona almeno un champ per ciascun team!";
    return;
  }

  const scoreA = Math.random() * 100;
  const scoreB = Math.random() * 100;
  const winner = scoreA > scoreB ? "Team A" : "Team B";
  const emoji = scoreA > scoreB ? "🔥" : "💥";

  document.getElementById("result").innerText =
    `${emoji} ${winner} vince! (${scoreA.toFixed(1)} vs ${scoreB.toFixed(1)})`;
}
