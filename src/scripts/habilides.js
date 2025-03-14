const habilidades = [
  {
    nombre: "Python",
    nivel: "Principiante",
    imagen: "https://cdn-icons-png.flaticon.com/128/919/919852.png",
  },
  {
    nombre: "CSS",
    nivel: "Principiante",
    imagen: "",
  },
  {
    nombre: "GitHub",
    nivel: "Principiante",
    imagen: "",
  },
  {
    nombre: "HTML",
    nivel: "Principiante",
    imagen: "",
  },
  {
    nombre: "JavaScript",
    nivel: "Principiante",
    imagen: "",
  },
  {
    nombre: "Programacion",
    nivel: "Principiante",
    imagen: "",
  },
  {
    nombre: "Codificacion",
    nivel: "Principiante",
    imagen: "",
  },
  {
    nombre: "Desarrollo Web",
    nivel: "Principiante",
    imagen: "",
  },
];

function generarhabilidades(habilidades) {
  const contenedorHabilidades = document.querySelector(
    "grid grid-cols-2 md:grid-cols-4 gap-4"
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
