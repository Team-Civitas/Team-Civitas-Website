document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("portfolio-bilder");
    const modpackName = this.location.href.split("/").slice(-1)[0].split(".")[0];
    let index = 1;

    const imageSources = [];
    let currentImageIndex = 0;

    // Skapar popup-en och lägger till den i body-elementet
    const popup = document.createElement("div");
    popup.id = "imagepopup";

    const popupImage = document.createElement("img");
    popupImage.classList.add("popup-image");

    // Skapar pilar för att man ska kunna bläddra bland bilderna i portfolion
    const leftArrow = document.createElement("div");
    const rightArrow = document.createElement("div");

    leftArrow.textContent = "‹";
    leftArrow.classList.add("popup-arrow", "popup-arrow-left");

    rightArrow.textContent = "›";
    rightArrow.classList.add("popup-arrow", "popup-arrow-right");

    // Funktioner för att byta bild med pilarna
    function showImage(index) {
        if (index < 0) index = imageSources.length - 1;
        if (index >= imageSources.length) index = 0;
        currentImageIndex = index;
        popupImage.src = imageSources[currentImageIndex];
    }

    leftArrow.addEventListener("click", (e) => {
        e.stopPropagation(); // så att popup inte stängs
        showImage(currentImageIndex - 1);
    });

    rightArrow.addEventListener("click", (e) => {
        e.stopPropagation();
        showImage(currentImageIndex + 1);
    });

    popup.appendChild(leftArrow);
    popup.appendChild(popupImage);
    popup.appendChild(rightArrow);
    document.body.appendChild(popup);

    // Stänger popup-en när man klickar utanför bilden
    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    // Funktion som lägger till bilder i portfolion
    function createImageElement(src, alt) {
        const img = document.createElement("img");
        img.dataset.src = src; // Use data-src for lazy loading
        img.alt = alt;
        img.style.cursor = "pointer";
        img.loading = "lazy"; // Enable native lazy loading
        img.classList.add("image-placeholder"); // Add placeholder class

        const thisIndex = imageSources.length;
        imageSources.push(src);

        img.addEventListener("load", () => {
            img.classList.remove("image-placeholder"); // Remove placeholder class when loaded
        });

        img.addEventListener("click", () => {
            showImage(thisIndex);
            popup.style.display = "flex";
        });

        grid.appendChild(img);
    }

    // Laddar alla bilder automatiskt
    async function loadImages() {
        while (true) {
            const url = `../static/img/portfolio/${modpackName}/${modpackName} (${index}).webp?nocache=${Date.now()}`;
            try {
                const response = await fetch(url, { cache: "no-store" });
                if (!response.ok) break;
                createImageElement(url, `Bild - ${index}`);
                index++;
            } catch (error) {
                break;
            }
        }
        observeImages(); // Start observing images for lazy loading
    }

    // Observer for lazy loading
    function observeImages() {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // Set the actual src
                    obs.unobserve(img); // Stop observing once loaded
                }
            });
        });

        const images = grid.querySelectorAll("img[data-src]");
        images.forEach((img) => observer.observe(img));
    }

    loadImages();
});