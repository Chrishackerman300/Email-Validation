document.addEventListener('DOMContentLoaded', () => {

    //Variables
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#btn-submit')
    const btnReset = document.querySelector('#btn-reset')


    //Objeto
    const datosEmail = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    cargarEventos()

    //Función de los eventos
    function cargarEventos(){
        inputEmail.addEventListener('blur', validar);
        inputAsunto.addEventListener('blur', validar);
        inputMensaje.addEventListener('blur', validar);
        formulario.addEventListener('submit', enviarEmail);
        btnReset.addEventListener('click', borrarFormulario)
    }

    //Función Validar 
    function validar(e){
        if(e.target.value.trim() === ''){
            showAlerta(`El campo ${e.target.id} esta vacio`, e.target.parentElement);

            datosEmail[e.target.name] = '';
            comprobarEmail()

            return;
        }

        //Validando expresion regular del email
        if(e.target.id === 'email'){
            const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            const resultado = regexEmail.test(e.target.value);

            if(resultado === true){
                showAlerta(`El ${e.target.id} ES VALIDO`, e.target.parentElement);
                
                setTimeout(() => {
                    alertaRepetida(e.target.parentElement);
                }, 1500);

                datosEmail[e.target.name] = e.target.value.trim().toLowerCase();
                comprobarEmail()

                return;
            }
            else{
                showAlerta(`El ${e.target.id} NO ES VALIDO`, e.target.parentElement);
                return;
            }
        }

        alertaRepetida(e.target.parentElement);

        datosEmail[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarEmail()
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

    //Función Comprobar Email
    function comprobarEmail(){
        if(Object.values(datosEmail).includes('')){
            console.log('Falta informacion');
            console.log(datosEmail);
            btnSubmit.classList.remove('show-submit');
            btnSubmit.disabled = true;
        }
        else{
            console.log('Informacion completa');
            console.log(datosEmail);
            btnSubmit.classList.add('show-submit');
            btnSubmit.disabled = false;
        }
    }

    //Función enviarEmail
    function enviarEmail(e){
        e.preventDefault()

        alert('Correo Enviado con Excito!')
    }

    //Función borrarFormulario
    function borrarFormulario(e){
        e.preventDefault()

        datosEmail.email = '';
        datosEmail.asunto = '';
        datosEmail.mensaje = '';

        formulario.reset();
        comprobarEmail()
    }
})