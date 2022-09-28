const btnGenerate = document.getElementById("btn-change");
const hexCode = document.getElementById("hex-code");
const copyMessage = document.getElementById("copy-message");
const hexCopyContainer = document.querySelector("div.hexcopy");
const rangesContainer = document.getElementById("ranges-container");
const body = document.body;

let colors = {
    red: 255,
    green: 255,
    blue: 255,
};

generateColorsAndApplyToRanges();
copyMessage.textContent = "";

rangesContainer.addEventListener("input", function (e) {
    colors[e.target.name] = e.target.value;
    changeBackgroundAndColorCode();
});

btnGenerate.addEventListener("click", () => {
    generateColorsAndApplyToRanges();
});

hexCopyContainer.addEventListener("click", () => {
    navigator.clipboard.writeText(hexCode.textContent);
    copyMessage.textContent = "Copied";
    copyMessage.style.color = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
    setTimeout(() => {
        copyMessage.textContent = "";
    }, 1500);
});

function changeBackgroundAndColorCode() {
    body.style.backgroundColor = `rgb(${colors.red}, ${colors.green}, ${colors.blue})`;
    rgb2hex();
}

function generateColorsAndApplyToRanges() {
    colors = {
        red: generateRandomNumber(),
        green: generateRandomNumber(),
        blue: generateRandomNumber(),
    };
    for (const child of rangesContainer.children) {
        child.value = colors[child.name];
    }
    changeBackgroundAndColorCode();
}

function generateRandomNumber() {
    // between 0 to 255
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

function rgb2hex() {
    hexCode.textContent =
        "#" +
        componentToHex(colors.red) +
        componentToHex(colors.green) +
        componentToHex(colors.blue);
}

function componentToHex(c) {
    let hex = parseInt(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
