# MyTest

function loadXXMLDoc(){
	var XMLhttp;
	if(window.XMLHttpRequest){
		XMLhttp = new XMLHttpRequest();
	}
	else{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function(){
		if(xmlhttp.readyState==4 && xmlhttp.Status==200){
			document.getElementById("").innerHTML==xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","/try/ajax/gethint.php?q="+str,true);
	xmlhttp.send();
}