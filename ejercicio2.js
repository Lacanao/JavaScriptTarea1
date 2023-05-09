
const colores = ['rojo', 'azul', 'amarillo'];
const colores2 = ['blanco', 'negro', 'rojo'];
const resultado = [];

function coincidencia(array1, array2) {
    
    array1.filter((elemento) => {
        array2.filter((elemento2) => {
            if (elemento === elemento2) {
                resultado.push(elemento)
            }
        })
    })

    return resultado;
}


console.log(coincidencia(colores, colores2));

