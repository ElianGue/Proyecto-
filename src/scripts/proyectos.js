const category_container = document.querySelector("#filter_options");
const product_card = document.querySelector("#card_container");

const products = [
  {
    id: 1,
    title: "My Store",
    description:
      "Esta es mi primera tienda virtual en la que se puede encontrar un gran variedad de productos.",
    image: "http://127.0.0.1:5502/src/styles/img/my%20store.png",
  },
  {
    id: 2,
    title: "Carrito de compras",
    description:
      "Diseño versión mobile de un carrito de compras donde se pueden añadir o eliminar los productos previamente seleccionados en la tienda web.",
    image:
      "http://127.0.0.1:5502/src/styles/img/carrito%20de%20compras%20mp.png",
  },
  {
    id: 3,
    title: "Desarrollo web Mobile",
    description:
      "Este es mi primer diseño de una pagina web que se adapta a la version mobile y de escritorio.",
    image: "http://127.0.0.1:5502/src/styles/img/quaris%20mp.png",
  },
  {
    id: 4,
    title: "To Do App",
    description:
      "Aplicacion sencilla destinada a ordenar tareas, podras conocer las tareas completadas y las que aun te faltan por realizar.",
    image: "http://127.0.0.1:5502/src/styles/img/todo%20app.png",
  },
  {
    id: 5,
    title: "Formulario",
    description:
      "Ejemplo de un formulario sencillo en el que se puede recibir datos del usuario y sus comentarios.",
    image: "http://127.0.0.1:5502/src/styles/img/formulario.png",
  },
  {
    id: 6,
    title: "Diseño Web",
    description:
      "Diseño de una pagina web destinada a recibir datos del usuario, esta pagina esta diseñada segun las especificaciones del cliente.",
    image: "http://127.0.0.1:5502/src/styles/img/Ophelia.png",
  },
];

loadProductsCard(products, product_card);

function loadProductsCard(items, element) {
  for (let i = 0; i < items.length; i++) {
    const product = items[i];
    const template = `
             <div class="shadow-xl w-80 rounded-md border border-gray-200 cursor-pointer transform transition-transform duration-300 hover:scale-110 ">
            <figure class="w-full aspect-square overflow-hidden">
                <img src="${product.image}" alt="${product.title}" class="w-full object-cover">
            </figure>
            <div aria-label="card content" class="px-4 pt-4 border-t-1 flex flex-col gap-2 border-gray-300  text-gray-300">
                <h3 class="text-xl text-white">${product.title}</h3>
                <p>${product.description}</p>
                <div class="flex justify-between">        
            </div>
        </div>
        </div>
    </div>`;
    element.innerHTML += template;
  }
}
