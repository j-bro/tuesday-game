
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

function addImage(image_element) {
  var image_container = document.createElement("DIV");
  image_container.setAttribute("id", "image-container");
  image_container.appendChild(image_element);

  var image_section = document.getElementById("image-section");
  image_section.appendChild(image_container);

  return image_container;
}

function addText(text) {
  var text_element = document.createElement("P");
  text_element.innerHTML = text;

  var text_container = document.createElement("DIV");
  text_container.setAttribute("id", "text-container");
  text_container.appendChild(text_element);

  var text_section = document.getElementById("text-section");
  text_section.appendChild(text_container);

  return text_container;
}

function removeImage() {
  var image_container = document.getElementById("image-container");
  image_container.parentNode.removeChild(image_container);
}

function removeText() {
  var text_container = document.getElementById("text-container");
  // TweenLite.to(text_container, 2, {opacity:0});
  text_container.parentNode.removeChild(text_container);
}



function tuesdayTitleScene() {
  var t = new TimelineLite();
  t.call(function() {
    var tuesday_title = document.createElement("H1");
    tuesday_title.innerHTML = "TUESDAY";
    tuesday_title.setAttribute("id", "tuesday-title");
    addImage(tuesday_title);
  });
  t.delay(1);
  t.to("#image-section", 3, {opacity:1});
  t.to("#image-section", 3, {opacity:0}, "+=2");

  t.call(function() {
    removeImage();
    var tuesday_subtitle = document.createElement("H3");
    tuesday_subtitle.innerHTML = "by Julie Brown";
    tuesday_subtitle.setAttribute("id", "tuesday-subtitle");
    addImage(tuesday_subtitle);
  });
  t.to("#image-section", 3, {opacity:1});
  t.to("#image-section", 3, {opacity:0}, "+=2");
  t.call(function() {
    removeImage();
    r1Scene();
  });
}

function r1Scene() {
  var t = new TimelineLite();
  t.call(function() {
    var r1Title = document.createElement("H1");
    r1Title.innerHTML = "[ROUND ONE]";
    r1Title.setAttribute("id", "r1-title");
    addImage(r1Title);
  });
  t.to("#image-section", 3, {opacity:1});
  t.to("#image-section", 3, {opacity:0}, "+=2");
  t.call(function() {
    removeImage();
    r1WindowScene();
  });
}

function r1WindowScene() {
  var t = new TimelineLite();
  t.call(function() {
    var r1WindowImage = document.createElement("IMG");
    r1WindowImage.setAttribute("alt", "");
    r1WindowImage.setAttribute("src", "img/gifs/window_gif.gif");
    r1WindowImage.setAttribute("id", "r1-window-image");
    addImage(r1WindowImage);
  });
  t.to("#image-section", 3, {opacity:1});
  t.call(function() {
    addText("It is Tuesday. It is raining.  // This always happens.");
  });
  t.to("#text-section", 2, {opacity:1}, "+-3");
}
