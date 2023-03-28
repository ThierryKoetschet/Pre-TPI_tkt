-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           10.9.2-MariaDB - mariadb.org binary distribution
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour pre-tpi
CREATE DATABASE IF NOT EXISTS `pre-tpi` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `pre-tpi`;

-- Listage de la structure de table pre-tpi. categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Uniquecategory` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table pre-tpi.categories : ~4 rows (environ)
INSERT INTO `categories` (`id`, `name`) VALUES
	(4, 'Cuisine asiatique'),
	(5, 'Cuisine espagnole'),
	(1, 'Hamburger'),
	(3, 'Kebab'),
	(2, 'Pizza');

-- Listage de la structure de table pre-tpi. meals
CREATE TABLE IF NOT EXISTS `meals` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(4) NOT NULL DEFAULT '',
  `title` varchar(50) NOT NULL,
  `price` smallint(4) unsigned NOT NULL,
  `kcal/100g` smallint(5) unsigned NOT NULL DEFAULT 0,
  `carbohydrates/100g` smallint(3) unsigned NOT NULL,
  `lipids/100g` smallint(3) unsigned NOT NULL,
  `proteins/100g` smallint(3) unsigned NOT NULL,
  `ingredients` text DEFAULT NULL,
  `picture` varchar(20) DEFAULT NULL,
  `restaurants_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Uniquemeal` (`code`),
  KEY `fk_meals_restaurants1_idx` (`restaurants_id`),
  CONSTRAINT `fk_meals_restaurants1` FOREIGN KEY (`restaurants_id`) REFERENCES `restaurants` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table pre-tpi.meals : ~8 rows (environ)
INSERT INTO `meals` (`id`, `code`, `title`, `price`, `kcal/100g`, `carbohydrates/100g`, `lipids/100g`, `proteins/100g`, `ingredients`, `picture`, `restaurants_id`) VALUES
	(1, 'A001', 'Hamburger frites', 16, 250, 28, 9, 13, 'Farine, eau, viande hâchée de boeuf, salade, tomate, oeuf', NULL, 1),
	(2, 'A002', 'Cheeseburger frites', 17, 260, 28, 11, 14, 'Farine, eau, viande hâchée de boeuf, salade, tomate, oignon, fromage', NULL, 1),
	(3, 'B001', 'Pizza Hawaï', 19, 200, 24, 6, 9, '', NULL, 2),
	(4, 'B002', 'Calzone', 20, 224, 26, 8, 11, '', NULL, 2),
	(5, 'B003', 'Pizza vénitienne', 19, 218, 29, 6, 11, '', NULL, 2),
	(6, 'C001', 'Pizza Marguerite', 14, 238, 30, 8, 10, NULL, NULL, 3),
	(7, 'C002', 'Pizza Jambon', 17, 218, 29, 6, 11, NULL, NULL, 3),
	(8, 'C003', 'Pizza Végétarienne', 19, 220, 35, 8, 7, NULL, NULL, 3);

-- Listage de la structure de table pre-tpi. restaurants
CREATE TABLE IF NOT EXISTS `restaurants` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(45) NOT NULL,
  `zipcode` smallint(4) unsigned NOT NULL,
  `picture` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Uniquerestaurant` (`name`,`address`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table pre-tpi.restaurants : ~7 rows (environ)
INSERT INTO `restaurants` (`id`, `name`, `address`, `city`, `zipcode`, `picture`) VALUES
	(1, 'Café 12', 'Rue Neuve 1', 'Sainte-Croix', 1450, NULL),
	(2, 'Pub du Pont Sàrl', 'Pl. du Pont 3', 'Sainte-Croix', 1450, NULL),
	(3, 'Café Restaurant du Centre', 'Rue Neuve 4', 'Sainte-Croix', 1450, NULL),
	(4, 'Thaï Siri Take Away', 'Rue Neuve 8', 'Sainte-Croix', 1450, NULL),
	(5, 'Wok Cuisine Asiatique', 'Rue de la Charmille 1', 'Sainte-Croix', 1450, NULL),
	(6, 'Les Petites Roches', 'Chemin du Belvédère 11', 'Sainte-Croix', 1450, NULL),
	(7, 'Istanbul City Kebab', 'Rue du Collège 1', 'Sainte-Croix', 1450, NULL);

-- Listage de la structure de table pre-tpi. restaurants_has_categories
CREATE TABLE IF NOT EXISTS `restaurants_has_categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `restaurants_id` int(10) unsigned NOT NULL,
  `categories_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_restaurants_has_categories_categories1_idx` (`categories_id`),
  KEY `fk_restaurants_has_categories_restaurants_idx` (`restaurants_id`),
  CONSTRAINT `fk_restaurants_has_categories_categories1` FOREIGN KEY (`categories_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_restaurants_has_categories_restaurants` FOREIGN KEY (`restaurants_id`) REFERENCES `restaurants` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table pre-tpi.restaurants_has_categories : ~7 rows (environ)
INSERT INTO `restaurants_has_categories` (`id`, `restaurants_id`, `categories_id`) VALUES
	(1, 1, 1),
	(2, 2, 2),
	(3, 3, 2),
	(4, 4, 4),
	(5, 5, 4),
	(6, 6, 2),
	(7, 7, 3),
	(8, 7, 2);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
