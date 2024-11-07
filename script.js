
// Home

// Lista de imágenes con su correspondiente tarjeta
const imageList = [
    { cardId: 1, src: "assets/rehabilitacion/banda.jfif", description: "Banda Elástica: $8.350" },
    { cardId: 1, src: "assets/rehabilitacion/manija de subjecion.jfif", description: "Manija de subjecion $17.800" },
    { cardId: 1, src: "assets/rehabilitacion/pelota.jfif", description: "Pelota: $23.530" },
    { cardId: 1, src: "assets/rehabilitacion/tubos de latex.jfif", description: "Tubos de latex: $6.200" },
    { cardId: 2, src: "assets/insumos/andador para adulto.jfif", description: "Andador para adulto: $132.500" },
    { cardId: 2, src: "assets/insumos/muletas.jfif", description: "Muletas: $84.900" },
    { cardId: 2, src: "assets/insumos/nebulizador.jfif", description: "Nebulizador: $237.400" },
    { cardId: 2, src: "assets/insumos/tensiometro.jfif", description: "Tensiometro: $329.800" },
    { cardId: 3, src: "assets/sillas de ruedas/1.jfif", description: "Silla de ruedas: $629.100" },
    { cardId: 3, src: "assets/sillas de ruedas/electrica.jfif", description: "Silla de ruedas eléctrica: $894.600" },
    { cardId: 3, src: "assets/sillas de ruedas/plegable.jfif", description: "Silla de ruedas plegable: $691.300" },
    { cardId: 3, src: "assets/sillas de ruedas/postural.jfif", description: "Silla de ruedas postural: $867.900" }
  ];

  function filterImages() {
    const searchTerm = document.getElementById("search-input").value.toLowerCase();
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores
  
    // Si el campo de búsqueda está vacío, no mostrar nada
    if (searchTerm.trim() === "") {
        return;
    }
    // Filtrar la lista según la descripción que contenga el término de búsqueda
    const filteredImages = imageList.filter(image => 
      image.description.toLowerCase().includes(searchTerm)
    );
  
    // Mostrar las imágenes filtradas
    filteredImages.forEach(image => {
      const imageElement = document.createElement("div");
      imageElement.classList.add("result-item");
      imageElement.innerHTML = `
        <img src="${image.src}" alt="${image.description}">
        <p>${image.description || 'Sin descripción'}</p>
      `;
      resultsContainer.appendChild(imageElement);
    });
  
    // Si no se encontraron resultados
    if (filteredImages.length === 0) {
      const noResults = document.createElement("p");
      noResults.textContent = "No se encontraron resultados.";
      resultsContainer.appendChild(noResults);
    }
  }
  
  function verCarousel(cardId) {
    localStorage.setItem('selectedCardId', cardId);
    window.location.href = "carrusel.html";
  }
  
  let currentIndex = 0;
window.onload = function() {
  const selectedCardId = parseInt(localStorage.getItem('selectedCardId'));
  const selectedImages = imageList.filter(image => image.cardId === selectedCardId);
  if (selectedImages.length > 0) {
    document.getElementById("carousel-title").innerText = `Nuestros productos`;
    const imageElement = document.getElementById("carousel-image");
    const descriptionElement = document.getElementById("carousel-description");
    imageElement.src = selectedImages[currentIndex].src;
    descriptionElement.innerText = selectedImages[currentIndex].description;
    localStorage.setItem('selectedImages', JSON.stringify(selectedImages));
  }
};
  
function changeImage(direction) {
    const selectedImages = JSON.parse(localStorage.getItem('selectedImages'));
    if (!selectedImages) return;
  
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = selectedImages.length - 1;
    if (currentIndex >= selectedImages.length) currentIndex = 0;
  
    const imageElement = document.getElementById("carousel-image");
    const descriptionElement = document.getElementById("carousel-description");
    imageElement.src = selectedImages[currentIndex].src;
    descriptionElement.innerText = selectedImages[currentIndex].description;
  }
  