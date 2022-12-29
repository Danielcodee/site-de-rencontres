-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 28 sep. 2022 à 14:27
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `buddies_data`
--

-- --------------------------------------------------------

--
-- Structure de la table `activitie`
--

CREATE TABLE `activitie` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `step` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `activitie`
--

INSERT INTO `activitie` (`id`, `name`, `image`, `step`) VALUES
(1, 'Cuisine', '/img/badges-interets/ci-cuisine.svg', 1),
(2, 'Photographie', '/img/badges-interets/ci-photo.svg', 1),
(3, 'Musique', '/img/badges-interets/ci-musique.svg', 1),
(4, 'Cinéma', '/img/badges-interets/ci-cinema.svg', 1),
(5, 'Art', '/img/badges-interets/ci-art.svg', 1),
(6, 'Exposition', '/img/badges-activite/activite-expo.svg', 2),
(7, 'Sport', '/img/badges-activite/activite-sport.svg', 2),
(8, 'Dégustation', '/img/badges-activite/activite-degustation.svg', 2),
(9, 'Découverte', '/img/badges-activite/activite-devouverte.svg', 2),
(10, 'Randonnée', '/img/badges-activite/activite-randonnee.svg', 2),
(11, 'Lecture', NULL, 1),
(12, 'Jeux', NULL, 1),
(14, 'Visite', NULL, 1),
(15, 'Jeux de societé', NULL, 2),
(16, 'Bowling', NULL, 2),
(17, 'Pique-nique', NULL, 2);

-- --------------------------------------------------------

--
-- Structure de la table `activitie_user`
--

