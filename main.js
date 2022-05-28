
let countC = 0;
let countS = 0;
let countM = 0;
let countH = 0;
let countUp = function(){
	
	
	if (countC>=10){
	
		countC=0;
		countS++;
	}
	if (countS>=60){
		countS=0;
		countM++;
	}
	if (countM>=60){
		countM=0;
		countH++;
	}
	
	document.getElementById("seconds").innerHTML=countS;
	document.getElementById("commaSeconds").innerHTML=countC;
	document.getElementById("minutes").innerHTML=countM;
	document.getElementById("hours").innerHTML=countH;
	countC++;
};
let timer;

let timeStart = function(){
 timer =setInterval(countUp,100);
};
let timeStop = function(){
	clearInterval(timer);
};
let timeReset = function(){
	countC = countS = countM = countH = 0;
	document.getElementById("seconds").innerHTML=countS;
	document.getElementById("commaSeconds").innerHTML=countC;
	document.getElementById("minutes").innerHTML=countM;
	document.getElementById("hours").innerHTML=countH;
	clearInterval(timer);
} ;


$(document).ready(function(){
	$(".start").click(function(){
		timeStart();
		//$(this).css("pointer-events","none");
		$(".start").prop("disabled",true);
		$(".stop,.reset").prop("disabled",false);
	});
	$(".stop").click(function(){
		timeStop();
		$(".stop").prop("disabled",true);
		$(".start").prop("disabled",false);
	});
	$(".reset").click(function(){
		timeReset();
		$(".reset,.stop").prop("disabled",true);
		$(".start").prop("disabled",false);
	});
});