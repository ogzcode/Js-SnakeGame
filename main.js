import { Game } from "./src/module/Game.js";

const context = document.querySelector("canvas").getContext("2d");

const game = new Game(context);
setInterval(() => game.frame(context), 1000 / 10);

