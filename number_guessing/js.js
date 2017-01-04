function do_game(){
	var random_num;
	var n = 0;
	var guessed_num = 0;
	random_num = Math.random()*100 + 1;
	random_num = Math.floor(random_num);
	// w:{
		while(guessed_num!=random_num){
			guessed_num = prompt("Guess the number from 1 to 100:"+random_num);
			if(isNaN(guessed_num)){
				alert("Entered value is not a number.\n \nPlease enter a number in the range of 1 to 100.");
				continue;
			}
			if (guessed_num==null){
				alert("You didn't enter any number \n \n Please enter a number in the range of 1 to 100.");
				continue;
			}
			if (guessed_num>100||guessed_num<1){
				alert("Please enter a number in the range of 1 to 100.");
				continue;
			}
			if(guessed_num>random_num)
				alert("The number is too big!"+guessed_num);
			else if(guessed_num<random_num)
				alert("The number is too small!"+guessed_num);
			n++;
		}
	// }
	alert("You have guessed the number! You took "+n+" tries.");
}
