CREATE PROCEDURE "DBA"."http_getJS"(in url char(255))
// renvoie le contenu du script js dont le nom (+ extension) est le paramètre url
BEGIN
-- 
  call sa_set_http_header('Content-Type', 'application/javascript'); // header http
    Call sa_set_http_header('Access-Control-Allow-Origin', '*'); // pas nécessaire si appels depuis le serveur - dangereux en production
	select xp_read_file(dba.getPath() || 'js\' || url);                // renvoyer fichier javascript
--
END;
COMMENT ON PROCEDURE "DBA"."http_getJS" IS 'C:\Users\mikae\Documents\Projet6\js';

--