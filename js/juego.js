/**
 * Cosas por hacer:
 * 1- buscar todos los vecinos de una celda
 * 2- buscar todos los vecinos vivos de una celda
 * 3- actualizar el estado de la celula
 * 4- busco todos los vecinos vivos
 * 5- actualizar tablero
 */
export default class Game{
    constructor(x, y, tablero, celulasVivas){
        this.fila = x;
        this.columna = y;
        this.tablero = tablero;
        this.celulasVivas = celulasVivas;
    }

    crearTablero(){
        let html = "", encontrada = undefined, estaViva ='';
        for (let i = 0; i < this.fila; i++) {
            for (let j = 0; j < this.columna; j++) {
                encontrada = this.celulasVivas.find(viva => viva == i +','+j);
                estaViva = encontrada != undefined ? 'vivo' : '';
                html += `<i id='${i},${j}' class=${estaViva}></i>`
            }
        }
        this.tablero.style = "grid-template-columns: repeat(" + this.fila + ", 20px);grid-template-rows: repeat(" + this.columna + ", 20px)";
        this.tablero.innerHTML = html;
    }

    buscarCelulas(){
      for (let i = 0; i < this.fila; i++) {
        for (let j = 0; j < this.columna; j++) {
                //buscar vecinos de x,y
                this.buscarVecinos(i,j)
            }
        }
    }

    buscarVecinos(x,y){
        /**x y
         * 0,6 0,7 0,8
         * 1,6 1,7 1,8
         * 2,6 2,7 2,8
         */
        let vecinos =[]; 
        let auxY=0;
        let posicion = x+','+y
        x++
        for (let i = 0; i < 3; i++) {
            auxY = y++;
            for (let j = 0; j < 3; j++) {
                vecinos.push(x+","+auxY);
                auxY--
            }
            x--;
        }
        return vecinos.filter(vecino => vecino != posicion)
    }
}