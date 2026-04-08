const weddingDate = new Date("June 26, 2026 16:00:00").getTime();

const countdown = setInterval(function(){

const now = new Date().getTime();
const distance = weddingDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

 document.getElementById("days").innerText = days;
 document.getElementById("hours").innerText = hours;
 document.getElementById("minutes").innerText = minutes;
 document.getElementById("seconds").innerText = seconds;

},1000);

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<40;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*4+1,
    speed: Math.random()*1+0.5
  });
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    ctx.fillStyle="rgba(255,255,255,0.4)";
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
    ctx.fill();

    p.y+=p.speed;
    if(p.y>canvas.height) p.y=0;
  });

  requestAnimationFrame(draw);
}

draw();

const musica = document.getElementById("musica");

document.body.addEventListener("click", () => {
  musica.volume = 0;
  musica.play();

  let vol = 0;
  const fade = setInterval(()=>{
    if(vol < 0.3){
      vol += 0.02;
      musica.volume = vol;
    } else {
      clearInterval(fade);
    }
  },200);
}, { once:true });

window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    intro.style.display = "none";
  }, 5500);
});
const links = document.querySelectorAll(".padrinhos-nav a");
const sections = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("ativo");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("ativo");
    }
  });
});