CREATE  PROCEDURE "DBA"."putAlterartion"(in sportif char, sportifNew char )
BEGIN 
  UPDATE dba.tbjoueur
     SET  joueur = sportifNew
     where tbjoueur.joueurId = sportif
END 

CREATE SERVICE "alterr" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'PUT' AS call "DBA"."putAlterartion"(:sportif, :sportifNew);

// CREATE PROCEDURE "DBA"."getFind"(in sportif char)
// BEGIN
  //  SELECT joueur
    //    FROM tbjoueur
      //  WHERE joueur LIKE '%a'
// END

// CREATE SERVICE "find" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call "DBA"."getFind"();
