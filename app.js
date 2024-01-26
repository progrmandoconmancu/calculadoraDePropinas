//seleccionar los elementos del DOM:
const inputValor = document.getElementById("inputMonto");
const opcion1 = document.getElementById('opc1');
const opcion2 = document.getElementById('opc2');
const opcion3 = document.getElementById('opc3');
const opcion4 = document.getElementById('opc4');
const botonCalcular = document.getElementById('btnCalcular');
const divAbajoSele = document.getElementById('divAbajo');
const divArriba = document.getElementById('divAlerta');

//vamos a crear una variable en donde vamos a insetar el resultado y mostrarlo.
let resultado;

//obtener el valor que va a seleccionar el usuario: -> Evento Input(Obtenemos mucha información sobre el input).

inputValor.addEventListener('input',()=>{
    console.log(inputValor.value);
})

//saber que selección ha seleccionado el usuario: -> checked (nos va a devolver true si esta seleccionado o false sino lo esta.)
botonCalcular.addEventListener('click',()=>{
    if(opcion1.checked){
        resultado = inputValor.value * opcion1.value / 100; // sacamos el porcentaje
        divAbajoSele.firstElementChild.nextSibling.remove(); //removemos el segundo texto si existe
        mostrarMonto(resultado); //imprimimos el nuevo resultado.
    }else if(opcion2.checked){
        resultado = inputValor.value * opcion2.value / 100;
        divAbajoSele.firstElementChild.nextSibling.remove();
        mostrarMonto(resultado);
    }else if(opcion3.checked){
        resultado = inputValor.value * opcion3.value / 100;
        divAbajoSele.firstElementChild.nextSibling.remove();
        mostrarMonto(resultado);
    }else if(opcion4.checked){
        resultado = inputValor.value * opcion4.value / 100;
        divAbajoSele.firstElementChild.nextSibling.remove();
        mostrarMonto(resultado);
    }else{
        
        mostrarAlerta();
        setTimeout(() => {
            const barraRoja = document.querySelector('#divAlerta .bg-red-500');  // si podemos seleccionar el valor, quiere decir que el elemento existe.
            if(barraRoja){ //como es true, se ejecuta el código ->
                barraRoja.remove(); //remueve la barra
                divArriba.classList.add('hidden'); // oculta el div :D
            }
        }, 3000);
    }
})

function mostrarMonto(valorDelResultado){
    const pResutaldo = document.createElement("P"); // creando el p
    pResutaldo.textContent = valorDelResultado;     // poniendo al p el valor de resultado
    pResutaldo.classList.add('text-center', 'text-white','text-xl'); // poniendo style al p
    divAbajoSele.append(pResutaldo); // agregando el p en el div
}

function mostrarAlerta(){
        const barraRoja = document.querySelector('#divAlerta .bg-red-500'); // selecciono el item

        if(!barraRoja){ // si es false quiere decir que no existe el valor. entonce creamos uno nuevo.
        const nuevaBarraRoja = document.createElement('DIV'); //creamos el div
        nuevaBarraRoja.classList.add('bg-red-500', 'text-center', 'text-white', 'w-full', 'h-10', 'flex', 'justify-center', 'items-center', 'py-2', 'mx-2');// insertamos style
        nuevaBarraRoja.textContent = "Falta ingresar el número o seleccionar el porcentaje";//le agregamos un texto
        divArriba.append(nuevaBarraRoja);//lo ponemos en el div
        divArriba.classList.remove('hidden');//mostramos el div
        }
        
    }
        

