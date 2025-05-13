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

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeBackground(imageData) {
  const count = searchInJson(imageData, "featured_imgs");
  const backgroundImageElement = document.getElementById("background-image");
  if (count && count > 0) {
    const index = getRandomIntInclusive(1, count);
    backgroundImageElement.style.backgroundImage = `url('/static/img/featured_imgs/featured_imgs (${index}).webp')`;
  } else {
    console.error("No images available to display.");
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  const imageData = await getJsonInfo(`${this.location.href}json-info`);
  changeBackground(imageData);
});
