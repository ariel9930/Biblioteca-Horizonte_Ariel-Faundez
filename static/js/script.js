let carrito = document.querySelector("#carro")
let boton = document.querySelector("#Más")
boton.addEventListener("click", function(){
let contador = parseInt(carrito.innerText);

carrito.innerText = contador + 1;
});

let carritoo = document.querySelector("#carro")
let botonn = document.querySelector("#Más1")
botonn.addEventListener("click", function(){
let contador = parseInt(carritoo.innerText);

carritoo.innerText = contador + 1;
});

let carritooo = document.querySelector("#carro")
let botonnn = document.querySelector("#Más2")
botonnn.addEventListener("click", function(){
let contador = parseInt(carritooo.innerText);

carritooo.innerText = contador + 1;
});


const video = document.getElementById("videou")

video.addEventListener("mouseover", function () {
    video.src = ("static/video/persona_leyendo.mp4");
});
video.addEventListener("mouseout", function () {
    video.src = "static/video/videoplayback.mp4"
});




const login = document.querySelector("#boton")
login.addEventListener("click", function(){
    let email = document.getElementById("input").value;
    alert(`Hola, ${email}`)
})