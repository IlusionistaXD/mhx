var board = new Array(3);
var turn;
//ultima jugadas de la maquina y usuario
var Cross_Sellected_x;
var Cross_Sellected_y;

var Ball_Sellected_x;
var Ball_Sellected_y;
/***********************************
c02		c12		c22

c01 	c11		c21

c00		c10 	c20 		
***********************************/
//asegurando que no halla pintado ningun dibujo
function clearCell (x, y){
	board[x][y] = 0;
	cell = document.getElementById("c" + x + y);
	cell.innerHTML ="";
}

function clearBoard(){
	for (i=0; i<3; i++){
		for (j=0; j<3; j++){
			clearCell (i, j);
		}
	}
}

function paintCell(x, y){
	cell = document.getElementById("c" + x + y);
	cell.innerHTML ="<img src=" + turn + ".gif></img>";

	//cambiando el valor de la casilla 
	//que acabamos de pintar y las coordrnadas ultimas
	if (turn == "ball"){
		board[x][y] = 1;
		Ball_Sellected_x = x;
		Ball_Sellected_y = y;
	}else{
		board[x][y] = 2;
		Cross_Sellected_x = x;
		Cross_Sellected_y = y;
	}

	//cambidnado de turno
	if (turn == "ball") turn = "cross";
	else turn = "ball";
	
}

//function que comprueba su se puede hacer un movimiento
//mas 3 cruzes
// no ir a la ficha repetida
function CheckCell(x, y){
	crosses = CheckTurn_Count(2);
	if (crosses == 3){
		if(board[x][y] ==2){

			Cross_Sellected_x = x;
			Cross_Sellected_y = y;

			clearCell(x, y);
		}
	}else{
		if (board[x][y] == 0 && DifMove(x, y)) SelectCell(x ,y);
	}
}

function SelectCell(x, y){
	paintCell(x, y);
	searchMove();
}

function autoplay(){

	//inializamos el juego
	for (i=0; i<3; i++) board[i]= new Array(3);
	turn = "ball";

	//inicializar coordenadas para el juego
	//cualquier valor
	Cross_Sellected_x = 4;
	Cross_Sellected_y = 4;

	Ball_Sellected_x = 4;
	Ball_Sellected_y = 4;

	//asegurarse que todo esta en blanco
	clearBoard();


	//buscar movimento primer turno;
	searchMove();
	//pruebas
	//paintCell(1,2);
	//alert (Cross_Sellected_x + " " + Cross_Sellected_y);

}

///funcion de rellamada a difmov
function reDifMov(x, y){
	return DifMove(x,y);
}

function reCheckTurn_Count(turn_value){
	return CheckTurn_Count(turn_value);
}


//____________________________________
/*
vacia = 0
bolas = 1
cruz = 2

turn
maquina = ball
humano = cross
*/

autoplay();

