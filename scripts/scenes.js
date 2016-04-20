
function tuesdayTitleScene() {
  expandTitleSection();
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
    collapseTitleSection();
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
              "height": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.call(function() {
    removeText();
    addText("It is Tuesday. // Do you know what will happen?");
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
    dor.setAttribute("src", "img/gifs/door_once.gif");
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
    addText("It is Tuesday. // What happens now?");
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

function r2WindowScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0}, "+=2");
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
              "height": "400"});
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
  t.to("#text-section", 2, {opacity:1}, "+=1");
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
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.call(function() {
    r2DoorChoiceScene();
  });
}

function r2DoorChoiceScene() {
  var t = new TimelineLite();
  t.call(function() {
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
  });
  t.to("#text-section", 2, {opacity:0}, "+=2");
  t.call(function() {
    removeText();
    addText("You see now, this always happens.");
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0}, "+=2");
  });
  t.call(function() {
    removeText();
    addTextPointerHover("> Go through door.", {"onclick": "r2DoorThroughScene()"});
    addTextPointerHover("> Move on.", {"onclick": "r2BoxScene()"});
  });
  t.to("#text-section", 2, {opacity:1}, "+=2");
}

function r2DoorThroughScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    addText("... Let us move on.")
  });
  t.to("#text-section", 2, {opacity:1}, "+=2");
  t.to("#text-section", 2, {opacity:0}, "+=2");
  t.call(function() {
    r2BoxScene();
  });
}

function r2BoxScene() {
  var t = new TimelineLite();
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addImage({"alt": "",
              "src": "img/frames/box_large1.png",
              "id": "r1-box",
              "width": "400"});
    addText("See? Nothing changes on Tuesdays.");
    addText("// You know what happens next, don't you?");
    addTextPointerHover(">The box will open.", {"onclick": "r2BoxOpenScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "r2BoxCloseScene()"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
  var box = document.getElementById("r1-box");
  box.setAttribute("src", "img/gifs/box_large.gif");
  });
}

function r2BoxOpenScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("This always happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    r2BoxGuessScene();
  });
}

function r2BoxCloseScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("...This always happens.");
  });
  t.to("#text-section", 1, {opacity:1});
  t.call(function() {
    r2BoxGuessScene();
  });
}

function r2BoxGuessScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addTextPointerHover(">Leave.", {"onclick": "r3WindowScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "r2BoxGuessAfterScene()"});
  });
  t.to("#text-section", 2, {opacity:1});
}

function r2BoxGuessAfterScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("No. That never happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function(){
    r3WindowScene();
  });
}

function r3WindowScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addText("It it raining.");
    addText("//Always. // Always.");
    addImage({"alt": "",
              "src": "img/gifs/window_large.gif",
              "id": "r1-window-image",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"onclick": "r3WindowAScene()"});
    addTextPointerHover(">Things change.", {"onclick": "r3WindowBScene()"});
  });
}

function r3WindowAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Always.");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#image-section", 2, {opacity:0});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    r3DoorScene();
  });
}

function r3WindowBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("It is Tuesday. Things never change.")
    addText("//Not ever.");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#image-section", 2, {opacity:0});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    r3DoorScene();
  });
}

function r3DoorScene() {
  var t = new TimelineLite();
  t.call(function() {
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
    addText("You know what will happen. // What always happens.");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The door will open.", {"onclick": "r3Door2Scene()"});
    addTextPointerHover(">Things will change.", {"onclick": "r3Door2Scene()"});
  });
}

function r3Door2Scene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("...");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0}, "+=1");
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
    addText("As... expected...");
  });
  t.to("#text-section", 2, {opacity:1}, "+=3");
  t.call(function() {
    addTextPointerHover(">Go through door.", {"onclick": "r3DoorAScene()"});
    addTextPointerHover(">Move on.", {"onclick": "r3BoxScene()"});
  });
}

function r3DoorAScene() {
  var t = new TimelineLite();
  t.call(function() {
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_shut.gif");
    removeText();
    addText("No. That's not... That's not how it goes.")
});
  t.to("#text-section", 2, {opacity:0}, "+=1");
  t.to("#text-section", 2, {opacity:1});
}
