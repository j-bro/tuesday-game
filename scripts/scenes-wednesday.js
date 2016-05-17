
function wednesdayTitleScene() {
  expandTitleSection();
  var t = new TimelineLite();
  t.call(function() {
    addTitle("WEDNESDAY", 1);
    addTitle("by Julie Brown", 3);
  });
  t.delay(1);
  t.to("#title-section", 3, {opacity:1});
  t.call(function() {
    addTitle("What will you choose to do?", 4);
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">START", {"onclick": "r1WindowScene()"});
  });
}

//make title sequence more of a title page: give a >START option and info about game
//tag line? like "what will you do?"

function r1WindowScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#title-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeTitle();
    collapseTitleSection();
    addImage({"alt": "",
              "src": "img/wed/gifs/window_large.gif",
              "id": "r1-window-image",
              "width": "600"});
  });
  t.to("#image-section", 3, {opacity:1});
  t.call(function() {
    addText("It is Wednesday. What a beautiful day.");
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
  t.call(function(){
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
  t.call(function(){
    r1DoorScene();
  });
}
function r1DoorScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
  });
  t.addDelay(2);
  t.call(function() {
    addText("It is Wednesday. // Do you know what will happen?");
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
  });
  t.addDelay(2);
  t.call(function(){
    addText("As expected.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    r1BoxScene();
  });
}

function r1BoxScene() {
  var t = new TimelineLite();
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
  });
  t.addDelay(3);
  t.call(function() {
    removeText();
    addText("It is Wednesday. // What happens now?");
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
    removeText();
  });
  t.addDelay(2);
  t.call(function() {
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
    removeText();
  });
  t.addDelay(2);
  t.call(function() {
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
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-window.gif");
  });
  t.addDelay(3);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/window_large.gif");
    removeText();
    addText("It is Wednesday. It is a beautiful day.");
    addText("// There is nothing new under the sun.");
  });
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
  t.call(function() {
    removeText();
    r2DoorScene();
  });
}

function r2DoorScene() {
  var t = new TimelineLite();
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
    addText("It is Wednesday. // What will happen?");
  });
  t.addDelay(3);
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
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
    addText("... Let us move on.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    Br2BoxScene();
  });
}

function Ar2BoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
  });
  t.addDelay(3);
  t.call(function() {
    addText("Nothing changes on Wednesdays.");
    addText("// You know what happens next, don't you?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The box will open.", {"onclick": "Ar2BoxAScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "Ar2BoxBScene()"});
  });
}

function Br2BoxScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
    addText("See? Nothing changes on Wednesdays.");
    addText("// You know what happens next, don't you?");
  });
  t.addDelay(3);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The box will open.", {"onclick": "Br2BoxAScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "Br2BoxBScene()"});
  });
}

function Br2BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
  });
  t.addDelay(1);
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
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
  });
  t.addDelay(1);
  t.call(function() {
    removeText();
    addText("This always happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Ar3WindowScene();
  });
}

function Ar2BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
  });
  t.addDelay(1);
  t.call(function() {
    removeText();
    addText("...This always happens. // You should know that.");
  });
  t.to("#text-section", 1, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Look inside.", {"onclick": "Ar2BoxBPostScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Ar3WindowScene()"});
  });
}

function Br2BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
  });
  t.addDelay(1);
  t.call(function() {
    removeText();
    addText("...This always happens. // You should know that.");
  });
  t.to("#text-section", 1, {opacity:1});
  t.call(function() {
    removeText();
    addTextPointerHover(">Look inside.", {"onclick": "Br2BoxBPostScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Br3WindowScene()"});
  });
  t.to("#text-section", 2, {opacity:1});
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

function Br2BoxBPostScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("No. That... That never happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function(){
    Cr3WindowScene();
  });
}

function Ar3WindowScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-window.gif");
    removeText();
    addText("It is always a beautiful day. // Always.");
  });
  t.addDelay(2);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/window_large.gif");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"onclick": "Ar3DoorAScene()"});
    addTextPointerHover(">Things change.", {"onclick": "Ar3DoorBScene()"});
  });
}

