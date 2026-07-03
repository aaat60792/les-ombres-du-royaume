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

/* ===== CODEX RPG ===== */

function openRole(id){
document.getElementById("popup-body").innerHTML = roles[id];
document.getElementById("popup").classList.remove("hidden");
}

function closePopup(){
document.getElementById("popup").classList.add("hidden");
}

const roles = {

/* 🌑 OMBRES */
roi: `
<h2>👑 Roi des Ombres</h2>
<p><b>Camp :</b> Ombres</p>
<p>Élimine un joueur chaque nuit.</p>
<p><b>Victoire :</b> Survivre jusqu’à la fin.</p>
`,

reine: `
<h2>🕯 Reine des Ombres</h2>
<p>Connaît le Roi des Ombres.</p>
<p>Peut prendre sa place à sa mort.</p>
`,

saboteur: `
<h2>🗡 Saboteur</h2>
<p>Bloque le pouvoir d’un joueur.</p>
<p>Peut envoyer une fausse information.</p>
`,

metamorphe: `
<h2>🧬 Métamorphe</h2>
<p>Copie un rôle chaque nuit.</p>
<p>Invisible aux rôles de vision.</p>
`,

corrupteur: `
<h2>☠ Corrupteur</h2>
<p>Tente de trouver le Comte.</p>
<p>2 essais maximum.</p>
<p>Vol des pouvoirs si réussi.</p>
`,

/* ⚔ ROYAUME */
duc: `
<h2>⚔ Duc</h2>
<p>Connaît la Comtesse.</p>
<p>Son vote vaut double.</p>
`,

comtesse: `
<h2>👑 Comtesse</h2>
<p>Analyse certains rôles chaque nuit.</p>
`,

garde: `
<h2>🛡 Garde</h2>
<p>Protège un joueur chaque nuit.</p>
<p>Empêche une mort.</p>
`,

voyant: `
<h2>🔮 Voyant</h2>
<p>Détecte les Ombres dans 2 joueurs.</p>
`,

inquisiteur: `
<h2>⚖ Inquisiteur</h2>
<p>Chasse les Fanatiques.</p>
<p>Peut éliminer un fanatique identifié.</p>
`,

/* ⚖ NEUTRES */
courtiseur: `
<h2>🎭 Courtiseur</h2>
<p>Doit trouver le Duc.</p>
<p>Peut lui prendre sa place.</p>
`,

fanatique: `
<h2>🔥 Fanatique Fou</h2>
<p>Doit faire éliminer une cible.</p>
<p>Sinon perd la partie.</p>
`,

suiveur: `
<h2>👁 Suiveur</h2>
<p>Suit un joueur choisi.</p>
<p>Doit voter comme lui.</p>
`,

sain: `
<h2>🕊 Le Sain</h2>
<p>Change de camp selon interactions.</p>
`
};
