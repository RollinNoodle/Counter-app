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
const styleBtn = document.getElementById("modeBtn");


switchMode.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
    if (document.body.classList.contains("darkMode")) {
        switchMode.textContent = "light mode!";
        switchMode.style.backgroundColor = "rgb(95, 191, 191)"
    } else {
        switchMode.textContent = "Dark Mode!"
        switchMode.style.backgroundColor = "rgb(38, 110, 110)"
    }
});


