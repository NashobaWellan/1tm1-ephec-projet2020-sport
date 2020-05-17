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
	// xhr.alterr;
	xhr.open('get', 'alterr?sportifN=' + selectedValue1 + '&sportifNewN=' + selectBox2.value, true);

	
    xhr.onload = // callback : fonction anonyme
        function(){
            var donnee = JSON.stringify(this.responseText);
			//console.log(this.responseText);
         } 
    xhr.send();

}

function valide() {
	let nom = newModifN.value;
	let prenom = newModifP.value;
	let okf = "";
	if(!nom) {
		document.getElementById("!ok").innerHTML = " et Il n'y a eu aucun changement pour le nom "
	}
	else {
		okf += '<span>' + 'le nom du joueur selectionné à bien été modifié en ' + nom + '</span>'
		document.getElementById("ok").innerHTML = okf
	}
	if(!prenom) {
		document.getElementById("!ok").innerHTML = " et Il n'y a eu aucun changement pour le prenom "
	}
	else{
		okf += '<span>' + ' le prenom du joueur selectionné à bien été modifié en ' + prenom + '</span>'
		document.getElementById("ok").innerHTML = okf
	}
}