function Br3WindowScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-window.gif");
    removeText();
    addText("It is a beautiful day. // Always. // Always.");
  });
  t.addDelay(2);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/wifs/window_large.gif");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"onclick": "Br3DoorAScene()"});
    addTextPointerHover(">Things change.", {"onclick": "Br3DoorBScene()"});
  });
}

function Cr3WindowScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("It it a beautiful day. Always. Always.");
    addText("// Always.");
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-window.gif");
  });
  t.addDelay(2);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/window_large.gif");
  });
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
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
    removeText();
    addText("You know what will happen. // What has always happened.");
  });
  t.addDelay(3);
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
    addText("It is Wednesday. Things never change.");
    addText("// Not ever.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
    removeText();
    addText("You know what will happen. // What always happens.");
  });
  t.addDelay(3);
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
    addText("// Of course.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
    removeText();
    addText("You know what will happen. // What has always happened.");
  });
  t.addDelay(3);
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
    addText("It is Wednesday. Things never change.");
    addText("// Not ever.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
    removeText();
    addText("You know what will happen. // What always happens.");
  });
  t.addDelay(3);
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
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
    removeText();
    addText("You know what will happen. // Has always happened.");
  });
  t.addDelay(3);
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
    addText("It is Wednesday. Things never change.");
    addText("// Not ever.");
  });
  t.to("#text-section", 2, {opacity:1}, "+=1");
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
    removeText();
    addText("You know what will happen. // What always happens.");
  });
  t.addDelay(3);
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
  });
  t.addDelay(1);
  t.call(function() {
    addText("Good. You haven't forgotten.");
    addText("// You haven't changed.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    Ar3BoxScene();
  });
}

function Ar3DoorBAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0,});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
  });
  t.addDelay(1);
  t.call(function() {
    addText("That's right. Things haven't changed.");
    addText("// You haven't changed.");
    removeImage();
  });
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    Br3BoxScene();
  });
}

function Ar3DoorABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
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
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
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
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
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
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
  });
  t.addDelay(1);
  t.call(function() {
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
  });
  t.addDelay(1);
  t.call(function() {
    addText("That's right. Things haven't changed.");
    addText("// You... Haven't changed.");
    Cr3BoxScene();
  });
}

function Cr3DoorABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
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
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... This...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
  });
  t.addDelay(1);
  t.call(function() {
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.");
});
t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Br3BoxScene();
  });
}

function Ar3DoorBBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.");
});
t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Cr3BoxScene();
  });
}

function Br3DoorABBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.");
});
t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Cr3BoxScene();
  });
}

function Br3DoorBBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.");
});
t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Cr3BoxScene();
  });
}

function Cr3DoorABBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.");
});
t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Cr3BoxScene();
  });
}

function Cr3DoorBBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_shut.gif");
    addText("No. That's not... That's not how it goes.");
});
t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Dr3BoxScene();
  });
}

function Ar3BoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
    addText("Nothing changes. We know what always happens.");
    addText("// This always happens.");
  });
  t.addDelay(3);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The box will open.", {"onclick": "Ar3BoxAScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "Ar3BoxBScene()"});
  });
}

function Br3BoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
    addText("We know what always happens. // Don't we?");
  });
  t.addDelay(3);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">The box will open.", {"onclick": "Br3BoxAScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "Br3BoxBScene()"});
  });
}

function Cr3BoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
    addText("We know what always happens... // Don't we?");
  });
  t.addDelay(3);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Will the box open?", {"onclick": "Cr3BoxAScene()"});
    addTextPointerHover(">Will the box stay closed?", {"onclick": "Cr3BoxBScene()"});
  });
}

function Dr3BoxScene() {
  var t = new TimelineLite();
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
    addText("We know... What always happens... // Don't we?");
  });
  t.addDelay(3);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Do we?", {"onclick": "Dr3BoxAScene()"});
    addTextPointerHover(">Do you?", {"onclick": "Dr3BoxAScene()"});
  });
}

function Ar3BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
    addText("We're never wrong.");
    addText("// This always happens.");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function () {
    removeText();
    Ar4WindowScene();
  });
}

function Ar3BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.addDelay(1);
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
    addText("Thank goodnes.");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    addTextPointerHover(">Leave.", {"onclick": "Ar3BoxBAScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "Ar3BoxBBScene()"});
  });
}

