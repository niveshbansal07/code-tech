

// const modeToggle = document.getElementById("modeToggle");
// const body = document.body;

// if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark-mode");
// }

// modeToggle.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");
//     localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
// });

// document.getElementById('searchButton').addEventListener('click', function() {
//     let query = document.getElementById('searchInput').value.toLowerCase();
//     let pages = {
//         "home": "check2.html",
//         "syllabus": "bca1.html",
//         "study material": "#",
//         "about": "#",
//         "contact": "#"
//     };
//     for (let key in pages) {
//         if (query.includes(key)) {
//             window.location.href = pages[key];
//             return;
//         }
//     }
//     alert("Page not found");
// });

// Dark Mode Toggle
// const modeToggle = document.getElementById("modeToggle");
// const body = document.body;

// Apply saved theme from localStorage
// if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark-mode");
// }

// modeToggle.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");
//     localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
// });

// // Search Functionality
// const searchButton = document.getElementById("searchButton");
// const searchInput = document.getElementById("searchInput");

// searchButton.addEventListener("click", () => {
//     let query = searchInput.value.toLowerCase();
//     if (query.trim() === "") {
//         alert("Please enter a search query.");
//         return;
//     }
    
//     let found = false;
//     document.querySelectorAll("a").forEach(link => {
//         if (link.textContent.toLowerCase().includes(query) || link.href.toLowerCase().includes(query)) {
//             window.location.href = link.href;
//             found = true;
//             return;
//         }
//     });
    
//     if (!found) alert("Content not found on this website.");
// });


// // Dark Mode Toggle
// const modeToggle = document.getElementById("modeToggle");
// const body = document.body;

// // Apply saved theme from localStorage
// if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark-mode");
// }

// modeToggle.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");
//     localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
// });

// // Search Functionality
// const searchButton = document.getElementById("searchButton");
// const searchInput = document.getElementById("searchInput");
// const searchSvg = document.getElementById("searchSvg");

// function performSearch() {
//     let query = searchInput.value.toLowerCase().trim();
//     if (query === "") {
//         alert("Please enter a search query.");
//         return;
//     }
    
//     let found = false;
//     document.querySelectorAll("a").forEach(link => {
//         if (link.textContent.toLowerCase().includes(query) || link.href.toLowerCase().includes(query)) {
//             window.location.href = link.href;
//             found = true;
//             return;
//         }
//     });
    
//     if (!found) alert("Content not found on this website.");
// }

// searchButton.addEventListener("click", performSearch);
// searchSvg.addEventListener("click", performSearch);
// searchInput.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//         performSearch();
//     }
// });



// // Dark Mode Toggle
// const modeToggle = document.getElementById("modeToggle");
// const body = document.body;
// const sunIcon = document.getElementById("sunIcon");
// const moonIcon = document.getElementById("moonIcon");

// // Apply saved theme from localStorage
// if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark-mode");
//     moonIcon.style.display = "block";
//     sunIcon.style.display = "none";
// } else {
//     moonIcon.style.display = "none";
//     sunIcon.style.display = "block";
// }

// modeToggle.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");
//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("theme", "dark");
//         moonIcon.style.display = "block";
//         sunIcon.style.display = "none";
//     } else {
//         localStorage.setItem("theme", "light");
//         moonIcon.style.display = "none";
//         sunIcon.style.display = "block";
//     }
// });

// // Search Functionality
// const searchInput = document.querySelector(".search-bar input");
// const searchButton = document.querySelector(".search-bar button");
// const searchSvg = document.querySelector(".search-bar button svg");

// function performSearch() {
//     let query = searchInput.value.toLowerCase().trim();
//     if (query === "") {
//         alert("Please enter a search query.");
//         return;
//     }
    
//     let found = false;
//     document.querySelectorAll("a").forEach(link => {
//         if (link.textContent.toLowerCase().includes(query) || link.href.toLowerCase().includes(query)) {
//             window.location.href = link.href;
//             found = true;
//             return;
//         }
//     });
    
//     if (!found) alert("Content not found on this website.");
// }

// searchButton.addEventListener("click", performSearch);
// searchSvg.addEventListener("click", performSearch);
// searchInput.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//         performSearch();
//     }
// });


// Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
const body = document.body;
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

// Apply saved theme from localStorage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
} else {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
}

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        moonIcon.style.display = "block";
        sunIcon.style.display = "none";
    } else {
        localStorage.setItem("theme", "light");
        moonIcon.style.display = "none";
        sunIcon.style.display = "block";
    }
});

// Search Functionality
const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");
const searchSvg = document.querySelector(".search-bar button svg");

function showPopup(message) {
    let popup = document.createElement("div");
    popup.classList.add("search-popup");
    popup.textContent = message;
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.remove();
    }, 3000);
}

function performSearch() {
    let query = searchInput.value.toLowerCase().trim();
    if (query === "") {
        showPopup("Please enter a search query.");
        return;
    }
    
    let found = false;
    let allText = document.body.innerText.toLowerCase();
    if (allText.includes(query)) {
        window.find(query);
        found = true;
    }
    
    document.querySelectorAll("a").forEach(link => {
        if (link.textContent.toLowerCase().includes(query) || link.href.toLowerCase().includes(query)) {
            window.location.href = link.href;
            found = true;
            return;
        }
    });
    
    if (!found) showPopup("Content not found on this website.");
}

searchButton.addEventListener("click", performSearch);
searchSvg.addEventListener("click", performSearch);
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});
