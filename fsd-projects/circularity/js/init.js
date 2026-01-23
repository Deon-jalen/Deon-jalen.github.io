var init = function (window) {
  "use strict";
  var draw = window.opspark.draw,
    physikz = window.opspark.racket.physikz,
    app = window.opspark.makeApp(),
    canvas = app.canvas,
    view = app.view,
    fps = draw.fps("#bed20c");

  window.opspark.makeGame = function () {
    window.opspark.game = {};
    var game = window.opspark.game;

    ///////////////////
    // PROGRAM SETUP //
    ///////////////////

    // TODO 1 : Declare and initialize our variables
    var circle;
    var circles = [];

    // TODO 2 : Create a function that draws a circle
    function drawCircle() {
      circle = draw.randomCircleInArea(canvas, true, true, "#074a41", 2);
      physikz.addRandomVelocity(circle, canvas, 5, 5);
      view.addChild(circle);
      circles.push(circle);
    }

    // TODO 7 : Use a loop to create multiple circles
    for (var i = 0; i < 50; i++) {
      drawCircle();
    }

    ///////////////////
    // PROGRAM LOGIC //
    ///////////////////

    function update() {
      // TODO 8 / TODO 9 : Iterate over the array
      for (var i = 0; i < circles.length; i++) {
        physikz.updatePosition(circles[i]);
        game.checkCirclePosition(circles[i]);
      }
    }

    game.checkCirclePosition = function (circle) {
      // right → left
      if (circle.x - circle.radius > canvas.width) {
        circle.x = -circle.radius;
      }

      // left → right
      if (circle.x + circle.radius < 0) {
        circle.x = canvas.width + circle.radius;
      }

      // bottom → top
      if (circle.y - circle.radius > canvas.height) {
        circle.y = -circle.radius;
      }

      // top → bottom
      if (circle.y + circle.radius < 0) {
        circle.y = canvas.height + circle.radius;
      }
    };

    /////////////////////////////////////////////////////////////
    // --- NO CODE BELOW HERE --- DO NOT REMOVE THIS CODE --- //
    /////////////////////////////////////////////////////////////

    view.addChild(fps);
    app.addUpdateable(fps);

    game.circle = circle;
    game.circles = circles;
    game.drawCircle = drawCircle;
    game.update = update;

    app.addUpdateable(window.opspark.game);
  };
};

// DO NOT REMOVE THIS CODE ////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports = init;
}