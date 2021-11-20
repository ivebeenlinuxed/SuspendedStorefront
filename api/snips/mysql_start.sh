CREATE USER 'dev_user'@'%' IDENTIFIED BY 'dev_pass';
CREATE DATABASE mtc_db;
USE mtc_db;
GRANT ALL PRIVILEGES ON mtc_db.* TO 'dev_user'@'%';