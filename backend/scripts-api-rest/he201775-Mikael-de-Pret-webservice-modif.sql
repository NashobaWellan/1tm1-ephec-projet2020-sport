ALTER PROCEDURE "DBA"."putAlterartion"(in sportif int, sportifNew char(30), sportt int, sportNew char(30))
BEGIN 
/*
	UPDATE dba.tbjoueur, dba.tbsport
     SET  joueur = sportifNew, sport = sportNew
     WHERE  tbjoueur.joueurId = sportif AND (tbsport.sportId = sport)
   */ 

    UPDATE dba.tbsport
     SET sport = sportNew
    WHERE tbsport.sportId = sportt 
END

CREATE SERVICE "alterr" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'PUT' AS call "DBA"."putAlterartion"(:sportif, :sportifNew);

// CREATE PROCEDURE "DBA"."getFind"(in sportif char)
// BEGIN
  //  SELECT joueur
    //    FROM tbjoueur
      //  WHERE joueur LIKE '%a'
// END

// CREATE SERVICE "find" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call "DBA"."getFind"();
