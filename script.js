const root = document.querySelector("#root");
const door = document.querySelector("#door");
const throne = document.querySelector("#throne");
const doorhovertext = document.querySelector("#dht");
const thronehovertext = document.querySelector("#hht");
const mintDialogue = document.querySelector("#mintDialogue");
function showdoorhovertext() {
  document.addEventListener(
    "mousemove",
    function (ev) {
      document.getElementById("dht").style.transform =
        "translateY(" + (ev.clientY - 40) + "px)";
      document.getElementById("dht").style.transform +=
        "translateX(" + (ev.clientX - 40) + "px)";
    },
    false
  );
}

function showthronerhovertext() {
  document.addEventListener(
    "mousemove",
    function (ev) {
      document.getElementById("hht").style.transform =
        "translateY(" + (ev.clientY - 40) + "px)";
      document.getElementById("hht").style.transform +=
        "translateX(" + (ev.clientX - 40) + "px)";
    },
    false
  );
}
// FIRST SCENE
door.addEventListener("mouseover", (event) => {
  showdoorhovertext();
  console.log("hovered door");
});

door.addEventListener("mouseenter", (event) => {
  doorhovertext.style.opacity = "1";
});
door.addEventListener("mouseout", (event) => {
  doorhovertext.style.opacity = "0";
});
door.addEventListener("click", (event) => {
  root.setAttribute("data-id", "2");
  doorhovertext.innerHTML = "";
  thronehovertext.innerHTML = "What happened here ?  ";
  root.src = "./hall.jpg";
});
// SECOND SCENE

throne.addEventListener("mouseover", (event) => {
  showthronerhovertext();
  console.log("hovered throne");
});
throne.addEventListener("mouseenter", (event) => {
  thronehovertext.style.opacity = "1";
});
throne.addEventListener("mouseout", (event) => {
  thronehovertext.style.opacity = "0";
});
throne.addEventListener("click", (event) => {
  if (root.getAttribute("data-id") === "2") {
    thronehovertext.style.display = "none";
    root.src = "./knight.jpg";
    mintDialogue.style.display = "flex";
  }
});