CREATE PROCEDURE "DBA"."alterartion"(in sportif char, sportifNew char )
BEGIN
    declare @sportifid int;
    set @sportifid = (SELECT joueurId
        FROM tbjoueur
    where joueur = sportif);
	UPDATE dba.tbjoueur
     set joueur = sportifNew
     where joueurId = @sportifid;
END

CREATE SERVICE "joueur" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'PUT' AS call "DBA"."alterartion"();
