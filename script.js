function show(id){
document.querySelectorAll('.page').forEach(p=>{
p.classList.remove('active');
});
document.getElementById(id).classList.add('active');
}

/* SEARCH */
document.getElementById("search").addEventListener("input",(e)=>{
let v=e.target.value.toLowerCase();

document.querySelectorAll(".card").forEach(c=>{
c.style.display = c.innerText.toLowerCase().includes(v)
? "block"
: "none";
});
});

/* RPG DATA */
const roles = {
roi: `
<h2>👑 Roi des Ombres</h2>
<p><b>Camp :</b> Ombres</p>
<p>Élimine un joueur chaque nuit.</p>
<p>Victoire : survivre jusqu’à la fin.</p>
`,

garde: `
<h2>🛡 Garde</h2>
<p><b>Camp :</b> Royaume</p>
<p>Protège un joueur chaque nuit.</p>
<p>Ne peut pas se protéger lui-même.</p>
`,

voyant: `
<h2>🔮 Voyant</h2>
<p>Détecte si une Ombre est parmi 2 joueurs.</p>
`
};

/* OPEN POPUP */
function openRole(id){
document.getElementById("popup-body").innerHTML = roles[id];
document.getElementById("popup").classList.remove("hidden");
}

/* CLOSE POPUP */
function closePopup(){
document.getElementById("popup").classList.add("hidden");
}
