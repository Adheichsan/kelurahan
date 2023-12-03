/*
  Warnings:

  - You are about to drop the column `createdAt` on the `agenda` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `berita` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `pengumuman` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `agenda` DROP COLUMN `createdAt`;

-- AlterTable
ALTER TABLE `berita` DROP COLUMN `createdAt`;

-- AlterTable
ALTER TABLE `pengumuman` DROP COLUMN `createdAt`;
