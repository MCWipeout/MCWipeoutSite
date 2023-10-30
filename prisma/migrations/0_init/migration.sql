-- CreateTable
CREATE TABLE `wipeout_players` (
    `player` VARCHAR(36) NOT NULL,
    `map_1_time` BIGINT NULL,
    `map_2_time` BIGINT NULL,
    `map_3_time` BIGINT NULL,
    `map_4_time` BIGINT NULL,

    PRIMARY KEY (`player`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wipeout_teams` (
    `teamId` VARCHAR(32) NOT NULL,
    `map_1_time` BIGINT NULL,
    `map_2_time` BIGINT NULL,
    `map_3_time` BIGINT NULL,
    `map_4_time` BIGINT NULL,

    PRIMARY KEY (`teamId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

