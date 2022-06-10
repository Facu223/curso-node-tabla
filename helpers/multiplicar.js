const fs = require("fs");

//Con promesas
// const crearArchivo = (base) => {
//   return new Promise((resolve, reject) => {
//     let salida = "";

//     for (let i = 0; i <= 10; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }

//     console.log(salida);

//     fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//       if (err) reject(`No se ha podido crear la tabla`);
//       resolve(`Tabla del ${base}`);
//     });
//   });
// };

//Con async await
const crearArchivo = async (base, l, hasta) => {
  try {
    let salida = "";

    for (let i = 0; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (l) {
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `Tabla del ${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
