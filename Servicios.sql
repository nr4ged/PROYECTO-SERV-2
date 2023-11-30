CREATE DATABASE  IF NOT EXISTS `bd_colegio` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bd_colegio`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_colegio
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `tb_alumno`
--

DROP TABLE IF EXISTS `tb_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_alumno` (
  `id_alumno` varchar(45) NOT NULL,
  `nombre_alumno` varchar(45) DEFAULT NULL,
  `apellido_alumno` varchar(45) DEFAULT NULL,
  `edad_alumno` varchar(45) DEFAULT NULL,
  `dni_alumno` varchar(45) DEFAULT NULL,
  `salon_alumno` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_alumno`),
  KEY `tb_alumno_ibfk_1` (`salon_alumno`),
  CONSTRAINT `tb_alumno_ibfk_1` FOREIGN KEY (`salon_alumno`) REFERENCES `tb_salon` (`id_salon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_alumno`
--

LOCK TABLES `tb_alumno` WRITE;
/*!40000 ALTER TABLE `tb_alumno` DISABLE KEYS */;
INSERT INTO `tb_alumno` VALUES ('A001','pepito','Uchiha','20','731121','CE001'),('A01','Stefano','Sanchez','5','12345678','CE001');
/*!40000 ALTER TABLE `tb_alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_director`
--

DROP TABLE IF EXISTS `tb_director`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_director` (
  `id_director` varchar(20) NOT NULL,
  `nombre_director` varchar(20) DEFAULT NULL,
  `apellido_director` varchar(20) DEFAULT NULL,
  `edad_director` varchar(45) DEFAULT NULL,
  `dni_director` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_director`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_director`
--

LOCK TABLES `tb_director` WRITE;
/*!40000 ALTER TABLE `tb_director` DISABLE KEYS */;
INSERT INTO `tb_director` VALUES ('D01','Jorgito','Muñaño','24','73117261'),('D05','GAA','AAG','42','22142312');
/*!40000 ALTER TABLE `tb_director` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_salon`
--

DROP TABLE IF EXISTS `tb_salon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_salon` (
  `id_salon` varchar(30) NOT NULL,
  `profesor_salon` varchar(30) DEFAULT NULL,
  `nmro_alum_salon` varchar(30) DEFAULT NULL,
  `curso_salon` varchar(30) DEFAULT NULL,
  `sede_salon` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_salon`),
  KEY `fk_sede_idx` (`sede_salon`),
  CONSTRAINT `fk_sede` FOREIGN KEY (`sede_salon`) REFERENCES `tb_sede` (`id_sede`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_salon`
--

LOCK TABLES `tb_salon` WRITE;
/*!40000 ALTER TABLE `tb_salon` DISABLE KEYS */;
INSERT INTO `tb_salon` VALUES ('CE001','pepe','23','Matematica','S01');
/*!40000 ALTER TABLE `tb_salon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_sede`
--

DROP TABLE IF EXISTS `tb_sede`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_sede` (
  `id_sede` varchar(30) NOT NULL,
  `distrito_sede` varchar(30) DEFAULT NULL,
  `provincia_sede` varchar(30) DEFAULT NULL,
  `cant_max_sede` varchar(10) DEFAULT NULL,
  `cant_salones_sede` varchar(10) DEFAULT NULL,
  `director_sede` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_sede`),
  KEY `director_sede` (`director_sede`),
  CONSTRAINT `tb_sede_ibfk_1` FOREIGN KEY (`director_sede`) REFERENCES `tb_director` (`id_director`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_sede`
--

LOCK TABLES `tb_sede` WRITE;
/*!40000 ALTER TABLE `tb_sede` DISABLE KEYS */;
INSERT INTO `tb_sede` VALUES ('S01','Lima Centro','Lima','250','15','D01'),('S02','Surco','Lima','300','20','D05');
/*!40000 ALTER TABLE `tb_sede` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-29 19:32:11
