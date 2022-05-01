CREATE TABLE IF NOT EXISTS `` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `uid` INT(11) NOT NULL,
  `service` VARCHAR(255),
  `type` VARCHAR(255) DEFAULT "once",
  `status` VARCHAR(255) DEFAULT "active",
  `on_time` DATETIME,
  `close_day` INT(11) DEFAULT 1,
   PRIMARY KEY(`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- mysql -u root -p todo_list < todo_list.sql
