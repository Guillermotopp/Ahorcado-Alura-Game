function nuevoJuego() {
    // Obtener una palabra aleatoria de los vectores de palabras
    const palabraAleatoria = obtenerPalabraAleatoria();

    // Obtener la lista de elementos de la palabra secreta
    const palabraSecretaInputs = document.querySelectorAll('.palabraSecreta input');

    // Cargar la palabra aleatoria en los inputs de la palabra secreta
    for (let i = 0; i < palabraAleatoria.length; i++) {
        // Verificar si la letra es válida
        if (i < palabraSecretaInputs.length) {
            // Obtener el input correspondiente
            const input = palabraSecretaInputs[i];

            // Asignar la letra al input
            input.value = palabraAleatoria[i];
        }
    }
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

    // Convertir la palabra aleatoria en un array de letras y devolverlo
    return palabraAleatoria.split('');
}