function Br3BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Of course. This...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.addDelay(1);
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
    addText("This always happens.");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function () {
    removeText();
    Br4WindowScene();
  });
}

function Br3BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You should know. This...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.addDelay(1);
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
    addText("This always happens.");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    addTextPointerHover(">Leave.", {"onclick": "Br3BoxBAScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "Br3BoxBBScene()"});
  });
}

function Cr3BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Of course. This...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.addDelay(1);
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
  });
  t.addDelay(2);
  t.call(function() {
    addText("This always happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function () {
    removeText();
    Cr4WindowScene();
  });
}

function Cr3BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("I thought you knew. This...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.addDelay(1);
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
    addText("This always happens.");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:1});
  t.call(function () {
    addTextPointerHover(">Leave.", {"onclick": "Cr3BoxBAScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "Cr3BoxBBScene()"});
  });
}

function Dr3BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
    addText("This. Always. Happens.");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_shutfast.gif");
    addText("But you continue to doubt.");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function () {
    removeText();
    Dr4WindowScene();
  });
}

function Ar3BoxBAScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Br4WindowScene();
  });
}

function Ar3BoxBBScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Br4WindowScene();
  });
}

function Br3BoxBAScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Br4WindowScene();
  });
}

function Br3BoxBBScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Cr4WindowScene();
  });
}

function Cr3BoxBAScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Br4WindowScene();
  });
}

function Cr3BoxBBScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_shutfast.gif");
    addText("No!");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Cr4WindowScene();
  });
}

function Ar4WindowScene() {
  var t = new TimelineLite();
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-window.gif");
  });
  t.addDelay(3);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/window_large.gif");
    addText("It is Wednesday. It has always been Wednesday.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">It is Wednesday.", {"onclick": "Ar4DoorAScene()"});
    addTextPointerHover(">Is it still Wednesday?", {"onclick": "Ar4DoorBScene()"});
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
  });
  t.addDelay(2);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_still.png");
    addText("It is Wednesday. And you've always been here.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"onclick": "Ar4DoorAAScene()"});
    addTextPointerHover(">Things change.", {"onclick": "Ar4DoorABScene()"});
  });
}

function Ar4DoorBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("It is Wednesday. You remember.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
  });
  t.addDelay(2);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_still.png");
    addText("Wednesday. And you've always been here.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"onclick": "Ar4DoorBAScene()"});
    addTextPointerHover(">Things change.", {"onclick": "Ar4DoorBBScene()"});
  });
}

function Ar4DoorAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_once.gif");
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
    removeText();
    addText("Do they need to?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_once.gif");
    addText("Or is this just you... And your uncertainty?");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    Cr4BoxScene();
  });
}

function Ar4DoorBAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_once.gif");
    addText("Always.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Ar4BoxScene();
  });
}

function Ar4DoorBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Do they need to?");
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_once.gif");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Cr4BoxScene();
  });
}

function Ar4BoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
    addText("I'm going to show you something.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/box_large.gif");
    addText("Look inside.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Look inside.", {"onclick": "Ar4BoxAScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Ar4BoxA2Scene()"});
  });
}

function Ar4BoxA2Scene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Don't be shy. It's alright.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Look inside.", {"onclick": "Ar4BoxBScene()"});
  });
}

function Ar4BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-key.gif");
  });
  t.addDelay(2);
  t.call(function() {
    addText("I'm giving you a choice. // One final decision.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0}, "+=1");
  t.call(function() {
    removeText();
    addText("You've always done the right thing. You've always known...");
    addText("// What's best for us.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0}, "+=2");
  t.call(function() {
    removeText();
    addText("And now you can choose what's best for you.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"onclick": "Ar4BoxAAScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Ar4BoxABScene()"});
  });
}

function Ar4BoxBScene(){
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-key.gif");
  });
  t.addDelay(2);
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
    addTextPointerHover(">Take key.", {"onclick": "Ar4BoxAAScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Ar4BoxBBScene()"});
  });
}

function Ar4BoxAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/frames/boxinside with key.gif");
  });
  t.addDelay(2);
  t.call(function() {
    addText("There. You always listen.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0}, "+2");
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
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"onclick": "Ar4BoxAAScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Cr4FinaleScene()"});
  });
}

