function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//################################################//
//################ JSON FUNCTIONS ################//
//################################################//

async function getJsonInfo(path) {
  try {
    console.log("Fetching image count data...");
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
}

function searchInJson(data, keyToSearch) {
  if (data && data.hasOwnProperty(keyToSearch)) {
    return data[keyToSearch];
  }

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'object' && value !== null) {
      const result = searchInJson(value, keyToSearch);
      if (result !== "Not Found") {
        return result;
      }
    }
  }
  return "Not Found";
}

//################################################//
//################### CHANGE BG ##################//
//################################################//

function changeBackground(imageData) {
  const count = searchInJson(imageData, "featured_imgs");
  const backgroundImageElement = document.getElementById("background-image");
  if (count && count > 0) {
    const index = getRandomInt(1, count);
    backgroundImageElement.style.backgroundImage = `url('/static/img/featured_imgs/featured_imgs (${index}).webp')`;
  } else {
    console.error("No images available to display.");
  }
}

//################################################//
//################### DROPDOWN ###################//
//################################################//

function showDropdown() {

  var dropdown = document.getElementById("dropdown");

  dropdown.classList.toggle("active");
  console.log("Dropdown togglades");

  dropdown.style.transition = 'opacity 0.5s ease';
}

window.addEventListener("resize", () => {
  const dropdown = document.getElementById("dropdown");
  if (dropdown) dropdown.classList.remove("active");
});

//################################################//
//############# LOAD IMGS AND POPUP ##############//
//################################################//

const imageSources = [];
let currentImageIndex = 0;
let popup;
let popupImage;

// Show image in popup by index
function showImage(index) {
    if (index < 0) index = imageSources.length - 1;
    if (index >= imageSources.length) index = 0;
    currentImageIndex = index;
    popupImage.src = imageSources[currentImageIndex];
}

// Create the popup element and append to body
function createPopup() {
    popup = document.createElement("div");
    popup.id = "imagepopup";

    popupImage = document.createElement("img");
    popupImage.classList.add("popup-image");

    const leftArrow = document.createElement("div");
    const rightArrow = document.createElement("div");

    leftArrow.textContent = "‹";
    rightArrow.textContent = "›";

    leftArrow.classList.add("popup-arrow", "popup-arrow-left");
    rightArrow.classList.add("popup-arrow", "popup-arrow-right");

    leftArrow.addEventListener("click", (e) => {
        e.stopPropagation();
        showImage(currentImageIndex - 1);
    });

    rightArrow.addEventListener("click", (e) => {
        e.stopPropagation();
        showImage(currentImageIndex + 1);
    });

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    popup.appendChild(leftArrow);
    popup.appendChild(popupImage);
    popup.appendChild(rightArrow);
    document.body.appendChild(popup);
}

// Create and append an image to the grid
function createImageElement(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.classList.add("grid-item");
    img.style.cursor = "pointer";

    const thisIndex = imageSources.length;
    imageSources.push(src);

    img.addEventListener("click", () => {
        showImage(thisIndex);
        popup.style.display = "flex";
    });

    const grid = document.getElementById("portfolio-bilder");
    grid.appendChild(img);
}

// Load a set of images based on current URL
function loadImgs() {
    const grid = document.getElementById("portfolio-bilder");
    const modpackName = location.href.split("/").slice(-1)[0].split(".")[0];

    for (let i = 1; i <= 5; i++) {
        const imgPath = `../static/img/portfolio/${modpackName}/${modpackName} (${index}).webp`;
        createImageElement(imgPath, `${modpackName} image ${i}`);
    }
}

//################################################//
//#################### EVENTS ####################//
//################################################//

window.addEventListener("DOMContentLoaded", async () => {
  const imageData = await getJsonInfo(`${this.location.href}json-info`);
  changeBackground(imageData);
  createPopup();
  loadImgs();
});