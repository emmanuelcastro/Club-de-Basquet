const patrones = {
    nombre: /^[a-zA-Z\s]{3,25}$/,
    apellido:/^[a-zA-Z\s]{3,25}$/,
    telefono:  /^\d{2,2}[-\s]{1,1}[0-9]{4,4}[-\s]{1,1}[0-9]{4,4}$/,
    dni:/^\d{6,8}$/,
    edad: /^\d{1,3}$/,
    cod_postal: /^[A-Z]?[0-9]{4,4}[A-Z]{3,3}$/,
    domicilio: /^[a-zA-Z\s]+[0-9]{1,4}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/,
    pais_ciudad:/^[a-zA-Z\s]+/,
}
let estados = {
    'nombre':false,
    'apellido':false,
    'nombre-emerg':false,
    'apellido-emerg':false,
    'paren-emerg':false,
    'tel-fijo-emerg':false,
    'tel-movil-emerg':false,
    'tel-fijo':false,
    'tel-movil':false,
    'fecha-nacimiento':false,
    'ciudad-nacimiento':false,
    'pais-nacimiento':false,
    'dni':false,
    'cod-postal':false,
    'edad':false,
    'domicilio':false,
    'email':false,
    'grupo-sanguineo':false,
    'dia-interes':false,
    'horario':false,
    'alergia':false,
    'alergia-tipo':false,
    'medicacion':false,
    'medicacion-tipo':false,
    'dia-interes':false,
    'horario':false,
    'grupo-sanguineo':false,
    'sexo':false,
}

const validarParentesco = function(){
    let inputParentesco= document.getElementById('paren-emerg');
    let parentescosPosibles = ['padre','madre','tutor','hermano','hermana','primo','prima','abuelo','abuela'];
    for( parentesco of parentescosPosibles ){
        if( inputParentesco.value.toLowerCase().includes(parentesco)){
            inputParentesco.style.borderColor = 'green';
            estados['paren-emerg'] = true;
            break
        }
        else{
            inputParentesco.style.borderColor = 'red';
            estados['paren-emerg'] = false;
        }
    }
}
const validarFechaNacimiento = function(){
    let inputFecha = document.getElementById('fecha-nacimiento');
    if(inputFecha.value === ""){
        estados["fecha-nacimiento"] = false;
    }
    else{
        estados["fecha-nacimiento"] = true;
    }
}
const comprobarRadios = function( input ){
    let inputValue = input.value;
    let inputName = input.name;
    let inputDesactivado = document.getElementById(`${inputName}-tipo`);
    if( inputValue ==='si'){
        inputDesactivado.removeAttribute('disabled');
        estados[inputName] = true;
        estados[`${inputName}-tipo`] = true
    }
    else if( inputValue === 'no'){
        inputDesactivado.setAttribute('disabled','');
        inputDesactivado.value = "";
        estados[inputName] = false;
        estados[`${inputName}-tipo`] = false
    }
    
}
const comprobarSelect = function( input ){
    let inputValue = input.value;
    if( inputValue !== ""){
        estados[input.name] = true;
    }
    else{
        estados[input.name] = false;
    }
}

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
            break;
        case 'email':
            validarCampo( patrones.email, input, nombreDelInput);
            break
        case 'paren-emerg':
            validarParentesco();
            break
        case 'fecha-nacimiento':
            validarFechaNacimiento();
            break
        case 'pais-nacimiento':
            validarCampo( patrones.pais_ciudad, input, nombreDelInput );
            break
        case 'ciudad-nacimiento':
            validarCampo( patrones.pais_ciudad, input, nombreDelInput );
            break
        default:
            if(/^alergia|medicacion|obra-sc/.test(nombreDelInput)){
                comprobarRadios(input);
                break  
            }
            else if(/^grupo-sanguineo|dia-interes|horario/.test(nombreDelInput)){
                comprobarSelect( input );
                break
            }
            else if( nombreDelInput === 'sexo'){
                if( document.querySelector(`#${input.id}`).checked){
                    estados[nombreDelInput] = true;
                }
                else{
                    estados[nombreDelInput] = false;
                }
            }
            break

    }
}
const validarCampo = (patron, input, name )=>{
    if( patron.test(input.value)){
        document.getElementById(name).style.borderColor = 'green';
        estados[name] = true;
    }
    else{
        document.getElementById(name).style.borderColor = 'red';
        estados[name] = false;
    }
}
const comprobarEstados = function( obj ){
    for(propiedad in obj){
      if(obj[propiedad] === false){
        return false
      }
    }
    return true
}
const formulario = document.getElementById('inscripcion'); //obtengo el formulario
const inputs = document.querySelectorAll('#inscripcion input,#inscripcion select');//todos los inputs del formulario

formulario.addEventListener('submit', (e)=>{
    if(comprobarEstados(estados)){
        formulario.reset();
    }
    else{
        e.preventDefault();
    }
});

inputs.forEach( ( input )=>{
    input.addEventListener('keyup',validarIngresos );
    input.addEventListener('blur',validarIngresos );
})