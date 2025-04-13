const widthFrom = document.getElementById("input-from");
const widthTo = document.getElementById("input-to");
const button = document.getElementById("submit");
let span = document.createElement("span");

function copyText(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      document.body.appendChild(span);
      span.textContent = "Текст успешно скопирован!";
    })
    .catch((error) => {
      console.error("Ошибка копирования текста:", error);
    });
}

button.addEventListener("click", function () {
  span.textContent = ``;
  let widthFromNum = parseInt(widthFrom.value);
  let widthToNum = parseInt(widthTo.value);
  let factor = widthFromNum / widthToNum;
  let value = prompt("Enter your value");
  let valueNum = Number(parseInt(value).toFixed(2));

  let minNum = Number((valueNum / factor).toFixed(2));

  let vw = Number(((valueNum / widthFromNum) * 100).toFixed(2));

  totalMessage = `clamp(${minNum}px, ${vw}vw, ${valueNum}px)`;
  copyText(totalMessage);
});
