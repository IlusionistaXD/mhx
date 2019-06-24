

function searchMove(){
	
	//primero contar numero de bolas
	//si es 3
		//1.opcion  buscamos una casilla llena de bola primero, 
		//luego la borramos y buscamos otra vacia para llenar

		//2.opcion  buscamos una casilla vacia para llenar
	balls = reCheckTurn_Count(1);
	if (balls == 3){
		CellFind = false;

			//buscando una casilla que este llena
			//mientras es falso
			while (CellFind == false){
				x = Math.round(Math.random()*2);
				y = Math.round(Math.random()*2);
				
				if (board[x][y] == 1) CellFind = true;
			}
			Ball_Sellected_x = x;
			Ball_Sellected_y = y;
			clearCell(x ,y);
	}
	RandomMove();
}

function RandomMove(){

	CellAvailable = false;

	//buscando una casilla para pintar 
	//mientras es falso
	while (CellAvailable == false){
		x = Math.round(Math.random()*2);
		y = Math.round(Math.random()*2);
 
		//nos aseguramos que la casilla este vacia y que no
		//sea una anterior ya llena
		if (board[x][y] == 0 && reDifMov(x, y)) CellAvailable = true;
		
	}
	paintCell(x, y);


}


