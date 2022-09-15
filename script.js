
//declaro las constantes que necesito para tomar los textos ingresados por en usuario

const texto_ingreso = document.querySelector(".texto_ingreso");
const texto_egreso = document.querySelector(".texto_egreso");
const btnCopiar = document.querySelector(".botonCopiar");
btnCopiar.style.display = "none"

const parrafos_segunda_columna = document.querySelector(".parrafos_segunda_columna");
parrafos_segunda_columna.style.display = "block";



//funcion que se ejecuta al tocar click en el boton encriptar

function botonEncriptar(){
    const textoEncriptado = encriptar(texto_ingreso.value)
    //declaro una constante que pasa a ser el contenido del primer textarea encriptado por..
    //..la funcion encriptar que esta luego
    texto_egreso.value = textoEncriptado;
    //el texto encripatado pasar a verse en el segundo textarea
    texto_egreso.style.backgroundImage = "none";
    //ocultar la imagen de fondo al segundo textarea
    texto_ingreso.value = "";
    //vaciar el primer textarea
    btnCopiar.style.display = "block";
    //mostrar el boton copiar oculto
    parrafos_segunda_columna.style.display = "none";
    //ocultar los parrafos de la segunda columna
}

//funcion de encriptacion basada en la creacion de una matriz donde..
//..coloco las llaves que son el cambio de una vocal por una palabra

function encriptar(stringEncriptada){
    let matrizLlaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufar"]];
    //declaro una matriz con las llaves de encriptacion
    stringEncriptada = stringEncriptada.toLowerCase();
    //el resultado de la encriptacion pasa a ser en minusculas

    //creo un ciclo exacto donde recorre la matriz completa creada anteriormente buscando..
        for(let i = 0; i < matrizLlaves.length; i++){
            if(stringEncriptada.includes(matrizLlaves[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizLlaves[i][0], matrizLlaves [i][1])
            }
            //.. si el texto ingresado incluye vocales como los indices 0 de los arrays..
            //..en ese caso reemplaza a todos ellos con su respectivo indice 1
        }
        return stringEncriptada;
}

//mismo procedimiento para el boton desencriptar..
//.. solo que hize unas variaciones

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(texto_ingreso.value)
    texto_egreso.value = textoDesencriptado;
    texto_egreso.style.backgroundImage = "none";
    texto_ingreso.value = "";
    btnCopiar.style.display = "block";
    parrafos_segunda_columna.style.display = "none";
}
function desencriptar(cadenaDesencriptada){
    let matrizLlaves2 = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufar", "u"]];
    cadenaDesencriptada = cadenaDesencriptada.toLowerCase();
    let i=0;

    while(i < matrizLlaves2.length){
      if(cadenaDesencriptada.includes(matrizLlaves2[i][0])) {
            cadenaDesencriptada = cadenaDesencriptada.replaceAll(matrizLlaves2[i][0], matrizLlaves2[i][1])
        }   
        i++
    }
    return cadenaDesencriptada;
}

function botonCopiar(){
    texto_egreso.select();
    //seleccionar el texto del segundo text area
    navigator.clipboard.writeText(texto_egreso.value);
    //escribe ese texto en el portapapeles
    texto_egreso.value ="";
    //deja vacio al textarea
    swal("Texto copiado","","success");
    //plugin que cambia el aspecto del alert lanzado
}