const inquirer = require("inquirer");

let preguntas = [
    {
        type: "confirm",
        name: "paraLlevar",
        message: "Es para delivery?",
        default: false
    },
    {
        type: "input",
        name: "direccion",
        message: "Ingrese su Dirección",
        when: function (respuestas) {
            return respuestas.paraLlevar;
        },
        validate: function (respuestaDeEstaPregunta) {
            if (respuestaDeEstaPregunta.trim() === '' || respuestaDeEstaPregunta.length < 8) {
                return '¡Ingresa La Direccion!';
            }
            return true;
        }
    },
    {
        type: "confirm",
        name: "bebida",
        message: "Desea Agregar Bebida?",
        default: false
    },
    {
        type: "list",
        name: "saborBebida",
        message: "Que Bebida?",
        choices: ["CocaCola", "Sprite", "Aquarius", "BonAqua"],
        when: function (respuestas) {
            return respuestas.bebida;
        }
    },
    {
        type: "input",
        name: "NombreCliente",
        message: "Escriba su Nombre",
        validate: function (respuestasDeEstaPregunta) {
            if (respuestasDeEstaPregunta.length < 4 || respuestasDeEstaPregunta.trim === '') {
                return "Necesitamos saber su nombre";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "Telefono",
        message: "Escriba su telefono",
        validate: function (respuestasDeEstaPregunta) {
            if (respuestasDeEstaPregunta.length < 10){
                return "Ingrese su telefono celular válido";
            } else if (isNaN(respuestasDeEstaPregunta)){
                return "Ingrese solo numero"
            }
            return true;
        },
    },
    {
        type: "checkbox",
        name: "gustosDePizza",
        message: "Elija el gusto de la pizza",
        choices: ["Muzza", "Jamon", "Napolitana", "A Caballo"],
        default: ["Muzza"],
    },
    {
        type: "list",
        name: "tamaño",
        message: "Elija el Tamaño de la Pizza",
        choices: ["Small", "Medium", "Large"],
        default: "Large"
    },
    {
        type: "confirm",
        name: "clienteHabitual",
        message: "Es Cliente Habitual?",
        default: false
    },
    {
        type: "checkbox",
        name: "empanadas",
        message: "Qué Gusto de Empanadas quiere?",
        choices: ["Carne Suave", "Pollo", "Jamon&Queso", "Atun"],
        when:function(respuestas){
            return respuestas.clienteHabitual;
        }
    }
]


inquirer.prompt(preguntas).then(function (respuestas) {
    console.log(respuestas)
})





















