
function tuesdayTitleScene() {
  var t = new TimelineLite();
  t.call(function() {
    addTitle("TUESDAY", 1);
  });
  t.delay(1);
  t.to("#title-section", 3, {opacity:1});
  t.to("#title-section", 3, {opacity:0}, "+=2");
  t.call(function() {
    removeTitle();
    addTitle("by Julie Brown", 3);
  });
    t.to("#title-section", 3, {opacity:1});
    t.to("#title-section", 3, {opacity:0}, "+=2");
  t.call(function() {
    removeTitle();
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
    addTextPointerHover("> Wait.", {'onclick': 'r1StopRainScene()'});
    addTextPointerHover("> Watch.", {'onclick': 'r1StopRainScene()'});
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/gifs/window_largeslow.gif");
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
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.call(function() {
    removeText();
    addText("It is Tuesday.");
    addText("// Do you know what will happen?");
    addTextPointerHover("> Yes", {"onclick": "r1AfterDoorYesScene()"});
    addTextPointerHover("> No", {"onclick": "r1AfterDoorNoScene()"});
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
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    r1DoorSceneOpen();
  });
}

function r1AfterDoorNoScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Watch closely.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    r1DoorSceneOpen();
  });
}

function r1DoorSceneOpen() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_opens.gif");
    addText("As expected.");
  });
  t.to("#text-section", 2, {opacity:1}, "+=2");
  t.to("#text-section", 2, {opacity:0}, "+=2");
  t.to("#image-section", 2, {opacity:0}, "+=2");
  t.to("#text-section", 2, {opacity:0}, "+=2");
  t.call(function() {
    removeText();
    removeImage();
    r1BoxScene();
  });
}

function r1BoxScene() {
  var t = new TimelineLite();
  t.call(function() {
    addImage({"alt": "",
              "src": "img/frames/box_large1.png",
              "id": "r1-box",
              "width": "400"});
    addText("Ah yes. How quaint. ");
  });
  t.to("#image-section", 2, {opacity:1}, "+=2");
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0}, "+=2");
  t.call(function() {
    removeText();
    addText("// It is Tuesday. What happens now?");
    addTextPointerHover("> The box will open.", {"onclick": "r1BoxGuessOpenScene()"});
    addTextPointerHover("> The box will stay closed.", {"onclick": "r1BoxGuessCloseScene()"});
  });
  t.to("#text-section", 2, {opacity:1});
}

function r1BoxGuessOpenScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    removeText();
    addText("Correct. This always happens.");
  });
  t.to("#text-section", 2, {opacity:1}, "+=3");
  t.call(function() {
    r1AfterBoxScene();
  });
}

function r1BoxGuessCloseScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    removeText();
    addText("This always happens. Did you not remember?");
  });
  t.to("#text-section", 2, {opacity:1}, "+=3");
  t.call(function() {
    r1AfterBoxScene();
  });
}

function r1AfterBoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0}, "+=2");
  t.call(function() {
    removeText();
    addTextPointerHover("> Look Inside.", {"onclick": "r1AfterBoxLookScene()"});
    addTextPointerHover("> Leave.", {"onclick": "r2WindowScene()"});
  });
  t.to("#text-section", 2, {opacity:1});
}

function r1AfterBoxLookScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You don't need what's inside. You never do.");
  t.to("#text-section", 2, {opacity: 1}, "+=2");
  });
  t.call(function() {
    r2WindowScene();
  });
}
//too fast transtition
function r2WindowScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addText("It is Tuesday. It is raining.");
    addText("// There is nothing new under the sun.");
    addImage({"alt": "",
              "src": "img/gifs/window_large.gif",
              "id": "r1-window-image",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1}, "+=2");
  t.to("#text-section", 2, {opacity:0}, "+=2");
  t.call(function() {
    removeText();
    addText("Now, what will you do?");
    addTextPointerHover("> Wait.", {"onclick": "r2WindowPt2Scene()"});
    addTextPointerHover("> Watch.", {"onclick": "r2WindowPt2Scene()"});
  });
    t.to("#text-section", 2, {opacity:1});
}

function r2WindowPt2Scene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Time heals all wounds, does it not?");
  });
  t.to("#text-section", 2, {opacity:1}, "+=3");
  t.to("#text-section", 2, {opacity:0}, "+=3");
  t.to("#image-section", 2, {opacity:0}, "+=2");
  t.call(function() {
    removeText();
    removeImage();
    r2DoorScene();
  });
}

function r2DoorScene() {
  var t = new TimelineLite();
  t.call(function() {
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "width": "400"});
    addText("It is Tuesday. // What will happen?");
    addTextPointerHover("> The door opens.", {"onclick": "r2DoorGuessOpenScene()"});
    addTextPointerHover("> The door stays closed.", {"onclick": "r2DoorGuessCloseScene()"});
  });
  t.to("#image-section", 2, {opacity:1}, "+=2");
  t.to("#text-section", 2, {opacity:1});
}

function r2DoorGuessOpenScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Of course.");
  });
  t.to("#text-section", 2, {opacity:1}, "+=2");
  t.call(function() {
    r2DoorChoiceScene();
  });
}

function r2DoorGuessCloseScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Haven't you been paying attention?");
  });
  t.to("#text-section", 2, {opacity:1}, "+=2");
  t.call(function() {
    r2DoorChoiceScene();
  });
}

function r2DoorChoiceScene() {
  var t = new TimelineLite();
  t.call(function() {
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_opens.gif");
  });
}
//something is wrong with 294
