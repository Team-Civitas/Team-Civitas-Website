// För Synergy-bilderna
// Kör en funktion när hela html-filen är färdigladdad

document.addEventListener("DOMContentLoaded", function () {
  const grid = document.getElementById("portfolio-bilder");
  let index = 1;

  function createImageElement(src, alt) {
    const img = document.createElement("img");

    img.src = src;
    img.alt = alt;
    img.style.cursor = "pointer";

    // Öppnar bilden i ny flik när man klickar på bilden
    img.addEventListener("click", () => {
      window.open(img.src, "_blank");
    });

    // Lägger in den skapade bilden under portfolio-grid elementet
    grid.appendChild(img);
  }

  async function countImages() {
    while (true) {
      const url = `../static/img/portfolio/synergy/${index}.webp`;
      try {
        const response = await fetch(url);
        if (!response.ok) break;
        createImageElement(url, `Bild - ${index}`);
        index++;
      } catch (error) {
        break;
      }
    }
  }

  countImages();
});