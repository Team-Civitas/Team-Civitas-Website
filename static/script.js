// För Synergy-bilderna
// Kör en funktion när hela html-filen är färdigladdad
document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("portfolio-bilder");
    const imageCount = 31; //Antal bilder - ÄNDRA NÄR FLER LÄGGS TILL

    for (let i = 1; i <= imageCount; i++) {
      const img = document.createElement("img");
      img.src = `../static/img/portfolio/synergy/${i}.png`;
      img.alt = `Bild - ${i}`;
      img.style.cursor = "pointer";

      // Öppnar bilden i ny flik när man klickar på bilden
      img.addEventListener("click", () => {
        window.open(img.src, "_blank");
      });

      // Lägger in den skapade bilden under portfolio-grid elementet
      grid.appendChild(img);
    }
  });