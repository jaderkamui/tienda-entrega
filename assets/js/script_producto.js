let productos = [
    {
        sku: "0001",
        id: 1,
        nombre: "Aki de Vinilo",
        descripcion: "Figura de Aki en formato vinilo de 15 cm.",
        detalle: "Este es un detalle ampliado del producto que no aparece en la ficha inicial",
        precio: 1000,
        descuento: 100,
        imagen: "/assets/img/aki2.webp",
      },
      {
        sku: "0002",
        id: 2,
        nombre: "Manga ChainsawMan vol 1",
        descripcion: "Manga formato español de chainsawman",
        detalle: "Este es un detalle ampliado del producto que no aparece en la ficha inicial",
        precio: 1500,
        descuento: 500,
        imagen: "/assets/img/manga1.jpg",
      },
      {
        sku: "0003",
        id: 3,
        nombre: "Manga ChainsawMan vol 2",
        descripcion: "Manga formato español de chainsawman",
        detalle: "Este es un detalle ampliado del producto que no aparece en la ficha inicial",
        precio: 2000,
        descuento: 200,
        imagen: "/assets/img/manga2.jpeg",
      },
      {
        sku: "0004",
        id: 4,
        nombre: "Power de Vinilo",
        descripcion: "Figura de power en formato vinilo de 15 cm.",
        detalle: "Este es un detalle ampliado del producto que no aparece en la ficha inicial",
        precio: 2000,
        descuento: 200,
        imagen: "/assets/img/nendochainsaw3-400x564.jpg",
      },
      {
        sku: "0005",
        id: 5,
        nombre: "Pochita Peluche",
        descripcion: "Peluche Pochita formato 25 cm",
        detalle: "Este es un detalle ampliado del producto que no aparece en la ficha inicial",
        precio: 2000,
        descuento: 200,
        imagen: "/assets/img/pochita_1800x.webp",
      },
      {
        sku: "0006",
        id: 6,
        nombre: "Denji de Vinilo",
        descripcion: "Figura de Denji en formato vinilo de 15 cm.",
        detalle: "Este es un detalle ampliado del producto que no aparece en la ficha inicial",
        precio: 2000,
        descuento: 200,
        imagen: "/assets/img/640.webp",
      },
]

let parametro = new URLSearchParams(location.search)
console.log(parametro.get("id")); //obtenemos los ids de los productos
let idProducto = parametro.get("id");

let found= productos.find(producto => producto.id == idProducto);


if(found){
    document.querySelector(".detalle-producto").innerHTML = `
        <div class="card mb-3 mx-auto" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${found.imagen}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${found.nombre}</h5>
                    <p class="card-text">${found.descripcion}</p>
                    <p class="card-text">${found.detalle}</p>
                    <p class="card-text">SKU ${found.sku}</p>
                    <p class="card-text"><small class="text-muted">Precio $ ${found.precio} </small></p>
                    </div>
                </div>
            </div>
        </div>
`
}else{
    document.querySelector(".detalle-producto").innerHTML = `
    <h2 class='text-center'>PRODUCTO NO ENCONTRADO</h2>
    <a href="/index.html" class="btn btn-danger d-block text-center m-auto" style="width:200px;'">Volver a la página principal</a>
    `
}

