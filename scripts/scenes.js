
function tuesdayTitleScene() {
  expandTitleSection();
  var t = new TimelineLite();
  t.call(function() {
    addTitle("TUESDAY", 1);
    addTitle("by Julie Brown", 3);
  });
  t.delay(1);
  t.to("#title-section", 3, {opacity:1});
  t.call(function() {
    addTitle("What will you choose to do?", 4);
  });
  t.addDelay(2);
  t.call(function() {
    addTextPointerHover(">START", {"onclick": "r1WindowScene()"});
  });
  t.to("#text-section", 2, {opacity:1});
}

//make title sequence more of a title page: give a >START option and info about game
//tag line? like "what will you do?"

function r1WindowScene() {
  var t = new TimelineLite();
  t.to("text-secion", 2, {opacity:0});
  t.to("#title-section", 3, {opacity:0});
  t.call(function() {
    removeText();
    removeTitle();
    collapseTitleSection();
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
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("What will you do?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover("> Wait.", {'onclick': 'r1WindowAScene()'});
    addTextPointerHover("> Watch.", {'onclick': 'r1WindowBScene()'});
  });
}

function r1WindowAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function(){
    removeText();
    addText("We have all the time we need.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function(){
    removeImage();
    r1DoorScene();
  });
}

function r1WindowBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function(){
    removeText();
    addText("There is beauty in constants.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
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
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover("> Yes", {"onclick": "r1DoorAScene()"});
    addTextPointerHover("> No", {"onclick": "r1DoorBScene()"});
  });
}

function r1DoorAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("So you say.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    r1DoorOpenScene();
  });
}

function r1DoorBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Watch closely.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    r1DoorOpenScene();
  });
}

function r1DoorOpenScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
  });
  t.addDelay(1);
  t.call(function(){
    addText("As expected.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
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
  });
  t.to("#image-section", 2, {opacity:1});
  t.call(function() {
    removeText();
    addText("It is Tuesday. // What happens now?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover("> The box will open.", {"onclick": "r1BoxAScene()"});
    addTextPointerHover("> The box will stay closed.", {"onclick": "r1BoxBScene()"});
  });
}

function r1BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    removeText();
    addText("Correct. This always happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    r2WindowScene();
  });
}

function r1BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    removeText();
    addText("This always happens. Did you not remember?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover("> Leave.", {"onclick": "r2WindowScene()"});
    addTextPointerHover("> Look Inside.", {"onclick": "r1BoxBPostScene()"});
  });
}

function r1BoxBPostScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You don't need what's inside. You never do.");
  });
  t.to("#text-section", 2, {opacity: 1});
  t.call(function() {
    r2WindowScene();
  });
}

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
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Now, what will you do?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover("> Wait.", {"onclick": "r2WindowPt2Scene()"});
    addTextPointerHover("> Watch.", {"onclick": "r2WindowPt2Scene()"});
  });
}

function r2WindowPt2Scene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Time heals all wounds, does it not?");
  });
  t.to("#text-section", 2, {opacity:1}, "+=2");
  t.to("#text-section", 2, {opacity:0});
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
  });
    t.to("#image-section", 2, {opacity:1});
    t.to("#text-section", 2, {opacity:1});
    t.call(function() {
    addTextPointerHover("> The door opens.", {"onclick": "r2DoorAScene()"});
    addTextPointerHover("> The door stays closed.", {"onclick": "r2DoorBScene()"});
  });
}

function r2DoorAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
  });
  t.addDelay(1);
  t.call(function() {
  addText("Of course.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Ar2BoxScene();
  });
}

function r2DoorBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Haven't you been paying attention?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
  });
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You see now, this always happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover("> Move on.", {"onclick": "Ar2BoxScene()"});
    addTextPointerHover("> Go through door.", {"onclick": "r2DoorBPostScene()"});
  });
}

function r2DoorBPostScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... Let us move on.")
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    Br2BoxScene();
  });
}

