function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("crm-container").style.display = "block";
        loadCards();
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function logout() {
    document.getElementById("crm-container").style.display = "none";
    document.getElementById("login-container").classList.remove("hidden");
}

function addCard() {
    const cards = JSON.parse(localStorage.getItem("cards") || "[]");

    const newCard = {
        id: Date.now(),
        text: "",
        column: "novo-lead"
    };

    cards.push(newCard);
    localStorage.setItem("cards", JSON.stringify(cards));
    renderCards();
}

function renderCards() {
    const columns = ["novo-lead","negociacao","andamento","fechado"];
    columns.forEach(col => document.getElementById(col).innerHTML = "");

    const cards = JSON.parse(localStorage.getItem("cards") || "[]");

    cards.forEach(card => {
        const div = document.createElement("div");
        div.className = "card";
        div.draggable = true;
        div.dataset.id = card.id;
        div.ondragstart = drag;
        div.innerHTML = `<textarea onkeyup="updateCard(${card.id}, this.value)">${card.text}</textarea>`;
        document.getElementById(card.column).appendChild(div);
    });
}

function updateCard(id, value) {
    const cards = JSON.parse(localStorage.getItem("cards") || "[]");
    const index = cards.findIndex(c => c.id === id);
    cards[index].text = value;
    localStorage.setItem("cards", JSON.stringify(cards));
}

function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("id", ev.target.dataset.id); }
function drop(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("id");
    const cards = JSON.parse(localStorage.getItem("cards") || "[]");
    const card = cards.find(c => c.id == id);
    const newColumn = ev.currentTarget.querySelector(".card-list").id;
    card.column = newColumn;
    localStorage.setItem("cards", JSON.stringify(cards));
    renderCards();
}

window.onload = function() {
    document.querySelectorAll(".column").forEach(col => {
        col.ondragover = allowDrop;
        col.ondrop = drop;
    });
    renderCards();
};

function loadCards() { renderCards(); }
