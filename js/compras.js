var productos = JSON.parse(localStorage.getItem('productos')) || [];

function cargarProductos(){

    var cadena = '';
    for(let i = 0; i < productos.length; i++){
        cadena += `<tr>

                        <td>${productos[i].producto}</td>
                        <td>${productos[i].precio}</td>
                        <td>${productos[i].stock}</td>

                        <td>
                            <div class="acciones">
                                <button onclick="editarProducto(${i})" class="btn btn-show m5">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    `;
    }

    if(productos.length == 0){
        cadena += `<tr>
                        <td colspan="7" align="center">
                            <br>
                            <br>
                                No hay productos registrados!
                                <br>
                                <br>
                                <br>
                                <a href="productosForm.html" class="btn btn-nuevo">
                                    <i class="fa fa-plus"></i>
                                    Nuevo
                                </a>
                            <br>
                            <br>
                            <br>
                            <br>
                        </td>
                    </tr>
                    `;
    }

    document.getElementById('listaproductos').innerHTML = cadena;
}

function buscarProducto(){
    var buscador = document.getElementById('buscar').value;

    var nuevoArray = [];

    if(buscador.trim() == '' || buscador.trim() == null){
        nuevoArray = JSON.parse(localStorage.getItem('productos')) || [];
    } else {

        for(let i = 0; i < productos.length; i++){
            var texto = productos[i].producto.toLowerCase();
            if(texto.search(buscador.toLowerCase()) >= 0){
                nuevoArray.push(productos[i]);
            }
        }
    }

    productos = nuevoArray;
    cargarProductos();
}
