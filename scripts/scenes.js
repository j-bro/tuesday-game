
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
    addImage({"alt": "",
              "src": "img/gifs/window_gif.gif",
              "id": "r1-window-image"});
  });
  t.to("#image-section", 3, {opacity:1});
  t.call(function() {
    addText("It is Tuesday. It is raining.");
    addText("// This always happens.");
  });
  t.to("#text-section", 2, {opacity:1}, "+=2");
  t.to("#text-section", 2, {opacity:0}, "+=2");
  t.call(function() {
    removeText();
    addText("What will you do?");
    addText("> Wait.", {'onclick': 'r1StopRainScene()'});
    addText("> Watch.", {'onclick': 'r1StopRainScene()'});
  });
  t.to("#text-section", 2, {opacity:1}, "+=3");
}

function r1StopRainScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  // TODO Slow and stop rain
  t.to("#r1-window-image", 1, {src: "img/gifs/window_slow2.gif"}, "+=2");
  t.to("#r1-window-image", 3, {src: "img/frames/window_norain_bad.png"}, "+=2");
  // TODO fade window
  // TODO show door
  t.call(function() {
    removeText();
    addText("It is Tuesday.");
    addText("// Do you know what will happen?");
    addText("> Yes", {"onclick": "r1AfterRainYesScene()"});
    addText("> No", {"onclick": "r1AfterRainNoScene()"});
  });
  t.to("#text-section", 2, {opacity:1});
}

function r1AfterRainYesScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("So you say.");
  });
}

function r1AfterRainNoScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Watch closely.");
  });
}
