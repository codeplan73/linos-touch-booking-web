/*
  Warnings:

  - You are about to alter the column `cleaning_status` on the `Booking` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(5))` to `Enum(EnumId(2))`.

*/
-- AlterTable
ALTER TABLE `Booking` ADD COLUMN `payment_currency` VARCHAR(10) NULL,
    ADD COLUMN `payment_date` VARCHAR(20) NULL,
    ADD COLUMN `payment_id` VARCHAR(255) NULL,
    ADD COLUMN `payment_intent` VARCHAR(255) NULL,
    ADD COLUMN `payment_method` VARCHAR(255) NULL,
    MODIFY `cleaning_status` ENUM('NEW', 'COMPLETED', 'ONGOING', 'CANCELED') NOT NULL DEFAULT 'NEW';
