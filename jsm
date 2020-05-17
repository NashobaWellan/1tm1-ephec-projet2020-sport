"use strict"

//Projet Database
//------------------
// 1TM1 / de Pret / Mikaël / HE201775
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
		ligne1 += '<option value=' + a.id + '>' + a.id + ' ' + a.sportif + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne1;
}



function creerTableau2(rep, id){
	let ligne2 = '';
	for (let b of rep) {
		ligne2 += '<option value=' + b.id + '>' + b.sportt + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne2;
}


function creerTableau3(rep, id){
	let ligne3 = '';
	for (let a of rep) {
		ligne3 += '<option value=' + a.id + '>' + a.id + ' ' + a.sportifPrenom + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne3;
}

function creerTableau4(rep, id){
	let ligne4 = '';
	for (let a of rep) {
		ligne4 += '<option value=' + a.id + '>' + a.tournoii + '</option>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne4;
}

function modifier(){
	var selectBox1 = document.getElementById("modifN");
    var selectedValue1 = selectBox1.options[selectBox1.selectedIndex].value;
	var selectBox3 = document.getElementById("modifP");
	var selectedValue3 = selectBox3.options[selectBox3.selectedIndex].value;
	var selectBox2 = document.getElementById("newModifN");
	var selectBox21 = document.getElementById("newModifP");
	/*var selectBox5 = document.getElementById("sporttt");
	var selectedValue5 = selectBox5.options[selectBox5.selectedIndex].value;
	var selectBox4 = document.getElementById("newSport");*/
	/*var selectBox8 = document.getElementById("tournoiii");
	var selectedValue8 = selectBox8.options[selectBox8.selectedIndex].value;
	var selectBox9 = document.getElementById("newTournoi");*/

   /* console.log(selectedValue1);
	console.log(selectedValue3);*/
	/*console.log(selectedValue5);*/
	/*console.log(selectedValue8)*/



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
/*
function modifier1(){
	var selectBox5 = document.getElementById("sporttt");
	var selectedValue5 = selectBox5.options[selectBox5.selectedIndex].value;
	var selectBox4 = document.getElementById("newSport");


	console.log(selectedValue5);


	let xhr = new XMLHttpRequest();
	// xhr.alterr;
	xhr.open('get', 'alterr2?sportttt=' + selectedValue5 + '&sportNew=' + selectBox4.value, true);


	xhr.onload = // callback : fonction anonyme
		function(){
			var donnee = JSON.stringify(this.responseText);
			//console.log(this.responseText);
		}
	xhr.send();

}
*/
/*

function modifier1(){
	var selectBox8 = document.getElementById("tournoiii");
	var selectedValue8 = selectBox8.options[selectBox8.selectedIndex].value;
	var selectBox9 = document.getElementById("newTournoi");

	console.log(selectedValue8);

	let xhr = new XMLHttpRequest();
	// xhr.alterr;
	xhr.open('get', 'alter2?tournoiiii' + selectedValue8 + '&tournoiNew' + selectBox9, true);


	xhr.onload = // callback : fonction anonyme
		function(){
			var donnee1 = JSON.stringify(this.responseText);
			//console.log(this.responseText);
		}
	xhr.send();

}
*/
/*
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
*/
