function goToEvents() {
    window.location.href = "events.html";
}

// COUNTDOWN TIMER
const eventDate = new Date("Jan 25, 2026 10:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
function goToDetails() {
    window.location.href = "event-details.html";
}

// SEARCH FUNCTION
function searchEvents() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const events = document.getElementsByClassName("event-box");

    for (let event of events) {
        const title = event.querySelector("h3").innerText.toLowerCase();
        event.style.display = title.includes(input) ? "block" : "none";
    }
}

// FILTER FUNCTION
function filterEvents() {
    const category = document.getElementById("categoryFilter").value;
    const events = document.getElementsByClassName("event-box");

    for (let event of events) {
        if (category === "all" || event.classList.contains(category)) {
            event.style.display = "block";
        } else {
            event.style.display = "none";
        }
    }
}
function registerEvent() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all fields");
        return false;
    }

    document.getElementById("successPopup").style.display = "block";
    document.getElementById("registerForm").reset();
    return false;
}

function closePopup() {
    document.getElementById("successPopup").style.display = "none";
}
function addEvent() {
    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;
    const location = document.getElementById("eventLocation").value;

    if (name === "" || date === "" || location === "") {
        alert("Please fill all fields");
        return false;
    }

    const table = document.getElementById("eventTable");
    const row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = date;
    row.insertCell(2).innerText = location;
    row.insertCell(3).innerHTML =
        `<button onclick="deleteEvent(this)">Delete</button>`;

    document.getElementById("addEventForm").reset();

    // Update count
    const total = document.getElementById("totalEvents");
    total.innerText = parseInt(total.innerText) + 1;

    return false;
}

function deleteEvent(btn) {
    const row = btn.parentElement.parentElement;
    row.remove();

    const total = document.getElementById("totalEvents");
    total.innerText = parseInt(total.innerText) - 1;
}
