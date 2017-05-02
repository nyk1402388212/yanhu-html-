	
	var i = 1;
	function changimg(){
			var p = document.getElementById("imgs");
			if(i<=2){
				i++;
				//切换公司海报，背景图
				p.style.backgroundImage ="url(img/banner"+i+".jpg)";
			}else if(i==3){
				i=1;
				p.style.backgroundImage ="url(img/banner"+i+".jpg)";
			}
		}
	

		function changimg2(){
			var p = document.getElementById("imgs");
			if(i>=2){
				i--;
				p.style.backgroundImage ="url(img/banner"+i+".jpg)";
			}else if(i==1){
				i=3;
				p.style.backgroundImage ="url(img/banner"+i+".jpg)";
			}
		}
		

		function changnum1(){
			var p = document.getElementById("imgs");
			p.style.backgroundImage ="url(img/banner1.jpg)";
		}
		function changnum2(){
			var p = document.getElementById("imgs");
			p.style.backgroundImage ="url(img/banner2.jpg)";
		}
		function changnum3(){
			var p = document.getElementById("imgs");
			p.style.backgroundImage ="url(img/banner3.jpg)";
		}


//1.2.3
		function change1(){
			var p = document.getElementById("a1");
			p.style.backgroundColor ="#888888";
		}
		
		function change11(){
			var p = document.getElementById("a1");
			p.style.backgroundColor = "#00408f";
			
		}
		
		
		function change2(){
			var p = document.getElementById("a2");
			p.style.backgroundColor ="#888888";
		}
		
		function change22(){
			var p = document.getElementById("a2");
			p.style.backgroundColor = "#00408f";
			
		}

			function change3(){
			var p = document.getElementById("a3");
			p.style.backgroundColor ="#888888";
		}
		
		function change33(){
			var p = document.getElementById("a3");
			p.style.backgroundColor = "#00408f";
			
		}



//公司信息部分,变背景色
 function massagemove(){
 	var p = document.getElementById("massage_div1");
 	p.style.backgroundColor="#00408f";
 }
 
 function massageout(){
 	var p = document.getElementById("massage_div1");
 	p.style.backgroundColor="white";
 }

function massagemove2(){
	var p = document.getElementById("massage_div2");
	p.style.backgroundColor="#00408f";
}

function massageout2(){
	var p = document.getElementById("massage_div2");
	p.style.backgroundColor = "white";
}

//查看更多
function moremove(){
	var p = document.getElementById("view_a");
	p.style.backgroundColor = "#1ab1e1";
}
function moreout(){
	var p = document.getElementById("view_a");
	p.style.backgroundColor = "white";
}


//function xw(){
//	var a = document.getElementById("news_text1");
//	a.style.animation="gundong1 5s";
//	a.style.display="none";
//	var b = document.getElementById("news_text2");
//	b.style.animation="gundong2 5s";
//	b.style.display="block";
//}

//新闻动态点击滚动
function gd1(){
	var a = document.getElementById("news_text0");
	a.style.top="-100%";
		var c = document.getElementById("news_blue")
	var d = document.getElementById("news_blue2")
	c.style.width="151px";
	d.style.width="167px";
}

function gd2(){
	var a = document.getElementById("news_text0");
	a.style.top="0px";
	var c = document.getElementById("news_blue")
	var d = document.getElementById("news_blue2")
	c.style.width="167px";
	d.style.width="151px";
}


function you(){
	var a = document.getElementById("you_ul");
	a.style.display="block";
}

function youout(){
	var a = document.getElementById("you_ul");
	a.style.display="none";
}
