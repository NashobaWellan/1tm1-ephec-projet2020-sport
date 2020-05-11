"use strict"

/*
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
*/
function creerTableau1(rep, id){
	let ligne1 = '';
	for (let a of rep) {
		ligne1 += '<option value=' + a.id + '>' + a.sportif + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne1;
}

function modifier(){
	var selectBox1 = document.getElementById("modif");
    var selectedValue1 = selectBox1.options[selectBox1.selectedIndex].value;
	var selectBox2 = document.getElementById("newModif");
    var selectedValue2 = selectBox2.options[selectBox2.selectedIndex].value;
    console.log(selectedValue1);
	console.log(selectedValue2);
	let xhr = new XMLHttpRequest();
	// xhr.alterr;
	xhr.open('put', 'alterr?sportif=?' + selectedValue1 + '?sportifNew=' + selectedValue2, true);
	// EXEC SQL PUT tbjoueur FROM :joueurID, :Sportif;
	// PUT http[s]://<host:88>/[public/]odata/applications/{v1|latest}/{appid}/Connections(‘{registrationID}’)
    // xhr.open('put', 'alterr?sportif=&newSportif=', true); // préparer 
	
    xhr.onload = // callback : fonction anonyme
        function(){
            JSON.stringify(this.responseText);
			// //console.log(this.responseText);
         } 
    xhr.send();
}

