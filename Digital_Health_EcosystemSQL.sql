CREATE DATABASE  IF NOT EXISTS `health_eco_system` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `health_eco_system`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: health_eco_system
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ambulance`
--

DROP TABLE IF EXISTS `ambulance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ambulance` (
  `aid` int NOT NULL AUTO_INCREMENT,
  `drivername` varchar(50) NOT NULL,
  `aregno` varchar(50) NOT NULL,
  `avehicalno` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `mono` varchar(50) NOT NULL,
  `website` varchar(50) DEFAULT NULL,
  `state` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `pincode` int NOT NULL,
  `landmark` varchar(50) NOT NULL,
  `availablestatus` int NOT NULL,
  `ac_status` int NOT NULL,
  `lid` int DEFAULT NULL,
  PRIMARY KEY (`aid`),
  UNIQUE KEY `avehicalno` (`avehicalno`),
  UNIQUE KEY `avehicalno_2` (`avehicalno`),
  UNIQUE KEY `aregno` (`aregno`),
  UNIQUE KEY `mono` (`mono`),
  KEY `lid` (`lid`),
  CONSTRAINT `ambulance_ibfk_1` FOREIGN KEY (`lid`) REFERENCES `loginall` (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ambulance`
--

LOCK TABLES `ambulance` WRITE;
/*!40000 ALTER TABLE `ambulance` DISABLE KEYS */;
INSERT INTO `ambulance` VALUES (1,'raju','4562000','MH 15 3569','raju@gmaail.com','9822452680','rahujdk.com','Maharashtra','nashik',422305,'kbt corner',1,1,5),(2,'Steve','DS4455661234','MH 15 4050','steve@gmail.com','9845632139','Nosite.com','Tamilnadu','Chennai',422290,'Gokhale Sanchit',1,1,7),(3,'Pravin','r102040','MH 20 1030','pravin@gmail.com','7412589630','nosite.com','Maharashtra','Nashik',522306,'Lwans',1,1,8),(4,'raju','45620001','MH 15 3568','raju@gmaail.com','9822452610','rahujdk.com','Maharashtra','Nashik',422305,'kbt corner',1,1,9),(6,'Dipendra','r874545','MH 15 1030','dipendra@gmail.com','8521479630','nosite.com','Maharashtra','Nashik',422005,'Pretolium',1,1,11),(8,'Supriya','r8745985','MH 10 1020','Supriya@gmail.com','852140369','nosite.com','Maharashtra','pune',630520,'kbp corner',1,1,15),(9,'Krunsha','r874599','MH 15 1627','steve@gmail.com','741244','nosite.com','Maharashtra','Nashik',45355,'Pretolium',0,1,16),(11,'Shivam Rane','r741254','MH 15 8058','shivam@gmail.com','8521470628','nosite.com','Maharashtra','Nashik',741258,'pride',1,1,19),(14,'Rama Shide','a874596','MH 15 1088','rama@gmail.com','7987989','nosite.com','Maharashtra','Nashik',42342,'adad',0,1,22),(17,'Shanti shinde','qwe45','MH 36 9999','Dontknow','000000000','nosite','Maharashtra','Nashik',2120,'no idi',0,1,26),(29,'Shiva sarode','q890123','MH 04 5530','shiva@gmail.com','8520000000','nosite.com','Maharashtra','Nashik',851995,'Pretolium',0,1,39),(30,'Yash patil','a855646','MH 19 7070','yash@gmail.com','852001234','nosite.com','Maharashtra','Dhule',852120,'bus stand jawal',0,1,40),(31,'Shama','AD4567891234','MH 15 3753','steve@gmail.com','7400000000','nosite.com','Maharashtra','Nashik',412541,'NA',0,0,41),(32,'Shamaf','AD4567854646','MH 15 5337','steve@gmail.com','7399999940','nosite.com','Maharashtra','Nashik',412541,'NA',1,1,42),(33,'Shavi','DS1234567812','MH 15 5555','steve@gmail.com','1111111111','nosite.com','Maharashtra','Nashik',123456,'Pretolium',1,1,43),(34,'Shravni','SD1234567892','MH 04 0006','shravni@gmail.com','5203148932','Nosite.com','Maharashtra','Satana',123004,'NA',1,1,44),(36,'Shahu','AS4646464646','MH 02 1020','shahu@gmail.com','8520003456','nosite.com','Maharashtra','Amravati',852123,'Near Pretolium',1,1,46),(37,'Swara','SD4561230166','MH 03 1020','swara@gmaill.com','8521460000','nosite.com','Maharashtra','Nashik',852133,'NA',1,1,48),(38,'Sagar','SD4656132154','MH 14 6666','sagar@gmail.com','8888855551','nosite.com','Maharashtra','pune',888555,'NA',1,1,49),(39,'Bharti Rayte','FG12SD74125','TN 15 0111','bharti@gmail.com','8545632172','bhartiTransport.com','Tamilnadu','Chennia',111202,'New Plaza One',1,1,52),(40,'Avanti','SD12345DS41','MH 27 7744','avanti@gmail.com','4563210581','AvantiTravelars.com','Maharashtra','Nagpoor',789654,'Near Satpute colony ',1,1,57),(41,'Madhura','DS1234DS123','MH 15 1024','madhura@gmail.com','8546123879','Madhura.com','Maharashtra','Nashik',456123,'Shivaji Nagar',1,1,59),(42,'Adhi Shide','SD4DS456321','MH 15 1112','adi@gmail.com','8521255456','nosite.com','Maharashtra','Nashik',854621,'Na',1,1,62);
/*!40000 ALTER TABLE `ambulance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ambulanceorder`
--

DROP TABLE IF EXISTS `ambulanceorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ambulanceorder` (
  `aoid` int NOT NULL AUTO_INCREMENT,
  `source` varchar(45) NOT NULL,
  `destination` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  `order_status` int NOT NULL,
  `aprove_status` int NOT NULL,
  `pid` int NOT NULL,
  `aid` int NOT NULL,
  PRIMARY KEY (`aoid`),
  KEY `aid_idx` (`aid`),
  KEY `pid_idx` (`pid`),
  CONSTRAINT `aid` FOREIGN KEY (`aid`) REFERENCES `ambulance` (`aid`),
  CONSTRAINT `pid` FOREIGN KEY (`pid`) REFERENCES `patient` (`pid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ambulanceorder`
--

LOCK TABLES `ambulanceorder` WRITE;
/*!40000 ALTER TABLE `ambulanceorder` DISABLE KEYS */;
INSERT INTO `ambulanceorder` VALUES (2,'Nashik','Niphad','26-09-2022',1,1,1,2),(3,'Pune','vinchur','01-08-2023',1,1,2,9),(4,'Dhule','Pune','2022-09-25',1,1,4,3),(6,'Dhule','Nashik','2022-09-27',1,1,1,2),(7,'Dhule','Pune','2022-09-27',1,0,1,2);
/*!40000 ALTER TABLE `ambulanceorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospital`
--

DROP TABLE IF EXISTS `hospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hospital` (
  `hid` int NOT NULL AUTO_INCREMENT,
  `hname` varchar(50) NOT NULL,
  `hregno` varchar(50) NOT NULL,
  `hinfo` varchar(500) DEFAULT NULL,
  `genralbed` int NOT NULL,
  `icubed` int NOT NULL,
  `email` varchar(50) NOT NULL,
  `mono` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `pincode` int DEFAULT NULL,
  `landmark` varchar(50) NOT NULL,
  `website` varchar(50) DEFAULT NULL,
  `himg` blob,
  `genbedlastupdate` int DEFAULT NULL,
  `icubedlastupdate` int DEFAULT NULL,
  `ac_status` varchar(45) DEFAULT NULL,
  `lid` int NOT NULL,
  PRIMARY KEY (`hid`),
  UNIQUE KEY `hregno` (`hregno`),
  UNIQUE KEY `hregno_2` (`hregno`),
  UNIQUE KEY `hregno_3` (`hregno`),
  UNIQUE KEY `mono` (`mono`),
  KEY `lid_idx` (`lid`),
  CONSTRAINT `lid` FOREIGN KEY (`lid`) REFERENCES `loginall` (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospital`
--

LOCK TABLES `hospital` WRITE;
/*!40000 ALTER TABLE `hospital` DISABLE KEYS */;
INSERT INTO `hospital` VALUES (4,'Adi Hospital','DS4563278952','MultiSpeciality',42,12,'adi@gmail.com','4561234589','Maharashtra','Nashik',456123,'Na','nosite.com',NULL,0,0,'1',61);
/*!40000 ALTER TABLE `hospital` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loginall`
--

DROP TABLE IF EXISTS `loginall`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loginall` (
  `lid` int NOT NULL AUTO_INCREMENT,
  `uname` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`lid`),
  UNIQUE KEY `uname` (`uname`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loginall`
--

LOCK TABLES `loginall` WRITE;
/*!40000 ALTER TABLE `loginall` DISABLE KEYS */;
INSERT INTO `loginall` VALUES (2,'Hrishikesh','10203045','patient'),(3,'Pankaj','123456789','Patient'),(5,'Raju123','12346','hospital'),(7,'Steve123','123456','Ambulance'),(8,'Pravin123','pass@123','Ambulance'),(9,'rj45','12346','hospital'),(11,'Dipendra456','741258','Ambulance'),(15,'Supriya99','741','Ambulance'),(16,'Krushna123','2322','Ambulance'),(19,'Shivam999','741258','Ambulance'),(22,'Rama77','233131','Ambulance'),(26,'Shanti','46546','Ambulance'),(39,'Shiva888','132313','Ambulance'),(40,'Yash123','123','Ambulance'),(41,'Rama772','Dd@123',NULL),(42,'Rama7726','Dd@123','Ambulance'),(43,'Shama1','Dd@123','Ambulance'),(44,'Shravni123','Ss@123','Ambulance'),(46,'Shahu123','Ss@123','Ambulance'),(48,'Swara','Ss@123','Ambulance'),(49,'Sagar','Ss@123456','Ambulance'),(50,'admin','admin','admin'),(52,'Bharti12','Bb@123456','Ambulance'),(54,'Rama12','Rr@123','Patient'),(57,'Avanti123','Aa@123','Ambulance'),(58,'Sarode123','Ss@123','Patient'),(59,'Madhura23','Mm@123','Ambulance'),(60,'Adi1244','Aa@123','Patient'),(61,'Adi11','Aa@123','Hospital'),(62,'Adidas123','Aa@123','Ambulance');
/*!40000 ALTER TABLE `loginall` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `pid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `mono` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `adharno` bigint DEFAULT NULL,
  `dob` varchar(50) NOT NULL,
  `gender` varchar(20) NOT NULL,
  `bloodgrp` varchar(20) NOT NULL,
  `ac_status` int NOT NULL,
  `state` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `pincode` int NOT NULL,
  `landmark` varchar(50) NOT NULL,
  `lid` int DEFAULT NULL,
  `pic` longblob,
  PRIMARY KEY (`pid`),
  UNIQUE KEY `mono` (`mono`),
  UNIQUE KEY `mono_2` (`mono`),
  UNIQUE KEY `adharno` (`adharno`),
  UNIQUE KEY `adharno_2` (`adharno`),
  KEY `FKqjh4g7ocwkqpffyrxhmg83krf` (`lid`),
  CONSTRAINT `FKqjh4g7ocwkqpffyrxhmg83krf` FOREIGN KEY (`lid`) REFERENCES `loginall` (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'Hrishikesh','Bodke','8600861884','hrishi@gmail.com',741085209630,'26-06-1998','M','b+',1,'Maharashtra','Nashik',422305,'Aparna Pride ',2,NULL),(2,'Pankaj','Ushir','8521345698','pankaj@gmail.com',789456123123,'15-07-1998','M','a+',1,'Tamilnadu','Pune',422008,'Vikhe wada',3,NULL),(4,'Rama','Shinde','8521444563','rama@gmail.com',741258963012,'2022-09-27','Male','o+',1,'MahaRashtra','Nashik',852134,'Raja Mata Mandir',54,NULL),(6,'Sarode','Rahi','8889645213','sarode@gmail.com',852134567892,'2022-09-08','Male','o+',1,'Maharashtra','Nashik',852134,'Pretolium',58,NULL),(7,'Adhi','Raje','8546123875','addi@gmail.com',845613457896,'2022-09-27','Male','a+',1,'Maharashtra','Malegaon',456123,'NA',60,NULL);
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-30 21:27:22
