function show(id){
document.querySelectorAll('.page').forEach(p=>{
p.classList.remove('active');
});
document.getElementById(id).classList.add('active');
}

/* SEARCH */
document.addEventListener("DOMContentLoaded", () => {

document.getElementById("search").addEventListener("input",(e)=>{
let v=e.target.value.toLowerCase();

document.querySelectorAll(".card").forEach(c=>{
c.style.display = c.innerText.toLowerCase().includes(v)
? "block"
: "none";
});
});

});

/* POPUP */
function openRole(id){
document.getElementById("popup-body").innerHTML = roles[id];
document.getElementById("popup").classList.remove("hidden");
}

function closePopup(){
document.getElementById("popup").classList.add("hidden");
}

/* CODEX */
const roles = {

roi: `
<h2>👑 Roi des Ombres</h2>
<p><b>Camp :</b> Ombres</p>
<p>Élimine un joueur chaque nuit.</p>
<p>Victoire : survivre jusqu’à la fin.</p>
`,

reine: `
<h2>🕯 Reine des Ombres</h2>
<p>Connaît le Roi des Ombres.</p>
<p>Peut prendre sa place à sa mort.</p>
`,

saboteur: `
<h2>🗡 Saboteur</h2>
<p>Bloque le pouvoir d’un joueur.</p>
`,

metamorphe: `
<h2>🧬 Métamorphe</h2>
<p>Copie un rôle chaque nuit.</p>
`,

corrupteur: `
<h2>☠ Corrupteur</h2>
<p>Tente de trouver le Comte.</p>
`,

duc: `
<h2>⚔ Duc</h2>
<p>Vote compte double.</p>
`,

comtesse: `
<h2>👑 Comtesse</h2>
<p>Analyse des rôles.</p>
`,

garde: `
<h2>🛡 Garde</h2>
<p>Protège un joueur.</p>
`,

voyant: `
<h2>🔮 Voyant</h2>
<p>Détecte les Ombres.</p>
`,

inquisiteur: `
<h2>⚖ Inquisiteur</h2>
<p>Chasse les Fanatiques.</p>
`,

courtiseur: `
<h2>🎭 Courtiseur</h2>
<p>Doit trouver le Duc.</p>
`,

fanatique: `
<h2>🔥 Fanatique</h2>
<p>Doit éliminer une cible.</p>
`,

suiveur: `
<h2>👁 Suiveur</h2>
<p>Suit un joueur.</p>
`,

sain: `
<h2>🕊 Le Sain</h2>
<p>Change de camp.</p>
`

};
