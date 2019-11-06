const inquirer = require("inquirer");

inquirer.prompt([
      {
          type: "confirm",
          name: "paraLlevar",
          message:"Es para delivery?",
      },
      {
          type:"input",
          name:"direccion",
          message:"Ingrese su Dirección"
      },
      {
          type: "input",
          name: "NombreCliente",
          message: "Escriba su Nombre",
      },
      {
          type:"input",
          name: "Telefono",
          message:"Escriba su telefono"
      },
      {
          type:"checkbox",
          name:"gustosDePizza",
          message:"Elija el gusto de la pizza",
          choices:["Muzza","Jamon","Napolitana","A Caballo"]
      },
      {
          type: "list",
          name: "tamaño",
          message:"Elija el Tamaño de la Pizza",
          choices:["Small","Medium","Large"]
      },
      {
          type:"list",
          name:"bebida",
          message:"Elija la Bebida",
          choices:["CocaCola","Sprite","Aquarius","BonAqua"]
      },
      {
          type:"checkbox",
          name:"empanadas",
          message:"Qué Gusto de Empanadas quiere?",
          choices:["Carne Suave","Pollo","Jamon&Queso","Atun"]
      }
  ]).then(function (respuestas) { 
    console.log(respuestas);
  })