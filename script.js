const redRange = document.getElementById("red-range");
const greenRange = document.getElementById("green-range");
const blueRange = document.getElementById("blue-range");
const btnChange = document.getElementById("btn-change");
const hexCode = document.getElementById("hex-code");
const copyMessage = document.getElementById("copy-message");
const hexCopyContainer = document.querySelector("div.hexcopy");
const body = document.body;

changeBodyBackground(redRange.value, greenRange.value, blueRange.value);
copyMessage.textContent = "";

hexCopyContainer.addEventListener("click", (e) => {
    navigator.clipboard.writeText(hexCode.textContent);
    copyMessage.textContent = "Copied";
    setTimeout(() => {
        copyMessage.textContent = "";
    }, 1500);
});

redRange.addEventListener("input", (e) => {
    changeBodyBackground(e.target.value, greenRange.value, blueRange.value);
});
greenRange.addEventListener("input", (e) => {
    changeBodyBackground(redRange.value, e.target.value, blueRange.value);
});
blueRange.addEventListener("input", (e) => {
    changeBodyBackground(redRange.value, greenRange.value, e.target.value);
});
btnChange.addEventListener("click", () => {
    const redColor = generateRandomColor();
    const greenColor = generateRandomColor();
    const blueColor = generateRandomColor();
    redRange.value = redColor;
    greenRange.value = greenColor;
    blueRange.value = blueColor;

    changeBodyBackground(redColor, greenColor, blueColor);
});

function changeColor(r = 0, g = 0, b = 0) {
    return {
        red: r,
        green: g,
        blue: b,
    };
}

function generateRandomColor() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

function changeBodyBackground(r = 0, g = 0, b = 0) {
    const color = changeColor(r, g, b);
    body.style.backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;
    rgb2hex(color.red, color.green, color.blue);
}

function rgb2hex(r, g, b) {
    hexCode.textContent =
        "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    let hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
