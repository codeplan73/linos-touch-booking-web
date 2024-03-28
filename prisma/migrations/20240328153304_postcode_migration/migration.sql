/*
  Warnings:

  - You are about to drop the column `postal_code` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `postcode` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Booking` DROP COLUMN `postal_code`,
    ADD COLUMN `postcode` VARCHAR(50) NOT NULL;
