setInterval(() => {
  let date = new Date();
  let h = document.querySelector(".h");
  let m = document.querySelector(".m");
  let s = document.querySelector(".s");
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let secondes = date.getSeconds();
  h.style.cssText = `transform: translateX(-50%) 
  rotate(${(hours / 12) * 360 + (minutes / 60) * 30}deg);`;
  m.style.cssText = `transform: translateX(-50%) 
  rotate(${(minutes / 60) * 360}deg);`;
  s.style.cssText = `transform: translateX(-50%) 
  rotate(${(secondes / 60) * 360}deg);`;
}, 1000);

/////////////////////////////////////////////////

let btn = document.querySelector(".btn");
let rooot = document.querySelector(":root");

btn.onclick = () => {
  btn.classList.toggle("light");
  if (btn.classList.contains("light")) {
    rooot.style.cssText = `--color1: #fff; --color2: #888888;`;
    btn.textContent = "dark";
  } else {
    rooot.style.cssText = `--color1: #1e1f26; --color2: #ccc;`;
    btn.textContent = "light";
  }
};

/////////////////////////////////////////////////
