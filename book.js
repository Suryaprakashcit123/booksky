var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display = "block";
    popupbox.style.display = "block";
});

var cancelbook = document.getElementById("cancelbook");
cancelbook.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

var container = document.querySelector(".container"); // Corrected the selector
var addbook = document.getElementById("addbook");
var booktitleinput = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author");    
var bookdescription = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${bookdescription.value}</p>
        <button class="delete-button">Delete</button>
    `;
    container.append(div);

    // Add delete functionality
    div.querySelector(".delete-button").addEventListener("click", function() {
        div.remove();
    });

    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});
