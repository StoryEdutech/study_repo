CREATE TABLE `todoList` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task` longtext NOT NULL,
  `isCompleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=280 DEFAULT CHARSET=utf8
