let turno = 'X';
let jugada;
 
let tablero = new Array(9);
tablero.fill('');
do {
    if (turno == 'X') {
        turno = 'O';
    } else {
        turno = 'X';
    }
 
    do {
        jugada = parseInt(prompt("Jugador " + turno + " Ingrese su jugada"));
        console.log(jugada);
    } while (!esJugadaValida(jugada));
 
    mostrarTablero();
 
    jugadaEsGanadora(jugada);
 
 
 
 
} while (jugada != null);
 
function esJugadaValida(jugada) {
 
    let esValida = false;
    if (jugada >= 0 && jugada <= 8) {
 
        if (tablero[jugada] == '') {
            esValida = true;
            tablero[jugada] = turno;
        } else {
            alert("La casilla esta ocupado");
        }
    } else {
        alert("La jugada no es valida");
    }
 
 
 
    return esValida;
}
 
function jugadaEsGanadora(jugada) {
 
    //Evaluar las horizontales
 
    //Evaluar las verticales
 
    //Evaluar las diagonales
}
 
function mostrarTablero() {
 
    let dibujo = "";
 
    dibujo += tablero[0] + "|" + tablero[1] + "|" + tablero[2] + "\n";
    dibujo += tablero[3] + "|" + tablero[4] + "|" + tablero[5] + "\n";
    dibujo += tablero[6] + "|" + tablero[7] + "|" + tablero[8] + "\n";
 
    alert(dibujo);
 
}