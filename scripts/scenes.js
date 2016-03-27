
function tuesdayTitleScene() {
  var t = new TimelineLite();
  t.call(function() {
    addText("TUESDAY");
  });
  t.delay(1);
  t.to("#text-section", 2, {opacity:1})
  t.to("#text-section", 2, {opacity:0}, "+=2");

  t.call(function() {
    removeText();
    addText("by Julie Brown");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0}, "+=2");
  t.call(function() {
    removeText();
    r1WindowScene();
  });
}

function r1WindowScene() {
  var t = new TimelineLite();
  t.call(function() {
    addImage({"alt": "",
              "src": "img/gifs/window_large.gif",
              "id": "r1-window-image",
              "width": "400"});
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
  t.call(function(){
    removeText();
    addText("Evidently.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0}, "+=3");
  t.to("#image-section", 2, {opacity:1}, "+=2");
  t.call(function(){
    removeImage();
    addImage({"alt":"",
              "src": "img/gifs/window_largeslow.gif",
              "id": "r1-window-image-slow",
              "width": "400"});
    });
    t.to("#image-section", 3, {opacity:0}, "+=3");
    t.call(function(){
      removeImage();
      r1DoorScene();
    });
}
function r1DoorScene() {
  var t = new TimelineLite();
  t.call(function() {
    addImage({"alt": "",
              "src": "img/gifs/door_opens.gif",
              "id": "r1-door-open",
              "width": "200"});
  });
  t.to("#image-section", 2, {opacity:1});
  // TODO show door
  t.call(function() {
    removeText();
    addText("It is Tuesday.");
    addText("// Do you know what will happen?");
    addText("> Yes", {"onclick": "r1AfterDoorYesScene()"});
    addText("> No", {"onclick": "r1AfterDoorNoScene()"});
  });
  t.to("#text-section", 2, {opacity:1});
}

function r1AfterDoorYesScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("So you say.");
  });
}

function r1AfterDoorNoScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Watch closely.");
  });
}
