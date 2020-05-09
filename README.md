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

Ce service sera écrit par De Weerd Nicolas  
Un webservice pour récupérer les informations des tables  
il sera en JSON/AJAX

Ce service sera écrit par Afonso Beatriz Rodrigo  
Un webservice pour réinitialiser la recherche  
il sera en JSON

Ce service sera écrit par de Pret Roose de Calesberg Mikaël  
Un webservice permettant au utilisateur de modifier la page web  
il sera en JSON
