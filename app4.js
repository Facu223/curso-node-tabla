const { crearArchivo } = require("./helpers/multiplicar");
const argv  = require("./config/yarn");
const colors = require("colors")

console.clear();
console.log(process.argv);
console.log(argv);
console.log(argv.base);

//Con argv
// const [,,arg3] = process.argv
// const [, base] = arg3.split('=')

crearArchivo(argv.base, argv.l, argv.h)
  .then((nombreTabla) => console.log(nombreTabla.rainbow, "creada"))
  .catch((err) => console.log(err));
