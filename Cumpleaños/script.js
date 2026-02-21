const envelope = document.getElementById("envelope");
const button = document.getElementById("openBtn");

button.addEventListener("click", () => {
    envelope.classList.toggle("open");
    button.textContent = envelope.classList.contains("open")
        ? "Cerrar carta"
        : "Abrir carta";
});

/* Popup frases */
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".gif-click").forEach(gif => {
    gif.addEventListener("click", () => {
        popupText.textContent = gif.getAttribute("data-text");
        popup.style.display = "flex";
    });
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if(e.target === popup){
        popup.style.display = "none";
    }
});