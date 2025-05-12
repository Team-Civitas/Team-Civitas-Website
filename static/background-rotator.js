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

window.addEventListener("DOMContentLoaded", async () => {
  const el = document.getElementById("background-image");

  const imageData = await getJsonInfo(`${this.location.href}json-info`);
  const imageCount = searchInJson(imageData, "featured_imgs");

  if (imageCount && imageCount > 0) {
    function changeBackground() {
      const index = getRandomIntInclusive(1, imageCount);
      console.log(`Changing background image to index: ${index}`);
      el.style.backgroundImage = `url('/static/img/featured_imgs/featured_imgs (${index}).webp')`;
    }
    changeBackground();
  } else {
    console.error("No images available to display.");
  }
});
