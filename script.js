// Variables para almacenar los inputs de palabra secreta y palabra secreta ayuda
let palabraSecretaInputs;
let palabraSecretaAyudaInputs;
// Variable para almacenar el número de intentos realizados
let contadorIntentos = 0;

// Función que se ejecuta cuando se carga la página
window.onload = function() {
    // Obtener la lista de elementos de la palabra secreta y palabra secreta ayuda
    palabraSecretaInputs = document.querySelectorAll('.palabraSecreta input');
    palabraSecretaAyudaInputs = document.querySelectorAll('.palabraSecretaAyuda input');

    // Configurar eventos de entrada para todos los casilleros de palabra secreta ayuda
    palabraSecretaAyudaInputs.forEach(input => {
        input.addEventListener('input', manejarEntradaPalabraSecretaAyuda);
    });
};

// Función para manejar la entrada en los casilleros de palabra secreta ayuda
function manejarEntradaPalabraSecretaAyuda() {
    // Obtener la letra ingresada en el casillero de palabra secreta ayuda
    const letraIngresada = this.value.toLowerCase();

    // Iterar sobre todos los casilleros de la palabra secreta
    palabraSecretaInputs.forEach(input => {
        // Obtener la letra del casillero de palabra secreta
        const letra = input.value.toLowerCase();

        // Verificar si la letra del casillero coincide con la letra ingresada
        if (letra === letraIngresada) {
            // Iluminar el casillero si coincide
            input.style.backgroundColor = 'lightgreen';
        }
    });

    // Actualizar la imagen del ahorcado
    actualizarImagenAhorcado();
}

// Función para cargar una nueva palabra aleatoria en la palabra secreta
function nuevoJuego() {
    // Obtener una palabra aleatoria de los vectores de palabras
    const palabraAleatoria = obtenerPalabraAleatoria();

    // Cargar la palabra aleatoria en los inputs de la palabra secreta
    palabraAleatoria.forEach((letra, index) => {
        // Verificar si la letra es válida
        if (index < palabraSecretaInputs.length) {
            // Obtener el input correspondiente
            const input = palabraSecretaInputs[index];

            // Asignar la letra al input
            input.value = letra;

            // Reiniciar el color de fondo
            input.style.backgroundColor = 'white';
        }
    });
}

// Función para obtener una palabra aleatoria de los vectores de palabras
function obtenerPalabraAleatoria() {
    // Aquí debes definir tus 8 vectores de palabras
    const palabras3 = ['sol', 'pan', 'mar'];
    const palabras4 = ['casa', 'rojo', 'agua'];
    const palabras5 = ['perro', 'mesa', 'fuego'];
    const palabras6 = ['guitar', 'pintar', 'coche'];
    const palabras7 = ['manzana', 'escuela', 'jugador'];
    const palabras8 = ['computar', 'palabra', 'bicicleta'];
    const palabras9 = ['elefantes', 'invierno', 'directivo'];
    const palabras10 = ['computadora', 'enciclopedia', 'universidad'];

    // Crear un array que contenga todos los vectores de palabras
    const todosLosVectores = [palabras3, palabras4, palabras5, palabras6, palabras7, palabras8, palabras9, palabras10];

    // Elegir un vector aleatorio
    const indiceVectorAleatorio = Math.floor(Math.random() * todosLosVectores.length);
    const vectorAleatorio = todosLosVectores[indiceVectorAleatorio];

    // Elegir una palabra aleatoria del vector aleatorio
    const indicePalabraAleatoria = Math.floor(Math.random() * vectorAleatorio.length);
    const palabraAleatoria = vectorAleatorio[indicePalabraAleatoria];

    let palabraSecreta = palabraAleatoria;
    // Convertir la palabra aleatoria en un array de letras y devolverlo
    return palabraAleatoria.split('');
}



// Función para actualizar la imagen del ahorcado
function actualizarImagenAhorcado() {
    // Incrementar el contador de intentos
    contadorIntentos++;

    // Obtener la imagen del ahorcado
    const imagenAhorcado = document.querySelector('.imagenAhorcado');

    // Obtener el nombre de la siguiente imagen en función del contador de intentos
    let nombreImagen;
    switch (contadorIntentos) {
        case 1:
            nombreImagen = '05-Ahorcado-Alura.png';
            break;
        case 2:
            nombreImagen = '06-Ahorcado-Alura.png';
            break;
        case 3:
            nombreImagen = '07-Ahorcado-Alura.png';
            break;
        case 4:
            nombreImagen = '08-Ahorcado-Alura.png';
            break;
        case 5:
            nombreImagen = '09-Ahorcado-Alura.png';
            break;
        case 6:
            nombreImagen = '10-Ahorcado-Alura.png';
            break;
        default:
            // Si el contador supera 6, se mantiene en la última imagen
            nombreImagen = '10-Ahorcado-Alura.png';
            mostrarMensaje();
            break;
    }

  // Construir la ruta completa de la imagen
const rutaImagen = `./img/${nombreImagen}`;

// Actualizar la fuente de la imagen del ahorcado
imagenAhorcado.src = rutaImagen;

 // Verificar si se alcanzó el máximo de intentos
if (contadorIntentos >= 6) {
    // Mostrar el mensaje "Ahorcado"
    mostrarMensaje();
}

}
function ocultarMensaje() {
    const mensajeFinal = document.getElementById('mensajeFinal');
    mensajeFinal.style.display = 'none';
}
function mostrarMensaje(){
    const mensajeFinal = document.getElementById('mensajeFinal');
    mensajeFinal.style.display = 'block';
}


// Función para probar si la palabra ingresada por el usuario coincide con la palabra secreta
function probarSuerte() {
    // Obtener la palabra ingresada por el usuario y convertirla en minúsculas
    const palabraIngresada = prompt("Por favor, ingresa la palabra: ");
    const palabraIngresadaLowerCase = palabraIngresada.toLowerCase();

    // Convertir la palabra secreta actual en una cadena y convertirla en minúsculas
    const palabraSecretaActual = palabraSecreta.join('').toLowerCase();

    // Verificar si la palabra ingresada coincide con la palabra secreta
    if (palabraIngresadaLowerCase === palabraSecretaActual) {
        // Mostrar un mensaje de alerta si coincide
        alert("¡Acertaste!");
    } else {
        mostrarMensaje();
    }
}