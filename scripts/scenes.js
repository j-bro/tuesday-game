
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
    addTextPointerHover("> Look Inside.", {"onclick": "r1BoxBPostScene()"});
    addTextPointerHover("> Leave.", {"onclick": "r2WindowScene()"});
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
    r2ABoxScene();
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
    addTextPointerHover("> Go through door.", {"onclick": "r2DoorBPostScene()"});
    addTextPointerHover("> Move on.", {"onclick": "r2ABoxScene()"});
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
    r2BBoxScene();
  });
}
//THIS IS WHERE FIRST DIVERGENCE HAPPENS^ r2A vs r2B (B not coded)
function r2ABoxScene() {
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
    addTextPointerHover(">The box will open.", {"onclick": "r2ABoxAScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "r2ABoxBScene()"});
  });
}
//this below path is invalid, B route has not been coded
function r2BBoxScene() {
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
    addTextPointerHover(">The box will open.", {"onclick": "r2BoxOpenScene()"});
    addTextPointerHover(">The box will stay closed.", {"onclick": "r2BoxCloseScene()"});
  });
}
//needs to be delay between selection and box opening
function r2ABoxAScene() {
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
    r3AWindowScene();
  });
}

function r2ABoxBScene() {
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
    r2ABoxBPostScene();
  });
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addTextPointerHover(">Leave.", {"onclick": "r3WAindowScene()"});
    addTextPointerHover(">Look inside.", {"onclick": "r2ABoxBPostScene()"});
  });
  t.to("#text-section", 2, {opacity:1});
}

function r2ABoxBPostScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0});
  t.call(function() {
    removeText();
    addText("No. That never happens.");
  });
  t.to("#text-section", 2, {opacity:1});
  t.call(function(){
    r3AWindowScene();
  });
}

function r3AWindowScene() {
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
  t.to("#text-section", 2, {opacity:1});
  t.to("#text-section", 2, {opacity:0});
  t.to("#image-section", 2, {opacity:0});
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
    addTextPointerHover(">Go through door.", {"onclick": "r3DoorAScene()"});
    addTextPointerHover(">Move on.", {"onclick": "r3BoxScene()"});
  });
}
//weird delays after 'go through door', timing too sudden, fade out doesn't work
function r3DoorAScene() {
  var t = new TimelineLite();
  t.to("#textsection", 2, {opacity:0});
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
    r3BoxScene();
  });
}

function r3BoxScene() {
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
    addTextPointerHover(">Do we?", {"onclick": "r3Box2Scene()"});
    addTextPointerHover(">Do you?", {"onclick": "r3Box2Scene()"});
  });
}

function r3Box2Scene() {
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
    addTextPointerHover(">Look inside.", {"onclick": "r3Box2AScene()"});
    addTextPointerHover(">Leave.", {"onclick": "r4WindowScene()"});
  });
}
//shutfast gif jumps at beginning?
function r3Box2AScene() {
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
    r4WindowScene();
  });
}

function r4WindowScene() {
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
    r4DoorScene();
  });
}

function r4DoorScene() {
  var t = new TimelineLite();
  t.to("#text-section", 2, {opacity:0})
  t.call(function() {
    removeText();
    removeimage();
  });
}
