function loadPage(page) {
    var contentDiv = document.getElementById("content");
    fetch(page)
        .then(response => response.text())
        .then(content => {
            contentDiv.innerHTML = content;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}

document.addEventListener("DOMContentLoaded", function () {
    // Load the home page by default
    loadPage(`./src/home/home.html`);
});