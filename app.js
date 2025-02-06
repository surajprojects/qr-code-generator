const showResult = document.querySelector("#showResult");
const btnGenerate = document.querySelector("#btnGenerate");
const inputUserUrl = document.querySelector("#inputUserUrl");

async function getqrcode(inputUrl) {
    try {
        const response = await fetch(`https://api.dub.co/qr?url=${inputUrl}`);
        if (response.ok) {
            displayResult(response.url);
        }
        else if (response.status === 422) {
            showResult.textContent = "";
            const msg = document.createElement("p");
            msg.id = "msg";
            msg.textContent = "Invalid URL";
            showResult.append(msg);
        }
    }
    catch (error) {
        console.error("Unable to get data, something went wrong!!!");
    }
};

btnGenerate.addEventListener("click", function (e) {
    e.preventDefault();
    let inputWord = inputUserUrl.value;
    if (inputWord.length > 0) {
        getqrcode(inputWord);
        inputUserUrl.value = "";
    }
});

function displayResult(qrurl) {
    showResult.textContent = "";
    const qrImage = document.createElement("img");
    qrImage.src = qrurl;
    qrImage.alt = "QR Image";
    qrImage.id = "qrImage";
    showResult.append(qrImage);
};