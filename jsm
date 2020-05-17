"use strict"

//Projet Database
//------------------
// 1TM1 / de Pret / Mikaël / HE201775

function creerTableau1(rep, id){
	let ligne1 = '';
	for (let a of rep) {
		ligne1 += '<option value=' + a.id + '>' + a.id + ' ' + a.sportif + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne1;
}



function creerTableau3(rep, id){
	let ligne3 = '';
	for (let a of rep) {
		ligne3 += '<option value=' + a.id + '>' + a.id + ' ' + a.sportifPrenom + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne3;
}

function modifier(){
	var selectBox1 = document.getElementById("modifN");
    var selectedValue1 = selectBox1.options[selectBox1.selectedIndex].value;
	var selectBox3 = document.getElementById("modifP");
	var selectedValue3 = selectBox3.options[selectBox3.selectedIndex].value;
	var selectBox2 = document.getElementById("newModifN");
	var selectBox21 = document.getElementById("newModifP");

	let xhr = new XMLHttpRequest();
	xhr.open('get', 'alterr?sportifN=' + selectedValue1 + '&sportifNewN=' + selectBox2.value +'&sportifP=' + selectedValue3 +'&sportifNewP=' + selectBox21.value, true);


    xhr.onload = // callback : fonction anonyme
        function(){
            var donnee = JSON.stringify(this.responseText);
		
         } 
    xhr.send();

}



function valide() {
	let test = newModifN.value;
	let okf = "";
	if(!test) {
		document.getElementById("ok").innerHTML = "Il n'y a eu aucun changement"
	}
	else{
		okf += "<span>" + "le joueur selectionné à bien été modifié en " + test + "</span>"
		document.getElementById("ok").innerHTML = okf
	}
}