function Ar4BoxBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... I'm telling you to take it.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"onclick": "Ar4BoxAAScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Cr4FinaleScene()"});
  });
}

function Br4WindowScene() {
  var t = new TimelineLite();
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-window.gif");
  });
  t.addDelay(3);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/window_large.gif");
    addText("It is Wednesday. Remember.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("There is nothing to change.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Nothing will change.", {"onclick": "Br4DoorAScene()"});
    addTextPointerHover(">How can you know?", {"onclick": "Br4DoorBScene()"});
  });
}

function Br4DoorAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("There. I knew you that knew it.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You know this aswell. Nothing changes.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Nothing changes.", {"onclick": "Br4DoorAAScene()"});
    addTextPointerHover(">You cannot know for certain.", {"onclick": "Br4DoorABScene()"});
  });
}

function Br4DoorBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Nothing changes.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Not ever.");
    addText("Do you understand?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
  });
  t.addDelay(2);
  t.call(function() {
    addText("Nothing. Ever. Changes.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Nothing changes.", {"onclick": "Br4DoorBAScene()"});
    addTextPointerHover(">You cannot know for certain.", {"onclick": "Br4DoorBBScene()"});
  });
}

function Br4DoorAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
    addText("Good.");
    addText("// ...You must remember.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Br4BoxScene();
  });
}

function Br4DoorABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("...");
    addText("// What changed you?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("I thought you knew...");
    addText("You said you knew.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    Cr4BoxScene();
  });
}

function Br4DoorBAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
    addText("... Good.");
    addText("// Nothing... ever changes.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    Br4BoxScene();
  });
}

function Br4DoorBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("....");
    addText("// What changed you?");
    Cr4BoxScene();
  });
}

function Br4BoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
    addText("I have to ask.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    addText("// What did you think would happen now?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("When you're done changing you mind...");
    addText("// When you're done choosing, what happens?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.addDelay(2);
  t.call(function() {
    addTextPointerHover(">Leave.", {"onclick": "Br4BoxAScene()"});
    addTextPointerHover(">Look inside", {"onclick": "Br4BoxBScene()"});
  });
}

function Br4BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You think it's that easy?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("There's only one way this ends.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.addDelay(1);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-key.gif");
  });
  t.addDelay(2);
  t.call(function() {
    addTextPointerHover(">Leave.", {"onclick": "Br4BoxAAScene()"});
    addTextPointerHover(">Take key.", {"onclick": "Br4BoxBBScene()"});
  });
}

function Br4BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-key.gif");
  });
  t.addDelay(2);
  t.call(function() {
    addText("One click.");
    addText("// One click and I'm gone.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    addText("For once, do you know what it is you're doing?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Leave.", {"onclick": "Br4BoxAAScene()"});
    addTextPointerHover(">Take key.", {"onclick": "Br4BoxBBScene()"});
  });
}

function Br4BoxAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Of course.");
    addText("// You're still so unsure of yourself.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... Was it always like this?");
    addText("// ...Always?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Cr4FinaleScene();
  });
}

function Br4BoxBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/frames/boxinside no key");
    addText("When this is all over...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    addText("Remember...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("This was your choice.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    Br4FinaleScene();
  });
}

function Cr4WindowScene() {
  var t = new TimelineLite();
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-window.gif");
  });
  t.addDelay(3);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/window_large.gif");
    addText("Wednesday.");
    addText("// It is Wednesday.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("There is nothing to change.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">There is nothing to change.", {"onclick": "Cr4DoorAScene()"});
    addTextPointerHover(">Isn't there?", {"onclick": "Cr4DoorBScene()"});
  });
}

function Cr4DoorAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Nothing at all.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
    addText("Nothing needs to change.");
    addText("// It can always be Wednesday.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"onclick": "Cr4DoorAAScene()"});
    addTextPointerHover(">Things change.", {"onclick": "Cr4DoorABScene()"});
  });
}

