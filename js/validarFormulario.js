const formulario = document.getElementById('inscripcion'); //obtengo el formulario
const inputs = document.querySelectorAll('#inscripcion input,#inscripcion select');//todos los inputs del formulario

const validarIngresos = ( event )=>{
    let nombreDelInput = event.target.name;
    let input = event.target;
    switch(nombreDelInput){
        case 'nombre':
            validarCampo( patrones.nombre,input,nombreDelInput);
            break;
        case 'apellido':
            validarCampo( patrones.apellido, input, nombreDelInput );
            break;
        case 'nombre-emerg':
            validarCampo( patrones.nombre,input,nombreDelInput);
            break;
        case 'apellido-emerg':
            validarCampo( patrones.apellido, input, nombreDelInput );
            break;
        case 'tel-fijo':
            validarCampo( patrones.telefono, input, nombreDelInput );
            break;
        case 'tel-fijo-emerg':
            validarCampo( patrones.telefono, input, nombreDelInput );
            break;
        case 'tel-movil':
            validarCampo( patrones.telefono, input, nombreDelInput );
            break;
        case 'tel-movil-emerg':
            validarCampo( patrones.telefono, input, nombreDelInput );
            break;
        case 'dni':
            validarCampo( patrones.dni, input, nombreDelInput);
            break;
        case 'edad':
            validarCampo( patrones.edad, input, nombreDelInput);
            break;
        case 'cod-postal':
            validarCampo( patrones.cod_postal, input, nombreDelInput);
            break;
        case 'domicilio':
            validarCampo( patrones.domicilio, input, nombreDelInput);
    }
    }
const validarCampo = (patron, input, name )=>{
    if( patron.test(input.value)){
        document.getElementById(name).style.borderColor = 'green';
    }
    else{
        document.getElementById(name).style.borderColor = 'red';
    }
    
}


inputs.forEach( ( input )=>{
    input.addEventListener('keyup',validarIngresos );
    input.addEventListener('blur',validarIngresos );
})





const patrones = {
    nombre: /^[a-zA-Z\s]{3,25}$/,
    apellido:/^[a-zA-Z\s]{3,25}$/,
    telefono:  /^\d{2,2}[-\s]{1,1}[0-9]{4,4}[-\s]{1,1}[0-9]{4,4}$/,
    dni:/^\d{6,8}$/,
    edad: /^\d{1,3}$/,
    cod_postal: /^[A-Z]?[0-9]{4,4}[A-Z]{3,3}$/,
    domicilio: /^[a-zA-Z\s]+[0-9]{1,4}$/,
}
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
});