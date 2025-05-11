async function countImages(url, prefix) {
    let index = 1;
    let count = 0;

    while (true) {
        const current_url = `${url}/${prefix} (${index}).webp`;
        try {
            const response = await fetch(current_url);
            if (!response.ok) throw new Error("Image not found");

            count++;
            index++;
        } catch (error) {
            break;
        }
    }

    console.log(`Found ${count} images.`);
    return count;
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('DOMContentLoaded', async () => {
    const el = document.getElementById("background-image");
    const imageCount = await countImages("../static/img/featured_imgs", "featured_imgs");

    function changeBackground() {
        const index = getRandomIntInclusive(1, imageCount);
        el.style.backgroundImage = `url('/static/img/featured_imgs/featured_imgs (${index}).webp')`;
    }

    changeBackground();
});