function Ar2BoxScene() {
  var t = new TimelineLite();
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addImage({"alt": "",
              "src": "img/frames/box_large1.png",
              "id": "r1-box",
              "width": "400"});
    addText("Nothing changes on Tuesdays.");
    addText("// You know what happens next, don't you?");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The box will open.", {"onclick": "Ar2BoxAScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "Ar2BoxBScene()"});
  });
}

function Br2BoxScene() {
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
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The box will open.", {"onclick": "Br2BoxAScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "Br2BoxBScene()"});
  });
}

function Br2BoxAScene() {
  var t = new TimelineLite();
  t.call(function() {
  var box = document.getElementById("r1-box");
  box.setAttribute("src", "img/gifs/box_large.gif");
  });
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("This always happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Br3WindowScene();
  });
}

function Ar2BoxAScene() {
  var t = new TimelineLite();
  t.call(function() {
  var box = document.getElementById("r1-box");
  box.setAttribute("src", "img/gifs/box_large.gif");
  });
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("This always happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Ar3WindowScene();
  });
}

function Br2BoxBScene() {
  var t = new TimelineLite();
  t.call(function() {
  var box = document.getElementById("r1-box");
  box.setAttribute("src", "img/gifs/box_large.gif");
  });
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("...This always happens.");
  });
  t.to("#text-section", 1, {opacity:1});
  t.call(function() {
    Ar2BoxBPostScene();
  });
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addTextPointerHover(">Look inside.", {"onclick": "Br2BoxBPostScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Br3WindowScene()"});
  });
  t.to("#text-section", 2, {opacity:1});
}

function Ar2BoxBScene() {
  var t = new TimelineLite();
  t.call(function() {
  var box = document.getElementById("r1-box");
  box.setAttribute("src", "img/gifs/box_large.gif");
  });
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("...This always happens.");
  });
  t.to("#text-section", 1, {opacity:1});
  t.call(function() {
    Ar2BoxBPostScene();
  });
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addTextPointerHover(">Look inside.", {"onclick": "Ar2BoxBPostScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Ar3WindowScene()"});
  });
  t.to("#text-section", 2, {opacity:1});
}

function Br2BoxBPostScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("No. That never happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function(){
    Cr3WindowScene();
  });
}

function Ar2BoxBPostScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("No. That never happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function(){
    Ar3WindowScene();
  });
}

function Ar3WindowScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addText("It it always raining. // Always.");
    addImage({"alt": "",
              "src": "img/gifs/window_large.gif",
              "id": "r1-window-image",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"onclick": "Ar3DoorAScene()"});
    addTextPointerHover(">Things change.", {"onclick": "Ar3DoorBScene()"});
  });
}

function Br3WindowScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addText("It it raining. //Always. // Always.");
    addImage({"alt": "",
              "src": "img/gifs/window_large.gif",
              "id": "r1-window-image",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"onclick": "Br3DoorAScene()"});
    addTextPointerHover(">Things change.", {"onclick": "Br3DoorBScene()"});
  });
}

function Cr3WindowScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addText("It it raining. //Always. // Always.");
    addText("// Always.");
    addImage({"alt": "",
              "src": "img/gifs/window_large.gif",
              "id": "r1-window-image",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"onclick": "Cr3DoorAScene()"});
    addTextPointerHover(">Things change.", {"onclick": "Cr3DoorBScene()"});
  });
}

function Ar3DoorAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Always.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
    addText("You know what will happen. // Has always happened.");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The door will open.", {"onclick": "Ar3DoorAAScene()"});
    addTextPointerHover(">Things will change.", {"onclick": "Ar3DoorABScene()"});
  });
}

function Ar3DoorBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("It is Tuesday. Things never change.")
    addText("// Not ever.");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
    addText("You know what will happen. // What always happens.");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The door will open.", {"onclick": "Ar3DoorBAScene()"});
    addTextPointerHover(">Things will change.", {"onclick": "Ar3DoorBBScene()"});
  });
}

function Br3DoorAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Always.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
    addText("You know what will happen. // Has always happened.");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The door will open.", {"onclick": "Br3DoorAAScene()"});
    addTextPointerHover(">Things will change.", {"onclick": "Br3DoorABScene()"});
  });
}

