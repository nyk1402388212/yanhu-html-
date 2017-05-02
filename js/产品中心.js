var a = 0;

function chanpingmove(){
	var v = document.getElementById("chanping123");
	v.style.display="block";
}
function chanpingmove2(){
	var v = document.getElementById("chanping123");
	v.style.display="block";
	a++;
}


function chanpingout(){
	if(a==0){
	var v = document.getElementById("chanping123");
	v.style.display="none";
	}
}

function you(){
	var a = document.getElementById("you_ul");
	a.style.display="block";
}

function youout(){
	var a = document.getElementById("you_ul");
	a.style.display="none";
}
