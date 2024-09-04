document.addEventListener("DOMContentLoaded", function () {

    const container = document.getElementById("container");
    const saludarBtn = document.getElementById("saludarBtn");

    container.addEventListener("click", function () {
        alert("Hola! Soy el div");
    });

    saludarBtn.addEventListener("click", function (event) {
        alert('Hola!');
        event.stopPropagation();
    });
});
