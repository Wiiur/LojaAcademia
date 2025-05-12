-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: loha_academia
-- ------------------------------------------------------
-- Server version	8.0.41

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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `description` text,
  `stock` int DEFAULT '0',
  `category` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (4,'Pré-Treino Haze Hardcore (300g)',84,'Suplemento pré-treino formulado para aumentar a energia, foco e resistência durante os treinos. Contém ingredientes que estimulam o desempenho físico e mental, proporcionando treinos mais intensos e eficazes.',50,'Suplemento','https://cdn.awsli.com.br/600x450/2304/2304239/produto/211161610/bope-300g-frutas-amarelas-nntske.jpg','2025-04-28 19:04:10','2025-04-28 19:04:10'),(5,'Óleo de Peixe - Ômega 3 (75 Softgel)',20.4,'Suplemento de ácidos graxos essenciais EPA e DHA, que auxiliam na saúde cardiovascular, cerebral e articular. Contribui para a redução de processos inflamatórios e melhora do bem-estar geral.​',50,'Suplemento','https://a-static.mlcdn.com.br/1500x1500/kit-arginina-120-caps-omega-3-75-caps-growth-supplements/suplementosaz/8254723040/39ef0ca6ef4b2a7b8960312758166d52.jpeg','2025-04-28 22:24:00','2025-04-28 22:24:00'),(6,'Proteína da Ervilha (Pea Protein) (1kg)',67,'Suplemento proteico de origem vegetal, ideal para veganos e pessoas com restrições alimentares. Rico em aminoácidos essenciais, contribui para o ganho de massa muscular e recuperação pós-treino.​',0,'geral','https://www.gsuplementos.com.br/upload/produto/imagem/prote-na-da-ervilha-1kg-com-sabor-growth-supplements-1.png','2025-05-02 01:48:06','2025-05-02 01:48:06'),(7,'HOT Termogênico (60 Comprimidos)',36.66,'Suplemento termogênico que auxilia na queima de gordura, aumento da energia e melhora do desempenho físico. Contém ingredientes que estimulam o metabolismo e promovem maior disposição.',0,'geral','https://www.gsuplementos.com.br/upload/produto/imagem/coenzima-q10-growth-supplements-1.jpg','2025-05-05 21:29:54','2025-05-05 21:29:54'),(9,'MaxPower Whey',25.99,'Suplemento de proteína de rápida absorção, ideal para o pós-treino. Auxilia na recuperação muscular e no ganho de massa magra.',0,NULL,'https://lojamaxtitanium.vtexassets.com/arquivos/ids/157350-1920-0/100-whey-protein-max-titanium-dr-peanut-900g-avela-1.jpg?v=638343752603430000','2025-05-10 23:33:47','2025-05-10 23:33:47');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('admin','cliente') DEFAULT 'cliente',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-12 20:13:43
