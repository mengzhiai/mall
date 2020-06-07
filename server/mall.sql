/*
 Navicat Premium Data Transfer

 Source Server         : lucky
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : mall

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 08/06/2020 00:31:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES ('1d863e1a-a8a7-11ea-8867-00ff025c65a2', 'test', '11111111');
INSERT INTO `login` VALUES ('39216bc4-a8a7-11ea-8867-00ff025c65a2', 'fdsafds', 'ffffffffffffff');
INSERT INTO `login` VALUES ('745ba3fd-a8a6-11ea-8867-00ff025c65a2', 'my', 'abcdefg123');
INSERT INTO `login` VALUES ('a16e2f2a-a8a6-11ea-8867-00ff025c65a2', 'my', 'abcdefg123');
INSERT INTO `login` VALUES ('b7bdbfa2-a8a6-11ea-8867-00ff025c65a2', 'my', 'abcdefg123');
INSERT INTO `login` VALUES ('d5b37846-a8a9-11ea-8867-00ff025c65a2', 'abcd', 'abcdefgh');
INSERT INTO `login` VALUES ('uuid()', 'my', 'abcdefg123');

SET FOREIGN_KEY_CHECKS = 1;
