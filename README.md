# 1tm1-ephec-projet2020-sport 
# Présentation de l’équipe
- De Roy Maxime 
- De Weerd Nicolas
- Afonso Beatriz Rodrigo
- de Pret Roose de Calesberg Mikaël
# Description du projet
Site référençant les vainqueurs ayant gagner les tournois du grand chelem sur les 3 dernières années.  
Cette application permettra de connaître rapidement qui sont les vainqueurs des tournois majeurs et en quelles années. Les utilisateurs pourront aussi cliquer sur des liens qui leur permettront d’avoir plus d’informations sur les joueurs ou tournois et sur le site même il y aura une petite description avec éventuellement une photo du joueur ou un logo du tournois.  
De plus nous laisseront une possibilité de rajouter d’autres sport, pour le moment il n’y aura qu’un seul sport disponible.




# Aspect implémentés
 ## Frontend

Faire un formulaire en Html pour pouvoir enregistrer de nouvelles données qui sera mis en forme par un fichier CSS.  
Dans le JS il y a aura plusieurs fonctionnalités, comme le fait que l’utilisateur pourra rechercher un joueur, un tournois ou une date. En cliquant sur les noms il pourra aussi accédé à une page internet reprenant plus d’informations concernant sa recherche.  
Il pourra aussi choisir de trier par ordre croissant ou décroissant (date, tournois, vainqueurs).  
Mettre aussi des liens permettant d’avoir des infos supplémentaires en survolant le joueur ou le tournois.  

## Backend
	
Faire une base de données reprenant toute les informations (nom des joueurs, tournois, dates) cela relié avec des tables d'adressages.  
Il y aura 4 webservices crée par chacun des membres du groupe.  
Les procédures SQL permettent de faire un premier trie.  

# détail api rest
Ce service sera écrit par De Roy Maxime  
Un webservice pour enregistrer de nouvelles données  
il sera en JSON

## Webservice de De Weerd Nicolas
Le premier webservice nommer "joueur" permet via une procédure nommée "getMontreJoueur()"
d'appeler la liste des joueurs en Json en faisant un select dans la table "joueur" 
pour appeler les joueurId, joueurNom et joueurPrénom
ensuite via un "js" où on appele au démarage de la page une fonction "initPage()"
qui va chercher la page avec les données en Json et qui va jouer une fonction anonyme,
dans cette fonction anonyme on appele une fonction "creerListe(rep, id) avec en paramètres
un "JSON.parse" et l'Id de la "selection".
Dans la fonction "creerListe" on déclare une variable "ligne" qui ne contient rien,
ensuite on initie une boucle qui va aller regarder toute les données du array
et à chaque fois que la boucle se joue elle va aller écrire dans la variable "ligne" le code HTML
de la selection en donnant une valeur qui est l'Id du joueur et ses informations
puis via écrire là ou se trouve l'id selctionner les options de la liste.


Le deuxième webservice "getTrouveSportif" permet via la procédure "getTrouve(:sportif)"
de donner les informations des joueurs via l'Id obtenu de la liste déroulante.
Dans la procédure "getTrouve(:sportif)" on va faire un "select" qui va aller chercher
le tournoi de la table tournoi, le sport de la table sport et l'annee de la table annee
via des "join" et un "where" pour donner l'id du joueur et on fini par un tri des annee
avec un "order".
Via à un "onchange" sur la liste j'appele un fonction nommé "trouveSportif()"
cette fonction va creer une variable "selectBox" qui va aller chercher l'id "selection"
ensuite on créer une variable "SelectedValue" qui va aller chercher la valeur qui se trouve dans "option"
via la variable "selectedBox".
Ensuite on appele via un XHR le webservice auquelle on rajoute la valeur pour appeler le tableau relatif au joueur.
Puis dans une fonction anonyme on appele la fonction "tableau(data)" avec comme paramètre un "JSON.parse"
Cette fonction "tableau" initie une variable cellule qui est vide,
puis on fait une boucle qui va aller lire le array et rajouter dans cellule les lignes pour le tableau avec les données du joueur. 

Ce service sera écrit par Afonso Beatriz Rodrigo  
Un webservice pour réinitialiser la recherche  
il sera en JSON

Ce service sera écrit par de Pret Roose de Calesberg Mikaël  
Un webservice permettant au utilisateur de modifier la page web  
il sera en JSON/AJAX

# Diagramme ER

![alt text](https://github.com/de-Pret-Mikael/1tm1-ephec-projet2020-sport/blob/master/frontend/img/table.PNG) 