CREATE TABLE `activitie_user` (
  `id` int(11) NOT NULL,
  `activitie_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `is_activitie` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `activitie_user`
--

INSERT INTO `activitie_user` (`id`, `activitie_id`, `user_id`, `is_activitie`) VALUES
(53, 1, 2, 1),
(54, 2, 2, 1),
(55, 3, 2, 1),
(56, 4, 2, 1),
(57, 5, 2, 1),
(58, 6, 2, 0),
(59, 7, 2, 0),
(60, 8, 2, 0),
(61, 9, 2, 0),
(62, 10, 2, 0),
(63, 5, 14, 1),
(64, 9, 14, 1),
(66, 1, 14, 1),
(67, 2, 14, 0),
(68, 8, 14, 0),
(71, 4, 14, 0),
(72, 3, 14, 0),
(73, 1, 18, 1),
(74, 10, 18, 0),
(75, 9, 18, 0),
(76, 8, 18, 0),
(77, 7, 18, 0),
(78, 4, 18, 1),
(79, 3, 19, 1),
(80, 9, 19, 0),
(81, 8, 19, 0),
(82, 7, 19, 0),
(83, 4, 19, 1),
(84, 5, 19, 1),
(85, 6, 12, 1),
(86, 2, 12, 1),
(87, 8, 12, 0),
(88, 4, 12, 0),
(89, 5, 12, 0),
(90, 7, 12, 0),
(91, 9, 12, 1),
(92, 1, 15, 1),
(93, 2, 15, 1),
(94, 3, 15, 1),
(95, 5, 15, 1),
(96, 4, 15, 1),
(97, 6, 15, 0),
(98, 7, 15, 0),
(99, 8, 15, 0),
(100, 9, 15, 0),
(101, 10, 15, 0),
(102, 3, 16, 0),
(103, 2, 16, 0),
(104, 8, 16, 1),
(106, 7, 16, 1),
(107, 4, 16, 1),
(108, 10, 16, 0),
(109, 1, 17, 1),
(110, 2, 17, 1),
(111, 3, 17, 1),
(112, 4, 17, 1),
(113, 5, 17, 1),
(114, 6, 17, 0),
(116, 7, 17, 0),
(117, 10, 17, 0),
(118, 1, 19, 0),
(119, 2, 19, 0),
(120, 6, 19, 1),
(121, 10, 19, 1),
(122, 1, 12, 1),
(123, 3, 12, 0),
(124, 10, 12, 1),
(125, 1, 16, 1),
(126, 6, 16, 0),
(127, 5, 16, 0),
(128, 8, 17, 0),
(129, 9, 16, 1),
(130, 9, 17, 0),
(131, 6, 14, 0),
(132, 7, 14, 1),
(133, 10, 14, 1),
(134, 1, 9, 0),
(135, 2, 9, 0),
(136, 3, 9, 0),
(137, 4, 9, 0),
(138, 5, 9, 0),
(139, 6, 9, 1),
(140, 7, 9, 1),
(141, 8, 9, 1),
(142, 9, 9, 1),
(143, 10, 9, 1),
(144, 1, 3, 0),
(145, 2, 3, 0),
(146, 3, 3, 0),
(147, 4, 3, 0),
(148, 5, 3, 0),
(149, 6, 3, 1),
(150, 7, 3, 1),
(151, 8, 3, 1),
(152, 9, 3, 1),
(153, 10, 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20220919181914', '2022-09-19 20:19:18', 34);

-- --------------------------------------------------------

--
-- Structure de la table `form`
--

CREATE TABLE `form` (
  `id` int(11) NOT NULL,
  `interested_in` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `step` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `form`
--

INSERT INTO `form` (`id`, `interested_in`, `step`) VALUES
(1, 'Musique', 1),
(2, 'Cinema', 1),
(3, 'Cuisine', 1),
(4, 'Sport', 1),
(5, 'Randonnée', 2),
(6, 'Technologie', 2),
(7, 'Art', 2),
(8, 'Photographie', 2);

-- --------------------------------------------------------

--
-- Structure de la table `group`
--

CREATE TABLE `group` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `group`
--

INSERT INTO `group` (`id`, `name`, `description`, `image`) VALUES
(3, 'Art Lovers', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '/img/card-commu/art-lovers-card.jpg'),
(4, 'Foodies', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '/img/card-commu/foodies-card.jpg'),
(5, 'Film Club', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '/img/card-commu/film-club-card.jpg'),
(6, 'Cat Person', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '/img/card-commu/cat-person-card.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `messenger`
--

CREATE TABLE `messenger` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `text` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `sent_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `received_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `messenger`
--

INSERT INTO `messenger` (`id`, `sender_id`, `receiver_id`, `text`, `sent_at`, `received_at`) VALUES
(1, 2, 17, 'Hello', '2022-09-19 20:36:21', '2022-09-19 20:36:21'),
(2, 2, 17, 'ça va toi?', '2022-09-19 20:36:41', '2022-09-19 20:36:41'),
(3, 14, 11, 'Hello', '2022-09-22 14:15:48', '2022-09-22 14:15:48'),
(4, 2, 14, 'Heloo', '2022-09-22 15:20:50', '2022-09-22 15:20:50'),
(5, 17, 19, 'Hello Sam', '2022-09-23 15:16:43', '2022-09-23 15:16:43'),
(6, 17, 19, 'ça va?', '2022-09-23 15:16:57', '2022-09-23 15:16:57'),
(7, 19, 17, 'Salut Alona', '2022-09-23 15:17:54', '2022-09-23 15:17:54'),
(8, 19, 15, 'Helloo', '2022-09-23 16:44:47', '2022-09-23 16:44:47'),
(9, 19, 15, 'Salut', '2022-09-24 09:42:17', '2022-09-24 09:42:17'),
(10, 15, 19, 'Salut Sam', '2022-09-24 09:42:43', '2022-09-24 09:42:43'),
(11, 15, 19, 'ça va?', '2022-09-24 09:42:50', '2022-09-24 09:42:50'),
(12, 19, 14, 'Salut Dina', '2022-09-24 09:49:37', '2022-09-24 09:49:37'),
(13, 19, 14, 'ça ca?', '2022-09-26 19:41:13', '2022-09-26 19:41:13'),
(14, 19, 15, 'salut lapasserelle', '2022-09-27 14:20:22', '2022-09-27 14:20:22'),
(15, 19, 15, 'Hello teste', '2022-09-28 09:58:05', '2022-09-28 09:58:05'),
(16, 15, 19, 'Salut', '2022-09-28 09:58:36', '2022-09-28 09:58:36'),
(17, 19, 15, 'ça va toi?', '2022-09-28 09:58:52', '2022-09-28 09:58:52');

-- --------------------------------------------------------

--
-- Structure de la table `publication`
--

CREATE TABLE `publication` (
  `id` int(11) NOT NULL,
  `post` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `groupe_id` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `publication`
--

INSERT INTO `publication` (`id`, `post`, `date_at`, `groupe_id`, `image`) VALUES
(1, 'testando publicao', '2022-09-08 18:48:25', NULL, NULL),
(2, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.” ― Frank Chimero', '2022-09-15 20:49:56', NULL, '/img/publication/picnic.jpg'),
(3, 'If you love life, do not waste time, for time is what life is made up of. ', '2022-09-15 20:51:35', NULL, NULL),
(4, 'I’m a great believer in luck, and I find the harder I work, the more luck I have. ', '2022-09-15 20:51:35', 4, '/img/publication/work-hard.jpg'),
(5, '\"It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.\" ', '2022-09-16 09:48:49', NULL, '/img/publication/Motivation.jpg'),
(6, '“Do not be embarrassed by your failures, learn from them and start again.”', '2022-09-16 09:48:49', NULL, NULL),
(7, '“Fais de ta vie un rêve, et d’un rêve, une réalité.”', '2022-09-18 18:08:56', NULL, '/img/publication/paissagem.jpg'),
(8, '\"Quand les jours sont ainsi semblables les uns aux autres, c’est que les gens ont cessé de s’apercevoir des bonnes choses qui se présentent dans leur vie.\"', '2022-09-18 18:08:56', NULL, '/img/publication/montanha.jpg'),
(9, ' \"Souvenez-vous que vous êtes unique, comme tout le monde.\"', '2022-09-18 20:11:10', 3, '/img/publication/confiar.jpg'),
(10, 'Be heroes of your own stories.', '2022-09-23 14:20:59', NULL, '/img/publication/beHeros.jpg'),
(11, 'A joy shared is a joy doubled.', '2022-09-23 14:23:22', NULL, NULL),
(12, 'Try to be a rainbow in someone\'s cloud.', '2022-09-23 14:23:22', NULL, '/img/publication/rainbow.jpg'),
(13, 'Je vois la vie en rose.', '2022-09-23 14:49:45', NULL, '/img/publication/vieenrose.jpg'),
(14, 'Rien de grand ne s\'est accompli dans le monde sans passion.', '2022-09-23 14:53:49', NULL, '/img/publication/bienestar.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `comment` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `sender_id_id` int(11) DEFAULT NULL,
  `received_id_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `review`
--

INSERT INTO `review` (`id`, `comment`, `date_at`, `sender_id_id`, `received_id_id`) VALUES
(2, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-15 20:13:29', 10, 2),
(3, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-15 20:13:29', 3, 2),
(4, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-15 20:13:29', 4, 2),
(5, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-16 09:29:55', 14, 2),
(6, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-16 09:29:55', 13, 2),
(7, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-18 18:22:07', 2, 14),
(8, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-18 18:22:07', 9, 14),
(9, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-18 18:22:47', 10, 14),
(10, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-18 18:22:47', 15, 14),
(11, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-15 20:13:29', 10, 12),
(12, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-18 18:22:07', 2, 12),
(13, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-15 20:13:29', 3, 16),
(14, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-18 18:22:07', 9, 16),
(15, '“To be human is to tinker, to envision a better condition, and decide to work toward it by shaping the world around us.”', '2022-09-18 18:22:47', 2, 16);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '(DC2Type:json)',
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `language` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `picture` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `biography` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_expat` tinyint(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)',
  `isconnected` date DEFAULT NULL,
  `language2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `language3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `genre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `match_age_min` int(11) DEFAULT NULL,
  `match_age_max` int(11) DEFAULT NULL,
  `match_genre` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `match_langue` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `match_politique` tinyint(1) DEFAULT NULL,
  `match_break_the_ice` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `match_perfect_afternoon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activities` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `interets` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_valid` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `first_name`, `last_name`, `country`, `city`, `language`, `picture`, `biography`, `is_expat`, `created_at`, `isconnected`, `language2`, `language3`, `genre`, `birth_date`, `match_age_min`, `match_age_max`, `match_genre`, `match_langue`, `match_politique`, `match_break_the_ice`, `match_perfect_afternoon`, `activities`, `interets`, `is_valid`) VALUES
(2, 'pedroxtn@gmail.com', '[\"ROLE_USER\",\"ROLE_MODERATOR\",\"ROLE_ADMINISTRATOR\"]', '$2y$13$SWMQ..zZOrxUeNxRtzhHYOGC.XVnD/pyf.DLF5mASxZjOIn2DfnG2', 'Jimmy Stewart', 'Rodrigues', 'Biélorussie', 'Paris', 'Russe', 'jimmy-6328b62ad518b.jpg', '“Le plus grand plaisir dans la vie, c’est de faire les choses que les gens disent impossibles.”\nHello World !!!\n', 1, '2022-09-08 20:44:00', NULL, 'Francais', ' ', 'Homme', NULL, 18, 40, 'Homme', 'Francais', 1, 'Poser une question ', 'Pique-nique dans un parc', '6,7', '3,4', NULL),
(3, 'teste@teste.com', '[]', '$2y$13$RLdXZS78YUGALcBdPDrB5ukJY.xRbCGuGSbN.4cK3a5HG/QnOOL4O', 'João Braz', 'Rodrigues', 'Brazil', 'Paris', 'Espagnol', 'thibault-63236ebf3b54c.jpg', '“On ne voit bien qu’avec le coeur. L’essentiel est invisible pour les yeux.”', 1, NULL, NULL, ' ', ' ', 'Homme', NULL, NULL, NULL, 'Femme', NULL, 0, 'Poser une question ', 'Pique-nique dans un parc', '6,7', '1,2', NULL),
(4, 'testepedro@teste.com', '[]', '$2y$13$bw7yR0Wn..W5ie8xGZh.Su4fToArprJsSXcSWNqEaErFQpag3LaxG', 'Alice Smith', 'Roy', 'Canada', 'Paris', 'Francais', 'alice-63236f7a0a2fb.jpg', '“Le plus grand plaisir dans la vie, c’est de faire les choses que les gens disent impossibles.”\nHello World !!!\n', 1, NULL, NULL, 'Anglais', 'Portugais', 'Homme', '1922-01-01', 15, 35, 'Agenre', 'Francais', 0, 'Raconte une blague ', 'Pique-nique dans un parc', '6,7,8', '1,2', NULL),
(9, 'pedroUP@gmail.com', '[]', '$2y$13$qDRlNsRo.r5hX5Ge4LjEDurGIxbUIdbidj9DTyhPBQlcBiQGF7j1a', 'Luc Taylor', 'Taylor', 'Afghanistan', 'Toulouse', 'Anglais', 'luc-632779ae382d4.jpg', 'Rien de grand ne s’est fait dans le monde sans passion.', 1, NULL, NULL, 'Francais', ' ', 'Agenre', '1992-01-01', 19, 40, 'Homme', 'Francais', 0, 'Raconte une blague ', 'Visite de la dernière expo en vogue', '6,7,8', '1,2', NULL),
(10, 'pedroteste@gmail.com', '[]', '$2y$13$ZulVbi4WFyIjxXECvEv/KeQBqGhhPVJlQRqoOGbYAk3pcjLT./Fvq', 'Smith Wharren', 'Wharren', 'Canada', 'Nice', 'Francais', 'ben-63242bdb57b8e.jpg', 'Rien de grand ne s’est fait dans le monde sans passion.', 1, NULL, NULL, 'Anglais', ' ', 'Agenre', '1984-01-01', 18, 45, 'Homme', 'Francais', 1, 'Poser une question ', 'Pique-nique dans un parc', '6,7,8', '1,2,3,4,5', NULL),
(11, 'testewow@hotmail.com', '[]', '$2y$13$1df1pQWNRIeo3RNfGLrpPe3CrWNsK/RgNhz1ukrkcvSKxV.s5sg3.', 'Josh Blake ', 'beast', 'Côte d’Ivoire', 'Paris', 'Anglais', 'ken-6324356e93b3f.jpg', 'Rien de grand ne s’est fait dans le monde sans passion.', 1, '2022-09-14 15:15:00', NULL, 'Portugais', NULL, 'Homme', '1980-01-01', 20, 35, 'Homme', 'Francais', 1, 'Poser une question ', 'Pique-nique dans un parc', '8,9,10', '1,2', NULL),
(12, 'testeteste@gg.fr', '[\"ROLE_USER\",\"ROLE_MODERATOR\",\"ROLE_ADMINISTRATOR\"]', '$2y$13$eY.v3Z1GfM4zevKowTEOBe3ey.2EXlnqPv5OoRV9qU8IlsfDNeVKi', 'Dock Warrent', NULL, 'France', 'Paris', 'Francais', 'luc-632da9b89647a.jpg', 'Rien de grand ne s’est fait dans le monde sans passion.', 0, '2022-09-14 15:45:00', NULL, 'Anglais', ' ', 'Homme', '1993-01-01', 25, 55, 'Homme', 'Francais', 1, 'Mentionner quelque chose sur mon profil ', 'Visite de la dernière expo en vogue', '6,7,8,10', '1,2,4,5', NULL),
(13, 'hello@world.com', '[]', '$2y$13$UCwFuzMoHdFMTRkVsiAdk.Re/2U1V9vQs0oxMs8M1OSaDMAmNBB.W', 'Brad smith', 'Smith', 'Équateur', 'Paris', 'Anglais', 'indra-6324382aac422.jpg', 'Rien de grand ne s’est fait dans le monde sans passion.', 1, '2022-09-21 10:10:00', NULL, NULL, NULL, 'Homme', '1993-01-01', 20, 60, 'Homme', 'Francais', 0, 'Mentionner quelque chose sur mon profil ', 'Balade sur le quais', '8,9,10', '3,4,5', NULL),
(14, 'dina@hotmail.com', '[]', '$2y$13$PpmrSlps/L3jdHN/mvXXxeRTrOF/vJkI.XrV5drii3c2MheT4h8Ja', 'Dina Wook', 'Wook', 'France', 'Paris', 'Francais', 'ida-632daff2406c7.jpg', '“On ne voit bien qu’avec le coeur. L’essentiel est invisible pour les yeux.”', 0, NULL, NULL, 'Anglais', ' ', 'Femme', '2007-01-01', 20, 40, 'Femme', 'Anglais', 1, 'Poser une question ', 'Pique-nique dans un parc', '9,10', '2,3,4', NULL),
(15, 'hellotech@tech.com', '[]', '$2y$13$sihayzh1iR3UgsXWOQ0lTOV9AsElEcbVlMRW5/aXIxIQ05kBf3Sb.', 'Maëlle RENAUD', NULL, 'France', 'Paris', 'Francais', 'camille-632dac0c15868.jpg', 'Le plus grand plaisir de la vie c’est de faire les choses que les gens disent impossibles', 0, NULL, NULL, 'Anglais', ' ', 'Homme', '1984-01-01', 20, 30, 'Femme', 'Francais', 1, 'Raconte une blague ', 'Balade sur le quais', '6,7,8,9,10', '3,4,5', NULL),
(16, 'testeexpatri@hotmail.com', '[]', '$2y$13$2PTgMgu3VphKU5vNuYyfPOZBj0v.4n1D6qRSWVyMhPYflj1ZY7fHG', 'Fred Armstrong', NULL, 'France', 'Paris', 'Francais', 'mehdi-632dadf917773.jpg', 'Dans la vie on ne fait pas ce que l’on veut mais on est responsable de ce que l’on est.', 0, NULL, NULL, ' ', ' ', 'Homme', '1922-01-01', 20, 30, 'Homme', 'Francais', 1, 'Raconte une blague ', 'Tournée des bars', '6,7', '3,4,5', NULL),
(17, 'helloworld@hello.com', '[]', '$2y$13$y9GowiBZT3z8rAjC/0hRKuwCHpVKhSrsZjzAfXCD9.9JRzBc7mRc2', 'Alona World', NULL, 'France', 'Paris', 'Anglais', 'alona-632db0f192c1a.jpg', 'Rêver, c’est le bonheur; attendre, c’est la vie, Bienvenue sur mon profil', 0, NULL, NULL, 'Portugais', ' ', 'Homme', '1992-09-17', 18, 40, 'Homme', 'Francais', 1, 'Poser une question ', 'Pique-nique dans un parc', '6,7', '3,4', NULL),
(18, 'testepedro@hotmail.com', '[]', '$2y$13$TyAnKaMlMINODlwg84o7bOIqXGsfXOlcgdHUyrAYL6h9VpQvE70Wi', 'Sasha greek', 'greek', 'Belgique', 'Toulouse', 'Anglais', 'sasha-632c5bab5e700.jpg', 'Rêver, c’est le bonheur; attendre, c’est la vie, Bienvenue sur mon profil', 1, NULL, NULL, 'Suédois', ' ', 'Femme', '2014-01-01', 18, 35, 'Homme', 'Francais', 1, 'Mentionner quelque chose sur mon profil ', 'Balade sur le quais', '6,7,8,9,10', '1,2,4,5', NULL),
(19, 'sam@gmail.com', '[]', '$2y$13$dVycfyA8ggr.MAJN8DlohOD3hLARkWplzVMr6EUrOHhbpR3y1v6Ay', 'Sam Anderson', NULL, 'Australie', 'Paris', 'Francais', 'sam-632db223aea00.jpg', 'And I think to myself: what a wonderful world.\r\n\r\nEt je me dis : quel monde merveilleux', 1, NULL, NULL, 'Anglais', ' ', 'Homme', '1990-09-08', 18, 55, 'Homme', 'Francais', 1, 'Se présenter de manière simple ', 'Balade sur le quais', '6,7,8,9,10', '3,4,5', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user_form`
--

CREATE TABLE `user_form` (
  `user_id` int(11) NOT NULL,
  `form_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `user_group`
--

CREATE TABLE `user_group` (
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user_group`
--

INSERT INTO `user_group` (`user_id`, `group_id`) VALUES
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(9, 3),
(9, 4),
(9, 5),
(9, 6),
(12, 3),
(12, 4),
(12, 5),
(12, 6),
(14, 3),
(14, 4),
(14, 5),
(14, 6),
(15, 3),
(15, 4),
(15, 5),
(15, 6),
(16, 3),
(16, 5),
(17, 3),
(17, 4),
(17, 5),
(17, 6),
(18, 3),
(18, 4),
(18, 5),
(18, 6),
(19, 3),
(19, 4),
(19, 5),
(19, 6);

-- --------------------------------------------------------

--
-- Structure de la table `user_publication`
--

CREATE TABLE `user_publication` (
  `user_id` int(11) NOT NULL,
  `publication_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user_publication`
--

INSERT INTO `user_publication` (`user_id`, `publication_id`) VALUES
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 9),
(12, 3),
(12, 4),
(12, 6),
(14, 7),
(14, 8),
(14, 12),
(14, 14),
(15, 13),
(15, 14),
(16, 2),
(16, 5),
(16, 6),
(16, 7),
(17, 2),
(17, 8),
(19, 9),
(19, 10),
(19, 11),
(19, 12);

-- --------------------------------------------------------

--
-- Structure de la table `user_user`
--

CREATE TABLE `user_user` (
  `user_source` int(11) NOT NULL,
  `user_target` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user_user`
--

INSERT INTO `user_user` (`user_source`, `user_target`) VALUES
(15, 19),
(19, 15);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `activitie`
--
ALTER TABLE `activitie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `activitie_user`
--
ALTER TABLE `activitie_user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C8B28E4EB0ED4F5` (`activitie_id`),
  ADD KEY `IDX_C8B28E4A76ED395` (`user_id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `group`
--
ALTER TABLE `group`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `messenger`
--
ALTER TABLE `messenger`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_E22A4301F624B39D` (`sender_id`),
  ADD KEY `IDX_E22A4301CD53EDB6` (`receiver_id`);

--
-- Index pour la table `publication`
--
ALTER TABLE `publication`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_AF3C67797A45358C` (`groupe_id`);

--
-- Index pour la table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_794381C66061F7CF` (`sender_id_id`),
  ADD KEY `IDX_794381C6BA2E6344` (`received_id_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- Index pour la table `user_form`
--
ALTER TABLE `user_form`
  ADD PRIMARY KEY (`user_id`,`form_id`),
  ADD KEY `IDX_2809B186A76ED395` (`user_id`),
  ADD KEY `IDX_2809B1865FF69B7D` (`form_id`);

--
-- Index pour la table `user_group`
--
ALTER TABLE `user_group`
  ADD PRIMARY KEY (`user_id`,`group_id`),
  ADD KEY `IDX_8F02BF9DA76ED395` (`user_id`),
  ADD KEY `IDX_8F02BF9DFE54D947` (`group_id`);

--
-- Index pour la table `user_publication`
--
ALTER TABLE `user_publication`
  ADD PRIMARY KEY (`user_id`,`publication_id`),
  ADD KEY `IDX_627AEECA76ED395` (`user_id`),
  ADD KEY `IDX_627AEEC38B217A7` (`publication_id`);

--
-- Index pour la table `user_user`
--
ALTER TABLE `user_user`
  ADD PRIMARY KEY (`user_source`,`user_target`),
  ADD KEY `IDX_F7129A803AD8644E` (`user_source`),
  ADD KEY `IDX_F7129A80233D34C1` (`user_target`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `activitie`
--
ALTER TABLE `activitie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `activitie_user`
--
ALTER TABLE `activitie_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=154;

--
-- AUTO_INCREMENT pour la table `form`
--
ALTER TABLE `form`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `group`
--
ALTER TABLE `group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `messenger`
--
ALTER TABLE `messenger`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `publication`
--
ALTER TABLE `publication`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `activitie_user`
--
ALTER TABLE `activitie_user`
  ADD CONSTRAINT `FK_C8B28E4A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_C8B28E4EB0ED4F5` FOREIGN KEY (`activitie_id`) REFERENCES `activitie` (`id`);

--
-- Contraintes pour la table `messenger`
--
ALTER TABLE `messenger`
  ADD CONSTRAINT `FK_E22A4301CD53EDB6` FOREIGN KEY (`receiver_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_E22A4301F624B39D` FOREIGN KEY (`sender_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `publication`
--
ALTER TABLE `publication`
  ADD CONSTRAINT `FK_AF3C67797A45358C` FOREIGN KEY (`groupe_id`) REFERENCES `group` (`id`);

--
-- Contraintes pour la table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `FK_794381C66061F7CF` FOREIGN KEY (`sender_id_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_794381C6BA2E6344` FOREIGN KEY (`received_id_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `user_form`
--
ALTER TABLE `user_form`
  ADD CONSTRAINT `FK_2809B1865FF69B7D` FOREIGN KEY (`form_id`) REFERENCES `form` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_2809B186A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `user_group`
--
ALTER TABLE `user_group`
  ADD CONSTRAINT `FK_8F02BF9DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_8F02BF9DFE54D947` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `user_publication`
--
ALTER TABLE `user_publication`
  ADD CONSTRAINT `FK_627AEEC38B217A7` FOREIGN KEY (`publication_id`) REFERENCES `publication` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_627AEECA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `user_user`
--
ALTER TABLE `user_user`
  ADD CONSTRAINT `FK_F7129A80233D34C1` FOREIGN KEY (`user_target`) REFERENCES `user` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_F7129A803AD8644E` FOREIGN KEY (`user_source`) REFERENCES `user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
