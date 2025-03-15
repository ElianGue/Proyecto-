const habilidades = [
  {
    nombre: "Python",
    nivel: "Principiante",
    imagen: "https://cdn-icons-png.flaticon.com/128/919/919852.png",
  },
  {
    nombre: "CSS",
    nivel: "Principiante",
    imagen: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  },
  {
    nombre: "GitHub",
    nivel: "Principiante",
    imagen: "https://cdn-icons-png.flaticon.com/128/2111/2111432.png",
  },
  {
    nombre: "HTML",
    nivel: "Principiante",
    imagen: "https://cdn-icons-png.flaticon.com/128/1/1975.png",
  },
  {
    nombre: "JavaScript",
    nivel: "Principiante",
    imagen: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  },
  {
    nombre: "Programacion",
    nivel: "Principiante",
    imagen: "https://cdn-icons-png.flaticon.com/128/143/143655.png",
  },
  {
    nombre: "Codificacion",
    nivel: "Principiante",
    imagen: "https://cdn-icons-png.flaticon.com/128/25/25252.png",
  },
  {
    nombre: "Desarrollo Web",
    nivel: "Principiante",
    imagen: "https://cdn-icons-png.flaticon.com/128/5831/5831220.png",
  },
];

function generarhabilidades(habilidades) {
  const contenedorHabilidades = document.querySelector(
    "#contenedor_habilidades"
  );

  contenedorHabilidades.innerHTML = "";

  habilidades.forEach((habilidad) => {
    const tarjetaHabilidad = `
         <div class="bg-deepBlue p-6 rounded-lg shadow-md flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <img src="${habilidad.imagen}" alt="${habilidad.nombre}" class="h-10">
                </div>
        `;
    contenedorHabilidades.innerHTML += tarjetaHabilidad;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generarhabilidades(habilidades);
});

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Función para alternar la visibilidad del menú
function toggleMenu() {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("active");
}

// Asignar el evento de clic al botón de toggle
menuToggle.addEventListener("click", toggleMenu);

// Cerrar el menú al hacer clic fuera de él
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !menuToggle.contains(event.target)
  ) {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("active");
  }
});