function Br3DoorBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("It is Tuesday. Things never change.")
    addText("// Not ever.");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
    addText("You know what will happen. // What always happens.");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The door will open.", {"onclick": "Br3DoorBAScene()"});
    addTextPointerHover(">Things will change.", {"onclick": "Br3DoorBBScene()"});
  });
}

function Cr3DoorAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Always.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
    addText("You know what will happen. // Has always happened.");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The door will open.", {"onclick": "Cr3DoorAAScene()"});
    addTextPointerHover(">Things will change.", {"onclick": "Cr3DoorABScene()"});
  });
}

function Cr3DoorBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("It is Tuesday. Things never change.")
    addText("// Not ever.");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
    addText("You know what will happen. // What always happens.");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The door will open.", {"onclick": "Cr3DoorBAScene()"});
    addTextPointerHover(">Things will change.", {"onclick": "Cr3DoorBBScene()"});
  });
}

function Ar3DoorAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0,});
  t.call(function() {
    removeText();
    addText("Good. You haven't forgotten.");
    addText("// You haven't changed.");
    Ar3BoxScene();
  });
}

function Ar3DoorBAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0,});
  t.call(function() {
    removeText();
    addText("That's right. Things haven't changed.");
    addText("// You haven't changed.");
    removeImage();
    Br3BoxScene();
  });
}

function Ar3DoorABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0}, "+4");
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0}, "+=1");
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
    addText("As... expected...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Move on.", {"onclick": "Ar3BoxScene()"});
    addTextPointerHover(">Go through door.", {"onclick": "Ar3DoorABBScene()"});
  });
}

function Ar3DoorBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0}, "+4");
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0}, "+=1");
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
    addText("As... expected...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Move on.", {"onclick": "Br3BoxScene()"});
    addTextPointerHover(">Go through door.", {"onclick": "Ar3DoorBBBScene()"});
  });
}


function Br3DoorAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0,});
  t.call(function() {
    removeText();
    addText("Good. You haven't forgotten.");
    addText("// You haven't changed.");
    Br3BoxScene();
  });
}

function Br3DoorBAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0,});
  t.call(function() {
    removeText();
    addText("That's right. Things haven't changed.");
    addText("// You haven't changed.");
    Br3BoxScene();
  });
}

function Br3DoorABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0}, "+4");
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0}, "+=1");
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
    addText("As... expected...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Move on.", {"onclick": "Br3BoxScene()"});
    addTextPointerHover(">Go through door.", {"onclick": "Br3DoorABBScene()"});
  });
}

function Br3DoorBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0}, "+4");
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0}, "+=1");
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
    addText("As... expected...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Move on.", {"onclick": "Br3BoxScene()"});
    addTextPointerHover(">Go through door.", {"onclick": "Br3DoorBBBScene()"});
  });
}

function Cr3DoorAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0,});
  t.call(function() {
    removeText();
    addText("Good. You haven't forgotten.");
    addText("// You haven't changed.");
    Br3BoxScene();
  });
}

function Cr3DoorBAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0,});
  t.call(function() {
    removeText();
    addText("That's right. Things haven't changed.");
    addText("// You haven't changed.");
    Cr3BoxScene();
  });
}

function Cr3DoorABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0}, "+4");
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0}, "+=1");
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
    addText("As... expected...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Move on.", {"onclick": "Br3BoxScene()"});
    addTextPointerHover(">Go through door.", {"onclick": "Cr3DoorABBScene()"});
  });
}

function Cr3DoorBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0}, "+4");
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0}, "+=1");
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_once.gif");
    addText("As... expected...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Move on.", {"onclick": "Cr3BoxScene()"});
    addTextPointerHover(">Go through door.", {"onclick": "Cr3DoorBBBScene()"});
  });
}

function Ar3DoorABBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.");
});
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    Br3BoxScene();
  });
}

function Ar3DoorBBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.")
});
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    Cr3BoxScene();
  });
}

function Br3DoorABBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.");
});
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    Cr3BoxScene();
  });
}

function Br3DoorBBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.")
});
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    Cr3BoxScene();
  });
}