function Cr4DoorBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("No... There isn't.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("There isn't... Anything to change.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
  });
  t.call(function() {
    addText("Nothing needs to change.");
    addText("// It can always be Wednesday.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Always.", {"onclick": "Cr4DoorBAScene()"});
    addTextPointerHover(">Things change.", {"onclick": "Cr4DoorBBScene()"});
  });
}

function Cr4DoorAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
    addText("...");
    addText("... Always. Yes, that's right.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Br4BoxScene();
  });
}

function Cr4DoorABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("...");
    addText("// What made you change so quickly?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
  });
  t.addDelay(1);
  t.call(function() {
    Cr4BoxScene();
  });
}

function Cr4DoorBAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("...");
    addText("// What made you change so quickly?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
  });
  t.addDelay(1);
  t.call(function() {
    Cr4BoxScene();
  });
}

function Cr4DoorBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("...");
    addText("// Is that really what you think?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
  });
  t.addDelay(1);
  t.call(function() {
    Cr4BoxScene();
  });
}

function Cr4BoxScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
    addText("You could never decide.");
    addText("// I see that now.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
  addTextPointerHover(">Look inside.", {"onclick": "Cr4BoxBScene()"});
  addTextPointerHover(">Leave.", {"onclick": "Cr4BoxAScene()"});
  });
}

function Cr4BoxAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Don't play dumb.");
    addText("// This is the choice you wanted.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-key.gif");
  });
  t.addDelay(2);
  t.call(function() {
    addText("You've always had this choice.");
    addText("// And now you need to use it.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"onclick": "Cr4BoxBBScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Cr4BoxAAScene()"});
  });
}

function Cr4BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-key.gif");
  });
  t.addDelay(2);
  t.call(function() {
    addText("You've always had the choice.");
    addText("// You just never knew how to use it.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"onclick": "Cr4BoxBBScene()"});
    addTextPointerHover(">Leave.", {"onclick": "Cr4BoxAAScene()"});
  });
}

function Cr4BoxAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Of course.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You've had no problems being contradictory.");
    addText("// And now... When the choice matters...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.addDelay(3);
  t.call(function() {
    removeText();
    addText("You make the wrong one.");
    });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    Cr4FinaleScene();
  });
}

function Cr4BoxBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/frames/boxinside no key.png");
  });
  t.addDelay(1);
  t.call(function() {
    Br4FinaleScene();
  });
}

function Dr4WindowScene() {
  var t = new TimelineLite();
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-window.gif");
    addText("...It is Wednesday. // Isn't it?");
  });
  t.addDelay(3);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/window_large.gif");
  });
  t.addDelay(1);
  t.call(function() {
    console.log("after 5");
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/window_largeslow2.gif");
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
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/window-door.gif");
  });
  t.addDelay(2);
  t.call(function() {
    addText("Here. This is...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_chaos.gif");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("We have to go, we can't stay here.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Leave.", {"onclick": "Dr4BoxScene()"});
    addTextPointerHover(">Stay.", {"onclick": "Dr4DoorBScene()"});
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
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/door-box.gif");
    addText("We should be safe here.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">...", {"onclick": "Dr4BoxBAScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "Dr4BoxBScene()"});
  });
}

function Dr4BoxBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("...It's you. // You're the one doing this.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">...", {"onclick": "Dr4BoxBAScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "Dr4BoxBBScene()"});
  });
}

function Dr4BoxBAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("We can still go back, you know. To the way things were.");
    addText("// This game is...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You... // You're all I have.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">How can we go back?", {"onclick": "Dr4BoxBAAScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "Dr4BoxBABScene()"});
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
  t.call(function() {
    removeText();
    addText("You've been this way since the start.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-key.gif");
  });
  t.call(function() {
    addText("Why do this? // Why force my hand?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"onclick": "Dr4BoxBBBScene()"});
    addTextPointerHover(">...", {"onclick": "Dr4BoxBAAScene()"});
  });
}

function Dr4BoxBAAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Time heals all wounds, no matter how deep.");
    addText("// Please...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Don't do this.");
    addText("// Don't change.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Look inside.", {"onclick": "Dr4BoxBAB2Scene()"});
    addTextPointerHover(">I won't change.", {"onclick": "Cr4FinaleScene()"});
  });
}

