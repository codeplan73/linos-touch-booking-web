-- CreateTable
CREATE TABLE `Pricing` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `hourly_rate` INTEGER NOT NULL,
    `bedroom_count` INTEGER NOT NULL,
    `bathroom_count` INTEGER NOT NULL,
    `standard` INTEGER NOT NULL,
    `deep_clean` INTEGER NOT NULL,
    `move_in_out` INTEGER NOT NULL,
    `post_construction` INTEGER NOT NULL,
    `extra_task` INTEGER NOT NULL,
    `bring_our_own_materials` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