function Cr3DoorABBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.");
});
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    Cr3BoxScene();
  });
}

function Cr3DoorBBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.")
});
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    Dr3BoxScene();
  });
}

function Ar3BoxScene() {
  var t = new TimelineLite();
  t.call(function() {
    addImage({"alt": "",
              "src": "img/frames/box_large1.png",
              "id": "r1-box",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.call(function() {
    addText("Nothing changes. We know what always happens.")
    addText("// This always happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The box will open.", {"onclick": "Ar3BoxAScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "Ar3BoxBScene()"});
  });
}

function Br3BoxScene() {
  var t = new TimelineLite();
  t.call(function() {
    addImage({"alt": "",
              "src": "img/frames/box_large1.png",
              "id": "r1-box",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.call(function() {
    addText("We know what always happens. // Don't we?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The box will open.", {"onclick": "Br3BoxAScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "Br3BoxBScene()"});
  });
}

function Cr3BoxScene() {
  var t = new TimelineLite();
  t.call(function() {
    addImage({"alt": "",
              "src": "img/frames/box_large1.png",
              "id": "r1-box",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.call(function() {
    addText("We know what always happens... // Don't we?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Will the box open?", {"onclick": "Cr3BoxAScene()"});
    addTextPointerHover(">Will the box stay closed?", {"onclick": "Cr3BoxBScene()"});
  });
}

function Dr3BoxScene() {
  var t = new TimelineLite();
  t.call(function() {
    addImage({"alt": "",
              "src": "img/frames/box_large1.png",
              "id": "r1-box",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.call(function() {
    addText("We know... What always happens... // Don't we?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Do we?", {"onclick": "Dr3Box2Scene()"});
    addTextPointerHover(">Do you?", {"onclick": "Dr3Box2Scene()"});
  });
}

function Ar3BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    addText("We're never wrong.");
    addText("// This always happens.")
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    Ar4WindowScene();
  });
}

function Ar3BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    addText("Thank goodness.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    addTextPointerHover(">Leave.", {"onclick": "Ar3BoxBAScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "Ar3BoxBBScene()"});
  });
}

function Br3BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    addText("Thank goodness.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    Br4WindowScene();
  });
}

function Br3BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    addText("Thank goodness.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    addTextPointerHover(">Leave.", {"onclick": "Br3BoxBAScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "Br3BoxBBScene()"});
  });
}

function Cr3BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    addText("Thank goodness.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    Cr4WindowScene();
  });
}

function Cr3BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    addText("Thank goodness.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    addTextPointerHover(">Leave.", {"onclick": "Cr3BoxBAScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "Cr3BoxBBScene()"});
  });
}

function Dr3BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    addText("Thank goodness.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    Dr4WindowScene();
  });
}

function Dr3BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_large.gif");
    addText("Thank goodness.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    addTextPointerHover(">Leave.", {"onclick": "Dr3BoxBAScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "Dr3BoxBBScene()"});
  });
}

function Ar3BoxBAScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    Br4WindowScene();
  });
}

function Ar3BoxBBScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    Br4WindowScene();
  });
}

function Br3BoxBAScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    Br4WindowScene();
  });
}

function Br3BoxBBScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    Cr4WindowScene();
  });
}

function Cr3BoxBAScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    Br4WindowScene();
  });
}

function Cr3BoxBBScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    Cr4WindowScene();
  });
}

function Dr3BoxBAScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    Cr4WindowScene();
  });
}

function Dr3BoxBBScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var box = document.getElementById("r1-box");
    box.setAttribute("src", "img/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    Dr4WindowScene();
  });
}

function Ar4WindowScene() {
  var t = new TimelineLite();
  t.call(function() {
    addText("It is Tuesday. It has always been Tuesday.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">It is Tuesday.", {"on click": "Ar4DoorAScene()"});
    addTextPointerHover(">Is it still Tuesday?", {"on click": "Ar4DoorBScene()"});
  });
}

function Ar4DoorAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("That's right. You always know.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.call(function() {
    addText("It is Tuesday. And you've always been here.")
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"on click": "Ar4DoorAAScene()"});
    addTextPointerHover(">Things change.", {"on click": "Ar4DoorABScene()"});
  });
}

