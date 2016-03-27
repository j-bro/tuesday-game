
function addTitle(title, headingSize, attributes) {
  var headingSizeStr = "H" + headingSize.toString();
  console.log(headingSizeStr);
  var titleElement = document.createElement(headingSizeStr);
  titleElement.innerHTML = title;
  attributes = attributes || {};
  for (var key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      titleElement.setAttribute(key, attributes[key]);
    }
  }

  var titleContainer = document.createElement("DIV");
  titleContainer.setAttribute("id", "title-container");
  titleContainer.appendChild(titleElement);

  var titleSection = document.getElementById("title-section");
  titleSection.appendChild(titleContainer);

  return titleContainer;
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

function removeTitle() {
  var titleContainer = document.getElementById("title-section");
  titleContainer.innerHTML = "";
}

function removeImage() {
  var imageContainer = document.getElementById("image-section");
  imageContainer.innerHTML = "";
}

function removeText() {
  var textContainer = document.getElementById("text-section");
  textContainer.innerHTML = "";
}
