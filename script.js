const fonts = ["inter", "montserrat", "lato", "open sans", "roboto"];
const font = document.getElementById("font");
const textContainer = document.getElementById("text-container");
const textFiled = document.querySelector(".text-filed");

let currentFiled = document.querySelector(".text-filed");

let fontSize = 16;

fonts.forEach((element) => {
  const option = document.createElement("option");
  option.value = element;
  option.innerText = element.charAt(0).toUpperCase() + element.slice(1);
  font.appendChild(option);
});

const handleAddText = () => {
  const p = document.createElement("p");
  p.contentEditable = true;
  p.innerText = "Enter text hear";
  p.classList.add("text-filed");
  textContainer.appendChild(p);
  p.focus();
};

const parentElement = document.getElementById("text-container");
parentElement.addEventListener("click", handleSelect);

function handleSelect(e) {
  const selectedElement = e.target;
  currentFiled = selectedElement;
}

const getSelectedElement = () => {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    return range.commonAncestorContainer.parentElement;
  }
  return null;
};

const handleChangeFontSize = () => {
  const fontSizeInput = document.getElementById("font_size");

  if (parseInt(fontSizeInput.value) < 0) {
    fontSize = 0;
    return;
  }
  fontSize = parseInt(fontSizeInput.value);
  currentFiled.style.fontSize = fontSize + "px";
};
