//cuenta el numeros de objetos de ese jugador hay 
function CheckTurn_Count(turn_value){
	Turn_count = 0;
	for (i=0; i<3; i++){
		for (j=0; j<3; j++){
			if (board[i][j] == turn_value) Turn_count++;
		}
	}
	//alert ("hay "+ Turn_count + " ficha")
	return Turn_count;
}

function DifMove(x, y){
	diferent = false;

	if (turn == "cross"){
		if (x != Cross_Sellected_x ) diferent = true;
		if (y != Cross_Sellected_y ) diferent = true;
	}
	else{
		if (x != Ball_Sellected_x ) diferent = true;
		if (y != Ball_Sellected_y ) diferent = true;
	}
	return diferent;

}