function Ar4DoorBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("It is Tuesday. Remember.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.call(function() {
    addText("Tuesday. And you've always been here.")
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"on click": "Ar4DoorBAScene()"});
    addTextPointerHover(">Things change.", {"on click": "Ar4DoorBBScene()"});
  });
}
//UNCODED B PATH
function Br4WindowScene() {
  var t = new TimelineLite();
}

function Ar4DoorAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Always.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Ar4BoxScene();
  });
}

function Ar4DoorABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    addText("Do they need to?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Br4BoxScene();
  });
}

function Ar4DoorBAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Always.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Ar4BoxScene();
  });
}

function Ar4DoorBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    addText("Do they need to?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Br4BoxScene();
  });
}

function Ar4BoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addImage({"alt": "",
              "src": "img/frames/box_large1.png",
              "id": "r1-box",
              "width": "400"});
    addText("I'm going to show you something.");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Look inside.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Look inside.", {"on click": "Ar4BoxAScene()"});
    addTextPointerHover(">Leave.", {"on click": "Ar4BoxA2Scene()"});
  });
}

function Ar4BoxA2Scene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Don't be shy. It's alright.");
    addTextPointerHover(">Look inside.", {"on click": "Ar4BoxBScene()"});
  });
}

function Ar4BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addImage({"alt": "",
              "src": "img/frames/boxinside with key.png",
              "id": "r4-key",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.addDelay(1);
  t.call(function() {
    addText("I'm giving you a choice. // One final decision.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You've always done the right thing. You've always known...");
    addText("What's best for us.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("And now you can choose what's best for you.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"on click": "Ar4BoxAAScene()"});
    addTextPointerHover(">Leave.", {"on click": "Ar4BoxABScene()"});
  });
}

function Ar4BoxBScene(){
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addImage({"alt": "",
              "src": "img/frames/boxinside with key.png",
              "id": "r4-key",
              "width": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.addDelay(1);
  t.call(function() {
    addText("I'm giving you a choice. // One final decision.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You've always done the right thing. You've always known...");
    addText("What's best for us.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("And now you can choose what's best for you.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"on click": "Ar4BoxAAScene()"});
    addTextPointerHover(">Leave.", {"on click": "Ar4BoxBBScene()"});
  });
}

function Ar4BoxAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var key = document.getElementById("r4-key");
    key.setAttribute("src", "img/frames/boxinside no key.png");
  });
  t.addDelay(1);
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    addText("There. You always listen.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Ar4FinaleScene();
  });
}

function Ar4BoxABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("...You always listened. What is happening?");
    addTextPointerHover(">Take key.", {"on click": "Ar4BoxAAScene()"});
    addTextPointerHover(">Leave.", {"on click": "Ar4BoxBBBScene()"});
  });
}

function Ar4BoxBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... I'm telling you to take it.")
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"on click": "Ar4BoxAAScene()"});
    addTextPointerHover(">Leave.", {"on click": "Br4FinaleScene()"});
  });
}

//UNCODED B PATH
function Br4BoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
  });
}

function Dr4WindowScene() {
  var t = new TimelineLite();
  t.call(function() {
    addImage({"alt": "",
              "src": "img/gifs/window_large.gif",
              "id": "r1-window-image",
              "width": "400"});
    addText("...It is Tuesday. // Isn't it?");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/gifs/window_largeslow.gif");
  });
  t.addDelay(1);
  t.call(function() {
    console.log("after 5");
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/gifs/window_largeslow2.gif");
  });
  t.addDelay(1);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/gifs/window_largeslow3.gif");
  });
  t.addDelay(1);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/gifs/window_largeslow4.gif");
  });
  t.addDelay(1);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/gifs/window_largeslow5.gif");
  });
  t.addDelay(1);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/frames/window_empty.png");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... // ........ // ");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Oh no.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    Dr4DoorScene();
  });
}

