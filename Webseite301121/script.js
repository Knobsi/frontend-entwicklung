
function myFunction(x) {
  // Return the text of the selected option
  var opacity = x.options[x.selectedIndex].text;
  var el = document.getElementById("p1");
  if (el.style.opacity !== undefined) {
    el.style.opacity = opacity;
  } else {
    alert("Your browser doesn't support this example!");
  }
}
