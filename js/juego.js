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
}