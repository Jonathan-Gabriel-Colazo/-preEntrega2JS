function Producto(codigo, nombre, marca, tamano, precio, familia, stock) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.marca = marca;
    this.tamano = tamano;
    this.precio = precio;
    this.familia = familia;
    this.stock = stock;
}

let listaProductos = [
    {
        codigo: 1,
        nombre: "Nalga",
        marca: "ternera",
        tamano: "1000 gr",
        precio: 2400,
        familia: "vaca",
        stock: 15,
    },

    {
        codigo: 2,
        nombre: "Bola de Lomo",
        marca: "ternera",
        tamano: "1000 gr",
        precio: 2400,
        familia: "vaca",
        stock: 15,
    },

    {
        codigo: 3,
        nombre: "Jamon Cuadrado",
        marca: "ternera",
        tamano: "1000 gr",
        precio: 2400,
        familia: "vaca",
        stock: 15,
    },
    {
        codigo: 4,
        nombre: "Peceto / Jamon Blanco",
        marca: "ternera",
        tamano: "1000 gr",
        precio: 2600,
        familia: "vaca",
        stock: 10,
    },
    {
        codigo: 5,
        nombre: "Cuadril",
        marca: "ternera",
        tamano: "1000 gr",
        precio: 2400,
        familia: "vaca",
        stock: 15,
    },
];

function guardarElementos() {
    localStorage.setItem('Productos', JSON.stringify(listaProductos));
}

function cargarElementos() {
    let productosGuardados = localStorage.getItem('Productos');
    if (productosGuardados) {
        listaProductos = JSON.parse(productosGuardados);
    }
}

function agregarProducto() {
    let codigo = parseInt(document.getElementById('codigoInput').value);
    let nombre = document.getElementById('nombreInput').value;
    let marca = document.getElementById('marcaInput').value;
    let tamano = document.getElementById('tamanoInput').value;
    let precio = parseInt(document.getElementById('precioInput').value);
    let familia = document.getElementById('familiaInput').value;
    let stock = parseInt(document.getElementById('stockInput').value);

    let producto = new Producto(codigo, nombre, marca, tamano, precio, familia, stock);

    listaProductos.push(producto);

    console.log(listaProductos);
}

document.getElementById('formAgregaP').addEventListener('submit', (event) => {
    event.preventDefault();
    agregarProducto();
    guardarElementos();
});

let formAgregaP = document.getElementById('formAgregaP');

const agregarProductoButton = document.getElementById('agregarProducto').addEventListener('click', () => {
    formAgregaP.style.display = "flex";
});

console.log(listaProductos.length);

document.getElementById('ocultarAgregaP').addEventListener('click', () => {
    formAgregaP.style.display = "none";
});

function buscarProducto() {
    let buscaProducto = document.getElementById('buscaProducto').value;

    let productoEncontrado = listaProductos.find((product) => {
        return product.nombre === buscaProducto;
    });

    if (productoEncontrado) {
        let muestraProducto = document.getElementById('muestraProducto');
        muestraProducto.textContent = 'Producto: ' + productoEncontrado.nombre + ', Precio: ' + productoEncontrado.precio;
    } else {
        console.log('No se encontró el producto ' + buscaProducto);
    }
}

document.getElementById('buscaButton').addEventListener('click', buscarProducto);

document.getElementById('deleteProducto').addEventListener('click', () => {
    eliminaProducto.style.display = "flex";
});

document.getElementById('ocultarEliminaP').addEventListener('click', () => {
    eliminaProducto.style.display = "none";
});

function eliminarProducto() {
    let eliminaProduct = document.getElementById('eliminaProduct').value;

    let indice = -1;

    listaProductos.forEach((producto, i) => {
        if (producto.nombre === eliminaProduct) {
            indice = i;
        }
    });
    if (indice !== -1) {
        listaProductos.splice(indice, 1);
        alert('Eliminaste el producto: ' + eliminaProduct);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'si, eliminar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Eliminado!',
                    'Eliminaste el producto: ' + eliminaProduct ,
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'no se elimino el producto :)',
                    'error'
                )
            }
        })
    } else {
        console.log('No se encontró el producto');
        alert('No se encontró el producto');
    }
}

document.getElementById('eliminaButton').addEventListener('click', eliminarProducto);


