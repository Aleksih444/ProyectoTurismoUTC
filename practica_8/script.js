function agregarUsuario() {
    let nombre = document.getElementById("usuario").value;

    if (nombre === "") {
        alert("Por favor escribe un nombre");
        return;
    }

    let li = document.createElement("li");
    li.textContent = nombre;
    document.getElementById("listaUsuarios").appendChild(li);
    document.getElementById("usuario").value = "";
}

const btnInicio = document.getElementById("btnInicio");
btnInicio.addEventListener("click", function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
});