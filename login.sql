#1:创建库 login
DROP DATABASE IF EXISTS login;
CREATE DATABASE login CHARSET=UTF8;
#2:进入  login
USE login;

CREATE TABLE user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(20) NOT NULL DEFAULT '',
	upwd VARCHAR(32) NOT NULL DEFAULT '' 
);

#3.添加三条记录
#SET NAMES GBK;
INSERT INTO user VALUES(null,'tom','1234');
INSERT INTO user VALUES(null,'mao','1234');
INSERT INTO user VALUES(null,'mike','1234');