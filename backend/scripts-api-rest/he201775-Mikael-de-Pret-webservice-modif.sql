CREATE PROCEDURE "DBA"."putAlterartion"(in sportifN int, sportifNewN char(30), sportifP int, sportifNewP char (30))
BEGIN 

	UPDATE dba.tbjoueur
     SET  joueurNom = sportifNewN, joueurPrenom = sportifNewP
     WHERE  tbjoueur.joueurId = sportifN AND tbjoueur.joueurId = sportifP

END

CREATE SERVICE "alterr" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" METHODS 'PUT' AS call "DBA"."putAlterartion"(:sportifN,:sportifNewN,:sportifP,:sportifNewP);

