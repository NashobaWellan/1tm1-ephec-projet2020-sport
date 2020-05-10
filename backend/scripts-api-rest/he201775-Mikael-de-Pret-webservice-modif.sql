CREATE PROCEDURE "DBA"."alterartion"(in sportif char, sportifNew char )
BEGIN
    DECLARE @sportifid int;
    SET @sportifid = (SELECT joueurId
        FROM tbjoueur
    WHERE joueur = sportif);
	UPDATE dba.tbjoueur
     SET joueur = sportifNew
     WHERE joueurId = @sportifid;
END

CREATE SERVICE "alterr" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'PUT' AS call "DBA"."alterartion"();

CREATE PROCEDURE "DBA"."getFind"(in sportif char)
BEGIN
    SELECT joueur
        FROM tbjoueur
        WHERE joueur LIKE '%a'
END

CREATE SERVICE "find" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'GET' AS call "DBA"."getFind"();
