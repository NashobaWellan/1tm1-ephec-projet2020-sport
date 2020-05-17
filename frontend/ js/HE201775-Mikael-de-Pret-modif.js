"use strict"

//Projet Database
//------------------
// 1TM1 / de Pret / Mikaël / HE201775

function creerTableau1(rep, id){
	let ligne1 = '';
	for (let a of rep) {
		ligne1 += '<option value=' + a.id + '>' + a.sportif + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne1;
}

function creerTableau3(rep, id){
	let ligne3 = '';
	for (let a of rep) {
		ligne3 += '<option value=' + a.id + '>' + a.sportifPrenom + '</option>' + '\n';
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
	xhr.open('get', 'alterr?sportifN=' + selectedValue1 + '&sportifNewN=' + selectBox2.value +'&sportifP=' + selectedValue3 +'&sportifNewP=' + selectBox21.value /*+ '&sportttt=' + selectedValue5 + '&sportNew=' + selectBox4.value *//*+ '&tournoiiii' + selectedValue8 + '&tournoiNew' + selectBox9*/, true);


    xhr.onload = // callback : fonction anonyme
        function(){
            var donnee = JSON.stringify(this.responseText);
			//console.log(this.responseText);
         } 
    xhr.send();

}

function valide() {
	var nom = newModifN.value;
	var prenom = newModifP.value;
	let okf = "";
	if(!nom || !prenom) {
		document.getElementById("pok").innerHTML = "veuiller remplir tous les champs"
	}

	else {
		okf += '<span>' + 'le nom du joueur selectionné à bien été modifié en ' + nom + '</span> \n'
		document.getElementById("ok").innerHTML = okf
		okf += '<span>' + ' le prenom du joueur selectionné à bien été modifié en ' + prenom + '</span>'
		document.getElementById("ok").innerHTML = okf

	}
}

function synchro(y){
	y.form.modifN.selectedIndex = y.selectedIndex;
	y.form.modifP.selectedIndex  = y.selectedIndex;
}


