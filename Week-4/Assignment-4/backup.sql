-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Article`
--

DROP TABLE IF EXISTS `Article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Article` (
  `userID` int NOT NULL,
  `title` varchar(20) NOT NULL,
  `content` varchar(5000) NOT NULL,
  `publishDate` date NOT NULL,
  PRIMARY KEY (`userID`,`title`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `user` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Article`
--

LOCK TABLES `Article` WRITE;
/*!40000 ALTER TABLE `Article` DISABLE KEYS */;
INSERT INTO `Article` VALUES (1,'test','testcontent','2023-02-01'),(1,'test2','testcontent2','2023-02-01'),(1,'test4','testcontent4','2023-02-01'),(22,'test22','testcontent22','2023-02-01'),(22,'test4','testcontent4','2023-02-01'),(24,'test1','testcontent1','2023-02-01'),(24,'test2','testcontent2','2023-02-01'),(28,'test1','testcontent1','2023-02-01'),(28,'test2','testcontent2','2023-02-01'),(32,'test1','testcontent1','2023-02-01'),(32,'test2','testcontent2','2023-02-01'),(32,'test3','testcontent3','2023-02-01'),(33,'test1','testcontent1','2023-02-01'),(33,'test2','testcontent2','2023-02-01'),(33,'test3','testcontent3','2023-02-01'),(34,'test1','testcontent1','2023-02-01'),(34,'test2','testcontent3','2023-02-01'),(34,'test3','testcontent2','2023-02-01'),(37,'test1','testcontent1','2023-02-01'),(37,'test2','testcontent2','2023-02-01'),(37,'test3','testcontent3','2023-02-01'),(38,'test1','testcontent1','2023-02-01'),(38,'test2','testcontent2','2023-02-01'),(38,'test3','testcontent3','2023-02-01'),(39,'test1','testcontent1','2023-02-01'),(39,'test2','testcontent2','2023-02-01'),(39,'test3','testcontent3','2023-02-01'),(46,'test1','testcontent4','2023-02-01'),(46,'test2','testcontent4','2023-02-01'),(46,'test4','testcontent4','2023-02-01');
/*!40000 ALTER TABLE `Article` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-02  1:02:17
