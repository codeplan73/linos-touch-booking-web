/*
  Warnings:

  - Made the column `status` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `status` ENUM('AVAILABLE', 'ASSIGNED') NOT NULL DEFAULT 'AVAILABLE';
