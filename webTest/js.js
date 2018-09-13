window.onload = displayAbbr;
/*window.onload = function(){
var canvas = document.getElementById("canvas");
var text = canvas.getContext("2d");
text.beginPath();
text.arc(250,150,140,0,2*Math.PI);
text.strokeStyle = "red";
text.stroke();
}*/
function displayAbbr(){
	if(!document.getElementsByTagName || !document.createElement || 
		!document.createTextNode) return false;
	//取得所有的缩略词
	var abbrvation = document.getElementsByTagName("abbr");
	if(abbrvation.length<1){
		return false;
	}
	var	defs = new Array();
	//遍历这些缩略词
	for(var i=0;abbrvation.length>i;i++){
		var definition = abbrvation[i].getAttribute("title");
		var key = abbrvation[i].lastChild.nodeValue;
		defs[key] = definition;
	}
	//创建dl表格插入数据
	var dlist = document.createElement("dl");
	for(key in defs){
		var definition = defs[key];
		var dtitle = document.createElement('dt');
		var dtitle_Text = document.createTextNode(key);
		dtitle.appendChild(dtitle_Text);
		var ddseec = document.createElement("dd");
		var ddseec_Text = document.createTextNode(definition);
		ddseec.appendChild(ddseec_Text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddseec);
	}
	//插入至body标签
	var header = document.createElement('h2');
	var header_Text = document.createTextNode("Abbrvation");
	header.appendChild(header_Text);
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}