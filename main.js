document.addEventListener("DOMContentLoaded", function () {
    const recommendBtn = document.getElementById("recommendBtn");
    const keywordsInput = document.getElementById("keywords");
    const recommendationsDiv = document.getElementById("recommendations");

    // Lista de juegos y aplicaciones de ejemplo
    const appsAndGames = [
        {
            nombre: "Juego de Acción",
            palabrasClave: ["accion","acción",  "disparos", "aventura","aventuras"],
            descripcion: "Un emocionante juego de disparos lleno de acción.",
            imagen: "https://example.com/juego-accion.jpg",
            descarga: "https://example.com/descarga-juego-accion",
        },
        {
            nombre: "Juego de Puzzles",
            palabrasClave: ["puzzles", "lógica", "estrategia"],
            descripcion: "Resuelve desafiantes rompecabezas en este juego de lógica.",
            imagen: "https://example.com/juego-puzzles.jpg",
            descarga: "https://example.com/descarga-juego-puzzles",
        },
        {
            nombre: "Aplicación de Noticias",
            palabrasClave: ["noticias", "actualidad", "información"],
            descripcion: "Mantente actualizado con las últimas noticias en esta aplicación.",
            imagen: "https://example.com/aplicacion-noticias.jpg",
            descarga: "https://example.com/descarga-aplicacion-noticias",
        },
        // Agrega más juegos y aplicaciones según sea necesario
    ];

    recommendBtn.addEventListener("click", function () {
        const keywords = keywordsInput.value.toLowerCase().split(" "); // Obtener palabras clave ingresadas y dividirlas

        // Filtrar juegos y aplicaciones que coincidan con al menos una palabra clave
        const recommendations = appsAndGames.filter(item => {
            return keywords.some(keyword => item.palabrasClave.includes(keyword));
        });

        // Mostrar las recomendaciones en HTML
        if (recommendations.length > 0) {
            const recommendationList = recommendations.map(item => {
                return `
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${item.imagen}" alt="${item.nombre}" class="img-fluid">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${item.nombre}</h5>
                                    <p class="card-text">${item.descripcion}</p>
                                    <a href="${item.descarga}" target="_blank" class="btn btn-primary">Descargar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join("");

            recommendationsDiv.innerHTML = `<p>Recomendaciones basadas en "${keywords.join(", ")}":</p>
                                            <div class="recommendation-list">${recommendationList}</div>`;
        } else {
            recommendationsDiv.innerHTML = `<p>No se encontraron recomendaciones para "${keywords.join(", ")}".</p>`;
        }
    });
});

