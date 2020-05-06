"use strict"

function initPage(){
	let xhr = new XMLHttpRequest();
	xhr.open('get', 'joueur', true); // préparer
	xhr.onload = // callback : fonction anonyme
	function(){
		creerTableau(JSON.parse(this.responseText), 'recap');
	};
	xhr.send() // envoyer
}

function creerTableau(rep, id){
	console.log(rep)
	let ligne = '';
	for (let e of rep) {
		ligne += '<tr>' +
		         '<td>' + e.sportif + '</td>' +
				 '<td>' + e.competition + '</td>' +
				 '<td>' + e.sport + '</td>' +
				 '<td>' + e.annee + '</td>' +
				 '</tr>' + '\n';
	}
	document.getElementById(id).innerHTML = ligne;
}