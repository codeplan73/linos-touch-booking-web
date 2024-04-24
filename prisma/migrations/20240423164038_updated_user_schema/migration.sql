-- AlterTable
ALTER TABLE `User` ADD COLUMN `dob` VARCHAR(191) NULL,
    ADD COLUMN `employee_id` VARCHAR(191) NULL,
    ADD COLUMN `employment_date` VARCHAR(191) NULL,
    ADD COLUMN `employment_type` VARCHAR(50) NULL,
    ADD COLUMN `gender` VARCHAR(191) NULL,
    ADD COLUMN `marital_status` VARCHAR(191) NULL,
    ADD COLUMN `nationality` VARCHAR(191) NULL,
    ADD COLUMN `postal_code` VARCHAR(191) NULL,
    ADD COLUMN `status` VARCHAR(50) NULL,
    ADD COLUMN `working_days` VARCHAR(191) NULL;
