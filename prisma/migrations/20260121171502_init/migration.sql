-- CreateTable
CREATE TABLE "DIAGNOSIS_TEMPLATE" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "visibility_in_options" BOOLEAN NOT NULL,
    "diagnosis_message" TEXT NOT NULL,
    "treatment_message" TEXT NOT NULL,
    "products" JSONB NOT NULL,
    "product_usage" JSONB NOT NULL,
    "notes" TEXT NOT NULL,
    "additional_info_html" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DIAGNOSIS_TEMPLATE_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LONGEVITY_TEMPLATE" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aditional_text" TEXT NOT NULL,
    "products" JSONB NOT NULL,
    "behavioral_modification" TEXT NOT NULL,
    "inoffice_treatment" TEXT NOT NULL,

    CONSTRAINT "LONGEVITY_TEMPLATE_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PRODUCT" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "shopify_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PRODUCT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KICKOUT" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "KICKOUT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SKIN_CONCERN_DIAGNOSIS_MAP" (
    "id" SERIAL NOT NULL,
    "concern_name" TEXT NOT NULL,
    "rules" JSONB NOT NULL,

    CONSTRAINT "SKIN_CONCERN_DIAGNOSIS_MAP_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "APPOINTMENT_REPORT" (
    "id" SERIAL NOT NULL,
    "appointment_id" INTEGER NOT NULL,
    "diagnosis_ids" INTEGER[],
    "longevity_ids" INTEGER[],
    "video_ids" INTEGER[],
    "kickout_id" INTEGER,

    CONSTRAINT "APPOINTMENT_REPORT_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "APPOINTMENT_REPORT_appointment_id_key" ON "APPOINTMENT_REPORT"("appointment_id");
