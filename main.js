class Product {
    constructor(nombre,precio,categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

class UI {
    addProduct(product){
        const div = document.getElementById('listProducts');
        const element = document.createElement('div');
        element.className = "card mt-3 mb-3";
        element.innerHTML =  `
        <div class="card-body">
            <h3> <strong>Nombre: ${product.nombre}</strong></h3>
            <h5> <strong>Precio: ${product.precio}</strong></h5>
            <h5> <strong>Categoria: ${product.categoria}</strong></h5>
            <button class="btn btn-danger" name="delete">Eliminar</button>
        </div>`;
        div.appendChild(element);
    }

    deleteProduct(e){
        if(e.name === 'delete'){
            e.parentElement.parentElement.remove();
        }
    }

    mostrarMensaje(mensaje,tipo){
        const container = document.getElementById('container');
        const div = document.createElement('div');
        const row = document.querySelector('.row');
        div.className = `alert alert-${tipo} mt-3`;
        div.textContent=mensaje;
        container.insertBefore(div,row);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        },3000);
    }
}

const form = document.getElementById('formProduct');
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const categoria = document.getElementById('categoria').value;
    const product = new Product(name,precio,categoria);
    const ui = new UI();
    ui.addProduct(product);
    ui.mostrarMensaje('Guardado exitosamente','success');
})

const productList = document.getElementById('listProducts');
productList.addEventListener('click', e => {
    const ui = new UI();
    ui.deleteProduct(e.target);
    ui.mostrarMensaje('Eliminado exitosamente','danger');
})