CREATE TABLE `Groups`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Name` INT NOT NULL
);
ALTER TABLE
    `Groups` ADD PRIMARY KEY `groups_id_primary`(`id`);
CREATE TABLE `Parental contact information`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `First_name` INT NOT NULL,
    `Last_name` INT NOT NULL,
    `Paid` INT NOT NULL,
    `Gmail` INT NOT NULL,
    `Phone` INT NOT NULL
);
ALTER TABLE
    `Parental contact information` ADD PRIMARY KEY `parental contact information_id_primary`(`id`);
CREATE TABLE `Training`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Date` DATETIME NOT NULL,
    `Description` INT NOT NULL
);
ALTER TABLE
    `Training` ADD PRIMARY KEY `training_id_primary`(`id`);
CREATE TABLE `Player`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Name` INT NOT NULL,
    `Number` INT NOT NULL,
    `Personal_Code` INT NOT NULL COMMENT 'id code',
    `Parental name/Guardian name` INT NOT NULL,
    `Parent_ID` INT NOT NULL,
    `Group_id` INT NOT NULL
);
ALTER TABLE
    `Player` ADD PRIMARY KEY `player_id_primary`(`id`);
CREATE TABLE `Contact`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` INT NOT NULL,
    `contact_type_id` INT NOT NULL,
    `value` INT NOT NULL,
    `parent_id` INT NOT NULL
);
ALTER TABLE
    `Contact` ADD PRIMARY KEY `contact_id_primary`(`id`);
CREATE TABLE `ContactType`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` INT NOT NULL
);
ALTER TABLE
    `ContactType` ADD PRIMARY KEY `contacttype_id_primary`(`id`);
CREATE TABLE `Payment`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Player_id` INT NOT NULL,
    `Amount` INT NOT NULL,
    `Date` INT NOT NULL
);
ALTER TABLE
    `Payment` ADD PRIMARY KEY `payment_id_primary`(`id`);
CREATE TABLE `Attendence`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Player_id` INT NOT NULL,
    `Training_id` INT NOT NULL
);
ALTER TABLE
    `Attendence` ADD PRIMARY KEY `attendence_id_primary`(`id`);
CREATE TABLE `Test`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Date` INT NOT NULL,
    `Player_id` INT NOT NULL,
    `Score` INT NOT NULL,
    `Name` INT NOT NULL,
    `Desc` INT NOT NULL
);
ALTER TABLE
    `Test` ADD PRIMARY KEY `test_id_primary`(`id`);
ALTER TABLE
    `Player` ADD CONSTRAINT `player_group_id_foreign` FOREIGN KEY(`Group_id`) REFERENCES `Groups`(`id`);
ALTER TABLE
    `Player` ADD CONSTRAINT `player_parent_id_foreign` FOREIGN KEY(`Parent_ID`) REFERENCES `Parental contact information`(`id`);
ALTER TABLE
    `Contact` ADD CONSTRAINT `contact_contact_type_id_foreign` FOREIGN KEY(`contact_type_id`) REFERENCES `ContactType`(`id`);
ALTER TABLE
    `Contact` ADD CONSTRAINT `contact_parent_id_foreign` FOREIGN KEY(`parent_id`) REFERENCES `Parental contact information`(`id`);
ALTER TABLE
    `Payment` ADD CONSTRAINT `payment_player_id_foreign` FOREIGN KEY(`Player_id`) REFERENCES `Player`(`id`);
ALTER TABLE
    `Attendence` ADD CONSTRAINT `attendence_player_id_foreign` FOREIGN KEY(`Player_id`) REFERENCES `Player`(`id`);
ALTER TABLE
    `Attendence` ADD CONSTRAINT `attendence_training_id_foreign` FOREIGN KEY(`Training_id`) REFERENCES `Training`(`id`);
