-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ordersdb` CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ordersdb` ;

DROP TABLE IF EXISTS `ordersdb`.`order_products`;
DROP TABLE IF EXISTS `ordersdb`.`orders`;
DROP TABLE IF EXISTS `ordersdb`.`products`;
DROP TABLE IF EXISTS `ordersdb`.`customers`;
DROP TABLE IF EXISTS `ordersdb`.`order_statuses`;
DROP TABLE IF EXISTS `ordersdb`.`sessions`;
DROP TABLE IF EXISTS `ordersdb`.`users`;

-- -----------------------------------------------------
-- Table `ordersdb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ordersdb`.`users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `username` varchar(40),
  `about` varchar(255),
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`));

-- -----------------------------------------------------
-- Table `ordersdb`.`sessions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ordersdb`.`sessions` (
  `session_id` varchar(128) NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text,
  PRIMARY KEY (`session_id`));

-- -----------------------------------------------------
-- Table `ordersdb`.`order_statuses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ordersdb`.`order_statuses` (
  `id` INT NOT NULL,
  `status` VARCHAR(12) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));
  
-- -----------------------------------------------------
-- Table `ordersdb`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ordersdb`.`customers` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(40) NOT NULL,
    `middle_name` VARCHAR(40),
    `last_name` VARCHAR(40) NOT NULL,
    `phone` VARCHAR(10) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `notes` VARCHAR(255),
    `address_line1` VARCHAR(255) NOT NULL,
    `address_line2` VARCHAR(255),
    `city` VARCHAR(90) NOT NULL,
    `state` VARCHAR(25) NOT NULL,
    `zip` VARCHAR(12) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY (`email`));
    
-- -----------------------------------------------------
-- Table `ordersdb`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ordersdb`.`products` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `SKU` VARCHAR(20) NOT NULL,
    `unit_price` DECIMAL(30, 2) NOT NULL,
    `name` VARCHAR(40) NOT NULL,
    `quantity` INT NOT NULL CHECK (`quantity` >= 0),
    `description` VARCHAR(255),
    PRIMARY KEY (`id`));
    
-- -----------------------------------------------------
-- Table `ordersdb`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ordersdb`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `order_status_id` INT NOT NULL, 
  `datetime_order_placed` DATETIME NOT NULL,
  `total_order_price` DECIMAL(30, 2) NOT NULL,
  `notes` VARCHAR(255),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`customer_id`) REFERENCES customers(`id`),
  FOREIGN KEY (`order_status_id`) REFERENCES order_statuses(`id`));
  
-- -----------------------------------------------------
-- Table `ordersdb`.`order_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ordersdb`.`order_products` (
  `order_products_id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `product_quantity` INT NOT NULL CHECK (`product_quantity` >= 0),
  PRIMARY KEY (`order_products_id`),
  FOREIGN KEY (`order_id`) REFERENCES orders(`id`),
  FOREIGN KEY (`product_id`) REFERENCES products(`id`));

/**
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
**/

-- -----------------------------------------------------
-- Seeding the database
-- -----------------------------------------------------
INSERT INTO order_statuses VALUES
    (100, "Draft", "Order that has not been activated and can be edited at any time."),
    (200, "Pending", "Order that has been finalized and preparing to be shipped, can be edited before shipment."),
    (201, "Shipped", "Order has been shipped and on its way to customer, can no longer be edited."),
    (202, "Delivered", "Order has arrived to the customer."),
    (300, "Closed", "Order has been closed with Admin approval and marked as complete.");

INSERT INTO customers(first_name, middle_name, last_name, phone, email, notes, address_line1, address_line2, city, state, zip) VALUES 
    ('Bobby', 'De', 'Builder', '5553023857', 'bobdbuilder@email.com', 'Leave with tools.', '52 Builder Street', '3', 'Bobsville', 'CA', '90011'),
    ('Dora', 'D', 'Explora', '5553948273', 'doradexplora@email.com', 'Leave with backpack.', '34 Explorer Road', '9', 'Phoenix', 'AZ', '85001'),
    ('Go', 'Diego', 'Gau', '5552834837', 'diego@email.com', 'Leave with Dora.', '35 Explorer Road', '8', 'Phoenix', 'AZ', '85001'),
    ('Sponge', 'D', 'Bob', '5552846079', 'spongeybobby@email.com', 'No special instructions', '90 Bikini Bottom', '', 'Watertown', 'MA', '02135'),
    ('Squidward', 'Ten', 'Tickles', '5550793842', 'barnacles@email.com', 'Keep away from Sponge.', '89 Bikini Bottom', '', 'Watertown', 'MA', '02135'),
    ('Patrick', '', 'Star', '5559879384', 'thisispatrick@email.com', 'No special instructions', '88 Bikini Bottom', '', 'Watertown', 'MA', '02135'),
    ('Erik', 'Codemaster', 'Gross', '5556832736', 'erik@email.com', 'Leave a nerd joke.', '103 Main Street', '', 'Portland', 'OR', '92739');

INSERT INTO products(SKU, unit_price, name, quantity, description) VALUES
    ('HOU-HA-BLA-00', 11.99, 'Black Hammer', 99, 'Tool for building whatever you need with nails!'),
    ('HOU-HA-YEL-00', 11.99, 'Yellow Hammer', 99, 'Tool for building whatever you need with nails!'),
    ('HOU-WR-BLA-01', 19.99, 'Black Wrench', 99, 'Tighten your bolts  with this amazing tool!'),
    ('HOU-WR-BLU-01', 19.99, 'Blue Wrench', 99, 'Tighten your bolts  with this amazing tool!'),
    ('SPA-MA-NUL-02', 0.99, 'Explorer Map', 2, 'Find your way around the world.'),
    ('BIK-SP-BLA-03', 9.99, 'Black Spatula', 1, 'Perfect for flipping patties.'),
    ('BIK-AL-NUL-04', 4.99, 'Alarm Clock', 999, 'Wake up on time!');

INSERT INTO orders(customer_id, order_status_id, datetime_order_placed, total_order_price, notes) VALUES
    (1, 300, NOW(), 31.98, 'Order successful'),
    (4, 300, NOW(), 9.98, 'Order successful'),
    (4, 300, NOW(), 9.99, 'Order successful'),
    (5, 300, NOW(), 1247.50, 'Order successful');

INSERT INTO order_products(order_id, product_id, product_quantity) VALUES
    (1, 2, 1),
    (1, 3, 1),
    (2, 6, 1),
    (3, 7, 250);
    
INSERT INTO users(first_name, last_name, username, about, email, password, last_login, status, createdAt, updatedAt) VALUES
    ('wajih',
    'khawaja',
    NULL,
    NULL,
    'waj@gmail.com',
    '$2a$08$kkc7S2S3dJXS4IcrU8I5E.NJjUjxmg9LR78gFEaKR5Fu2iTIv5mda',
    NULL,
    'active',
    '2021-03-16 20:44:46',
    '2021-03-16 20:44:46'),
    ('wajih',
    'khawaja',
    NULL,
    NULL,
    'test@test.com',
    '$2a$08$OCW/iGtXjDWe8Ku/PGCjm.sBaQkWSkl.l9lUN681jelHkb9ey59ka',
    NULL,
    'active',
    '2021-03-16 20:52:18',
    '2021-03-16 20:52:18');