CREATE PROCEDURE "DBA"."getMontreSportif"()
result (id char(255),sportif char(50), sportifPrenom char(30))
BEGIN
 	select joueurId, joueurNom, joueurPrenom
 	from tbjoueur
END;

CREATE PROCEDURE "DBA"."getTrouve"(in sportif int)

BEGIN 
	Select tbjoueur.joueurNom, tbtournoi.tournoi, tbsport.sport, annee
	from tbparticipation 
	join tbjoueur on tbparticipation.joueurId = tbjoueur.joueurId
	join tbtournoi on tbparticipation.tournoiId = tbtournoi.tournoiId
	join tbsport on tbtournoi.sportId = tbsport.sportId
	where tbpartiipation.joueurId = sportif
	order by annee
END;


CREATE SERVICE "joueur" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call "dba"."getMontreSportif"();

CREATE SERVICE "getTrouveSportif" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call".dba"."getTrouve"(:sportif);
