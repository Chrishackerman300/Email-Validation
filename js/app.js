document.addEventListener('DOMContentLoaded', () => {

    //Variables
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    cargarEventos()

    //Función de los eventos
    function cargarEventos(){
        inputEmail.addEventListener('blur', validar);
        inputAsunto.addEventListener('blur', validar);
        inputMensaje.addEventListener('blur', validar);
    }

    //Función Validar 
    function validar(e){
        if(e.target.value.trim() === ''){
            showAlerta(`El campo ${e.target.id} esta vacio`, e.target.parentElement);
            return
        }

        if(e.target.id === 'email'){
            validarEmail(e.target.value);
        }

        alertaRepetida(e.target.parentElement);
    }

    //Función showAlert
    function showAlerta(mensaje, elemento){

        alertaRepetida(elemento);

        const alerta = document.createElement('div');
        alerta.classList.add('alert');
        alerta.textContent = mensaje;

        elemento.appendChild(alerta)
    }

    //Función alertaRepetido
    function alertaRepetida(elemento){
        const alerta = elemento.querySelector('.alert');

        if(alerta){
            alerta.remove();
        }
    }

    //Función validarEmail
    function validarEmail(email){
        const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const resultado = regexEmail.test(email);

        console.log(resultado);

        if(resultado === true){
            showAlerta(`El campo ${e.target.id} esta vacio`, e.target.parentElement);
        }
    }
})