function show(id){
document.querySelectorAll('.page').forEach(p=>{
p.classList.remove('active');
});
document.getElementById(id).classList.add('active');
}

/* search */
document.getElementById("search").addEventListener("input",(e)=>{
let v=e.target.value.toLowerCase();

document.querySelectorAll(".card").forEach(c=>{
c.style.display = c.innerText.toLowerCase().includes(v)
? "block"
: "none";
});
});
