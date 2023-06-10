
/*---------------------------*/

USE next_js_crud;
-- SET SQL_SAFE_UPDATES = 0;


/*---------------------------*/

CREATE TABLE User (
  id int(11) NOT NULL AUTO_INCREMENT,
  username varchar(250) NOT NULL,
  email varchar(250) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


TRUNCATE TABLE User;
DELETE FROM User;
INSERT INTO User (username, email)  VALUES ('User 1', 'user.01@gmail.com');
INSERT INTO User (username, email)  VALUES ('User 2', 'user.02@gmail.com');
INSERT INTO User (username, email)  VALUES ('User 3', 'user.03@gmail.com');

DROP PROCEDURE IF EXISTS insertRowsTostudent_data;
DELIMITER //  
CREATE PROCEDURE insertRowsTostudent_data()   
BEGIN
DECLARE i INT DEFAULT 1; 
TRUNCATE TABLE User;
WHILE (i <= 1000) DO
    INSERT INTO User (username, email)  VALUES (CONCAT('User', i), CONCAT(CONCAT('user.', i), '@gmail.com'));
    SET i = i+1;
END WHILE;
END;
//  
DELIMITER ;

CALL insertRowsTostudent_data();

 SELECT count(1) FROM User;
 SELECT * FROM User LIMIT 10;
 
/*---------------------------*/



CREATE TABLE produtos (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(250) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


TRUNCATE TABLE produtos;
DELETE FROM produtos;
INSERT INTO produtos (nome)  VALUES ('Produto 1');
INSERT INTO produtos (nome)  VALUES ('Produto 2');
INSERT INTO produtos (nome)  VALUES ('Produto 3');

 
 SELECT * FROM produtos;
 
/*---------------------------*/

CREATE TABLE tabela (
  id int(11) NOT NULL AUTO_INCREMENT,
  `IDUSUARIO` int(11) DEFAULT NULL,
  `DTHRREGISTRO` varchar(14) NOT NULL,
  `DTENVIO` varchar(8) NOT NULL,
  `TIPO` varchar(20) NOT NULL,
  `MENSAGEM` text,
  `QTD_PROC` int(11) DEFAULT NULL,
  `SITUACAO_TELEGRAM` varchar(1) NOT NULL,
  `SITUACAO_EMAIL` varchar(1) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKALERTA_TO_SIT_T` (`SITUACAO_TELEGRAM`),
  KEY `FKALERTA_TO_SIT_E` (`SITUACAO_EMAIL`),
  KEY `FKALERTA_TO_TIPO` (`TIPO`),
  KEY `FKALERTA_TO_USUARIO` (`IDUSUARIO`),
  CONSTRAINT `FKALERTA_TO_TIPO` FOREIGN KEY (`TIPO`) REFERENCES `TBALERTA_TP` (`CODIGO`),
  CONSTRAINT `FKALERTA_TO_USUARIO` FOREIGN KEY (`IDUSUARIO`) REFERENCES `TBUSUARIO` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;




