const hide = document.getElementById("hide");
const box = document.getElementById("box");
const show = document.getElementById("show");
const color = document.getElementById("color");
const colorname = document.getElementById("colorName");

hide.addEventListener("click", () => {
    box.style.display = "none";
    colorname.style.display = "none"
});
show.addEventListener("click", () => {
    box.style.display = "block";
    colorname.style.display = "block"
});
color.addEventListener("click", () => {
    const randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colorname.textContent = randomcolor;
    colorname.style.background = randomcolor;
    box.style.background = randomcolor;
});
