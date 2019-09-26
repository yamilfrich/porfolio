import Game from "./game";
/* globals $ */

export default function(p: any) {
  // Private members -----------------------------------------------------------
  const game: Game = new Game(p);

  p.setup = () => {
    p.createCanvas(300, 370);
    p.colorMode(p.RGB, 255, 255, 255, 1.0);
  };

  p.mouseClicked = () => {
    game.mouseClicked();
  };

  p.doubleClicked = () => {
    game.doubleClicked();
  };

  p.mouseMoved = () => {
    game.mouseMoved();
  };

  p.draw = () => {
    p.background(0);
    game.draw();
  };
}
