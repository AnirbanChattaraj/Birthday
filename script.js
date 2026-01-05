
/* Play Music Button */
const audio = document.getElementById("birthdayMusic");
document.getElementById("playBtn").addEventListener("click", () => {
    audio.play();
    playBtn.style.display = "none";
});

/* Falling Flowers */
const flowers = ["🌸","🌷","💮","🌺","🌼","🌻"];
setInterval(()=>{
    let f = document.createElement("div");
    f.classList.add("flower");
    f.innerText = flowers[Math.floor(Math.random()*flowers.length)];
    f.style.left = Math.random()*100 + "vw";
    f.style.animationDuration = (3 + Math.random()*3) + "s";
    document.body.appendChild(f);
    setTimeout(()=> f.remove(), 6000);
}, 400);

/* Glitter */
setInterval(()=>{
    let g = document.createElement("div");
    g.classList.add("glitter");
    g.style.left = Math.random()*100 + "vw";
    g.style.top = Math.random()*100 + "vh";
    g.style.animationDuration = (1 + Math.random()*2) + "s";
    document.body.appendChild(g);
    setTimeout(()=> g.remove(), 2500);
}, 150);

/* Confetti on Click */
document.addEventListener("click", (e)=>{
    for(let i=0; i<25; i++){
        let c = document.createElement("div");
        c.classList.add("glitter");
        c.style.left = e.clientX + "px";
        c.style.top = e.clientY + "px";
        c.style.animationDuration = (0.8 + Math.random()*1.5) + "s";
        document.body.appendChild(c);
        setTimeout(()=> c.remove(), 2200);
    }
});
/* 🔥 Slideshow Logic */
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let s = document.getElementsByClassName("slides");
    for (i = 0; i < s.length; i++) s[i].style.display = "none";
    slideIndex++;
    if (slideIndex > s.length) slideIndex = 1;
    s[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3500); // slide change every 3.5 sec
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}
