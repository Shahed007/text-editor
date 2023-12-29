const fonts = ["inter", "montserrat", "lato", "open sans", "roboto"];

const font = document.getElementById("font");

fonts.forEach((element) => {
  const option = document.createElement("option");
  option.value = element;
  option.innerText = element.charAt(0).toUpperCase() + element.slice(1);
  font.appendChild(option);
});
