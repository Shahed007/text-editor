const fonts = ["lato", "inter", "robot"];

const font = document.getElementById("font");

fonts.forEach((element) => {
  const option = document.createElement("option");
  option.value = element;
  option.innerText = element;
  font.appendChild(option);
});
