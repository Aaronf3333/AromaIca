document.addEventListener("DOMContentLoaded", function () {
  includeHTML("header", "header.html");
  includeHTML("footer", "footer.html");
});

function includeHTML(id, file) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => console.error("Error cargando " + file, err));
}
