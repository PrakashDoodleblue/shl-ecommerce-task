-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jan 09, 2021 at 04:24 PM
-- Server version: 5.7.32-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `SHL_ECOMMERCE`
--

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '20201231095838_category.js', 1, '2021-01-01 08:10:55'),
(2, '20201231173910_promocode.js', 1, '2021-01-01 08:10:55'),
(3, '20201231183231_logs.js', 1, '2021-01-01 08:10:55'),
(4, '20210101132636_itemlist.js', 1, '2021-01-01 08:10:56'),
(5, '20210101132850_productprice.js', 1, '2021-01-01 08:10:56'),
(6, '20210101132851_productitems.js', 1, '2021-01-01 08:10:57'),
(7, '20210101132852_cart.js', 2, '2021-01-01 08:17:25');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `SHLC01_CATEGORY`
--

CREATE TABLE `SHLC01_CATEGORY` (
  `categoryId` int(10) UNSIGNED NOT NULL,
  `categoryName` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SHLC01_CATEGORY`
--

INSERT INTO `SHLC01_CATEGORY` (`categoryId`, `categoryName`, `status`, `created_at`, `updated_at`) VALUES
(1, 'CATEGORY-A', 1, '2021-01-01 08:17:54', '2021-01-01 08:17:54'),
(2, 'CATEGORY-B', 1, '2021-01-01 08:17:59', '2021-01-01 08:17:59'),
(3, 'CATEGORY-C', 1, '2021-01-01 08:18:05', '2021-01-01 08:18:05'),
(4, 'CATEGORY-D', 1, '2021-01-01 08:18:09', '2021-01-01 08:18:09'),
(5, 'CATEGORY-E', 1, '2021-01-01 08:18:15', '2021-01-01 08:18:15');

-- --------------------------------------------------------

--
-- Table structure for table `SHLC02_ITEMLIST`
--

CREATE TABLE `SHLC02_ITEMLIST` (
  `itemId` int(10) UNSIGNED NOT NULL,
  `itemName` varchar(255) DEFAULT NULL,
  `itemImage` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SHLC02_ITEMLIST`
--

INSERT INTO `SHLC02_ITEMLIST` (`itemId`, `itemName`, `itemImage`, `status`, `created_at`, `updated_at`) VALUES
(1, 'ITEM A', 'public/uploads/Images/productItems/itemImage_1609494742299_elephant.jpeg', 1, '2021-01-01 09:52:22', '2021-01-01 09:52:22'),
(2, 'ITEM B', 'public/uploads/Images/productItems/itemImage_1609494772242_horsetoys.jpeg', 1, '2021-01-01 09:52:52', '2021-01-01 09:52:52'),
(3, 'ITEM C', 'public/uploads/Images/productItems/itemImage_1609494800721_dress.jpeg', 1, '2021-01-01 09:53:20', '2021-01-01 09:53:20'),
(4, 'ITEM D', 'public/uploads/Images/productItems/itemImage_1609494742299_joy_toys.jpeg', 1, '2021-01-01 09:52:52', '2021-01-01 09:52:52');

-- --------------------------------------------------------

--
-- Table structure for table `SHLC03_PRODUCTPRICE`
--

CREATE TABLE `SHLC03_PRODUCTPRICE` (
  `priceId` int(10) UNSIGNED NOT NULL,
  `productCategoryId` int(10) UNSIGNED NOT NULL,
  `ItemlistId` int(10) UNSIGNED NOT NULL,
  `price` double(6,2) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SHLC03_PRODUCTPRICE`
--

INSERT INTO `SHLC03_PRODUCTPRICE` (`priceId`, `productCategoryId`, `ItemlistId`, `price`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 30.00, 1, '2021-01-01 10:48:44', '2021-01-01 10:48:44'),
(2, 2, 2, 20.00, 1, '2021-01-01 10:49:08', '2021-01-01 10:49:08'),
(3, 3, 3, 50.00, 1, '2021-01-01 10:49:21', '2021-01-01 10:49:21'),
(4, 4, 4, 15.00, 1, '2021-01-01 10:49:21', '2021-01-01 10:49:21');

-- --------------------------------------------------------

--
-- Table structure for table `SHLC04_CART`
--

CREATE TABLE `SHLC04_CART` (
  `cartId` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `productItemsId` int(10) UNSIGNED NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` double(6,2) DEFAULT NULL,
  `discountprice` double(6,2) DEFAULT NULL,
  `shipping` double(6,2) NOT NULL,
  `tax` double(6,2) NOT NULL,
  `totalPrice` double(6,2) DEFAULT NULL,
  `purchasedon` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `SHLC05_PROMOCODE`
--

CREATE TABLE `SHLC05_PROMOCODE` (
  `promocodeId` int(10) UNSIGNED NOT NULL,
  `promocode` varchar(255) DEFAULT NULL,
  `discountpercentage` varchar(255) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `SHLC06_PRODUCTITEM`
--

CREATE TABLE `SHLC06_PRODUCTITEM` (
  `prodcutItemId` int(10) UNSIGNED NOT NULL,
  `itemcode` varchar(255) DEFAULT NULL,
  `productCategoryId` int(10) UNSIGNED NOT NULL,
  `prodcutItemListId` int(10) UNSIGNED NOT NULL,
  `productpriceId` int(10) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `Itemprice` double(6,2) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SHLC06_PRODUCTITEM`
--

INSERT INTO `SHLC06_PRODUCTITEM` (`prodcutItemId`, `itemcode`, `productCategoryId`, `prodcutItemListId`, `productpriceId`, `quantity`, `Itemprice`, `status`, `created_at`, `updated_at`) VALUES
(1, 'SHLPR1336627198373', 1, 1, 1, 3, 30.00, 1, '2021-01-09 10:05:28', '2021-01-09 10:05:28'),
(2, 'SHLPR1287928717551', 2, 2, 2, 1, 20.00, 1, '2021-01-09 10:09:05', '2021-01-09 10:09:05');

-- --------------------------------------------------------

--
-- Table structure for table `SHLC07_ACTIVITY_LOGS`
--

CREATE TABLE `SHLC07_ACTIVITY_LOGS` (
  `logId` int(10) UNSIGNED NOT NULL,
  `ActivityName` varchar(255) DEFAULT NULL,
  `ActivityTableName` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `SHLC01_CATEGORY`
--
ALTER TABLE `SHLC01_CATEGORY`
  ADD PRIMARY KEY (`categoryId`),
  ADD UNIQUE KEY `shlc01_category_categoryname_unique` (`categoryName`);

--
-- Indexes for table `SHLC02_ITEMLIST`
--
ALTER TABLE `SHLC02_ITEMLIST`
  ADD PRIMARY KEY (`itemId`),
  ADD UNIQUE KEY `shlc02_itemlist_itemname_unique` (`itemName`);

--
-- Indexes for table `SHLC03_PRODUCTPRICE`
--
ALTER TABLE `SHLC03_PRODUCTPRICE`
  ADD PRIMARY KEY (`priceId`),
  ADD KEY `shlc03_productprice_productcategoryid_index` (`productCategoryId`),
  ADD KEY `shlc03_productprice_itemlistid_index` (`ItemlistId`);

--
-- Indexes for table `SHLC04_CART`
--
ALTER TABLE `SHLC04_CART`
  ADD PRIMARY KEY (`cartId`),
  ADD KEY `shlc04_cart_productitemsid_index` (`productItemsId`);

--
-- Indexes for table `SHLC05_PROMOCODE`
--
ALTER TABLE `SHLC05_PROMOCODE`
  ADD PRIMARY KEY (`promocodeId`);

--
-- Indexes for table `SHLC06_PRODUCTITEM`
--
ALTER TABLE `SHLC06_PRODUCTITEM`
  ADD PRIMARY KEY (`prodcutItemId`),
  ADD UNIQUE KEY `shlc06_productitem_itemcode_unique` (`itemcode`),
  ADD KEY `shlc06_productitem_productcategoryid_index` (`productCategoryId`),
  ADD KEY `shlc06_productitem_prodcutitemlistid_index` (`prodcutItemListId`),
  ADD KEY `shlc06_productitem_productpriceid_index` (`productpriceId`);

--
-- Indexes for table `SHLC07_ACTIVITY_LOGS`
--
ALTER TABLE `SHLC07_ACTIVITY_LOGS`
  ADD PRIMARY KEY (`logId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `SHLC01_CATEGORY`
--
ALTER TABLE `SHLC01_CATEGORY`
  MODIFY `categoryId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `SHLC02_ITEMLIST`
--
ALTER TABLE `SHLC02_ITEMLIST`
  MODIFY `itemId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `SHLC03_PRODUCTPRICE`
--
ALTER TABLE `SHLC03_PRODUCTPRICE`
  MODIFY `priceId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `SHLC04_CART`
--
ALTER TABLE `SHLC04_CART`
  MODIFY `cartId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `SHLC05_PROMOCODE`
--
ALTER TABLE `SHLC05_PROMOCODE`
  MODIFY `promocodeId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `SHLC06_PRODUCTITEM`
--
ALTER TABLE `SHLC06_PRODUCTITEM`
  MODIFY `prodcutItemId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `SHLC07_ACTIVITY_LOGS`
--
ALTER TABLE `SHLC07_ACTIVITY_LOGS`
  MODIFY `logId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `SHLC03_PRODUCTPRICE`
--
ALTER TABLE `SHLC03_PRODUCTPRICE`
  ADD CONSTRAINT `shlc03_productprice_itemlistid_foreign` FOREIGN KEY (`ItemlistId`) REFERENCES `SHLC02_ITEMLIST` (`itemId`) ON DELETE CASCADE,
  ADD CONSTRAINT `shlc03_productprice_productcategoryid_foreign` FOREIGN KEY (`productCategoryId`) REFERENCES `SHLC01_CATEGORY` (`categoryId`) ON DELETE CASCADE;

--
-- Constraints for table `SHLC04_CART`
--
ALTER TABLE `SHLC04_CART`
  ADD CONSTRAINT `shlc04_cart_productitemsid_foreign` FOREIGN KEY (`productItemsId`) REFERENCES `SHLC06_PRODUCTITEM` (`prodcutItemId`) ON DELETE CASCADE;

--
-- Constraints for table `SHLC06_PRODUCTITEM`
--
ALTER TABLE `SHLC06_PRODUCTITEM`
  ADD CONSTRAINT `shlc06_productitem_prodcutitemlistid_foreign` FOREIGN KEY (`prodcutItemListId`) REFERENCES `SHLC02_ITEMLIST` (`itemId`) ON DELETE CASCADE,
  ADD CONSTRAINT `shlc06_productitem_productcategoryid_foreign` FOREIGN KEY (`productCategoryId`) REFERENCES `SHLC01_CATEGORY` (`categoryId`) ON DELETE CASCADE,
  ADD CONSTRAINT `shlc06_productitem_productpriceid_foreign` FOREIGN KEY (`productpriceId`) REFERENCES `SHLC03_PRODUCTPRICE` (`priceId`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
