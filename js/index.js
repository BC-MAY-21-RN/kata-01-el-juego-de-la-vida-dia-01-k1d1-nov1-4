import Game from './juego.js';
const TABLERO = document.getElementById('main');
const X = 10;
const Y = 10;
const VIVAS = ["2,3","2,4","2,5"];
const GAME = new Game(X,Y,TABLERO, VIVAS);

GAME.crearTablero();