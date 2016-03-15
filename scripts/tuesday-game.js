
function startGame() {
  TweenLite.to("#start-button", 2, {opacity:0});

  // Remove start button
  var start_btn = document.getElementById('image-section').innerHTML;
  start_btn.parentNode.removeChild(start_btn);

  // Set title (TUESDAY) as main element
  var TUESDAY = document.createElement("H1");
  var t = document.createTextNode("TUESDAY");
  // TUESDAY.setAttribute() id, opacity
  TUESDAY.appendChild(t);
  document.body.appendChild(t);

  TweenLite.to("#tuesday-title", 2, {opacity:1});
}
