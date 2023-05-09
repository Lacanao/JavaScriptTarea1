

class Carrito {

    constructor () {
        this.montoTotal = 10;
        this.productos = ['Leche']
        this.cantidad = [1]
    }
  
    agregarProducto(nombre, precio, unidades) {

        if (!this.productos.includes(nombre) && !this.cantidad.includes(unidades)){
            this.productos.push(nombre)
            this.cantidad.push(unidades)
            this.montoTotal += precio * unidades;
        } else {
                console.log(`Ya existe el producto ${nombre}`);;
            }
        } 
}

const carrito = new Carrito;

carrito.agregarProducto("Azucar", 5, 2)
carrito.agregarProducto("Azucar", 5, 3)
console.log(carrito);





