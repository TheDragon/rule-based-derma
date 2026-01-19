// AUTO-GENERATED from Recommendations.xlsx
// Place this file at: prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Reset tables and sequences (dev only)
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE 
      "APPOINTMENT_REPORT",
      "SKIN_CONCERN_DIAGNOSIS_MAP",
      "KICKOUT",
      "LONGEVITY_TEMPLATE",
      "DIAGNOSIS_TEMPLATE",
      "PRODUCT"
    RESTART IDENTITY CASCADE;
  `);

  // 1) PRODUCT
  await prisma.product.createMany({
    data: [
      {
        id: 1,
        name: "Product A",
        description:
          "Imported from Recommendations.xlsx. Included in packages: Blemishes and Breakouts",
        shopifyUrl:
          "https://skinhappymd.com/products/4-hexyresorcinol-lightening-gel",
      },
      {
        id: 2,
        name: "Product B",
        description:
          "Imported from Recommendations.xlsx. Included in packages: Redness and Sensitivity Support, Athlete's Basic Skincare",
        shopifyUrl:
          "https://skinhappymd.com/products/a-to-zinc-total-skin-protection",
      },
      {
        id: 3,
        name: "Product C",
        description:
          'Imported from Recommendations.xlsx. Included in packages: "Aging, Sun Exposure, and Texture Support", Tween/Teen Package-Grow + Glow!',
        shopifyUrl: "https://skinhappymd.com/products/luminous-cleanser",
      },
      {
        id: 4,
        name: "Product D",
        description:
          "Imported from Recommendations.xlsx. Included in packages: Tween/Teen Package-Grow + Glow!, Preservation -Women age 20-40, Men's Basic Skincare",
        shopifyUrl: "",
      },
    ],
  });

  // 2) DIAGNOSIS_TEMPLATE (Packages)
  await prisma.diagnosisTemplate.createMany({
    data: [
      {
        id: 1,
        name: "Blemishes and Breakouts",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        visibilityInOptions: true,
        diagnosisMessage: "Recommended plan: Blemishes and Breakouts.",
        treatmentMessage:
          "Follow the AM/PM steps consistently as instructed.",
        products: [1, 2, 3],
        productUsage: {
          "1": {
            am: true,
            pm: false,
            stages: ["mix_products"],
            instructions:
              '[Add to list: "Mix together and apply all over the face:"]',
            notes: "",
          },
          "2": {
            am: true,
            pm: false,
            stages: ["sunblock_foundation"],
            instructions:
              "Apply A to Zinc Total Skin Protection to completely cover your face and neck. Re-apply at midday, especially when spending time in the sun.",
            notes:
              "Feel free to swap this out with a favorite sunblock if you have one that already works well for your skin. Check out our guide (link) to choosing sunscreens with optimal UVA/UVB protection.",
          },
          "3": {
            am: true,
            pm: true,
            stages: ["cleansing"],
            instructions:
              "Use AHA/BHA Luminous Glow Cleanser to gently cleanse the face.",
            notes:
              "You can swap this product for Exomere Tea Tree Bubble Cleanser if you prefer (add more details?)",
          },
        },
        notes: "",
        additionalInfoHtml: "",
      },
      {
        id: 2,
        name: "Tween/Teen Package: Grow + Glow!",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        visibilityInOptions: true,
        diagnosisMessage:
          "Recommended plan: Tween/Teen Package: Grow + Glow!.",
        treatmentMessage:
          "Follow the AM/PM steps consistently as instructed.",
        products: [1, 2],
        productUsage: {
          "1": {
            am: true,
            pm: false,
            stages: ["mix_products"],
            instructions:
              '[Add to list: "Mix together and apply all over the face:"]',
            notes: "",
          },
          "2": {
            am: true,
            pm: false,
            stages: ["sunblock_foundation"],
            instructions:
              "Apply A to Zinc Total Skin Protection to completely cover your face and neck. Re-apply at midday, especially when spending time in the sun.",
            notes:
              "Feel free to swap this out with a favorite sunblock if you have one that already works well for your skin. Check out our guide (link) to choosing sunscreens with optimal UVA/UVB protection.",
          },
        },
        notes: "",
        additionalInfoHtml: "",
      },
      {
        id: 3,
        name: "Preservation: Women age 20-40",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        visibilityInOptions: true,
        diagnosisMessage:
          "Recommended plan: Preservation: Women age 20-40.",
        treatmentMessage:
          "Follow the AM/PM steps consistently as instructed.",
        products: [1, 2],
        productUsage: {
          "1": {
            am: true,
            pm: false,
            stages: ["mix_products"],
            instructions:
              '[Add to list: "Mix together and apply all over the face:"]',
            notes: "",
          },
          "2": {
            am: true,
            pm: false,
            stages: ["sunblock_foundation"],
            instructions:
              "Apply A to Zinc Total Skin Protection to completely cover your face and neck. Re-apply at midday, especially when spending time in the sun.",
            notes:
              "Feel free to swap this out with a favorite sunblock if you have one that already works well for your skin. Check out our guide (link) to choosing sunscreens with optimal UVA/UVB protection.",
          },
        },
        notes: "",
        additionalInfoHtml: "",
      },
      {
        id: 4,
        name: "Rejuvenation: Women age 40+",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        visibilityInOptions: true,
        diagnosisMessage:
          "Recommended plan: Rejuvenation: Women age 40+.",
        treatmentMessage:
          "Follow the AM/PM steps consistently as instructed.",
        products: [3, 4],
        productUsage: {
          "3": {
            am: true,
            pm: true,
            stages: ["cleansing"],
            instructions:
              "Use AHA/BHA Luminous Glow Cleanser to gently cleanse the face.",
            notes:
              "You can swap this product for Exomere Tea Tree Bubble Cleanser if you prefer (add more details?)",
          },
          "4": { am: false, pm: false, stages: [], instructions: "", notes: "" },
        },
        notes: "",
        additionalInfoHtml: "",
      },
      {
        id: 5,
        name: "Men's Basic Skincare",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        visibilityInOptions: true,
        diagnosisMessage:
          "Recommended plan: Men's Basic Skincare.",
        treatmentMessage:
          "Follow the AM/PM steps consistently as instructed.",
        products: [2, 1],
        productUsage: {
          "2": {
            am: true,
            pm: false,
            stages: ["sunblock_foundation"],
            instructions:
              "Apply A to Zinc Total Skin Protection to completely cover your face and neck. Re-apply at midday, especially when spending time in the sun.",
            notes:
              "Feel free to swap this out with a favorite sunblock if you have one that already works well for your skin. Check out our guide (link) to choosing sunscreens with optimal UVA/UVB protection.",
          },
          "1": {
            am: true,
            pm: false,
            stages: ["mix_products"],
            instructions:
              '[Add to list: "Mix together and apply all over the face:"]',
            notes: "",
          },
        },
        notes: "",
        additionalInfoHtml: "",
      },
      {
        id: 6,
        name: "Athlete's Basic Skincare",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        visibilityInOptions: true,
        diagnosisMessage:
          "Recommended plan: Athlete's Basic Skincare.",
        treatmentMessage:
          "Follow the AM/PM steps consistently as instructed.",
        products: [4, 2],
        productUsage: {
          "4": { am: false, pm: false, stages: [], instructions: "", notes: "" },
          "2": {
            am: true,
            pm: false,
            stages: ["sunblock_foundation"],
            instructions:
              "Apply A to Zinc Total Skin Protection to completely cover your face and neck. Re-apply at midday, especially when spending time in the sun.",
            notes:
              "Feel free to swap this out with a favorite sunblock if you have one that already works well for your skin. Check out our guide (link) to choosing sunscreens with optimal UVA/UVB protection.",
          },
        },
        notes: "",
        additionalInfoHtml: "",
      },
    ],
  });

  // 3) LONGEVITY_TEMPLATE
  await prisma.longevityTemplate.createMany({
    data: [
      {
        id: 1,
        name: "Longevity & prevention",
        description:
          "I'm interested in healthy aging and preventing health issues over time.",
        aditionalText: "",
        products: {
          supplements:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
        behavioralModification:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        inofficeTreatment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      },
      {
        id: 2,
        name: "Looking older than I feel",
        description:
          "My face looks older than my age, and I’d like support with that.",
        aditionalText: "",
        products: {
          supplements:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
        behavioralModification:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        inofficeTreatment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      },
      {
        id: 3,
        name: "Gut health",
        description:
          "I'm experiencing digestive or gut-related issues and want support.",
        aditionalText: "",
        products: {
          supplements:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        },
        behavioralModification:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
        inofficeTreatment:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      },
    ],
  });

  // 4) KICKOUT (starter)
  await prisma.kickout.createMany({
    data: [
      {
        id: 1,
        title: "Under 18",
        message:
          "Please have a guardian complete this or schedule a clinician visit.",
      },
      {
        id: 2,
        title: "Red flag symptoms",
        message:
          "Based on your answer, you are a better candidate for in-person care. Please contact your medical provider.",
      },
    ],
  });

  // 5) SKIN_CONCERN_DIAGNOSIS_MAP (starter rules you can edit in Prisma Studio)
  await prisma.skinConcernDiagnosisMap.createMany({
    data: [
      {
        concernName: "Underage kickout",
        rules: {
          version: 1,
          enabled: true,
          conditions: { all: [{ op: "equals", fact: "age_band", value: "under_18" }] },
          effect: { kickout_id: 1 },
        },
      },
      {
        concernName: "Red flags kickout",
        rules: {
          version: 1,
          enabled: true,
          conditions: { all: [{ op: "equals", fact: "red_flags", value: "yes" }] },
          effect: { kickout_id: 2 },
        },
      },
      {
        concernName: "Skin goals: acne breakouts",
        rules: {
          version: 1,
          enabled: true,
          conditions: {
            all: [{ op: "includes", fact: "skin_goals", value: "acne_breakouts" }],
          },
          effect: { diagnosis_ids: [1] },
        },
      },
      {
        concernName: "Age 18-24 or guardian teen + glow/help",
        rules: {
          version: 1,
          enabled: true,
          conditions: {
            all: [
              { op: "in", fact: "age_band", value: ["18_24", "guardian_teen_13_17"] },
              { op: "in", fact: "skin_goals", value: ["overall_glow", "help_me_choose"] },
            ],
          },
          effect: { diagnosis_ids: [2] },
        },
      },
      {
        concernName: "Women 24-40 with glow/lines/help",
        rules: {
          version: 1,
          enabled: true,
          conditions: {
            all: [
              { op: "equals", fact: "gender", value: "female" },
              { op: "equals", fact: "age_band", value: "24_40" },
              {
                op: "in",
                fact: "skin_goals",
                value: ["fine_lines_wrinkles", "overall_glow", "help_me_choose"],
              },
            ],
          },
          effect: { diagnosis_ids: [3] },
        },
      },
      {
        concernName: "Women 40+ with glow/lines/help",
        rules: {
          version: 1,
          enabled: true,
          conditions: {
            all: [
              { op: "equals", fact: "gender", value: "female" },
              { op: "in", fact: "age_band", value: ["40_60", "60_plus"] },
              {
                op: "in",
                fact: "skin_goals",
                value: ["fine_lines_wrinkles", "overall_glow", "help_me_choose"],
              },
            ],
          },
          effect: { diagnosis_ids: [4] },
        },
      },
      {
        concernName: "Men with glow/lines/help",
        rules: {
          version: 1,
          enabled: true,
          conditions: {
            all: [
              { op: "equals", fact: "gender", value: "male" },
              { op: "in", fact: "age_band", value: ["18_24", "24_40", "40_60", "60_plus"] },
              {
                op: "in",
                fact: "skin_goals",
                value: ["fine_lines_wrinkles", "overall_glow", "help_me_choose"],
              },
            ],
          },
          effect: { diagnosis_ids: [5] },
        },
      },
      {
        concernName: "Athlete program",
        rules: {
          version: 1,
          enabled: true,
          conditions: { all: [{ op: "equals", fact: "athlete", value: "active_most_days" }] },
          effect: { diagnosis_ids: [6] },
        },
      },
      {
        concernName: "Longevity: prevention",
        rules: {
          version: 1,
          enabled: true,
          conditions: {
            all: [
              { op: "includes", fact: "longevity_interests", value: "longevity_prevention" },
            ],
          },
          effect: { longevity_ids: [1] },
        },
      },
      {
        concernName: "Longevity: looking older",
        rules: {
          version: 1,
          enabled: true,
          conditions: {
            all: [{ op: "includes", fact: "longevity_interests", value: "looking_older" }],
          },
          effect: { longevity_ids: [2] },
        },
      },
      {
        concernName: "Longevity: gut health",
        rules: {
          version: 1,
          enabled: true,
          conditions: {
            all: [{ op: "includes", fact: "longevity_interests", value: "gut_health" }],
          },
          effect: { longevity_ids: [3] },
        },
      },
    ],
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
