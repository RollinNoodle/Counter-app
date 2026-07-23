// counter "engine"

const theAdd = document.getElementById("addBtn");
const theReset = document.getElementById("resetBtn");
const theTake = document.getElementById("takeBtn");
const theDisplay = document.getElementById("displayBtn");

count = 0;

theAdd.addEventListener("click", () => {
    count++
    theDisplay.textContent = count;
});

theTake.addEventListener("click", () => {
    count--;
    theDisplay.textContent = count;
});

theReset.addEventListener("click", () => {
    count = 0;
    theDisplay.textContent = count;
});

// dark mode:

const switchMode = document.getElementById("dark-mode");

switchMode.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
});

