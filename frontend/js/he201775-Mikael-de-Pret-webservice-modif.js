function showHint(str) {
	var selectedValue = selectBox.text[selectBox.selectedIndex].value;
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET", "Find?sportif=" + str, true);
    xmlhttp.send();
  }
}


function modifier(){
	var selectBox = document.getElementById("modif");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    console.log(selectedValue);
	let xhr = new XMLHttpRequest();
	xhr.alterr;
    xhr.open('put', 'alterr?sportif=', true); // préparer 
    xhr.onload = // callback : fonction anonyme
        function(){
            tableau(JSON.stringify(this.responseText));
			//console.log(this.responseText);
        } 
    xhr.send();
}