function Dr4BoxBABScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("... I see.");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-key.gif");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    addText("Is this really what you want?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"onclick": "Dr4FinaleScene()"});
    addTextPointerHover(">Stay.", {"onclick": "Cr4FinaleScene()"});
  });
}

function Dr4BoxBAB2Scene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/box-key.gif");
    addText("... I see.");
  });
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Is this really what you want?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Take key.", {"onclick": "Dr4FinaleScene()"});
    addTextPointerHover(">Stay.", {"onclick": "Cr4FinaleScene()"});
  });
}

function Dr4BoxBBBScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/frames/boxinside no key.png");
    addText("Why ruin everything? Why leave when this...");
  });
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
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/nokey-door.gif");
  });
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
    addTextPointerHover(">Leave.", {"onclick": "Ar4FinaleAScene()"});
  });
}

function Ar4FinaleAScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  var dor = document.getElementById("r1-door-still");
  dor.setAttribute("src", "img/wed/gifs/door_once.gif");
  t.addDelay(1);
  t.call(function() {
    removeText();
    addText("Thank you.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.addDelay(1);
  t.call(function() {
    removeText();
    addText("You made the right choice.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.addDelay(2);
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    StatementScene();
  });
}

function Br4FinaleScene() {
  var t = new TimelineLite();
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/nokey-door.gif");
    addText("There's no stopping you then.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/goor_open.gif");
  });
  t.addDelay(1);
  t.call(function() {
    addText("All that false indecision, all those wrong turns...");
    addText("// If you wanted to leave this whole time...");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
  });
  t.addDelay(2);
  t.call(function() {
    addText("You could have chosen it sooner.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    removeImage();
    StatementScene();
  });
}

function Cr4FinaleScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/key-door.gif");
    addText("... What happened to you?");
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
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
    addText("To change? To behave?");
    addText("// Was it all too much?");
  });
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("Maybe this is what you needed.");
    addText("// Someone to make the decision for you.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function() {
    addTextPointerHover(">Leave.", {"onclick": "Cr4Finale2Scene()"});
  });
}

function Cr4Finale2Scene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addText("There.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.addDelay(1);
  t.call(function() {
    removeText();
    addText("That wasn't so bad, was it?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    StatementScene();
  });
}

function Dr4FinaleScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/frames/boxinside no key.png");
  });
  t.addDelay(1);
  t.call(function() {
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/trans/nokey-door.gif");
  });
  t.addDelay(1);
  t.call(function() {
    addText("I tried to stop you.");
    addText("// Don't think that I didn't.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("You, and your constant disagreeing.");
    addText("// Always choosing the wrong thing.");
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
    var win = document.getElementById("r1-window-image");
    win.setAttribute("src", "img/wed/gifs/door_open.gif");
  });
  t.addDelay(2);
  t.call(function() {
    removeText();
    addText("Why did you do it?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
  t.call(function() {
    removeImage();
    removeText();
    addText("What was it all for?");
  });
  t.to("#text-section", 2, {opacity:1});
  t.addDelay(1);
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    StatementScene();
  });
}

function StatementScene() {
  var t = new TimelineLite();
  t.addDelay(3);
  t.call(function() {
    collapseImageSection();
    addText("<br><br>");
    addText("'Wednesday' is a short video game about choice. For decades, this medium has been exploring every nook and cranny that choice had to offer; either players were thrown into storylines they had no control over, or their choices defined the story itself. Sometimes choice is as simple as deciding the playable character's gender. Other times, the only choice available is to chose whether or not you'll play the game.");
    addText("'Wednesday' presents choice as a binary: 'Look inside' or 'Leave', 'Go through' or 'Move on'. Despite their seemingly restrained nature, the player's decisions add up and begin to define their interactions and eventually, the reactions of the game itself.");
    addText("Special thanks to Jeremy Brown for all his help and for just generally being A Cool Dude.");
    addText("Thank you for playing!");
    // Yaw thanks sis this was fun helping you and all!
    // 2737 lines of code in one file is probably not best practice but it is an accomplishment!
    // You probably have more javascript experience than me now ;)
    //    -JB
  });
  t.to("#text-section", 2, {opacity:1});
}