function Dr4DoorScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    removeImage();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.addDelay(2);
  t.call(function() {
    addText("Here. This is...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    var dor = document.getElementById("r1-door-still");
    dor.setAttribute("src", "img/gifs/door_chaos.png");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("We have to go, we can't stay here.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Leave.", {"on click": "Dr4BoxScene()"});
    addTextPointerHover(">Stay.", {"on click": "Dr4DoorBScene()"});
  });
}

function Dr4DoorBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("No! We need to leave!");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Dr4BoxScene();
  });
}

function Dr4BoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addText("We should be safe here.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addText(">...", {"on click": "Dr4BoxBScene()"});
    addText(">Look inside.", {"on click": "Dr4BoxBScene()"});
  });
}

function Dr4BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removetext();
    addText("...It's you. // You're the one doing this.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">...", {"on click": "Dr4BoxBAScene()"});
    addTextPointerHover(">Look inside.", {"on click": "Dr4BoxBBScene()"});
  });
}

function Dr4BoxBAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("We can still go back, you know. To the way things were.");
    addText("This game is...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You... // You're all I have.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">How can we go back?", {"on click": "Dr4BoxBAAScene()"});
    addTextPointerHover(">Look inside.", {"on click": "Dr4BoxBABScene()"});
  });
}

function Dr4BoxBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You want things to change.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addText("You've been this way since the start.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addImage({"alt": "",
              "src": "img/frames/boxinside with key.png",
              "id": "r4-key",
              "height": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.call(function() {
    addText("Why do this? // Why force my hand?");
    addTextPointerHover(">Take key.", {"on click": "Dr4BoxBBBScene()"});
  });
}

function Dr4BoxBAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Time heals all wounds, no matter how deep. Please...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    addText("Don't do this.");
    addText("Don't change.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Look inside.", {"on click": "Dr4BoxBABScene()"});
    addTextPointerHover(">I won't change.", {"on click": "Dr4FinaleA1Scene()"});
  });
}

function Dr4BoxBABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... I see.");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addImage({"alt": "",
              "src": "img/frames/boxinside with key.png",
              "id": "r4-key",
              "height": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    addText("Is this really what you want?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"on click": "Dr4FinaleScene()"});
    addTextPointerHover(">Stay.", {"on click": "Dr4FinaleXXXScene()"});
  });
}

function Dr4BoxBBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    var key = document.getElementById("r4-key");
    key.setAttribute("src", "img/frames/boxinside no key.png");
    addText("Why ruin everything? Why leave when this... //");
  });
  t.to("#image-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You... // You're all I have.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Dr4FinaleScene();
  });
}

function Ar4FinaleScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.addDelay(1);
  t.call(function() {
    addText("Use it.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You've done so much for me.");
    addText("// You've always been there. Always.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Now, I can repay the favor.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Leave.", {"on click": "Ar4FinaleAScene()"});
  });
}

function Ar4FinaleAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  var dor = document.getElementById("r1-door-still");
  dor.setAttribute("src", "img/gifs/door_once.gif");
  t.addDelay(1);
  t.call(function() {
    removeText();
    addText("Thank you.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removetext();
    addText("You made the right choice.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.addDelay(1);
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    StatementScene();
  });
}

function Br4FinaleScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    addText("What happened to you?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Was it too difficult for you to chose one path?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    addText("To change? To behave?");
    addText("Was it all too much?")
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
}

function Cr4FinaleScene() {
  var t = new TimelineLite();
}

function Dr4FinaleScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addImage({"alt": "",
              "src": "img/gifs/door_still.png",
              "id": "r1-door-still",
              "height": "400"});
  });
  t.to("#image-section", 2, {opacity:1});
  t.addDelay(1);
  t.call(function() {
    addtext("I tried to stop you.");
    addText("// Don't think that I didn't.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You, and your constant disagreeing.");
    addText("Always choosing the wrong thing.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Always.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
  var dor = document.getElementById("r1-door-still");
  dor.setAttribute("src", "img/gifs/door_once.gif");
  });
  t.addDelay(1);
  t.call(function() {
    addText("Why did you do it?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addText("What was it all for?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    StatementScene();
  });
}
