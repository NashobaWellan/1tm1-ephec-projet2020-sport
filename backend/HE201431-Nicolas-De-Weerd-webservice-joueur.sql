CREATE PROCEDURE "DBA"."getTutu"()
result (id char(255), annee char(4), competition char(30), sportif char(30), sport char(30))
BEGIN
	select tbannee.joueurId, annee, tournoi, joueur, sport
	from tbannee
	left join tbtournoi on tbannee.tournoiId = tbtournoi.tournoiId
	left join tbjoueur on tbannee.joueurId = tbjoueur.joueurId
 	left join tbsport on tbtournoi.sportId = tbsport.sportId
END;

CREATE PROCEDURE "DBA"."getTrouve"(in sportif int)

BEGIN 
	Select tbjoueur.joueur, tbtournoi.tournoi, tbsport.sport, annee
	from tbannee 
	join tbjoueur on tbannee.joueurId = tbjoueur.joueurId
	join tbtournoi on tbannee.tournoiId = tbtournoi.tournoiId
	join tbsport on tbtournoi.sportId = tbsport.sportId
	where tbannee.joueurId = sportif
	order by annee
END;


CREATE SERVICE "joueur" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call "dba"."getTutu"();

CREATE SERVICE "getTrouveSportif" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call getTrouve(in sportif int);