
function startGame() {
  // TweenLite.to("#start-button", 2, {opacity:0});

  // Remove start button
  var image_section = document.getElementById("image-section").innerHTML;
  start_btn.parentNode.removeChild(start_btn);

  // Set title (TUESDAY) as main element
  var TUESDAY = document.createElement("H1");
  var t = document.createTextNode("TUESDAY");
  // TUESDAY.setAttribute() id, opacity
  TUESDAY.appendChild(t);
  document.body.appendChild(t);

  // TweenLite.to("#tuesday-title", 2, {opacity:1});
}

function addImage(attributes) {
  var imageElement = document.createElement("IMG");
  attributes = attributes || {};
  for (var key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      imageElement.setAttribute(key, attributes[key]);
    }
  }

  var imageContainer = document.createElement("DIV");
  imageContainer.setAttribute("id", "image-container");
  imageContainer.appendChild(imageElement);

  var imageSection = document.getElementById("image-section");
  imageSection.appendChild(imageContainer);

  return imageContainer;
}

function addText(text, attributes) {
  var textElement = document.createElement("P");
  textElement.innerHTML = text;
  attributes = attributes || {};
  for (var key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      textElement.setAttribute(key, attributes[key]);
    }
  }

  var textContainer = document.createElement("DIV");
  textContainer.setAttribute("id", "text-container");
  textContainer.appendChild(textElement);

  var textSection = document.getElementById("text-section");
  textSection.appendChild(textContainer);

  return textSection;
}

function removeImage() {
  var imageContainer = document.getElementById("image-section");
  imageContainer.innerHTML = "";
}

function removeText() {
  var textContainer = document.getElementById("text-section");
  textContainer.innerHTML = "";
}
