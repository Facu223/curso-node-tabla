const argv = require("yargs")
  //Con esta cnofiguracion, puedo utilizar la letra b o base para
  //definir una base
  //Se realiza una opcion por cada argumento que queramos
  //configurar
  .option("b", {
    alias: "base",
    type: "number",
    //Para valor obligatorio
    demandOption: true,
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: 'Este es el número hasta donde quieres la tabla'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

module.exports = argv
