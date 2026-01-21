/*
  Warnings:

  - You are about to drop the column `video_ids` on the `APPOINTMENT_REPORT` table. All the data in the column will be lost.
  - You are about to drop the column `additional_info_html` on the `DIAGNOSIS_TEMPLATE` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `DIAGNOSIS_TEMPLATE` table. All the data in the column will be lost.
  - You are about to drop the column `product_usage` on the `DIAGNOSIS_TEMPLATE` table. All the data in the column will be lost.
  - You are about to drop the column `treatment_message` on the `DIAGNOSIS_TEMPLATE` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `PRODUCT` table. All the data in the column will be lost.
  - Added the required column `comment` to the `DIAGNOSIS_TEMPLATE` table without a default value. This is not possible if the table is not empty.
  - Added the required column `treatment_instruction` to the `DIAGNOSIS_TEMPLATE` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diagnosis_id` to the `PRODUCT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notes` to the `PRODUCT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_description` to the `PRODUCT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_instructions` to the `PRODUCT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stage` to the `PRODUCT` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('single_select', 'multi_select', 'text', 'number', 'boolean', 'date');

-- CreateEnum
CREATE TYPE "ApplicationStage" AS ENUM ('cleansing', 'mix_products', 'sunblock_foundation');

-- AlterTable
ALTER TABLE "APPOINTMENT_REPORT" DROP COLUMN "video_ids";

-- AlterTable
ALTER TABLE "DIAGNOSIS_TEMPLATE" DROP COLUMN "additional_info_html",
DROP COLUMN "notes",
DROP COLUMN "product_usage",
DROP COLUMN "treatment_message",
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "treatment_instruction" TEXT NOT NULL,
ADD COLUMN     "video_ids" INTEGER[];

-- AlterTable
ALTER TABLE "PRODUCT" DROP COLUMN "description",
ADD COLUMN     "diagnosis_id" INTEGER NOT NULL,
ADD COLUMN     "notes" TEXT NOT NULL,
ADD COLUMN     "product_description" TEXT NOT NULL,
ADD COLUMN     "product_instructions" TEXT NOT NULL,
ADD COLUMN     "product_type" TEXT[],
ADD COLUMN     "stage" "ApplicationStage" NOT NULL;

-- CreateTable
CREATE TABLE "USER" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date-of-birth" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "user_link" TEXT NOT NULL,

    CONSTRAINT "USER_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CATEGORY" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "questions" JSONB NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CATEGORY_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QUESTION" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "QuestionType" NOT NULL,
    "isRequired" BOOLEAN NOT NULL,
    "options" JSONB NOT NULL,
    "config" JSONB NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "QUESTION_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "APPOINTMENT" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "APPOINTMENT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ANSWER" (
    "id" TEXT NOT NULL,
    "apppointment_id" TEXT NOT NULL,
    "question_id" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ANSWER_pkey" PRIMARY KEY ("id")
);
