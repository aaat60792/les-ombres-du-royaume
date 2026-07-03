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
`,

  /* ===== ROYAUME ===== */

imposteur: `
<h2>🎭 Imposteur</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Pouvoir :</b><br>
Son effet est permanent durant toute la partie.
</p>
`,
    
executeur: `
<h2>⚔️ Exécuteur</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Pouvoir :</b><br>
Possède une exécution unique qu'il peut utiliser pendant la nuit.
</p>
`,
    
archiviste: `
<h2>📚 Archiviste</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Nuit 0 :</b><br>
Reçoit les noms de deux joueurs : un du Royaume et un des Ombres.
</p>
`,
    
croquemort: `
<h2>⚰️ Croque-Mort</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Pouvoir :</b><br>
Son effet ne se déclenche qu'à sa mort.
</p>
`,
    
cuistot: `
<h2>🍲 Cuistot</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Nuit 0 :</b><br>
Apprend le nombre de paires d'Ombres voisines.
</p>
`,
    
dresseur: `
<h2>🦊 Dresseur de Renards</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Pouvoir :</b><br>
Connaît le nombre d'Ombres autour de lui.
</p>
`,
    
enqueteur: `
<h2>🔎 Enquêteur</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Nuit 0 :</b><br>
Reçoit un rôle des Ombres ainsi que les deux joueurs parmi lesquels il se cache.
</p>
`,
    
faucheuse: `
<h2>☠️ Faucheuse</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Pouvoir :</b><br>
Connaît le rôle du dernier joueur éliminé.
</p>
`,
    
lavandiere: `
<h2>🧺 Lavandière</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Nuit 0 :</b><br>
Reçoit un rôle du Royaume ainsi que les deux joueurs parmi lesquels il se cache.
</p>
`,
    
vierge: `
<h2>🕊️ Vierge</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Pouvoir :</b><br>
Son effet se déclenche lors d'une proposition de vote.
</p>
`,
    
ivrogne: `
<h2>🍺 Ivrogne</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Nuit 0 :</b><br>
Reçoit un faux rôle qu'il croit posséder.
</p>
`,
    
docteur: `
<h2>🩺 Docteur</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Pouvoir :</b><br>
Connaît le nombre de fausses informations distribuées et peut vérifier un joueur.
</p>
`,
    
agent: `
<h2>🛡️ Agent de Sécurité</h2>
<p><b>Camp :</b> Royaume</p>
<p><b>Pouvoir :</b><br>
Connaît l'heure approximative du passage du MJ chez un joueur.
</p>
`,

/* ===== OMBRES ===== */

informateur: `
<h2>📜 Informateur</h2>
<p><b>Camp :</b> Ombres</p>
<p><b>Nuit 0 :</b><br>
Connaît les trois rôles absents de la partie.
</p>
`,

infoombre: `
<h2>🌑 Informateur des Ombres</h2>
<p><b>Camp :</b> Ombres</p>
<p><b>Nuit 0 :</b><br>
Connaît tous les membres des Ombres ainsi que leurs rôles.
</p>
`,

fanatiqueombre: `
<h2>🔥 Fanatique de l'Ombre</h2>
<p><b>Camp :</b> Ombres</p>
<p><b>Pouvoir :</b><br>
Son effet ne s'active qu'à la mort du Roi des Ombres.
</p>
`,

/* ===== AUTRE ===== */

mort: `
<h2>💀 Mort</h2>
<p><b>Statut :</b><br>
Ce joueur est éliminé de la partie.
</p>
`

};
