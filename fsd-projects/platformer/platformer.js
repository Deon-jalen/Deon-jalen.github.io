$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      // images
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");

      // keyboard input
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);

      firstTimeSetup = false;

      // start game loop
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(200, 550, 200, 20);
    createPlatform(500, 450, 150, 20);
    createPlatform(100, 350, 100, 20);
    createPlatform(400, 250, 200, 20);

    // TODO 3 - Create Collectables
    createCollectable("diamond", 250, 500);
    createCollectable("grace", 550, 420, 0.5, 0.7);

    // TODO 4 - Create Cannons
    createCannon("left", 300, 1500);
    createCannon("right", 400, 1200);
    createCannon("top", 250, 2000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  // register the setup function so the game can call it
  registerSetup(setup);
});
