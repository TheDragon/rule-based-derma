import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const QUESTIONS = [
  {
    id: "gender",
    categoryId: "default",
    orderIndex: 1,
    text: "Gender",
    description: "",
    type: "single_select",
    isRequired: true,
    options: {
      items: [
        { index: 0, label: "Female" },
        { index: 1, label: "Male" },
        { index: 2, label: "Other" },
        { index: 3, label: "Prefer not to say" },
      ],
    },
    config: {},
    isActive: true,
  },
  {
    id: "age_range",
    categoryId: "default",
    orderIndex: 2,
    text: "Age Range",
    description: "",
    type: "single_select",
    isRequired: true,
    options: {
      items: [
        { index: 0, label: "Under 18" },
        { index: 1, label: "18-24" },
        { index: 2, label: "24-40" },
        { index: 3, label: "40-60" },
        { index: 4, label: "60+" },
        { index: 5, label: "I'm onboarding as a guardian for my teen (13-17)" },
      ],
    },
    config: {
      triggers: {
        underageKickoutIndexes: [0],
        guardianTeenIndexes: [5],
      },
    },
    isActive: true,
  },
  {
    id: "skin_goals",
    categoryId: "default",
    orderIndex: 3,
    text: "What are your skin goals? (Select all that apply)",
    description: "",
    type: "multi_select",
    isRequired: true,
    options: {
      items: [
        { index: 0, label: "Fight blemishes and acne breakouts" },
        { index: 1, label: "Reduce redness and sensitivity" },
        { index: 2, label: "Even out skin tone, dark spots, and discoloration" },
        { index: 3, label: "Reduce fine lines and wrinkles" },
        { index: 4, label: "Enhance your overall glow and confidence" },
        { index: 5, label: "Not sure - help me choose" },
      ],
    },
    config: {},
    isActive: true,
  },
  {
    id: "skin_daily_feel",
    categoryId: "default",
    orderIndex: 4,
    text: "How would you describe your skin most days? (Select all that apply)",
    description: "",
    type: "multi_select",
    isRequired: true,
    options: {
      items: [
        { index: 0, label: "Oily/Shiny" },
        { index: 1, label: "Dry/Tight" },
        { index: 2, label: "Sensitive/Reactive" },
        { index: 3, label: "Feels balanced" },
        { index: 4, label: "Changes by the season" },
      ],
    },
    config: {},
    isActive: true,
  },
  {
    id: "sunscreen_frequency",
    categoryId: "default",
    orderIndex: 5,
    text: "How often do you wear sunscreen?",
    description: "",
    type: "single_select",
    isRequired: true,
    options: {
      items: [
        { index: 0, label: "Daily" },
        { index: 1, label: "When I'm planning to be outside" },
        { index: 2, label: "Sometimes" },
        { index: 3, label: "Rarely" },
        { index: 4, label: "Never" },
      ],
    },
    config: {},
    isActive: true,
  },
  {
    id: "past_treatments",
    categoryId: "default",
    orderIndex: 6,
    text: "Have you tried any of the following skin treatments in the past? (Optional)",
    description: "",
    type: "multi_select",
    isRequired: false,
    options: {
      items: [
        { index: 0, label: "Retinoids/retinol" },
        { index: 1, label: "Vitamin C/antioxidants" },
        { index: 2, label: "Exfoliating acids (AHA/BHA)" },
        { index: 3, label: "Benzoyl peroxide" },
        { index: 4, label: "Azelaic acid" },
        { index: 5, label: "Hydroquinone/brighteners" },
        { index: 6, label: "Growth factors/peptides" },
        { index: 7, label: "Facials or other in-person cosmetic procedures" },
        { index: 8, label: "I'm not sure what I've tried" },
        { index: 9, label: "None" },
      ],
    },
    config: {
      exclusiveIndexes: [8, 9],
    },
    isActive: true,
  },
  {
    id: "typical_day",
    categoryId: "default",
    orderIndex: 7,
    text: "What does your typical day look like?",
    description: "",
    type: "single_select",
    isRequired: true,
    options: {
      items: [
        { index: 0, label: "Mostly indoors" },
        { index: 1, label: "Outdoors frequently" },
        { index: 2, label: "Mixed" },
      ],
    },
    config: {},
    isActive: true,
  },
  {
    id: "athlete_activity",
    categoryId: "default",
    orderIndex: 8,
    text: "Are you an athlete?",
    description: "",
    type: "single_select",
    isRequired: true,
    options: {
      items: [
        { index: 0, label: "I am sweating and active most days" },
        { index: 1, label: "I occasionally work out" },
        { index: 2, label: "I don't frequently exercise" },
      ],
    },
    config: {},
    isActive: true,
  },
  {
    id: "makeup",
    categoryId: "default",
    orderIndex: 9,
    text: "Do you wear makeup?",
    description: "",
    type: "single_select",
    isRequired: true,
    options: {
      items: [
        { index: 0, label: "Yes" },
        { index: 1, label: "No" },
        {
          index: 2,
          label:
            "(Optional) Please show me makeup recommendations that are dermatologist-vetted and approved for all skin types",
        },
      ],
    },
    config: {},
    isActive: true,
  },
  {
    id: "longevity_symptoms",
    categoryId: "default",
    orderIndex: 10,
    text: "Are you interested in longevity recommendations related to any of the following symptoms?",
    description: "",
    type: "multi_select",
    isRequired: false,
    options: {
      items: [
        { index: 0, label: "Longevity & prevention" },
        { index: 1, label: "Looking older than I feel" },
        { index: 2, label: "Joint discomfort" },
        { index: 3, label: "Low energy/stamina" },
        { index: 4, label: "Bouncing back after illness" },
        { index: 5, label: "Bouncing back after injury" },
        { index: 6, label: "Sleep challenges" },
        { index: 7, label: "Brain fog" },
        { index: 8, label: "Hormone changes" },
        { index: 9, label: "Thyroid concerns" },
        { index: 10, label: "Skin cancer prevention" },
        { index: 11, label: "Weight support" },
        { index: 12, label: "Stress/anxiety" },
        { index: 13, label: "Gut health" },
      ],
    },
    config: {},
    isActive: true,
  },
  {
    id: "red_flags",
    categoryId: "default",
    orderIndex: 11,
    text: "Are you experiencing any of the following?",
    description: "",
    type: "multi_select",
    isRequired: true,
    options: {
      items: [
        {
          index: 0,
          label: "Severe swelling, blistering, or rapidly worsening rash",
        },
        { index: 1, label: "Eye involvement" },
        { index: 2, label: "Significant pain" },
        { index: 3, label: "Open sores or bleeding that won't stop" },
        { index: 4, label: "Fever or feeling unwell with a new skin issue" },
        { index: 5, label: "None of the above" },
      ],
    },
    config: {
      exclusiveIndexes: [5],
      urgentIndexes: [0, 1, 2, 3, 4],
    },
    isActive: true,
  },
] as const;

/**
 * Bucketing strategy (simple + deterministic):
 * - ESSENTIAL: first 2 items
 * - NECESSARY: next 2 items
 * - OPTIONAL: remaining items
 * If <= 3 items: all ESSENTIAL
 */
function bucketByOrder(productNames: string[]) {
  const names = productNames.map((s) => s.trim()).filter(Boolean);

  if (names.length <= 3) {
    return {
      ESSENTIAL: names,
      NECESSARY: [],
      OPTIONAL: [],
    };
  }

  return {
    ESSENTIAL: names.slice(0, 2),
    NECESSARY: names.slice(2, 4),
    OPTIONAL: names.slice(4),
  };
}

function parseProducts(csv: string) {
  return csv.split(",").map((s) => s.trim()).filter(Boolean);
}

function buildProductsJson(productNames: string[]) {
  const buckets = bucketByOrder(productNames);

  return {
    // This shape matches your sample (products + product_usage) but we store names for now.
    // When you have a Product table, you can replace product_names with product IDs.
    products: [
      { product_type: "ESSENTIAL", products: [], product_names: buckets.ESSENTIAL },
      { product_type: "NECESSARY", products: [], product_names: buckets.NECESSARY },
      { product_type: "OPTIONAL", products: [], product_names: buckets.OPTIONAL },
    ],
    product_usage: [
      { routine_type: "MORNING", message: "Cleanse -> Treat -> Moisturize -> SPF" },
      { routine_type: "EVENING", message: "Gentle cleanse -> Treat -> Moisturize" },
      { routine_type: "OVERALL", message: "Introduce actives slowly; stop if irritation." },
    ],
    notes: {
      bucketing_rule: "first2=ESSENTIAL, next2=NECESSARY, rest=OPTIONAL (<=3 all ESSENTIAL)",
      todo: "Map product_names to product IDs once Product table exists.",
    },
  };
}

const NOW = new Date();

const DIAGNOSIS_TEMPLATES = [
  {
    id: 1,
    name: "Blemishes and Breakouts",
    description: "For clogged pores, shine, and breakouts",
    visibilityInOptions: true,
    diagnosisMessage:
      "Your answers suggest you may benefit from a routine focused on breakouts, clogged pores, and oil control.",
    treatmentInstruction:
      "Start simple: cleanse + moisturize + SPF. Add exfoliating/treatment products gradually (2-3x/week), then increase if tolerated.",
    products: buildProductsJson(
      parseProducts(
        "Exfoliating Pads, SkinHappy Solution 5: Gentle Retinoid Repair, Overnight Zit Eraser, Encapsulated 0.5% Retinol Complex, Elta MD UV Clear Broad-Spectrum SPF 46+ Sunscreen (Tinted), AHA/BHA Luminous Glow Cleanser, Exomere Lifting Shot Soothing Gel, 4 Hexylresorcinol Lightening Gel"
      )
    ),
    comment: "Buckets auto-assigned by order; review ESSENTIAL/NECESSARY/OPTIONAL later.",
    videoIds: [] as number[],
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 2,
    name: "Redness and Sensitivity Support",
    description: "For visible redness and reactive skin",
    visibilityInOptions: true,
    diagnosisMessage:
      "Your answers suggest sensitivity/redness support may help strengthen your skin barrier and calm reactivity.",
    treatmentInstruction:
      "Prioritize gentle cleansing and barrier support. Introduce any active slowly and avoid stacking too many actives at once.",
    products: buildProductsJson(
      parseProducts(
        "Rosehip Regenerative Balancing Cleanser, Exomere Aroma Healing Mist, SkinHappy Solution 5: Gentle Retinoid Repair, Vitamin B3+ Stay Ageless Repair Serum, Elta MD UV Clear Broad-Spectrum SPF 46+ Sunscreen (Tinted), Exomere Recovery Balm, Vitality Cream with Arnica"
      )
    ),
    comment: "Buckets auto-assigned by order; review later.",
    videoIds: [] as number[],
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 3,
    name: "Uneven Skin Tone and Dark Spots",
    description: "For dark spots and uneven tone",
    visibilityInOptions: true,
    diagnosisMessage:
      "Your answers suggest a routine targeting uneven tone and dark spots may be helpful.",
    treatmentInstruction:
      "Be consistent with SPF daily. Introduce brightening/active products gradually and avoid over-exfoliating.",
    products: buildProductsJson(
      parseProducts(
        "SkinHappy Solution 5: Gentle Retinoid Repair, C++ Antioxidant Serum - 1 fl oz., 4 Hexylresorcinol Lightening Gel, Elta MD UV Clear Broad-Spectrum SPF 46+ Sunscreen (Tinted), Exomere Aroma Healing Mist, AHA/BHA Luminous Glow Cleanser, Exomere Ceramide Recell Cream, Exomere Glutathion Melashot Solution"
      )
    ),
    comment: "Buckets auto-assigned by order; review later.",
    videoIds: [] as number[],
    createdAt: NOW,
    updatedAt: NOW,
  },
  // IMPORTANT: keep id=4 aligned to your earlier example rule (female + 40_60/60_plus -> diagnosis_ids [4])
  {
    id: 4,
    name: "Rejuvenation: Women age 40+",
    description: "Targeted essentials for dryness, texture, and a more resilient-looking glow",
    visibilityInOptions: true,
    diagnosisMessage:
      "Based on your age band and goals, a more supportive routine for texture, dryness, and resilience may fit you well.",
    treatmentInstruction:
      "Keep the base routine consistent (cleanse, moisturize, SPF). Add targeted treatments gradually and avoid irritation by spacing actives.",
    products: buildProductsJson(
      parseProducts(
        "Exomere Aroma Healing Mist, SkinHappy Solution 5: Gentle Retinoid Repair, Vitamin B3+ Stay Ageless Repair Serum, C++ Antioxidant Serum - 1 fl oz., Elta MD UV Clear Broad-Spectrum SPF 46+ Sunscreen (Tinted), Exomere Recovery Balm, Exomere Ceramide Recell Cream, Exomere Tea Tree Bubble Cleanser, Exomere Glutathion Melashot Solution"
      )
    ),
    comment: "Buckets auto-assigned by order; review later.",
    videoIds: [] as number[],
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 5,
    name: "Aging, Sun Exposure, and Texture Support",
    description: "For rough texture and dullness",
    visibilityInOptions: true,
    diagnosisMessage:
      "Your answers suggest support for texture, dullness, and sun-exposure concerns may be beneficial.",
    treatmentInstruction:
      "Use SPF daily. Add actives gradually and keep the routine simple enough to stay consistent long-term.",
    products: buildProductsJson(
      parseProducts(
        "Exomere Aroma Healing Mist, SkinHappy Solution 5: Gentle Retinoid Repair, Vitamin B3+ Stay Ageless Repair Serum, C++ Antioxidant Serum - 1 fl oz., Vitality Cream with Arnica, Exomere Implant Solution, AHA/BHA Luminous Glow Cleanser, Exomere Ceramide Recell Cream, Elta MD UV Clear Broad-Spectrum SPF 46+ Sunscreen (Tinted), Exomere Glutathion Melashot Solution"
      )
    ),
    comment: "Buckets auto-assigned by order; review later.",
    videoIds: [] as number[],
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 6,
    name: "Tween/Teen Package: Grow + Glow!",
    description:
      "A gentle starter routine to control breakouts and enhance the glow of growing skin",
    visibilityInOptions: true,
    diagnosisMessage:
      "A gentle starter routine can help manage breakouts while supporting healthy-looking skin.",
    treatmentInstruction:
      "Keep it gentle and consistent. Avoid harsh over-exfoliation and introduce treatments slowly.",
    products: buildProductsJson(
      parseProducts(
        "Exomere Tea Tree Bubble Cleanser, Exfoliating Pads, Exomere Aroma Healing Mist, SkinHappy Solution 5: Gentle Retinoid Repair, Overnight Zit Eraser, Elta MD UV Clear Broad-Spectrum SPF 46+ Sunscreen (Tinted), Exomere Recovery Balm, Exomere Rose Garden Mask Pack"
      )
    ),
    comment: "Buckets auto-assigned by order; review later.",
    videoIds: [] as number[],
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 7,
    name: "Preservation: Women age 20-40",
    description: "Daily essentials to keep skin looking fresh, hydrated, and radiant",
    visibilityInOptions: true,
    diagnosisMessage:
      "A daily essentials routine can support hydration, radiance, and prevention-focused care.",
    treatmentInstruction:
      "Stick to the basics daily (cleanse, moisturize, SPF) and add targeted products only if needed.",
    products: buildProductsJson(
      parseProducts(
        "Exomere Aroma Healing Mist, SkinHappy Solution 5: Gentle Retinoid Repair, C++ Antioxidant Serum - 1 fl oz., Elta MD UV Clear Broad-Spectrum SPF 46+ Sunscreen (Tinted), AHA/BHA Luminous Glow Cleanser, Encapsulated 0.5% Retinol Complex, Exomere Lifting Shot Soothing Gel"
      )
    ),
    comment: "Buckets auto-assigned by order; review later.",
    videoIds: [] as number[],
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 8,
    name: "Men's Basic Skincare",
    description: "A simple, effective routine for clear, healthy-looking skin",
    visibilityInOptions: true,
    diagnosisMessage:
      "A simple, consistent routine can support clear and healthy-looking skin.",
    treatmentInstruction:
      "Keep it simple: cleanse + treatment if needed + SPF in the morning. Add moisturizer if dryness occurs.",
    products: buildProductsJson(
      parseProducts(
        "SkinHappy Solution 5: Gentle Retinoid Repair, A to Zinc Total Skin Protection, AHA/BHA Luminous Glow Cleanser"
      )
    ),
    comment: "Buckets auto-assigned by order; review later.",
    videoIds: [] as number[],
    createdAt: NOW,
    updatedAt: NOW,
  },
  {
    id: 9,
    name: "Athlete's Basic Skincare",
    description: "Built for sweat, friction, and outdoor exposure",
    visibilityInOptions: true,
    diagnosisMessage:
      "If you sweat often and spend time outdoors, a routine that supports sweat/friction + SPF consistency can help.",
    treatmentInstruction:
      "Cleanse after heavy sweating when possible, avoid harsh stripping, and prioritize daily SPF for outdoor exposure.",
    products: buildProductsJson(
      parseProducts(
        "SkinHappy Solution 5: Gentle Retinoid Repair, Vitamin B3+ Stay Ageless Repair Serum, A to Zinc Total Skin Protection, Exomere Recovery Balm, AHA/BHA Luminous Glow Cleanser"
      )
    ),
    comment: "Buckets auto-assigned by order; review later.",
    videoIds: [] as number[],
    createdAt: NOW,
    updatedAt: NOW,
  },
] as const;

/**
 * ID mapping = longevity_symptoms option index + 1
 * 0 -> 1: Longevity & prevention
 * 1 -> 2: Looking older than I feel
 * 2 -> 3: Joint discomfort
 * 3 -> 4: Low energy/stamina
 * 4 -> 5: Bouncing back after illness
 * 5 -> 6: Bouncing back after injury
 * 6 -> 7: Sleep challenges
 * 7 -> 8: Brain fog
 * 8 -> 9: Hormone changes
 * 9 -> 10: Thyroid concerns
 * 10 -> 11: Skin cancer prevention
 * 11 -> 12: Weight support
 * 12 -> 13: Stress/anxiety
 * 13 -> 14: Gut health
 */
const LONGEVITY_TEMPLATES = [
  {
    id: 1,
    name: "Longevity & prevention",
    description:
      "I'm interested in healthy aging and preventing health issues over time.",
    aditionalText: "",
    products: {
      supplements: [
        "Coenzyme Q10",
        "Melatonin",
        "Multivitamins, especially B vitamins",
        "Omega 3 Fatty Acids",
        "Magnesium",
        "Probiotics and prebiotics",
        "Vitamin D",
      ],
    },
    behavioralModification: `Regular physical exercise: cardio/aerobic and resistance training
Mediterranean Diet; whole grains, vegetables, fruits, healthy fats; calorie restriction; may consider intermittent fasting; avoid ultraprocessed foods (white flour, sugar)
Avoid smoking
Avoid excess alcohol
Get 7-9 hours of sleep
Reduce/manage stress; avoid toxic relationships`,
    inofficeTreatment: `Health screens and advanced laboratory diagnostics, such as bloodwork with lipid panel, hormone assessments, dexa scan, VO2 max determination, screening for cancers (MRI, labwork, pap smears, physical exams, etc), assessment of cellular senescence (telomere testing, mitochondrial activity), etc
Hormone optimization - bioidentical hormone replacement (BHRT)
IV/IM nutrients/vitamins/amino acids
IM/SQ peptides/glutathione/NAD
Stem cell/exosome therapy
Skin age analysis, with subsequent skin disease and aesthetic management`,
  },
  {
    id: 2,
    name: "Looking older than I feel",
    description: "My face looks older than my age, and I'd like support with that.",
    aditionalText: "",
    products: {
      supplements: [
        "\"Hair skin and nails\" supplements",
        "Antioxidants - vitamin C, polyphenols, etc",
        "Omega 3 fatty acids",
        "NMN/niacinamide",
        "Polyphenols (green tea, resveratrol)",
        "Folate and B12",
        "Magnesium",
        "Zinc",
        "Selenium",
        "Copper, especially in GHK-Cu (optimal topically or by injection, vs. orally)",
        "Vitamin D",
      ],
    },
    behavioralModification: `Use broad spectrum sunscreens and retinoids daily, and avoid chronic sun exposure
Avoid smoking
Eat fresh foods rich in antioxidants and healthy fats; reduce sugars and highly processed foods
Get regular quality sleep
Get adequate hydration
Reduce and manage stress`,
    inofficeTreatment: `Medical grade skincare program incorporating broad spectrum sun protection, retinoids, vitamin antioxidants, glutathione, peptides, growth factors, botanical antioxidants
Dermatological management of skin conditions such as cancer, rosacea, acne, acne scars, melasma, etc
Minimally invasive procedures such as botulinum toxin (Botox), dermal fillers, microneedling, chemical peels, laser resurfacing, laser hair removal, Hydrafacial treatments
IV vitamin/antioxidant/amino acid infusions
GLOW peptide, subcutaneous or with microneedling
Stem cell/exosome treatments, intradermal or with microneedling
PDRN treatments (microinjections or with microneedling)`,
  },
  {
    id: 3,
    name: "Joint discomfort",
    description: "I have joint pain, stiffness, or ongoing inflammation.",
    aditionalText: "",
    products: {
      supplements: [
        "Omega 3 fatty acids",
        "Curcumin (with piperine for absorption)",
        "Glucosamine chondroitin",
        "SAM-e",
        "Vitamin D",
        "Calcium",
        "Boswellia",
      ],
    },
    behavioralModification: `Anti-inflammatory diet (Mediterranean diet)
Regular, low-impact exercise
Weight management`,
    inofficeTreatment: `Physical therapy
Acupuncture
Chiropractic care
Intra-articular hyaluronic acid injections
Platelet rich plasma therapy
Exosome therapy`,
  },
  {
    id: 4,
    name: "Low energy/stamina",
    description: "I feel low energy or get tired easily, with reduced endurance.",
    aditionalText: "",
    products: {
      supplements: [
        "Coenzyme Q10",
        "Multivitamins",
        "B-complex, especially B12 if deficient",
        "Vitamin D",
        "Iron (if deficient)",
        "Omega 3 fatty acids",
        "Creatine",
        "Ashwagandha",
        "L-theanine",
      ],
    },
    behavioralModification: `Regular aerobic and resistance exercise
Optimize sleep hygiene
Proper hydration
Consistent meal timing
Address chronic stress`,
    inofficeTreatment: `Obtain comprehensive thyroid/adrenal/sex hormone testing for underlying conditions
IV nutrient therapy
IM B12, NAD, or glutathione
Testosterone and estrogen optimization
Supervised exercise programs`,
  },
  {
    id: 5,
    name: "Bouncing back after illness",
    description:
      "I'm recovering from a long-term or recent illness and want to rebuild strength.",
    aditionalText: "",
    products: {
      supplements: [
        "Probiotics",
        "Vitamin D",
        "Omega 3 fatty acids",
        "Curcumin",
        "Magnesium",
        "Boswellia",
      ],
    },
    behavioralModification: `Nutrient dense, anti-inflammatory diet; consider dietary counseling
Gradual increase/return to physical activity
Stress reduction and management
Peer support and meditation`,
    inofficeTreatment: `Multidisciplinary rehabilitation
Psychological support
Occupational/physical therapy
Acupuncture
Assessment of gut health and thyroid function
Consideration IV vitamin and nutrients
Consideration NAD, glutathione injections`,
  },
  {
    id: 6,
    name: "Bouncing back after injury",
    description: "I'm recovering from an injury and want to support healing and performance.",
    aditionalText: "",
    products: {
      supplements: [
        "Vitamin D",
        "Omega 3 fatty acids",
        "Probiotics",
        "Protein enhancement",
        "Calcium",
        "Zinc",
        "Magnesium",
        "Creatine",
      ],
    },
    behavioralModification: `Early and structured (adequate) physical rehabilitation program
Balanced nutrition and fluid intake; ensure adequate calorie intake
Adequate quality sleep
No smoking`,
    inofficeTreatment: `Physical therapy
Neuromuscular electrical stimulation
BPC 157 peptide injections
Exosome or stem cell treatments`,
  },
  {
    id: 7,
    name: "Sleep challenges",
    description: "I have trouble falling asleep, staying asleep, or waking up rested.",
    aditionalText: "",
    products: {
      supplements: [
        "Melatonin",
        "Magnesium (glycinate or threonate)",
        "Valerian root",
        "L-theanine",
        "5-HTP (tryptophan)",
        "Ashwagandha",
      ],
    },
    behavioralModification: `Maintain consistent sleep/wake times - every single day
Dark/cool/quiet bedroom with NO screentime 1 hour before bedtime
Limit caffeine/alcohol late in day
Gentle stretching/progressive muscle relaxation
Meditation/mindfulness
Cognitive behavioral therapy`,
    inofficeTreatment: `Supervised cognitive behavioral therapy
Light therapy for circadian rhythm disorders
Sleep study
Hormone testing and consideration bioidentical hormone replacement therapy
Consideration of select peptides`,
  },
  {
    id: 8,
    name: "Brain fog",
    description: "I'm dealing with brain fog, focus issues, or memory concerns.",
    aditionalText: "",
    products: {
      supplements: [
        "Omega 3 fatty acids",
        "Magnesium",
        "B complex vitamins (esp B12/folate)",
        "Vitamin D",
        "Zinc",
        "Coenzyme Q10",
        "N-acetylcysteine",
        "Ginkgo biloba",
        "Bacopa monnieri",
        "Curcumin",
        "L-theanine",
        "Lion's mane mushroom",
        "Rhodiola",
      ],
    },
    behavioralModification: `Anti-inflammatory diet (Mediterranean diet)
Regular aerobic and resistance exercise
Cognitive training/stimulation (puzzles, learning new skills, etc)
Social engagement
Consistent sleep hygiene`,
    inofficeTreatment: `Neurofeedback
Supervised cognitive training/rehabilitation
Non-invasive brain stimulation (particularly for post Covid brain fog)
Nutrient/toxicology testing
Hormone testing / consideration Bioidentical Hormone Replacement Therapy
Treat underlying causes - sleep apnea, thyroid disorders, etc
Exosome treatments
Peptide treatments
IV nutrient therapy`,
  },
  {
    id: 9,
    name: "Hormone changes",
    description:
      "I'm navigating hormone changes (like menopause or andropause) and want support.",
    aditionalText: "",
    products: {
      supplements: [
        "Vitamin D",
        "Calcium",
        "Omega 3 fatty acids",
        "Magnesium",
        "Probiotics",
        "Ashwagandha",
        "Maca root",
        "Phytoestrogens (women)",
        "Zinc",
      ],
    },
    behavioralModification: `Regular aerobic and resistance exercise
Weight management
Stress reduction/management
Adequate sleep`,
    inofficeTreatment: `Hormone panel assessment
Bioidentical hormone replacement therapy (BHRT)
Cognitive and behavioral therapy for mood and sleep disturbances`,
  },
  {
    id: 10,
    name: "Thyroid concerns",
    description: "I have thyroid-related concerns I'm working on or exploring.",
    aditionalText: "",
    products: {
      supplements: [
        "Selenium",
        "Iodine (if deficient)",
        "Zinc",
        "B12",
        "Ashwagandha",
        "Probiotics",
        "Vitamin D",
        "Magnesium",
        "Omega-3 fatty acids",
        "Iron",
      ],
    },
    behavioralModification: `Balanced, nutrient and probiotic rich diet
Regular physical activity
Stress management and reduction`,
    inofficeTreatment: `Comprehensive thyroid panel assessment
Thyroid hormone replacement (T3/4 combination or T4)
Dietary counseling
Regular monitoring of thyroid function`,
  },
  {
    id: 11,
    name: "Skin cancer prevention",
    description:
      "I want to understand my skin cancer risk and how to protect my skin.",
    aditionalText: `Refer to Stayhealthy.skin portal for assessing risk factors and skin cancer / prevention education.

Topical medically formulated skincare
Broad spectrum (UVA, UVB) sunblock - ideally zinc oxide 8-10%; with iron oxides for tint and visible light protection
Vitamin A Retinoids - key vitamin class for preserving skin health (stable precursor retinoid preferred)
Topical niacinamide (B3, nicotinamide) - must be specially formulated to traverse skin
Topical Vitamin C - must be specially formulated to traverse skin
Resveratrol
Polypodium leucotomos`,
    products: {
      supplements: [
        "Vitamin A (from foods or supplements)",
        "B3 (Niacinamide)",
        "Vitamin C",
        "Vitamin D",
      ],
    },
    behavioralModification: `Balanced diet rich in vitamin A, C, E, B3, D, zinc, omega 3 fatty acids, lycopene
Daily use of broad spectrum SPF 30+, avoid peak sun hours, wear sun protective clothing and sunglasses, regular skin exams (professionally and self exams)
NEVER use tanning beds
Awareness of ABCDEs of melanoma`,
    inofficeTreatment: `Refer to screening / professional evaluation as appropriate.`,
  },
  {
    id: 12,
    name: "Weight support",
    description:
      "I have weight concerns and want guidance on healthy, sustainable changes.",
    aditionalText: "",
    products: {
      supplements: [
        "Multivitamins",
        "Vitamin D",
        "Omega 3 fatty acids",
        "Fiber supplements (glucomannan, guar gum)",
        "Green tea extract",
        "Conjugated linoleic acid",
      ],
    },
    behavioralModification: `Strict meal times, calorie awareness/dietary plans (Mediterranean, protein-fiber rich diets, DASH, intermittent fasting)
Structured self monitoring, goal setting
Regular resistance and aerobic exercise`,
    inofficeTreatment: `Behavioral counseling
Pharmacotherapy
Bariatric surgery or other intervention consideration
Consideration for select peptides or vitamins (GLP1 inhibitors, SLUPP 332, MIC B12)
Maintain regular sleep
Avoid/manage stress
GLP-1 receptor agonists for selected patients`,
  },
  {
    id: 13,
    name: "Stress/anxiety",
    description:
      "I feel anxious or chronically stressed and want support managing it.",
    aditionalText: "",
    products: {
      supplements: [
        "Magnesium",
        "Omega-3 fatty acids",
        "B-complex vitamins",
        "Vitamin D",
        "Valerian root",
        "Chamomile",
        "Probiotics",
        "L-theanine",
        "Ashwagandha",
        "Melatonin (if sleep-related)",
      ],
    },
    behavioralModification: `Mindfulness/meditation
Deep breathing exercises
Limit caffeine/alcohol
Regular moderate exercise
Cognitive behavioral therapy
Sleep hygiene
Avoid toxic environments/people`,
    inofficeTreatment: `Cognitive behavioral therapy
Counseling
Acupuncture
Biofeedback
Neurofeedback
Consider selected peptides (Semax, Selank)
Pharmacotherapy when indicated`,
  },
  {
    id: 14,
    name: "Gut health",
    description:
      "I'm experiencing digestive or gut-related issues and want support.",
    aditionalText: "",
    products: {
      supplements: [
        "Probiotics, prebiotics, postbiotics",
        "Fiber",
        "Licorice root",
        "L-glutamine",
        "Ginger",
        "Digestive enzymes",
        "Omega-3 fatty acids",
        "Peppermint oil",
        "Curcumin",
        "Zinc-carnosine",
      ],
    },
    behavioralModification: `Regular meal times, identify food triggers, chew slowly, keep to diet rich in plant based fibers/fermented foods
Good hydration
Stress management
Regular exercise
Sleep Hygiene`,
    inofficeTreatment: `Medical evaluation for underlying GI disorders - stool testing, endoscopy/colonoscopy
SIBO breath testing
Fecal microbiota transplantation for selected cases
BPC 157 for selected cases`,
  },
] as const;

const POLICIES: Array<{
  id: number;
  concernName: string;
  rules: unknown;
}> = [
  // -----------------------
  // KICKOUTS (kickout wins)
  // -----------------------
  {
    id: 1,
    concernName: "kickout_red_flags",
    rules: {
      enabled: true,
      version: 1,
      effect: { kickout_id: 1 },
      conditions: {
        all: [
          { op: "includesAny", fact: "red_flags", value: [0, 1, 2, 3, 4] }
        ]
      }
    }
  },
  {
    id: 2,
    concernName: "kickout_underage",
    rules: {
      enabled: true,
      version: 1,
      effect: { kickout_id: 2 },
      conditions: {
        all: [{ op: "equals", fact: "age_range", value: 0 }]
      }
    }
  },
  // -----------------------
  // SKIN GOALS -> core packages
  // -----------------------
  {
    id: 10,
    concernName: "goal_breakouts",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [1] },
      conditions: { all: [{ op: "includes", fact: "skin_goals", value: 0 }] }
    }
  },
  {
    id: 11,
    concernName: "goal_redness",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [2] },
      conditions: { all: [{ op: "includes", fact: "skin_goals", value: 1 }] }
    }
  },
  {
    id: 12,
    concernName: "goal_darkspots",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [3] },
      conditions: { all: [{ op: "includes", fact: "skin_goals", value: 2 }] }
    }
  },
  {
    id: 13,
    concernName: "goal_aging_texture",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [5] },
      conditions: { all: [{ op: "includes", fact: "skin_goals", value: 3 }] }
    }
  },
  // -----------------------
  // Glow -> package by age + sex
  // skin_goals includes 4
  // -----------------------
  {
    id: 20,
    concernName: "glow_guardian_teen",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [6] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 4 },
          { op: "equals", fact: "age_range", value: 5 }
        ]
      }
    }
  },
  {
    id: 21,
    concernName: "glow_female_18_40",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [7] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 4 },
          { op: "equals", fact: "gender", value: 0 },
          { op: "in", fact: "age_range", value: [1, 2] }
        ]
      }
    }
  },
  {
    id: 22,
    concernName: "glow_female_40_plus",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [4] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 4 },
          { op: "equals", fact: "gender", value: 0 },
          { op: "in", fact: "age_range", value: [3, 4] }
        ]
      }
    }
  },
  {
    id: 23,
    concernName: "glow_male_adult",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [8] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 4 },
          { op: "equals", fact: "gender", value: 1 },
          { op: "in", fact: "age_range", value: [1, 2, 3, 4] }
        ]
      }
    }
  },
  {
    id: 24,
    concernName: "glow_fallback_18_40",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [7] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 4 },
          { op: "in", fact: "age_range", value: [1, 2] }
        ]
      }
    }
  },
  {
    id: 25,
    concernName: "glow_fallback_40_plus",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [4] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 4 },
          { op: "in", fact: "age_range", value: [3, 4] }
        ]
      }
    }
  },
  // -----------------------
  // Not sure -> package by age + sex
  // skin_goals includes 5
  // -----------------------
  {
    id: 30,
    concernName: "notsure_guardian_teen",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [6] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 5 },
          { op: "equals", fact: "age_range", value: 5 }
        ]
      }
    }
  },
  {
    id: 31,
    concernName: "notsure_female_18_40",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [7] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 5 },
          { op: "equals", fact: "gender", value: 0 },
          { op: "in", fact: "age_range", value: [1, 2] }
        ]
      }
    }
  },
  {
    id: 32,
    concernName: "notsure_female_40_plus",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [4] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 5 },
          { op: "equals", fact: "gender", value: 0 },
          { op: "in", fact: "age_range", value: [3, 4] }
        ]
      }
    }
  },
  {
    id: 33,
    concernName: "notsure_male_adult",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [8] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 5 },
          { op: "equals", fact: "gender", value: 1 },
          { op: "in", fact: "age_range", value: [1, 2, 3, 4] }
        ]
      }
    }
  },
  {
    id: 34,
    concernName: "notsure_fallback_18_40",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [7] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 5 },
          { op: "in", fact: "age_range", value: [1, 2] }
        ]
      }
    }
  },
  {
    id: 35,
    concernName: "notsure_fallback_40_plus",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [4] },
      conditions: {
        all: [
          { op: "includes", fact: "skin_goals", value: 5 },
          { op: "in", fact: "age_range", value: [3, 4] }
        ]
      }
    }
  },
  // -----------------------
  // Athlete addon
  // -----------------------
  {
    id: 40,
    concernName: "athlete_addon",
    rules: {
      enabled: true,
      version: 1,
      effect: { diagnosis_ids: [9] },
      conditions: { all: [{ op: "equals", fact: "athlete_activity", value: 0 }] }
    }
  },
  // -----------------------
  // Longevity symptom -> longevity program
  // longevity_symptoms includes i => longevity_ids [i+1]
  // -----------------------
  ...Array.from({ length: 14 }).map((_, i) => ({
    id: 200 + i,
    concernName: `longevity_${i}`,
    rules: {
      enabled: true,
      version: 1,
      effect: { longevity_ids: [i + 1] },
      conditions: {
        all: [{ op: "includes", fact: "longevity_symptoms", value: i }]
      }
    }
  }))
];

const KICKOUTS = [
  {
    id: 1,
    title: "Important: please get urgent medical care",
    message:
      "Based on your answers, this could require urgent in-person evaluation. " +
      "Please seek urgent care / emergency care now-especially if symptoms are rapidly worsening, you have fever/feel unwell, severe swelling or blistering, eye involvement, significant pain, or open sores/bleeding. " +
      "If you feel unsafe or symptoms are severe, call your local emergency number immediately. " +
      "Bring a list of medications/supplements and (if possible) photos showing how the skin changed over time.",
    createdAt: NOW,
  },
  {
    id: 2,
    title: "Under 18: we can't complete this assessment",
    message:
      "This assessment is intended for adults (18+). If you're under 18, a parent/guardian needs to be involved for consent and next steps. " +
      "If you're onboarding as a guardian for a teen (13-17), please select the guardian option in the age question and continue with that flow. " +
      "If you need help, contact support or seek in-person medical advice if symptoms are urgent.",
    createdAt: NOW,
  },
] as const;

async function main() {
  // Upsert makes this seed safe to re-run and keeps options/config updated.
  for (const q of QUESTIONS) {
    const { id, ...rest } = q;
    await prisma.question.upsert({
      where: { id },
      create: q as any,
      update: rest as any,
    });
  }

  // NOTE: Prisma doesn't have upsertMany; loop is the common pattern for idempotent seeds.
  for (const t of DIAGNOSIS_TEMPLATES) {
    const { id, createdAt, updatedAt, ...rest } = t;
    await prisma.diagnosisTemplate.upsert({
      where: { id },
      create: t as any,
      update: rest as any,
    });
  }

  for (const t of LONGEVITY_TEMPLATES) {
    const { id, ...rest } = t;
    await prisma.longevityTemplate.upsert({
      where: { id },
      create: t as any,
      update: rest as any,
    });
  }

  for (const p of POLICIES) {
    await prisma.skinConcernDiagnosisMap.upsert({
      where: { id: p.id },
      create: p as any,
      update: { concernName: p.concernName, rules: p.rules } as any
    });
  }

  for (const k of KICKOUTS) {
    await prisma.kickout.upsert({
      where: { id: k.id },
      create: k as any,
      update: {
        title: k.title,
        message: k.message
      } as any,
    });
  }

  console.log(`Seeded/updated ${QUESTIONS.length} questions.`);
  console.log(
    `Seeded/updated ${DIAGNOSIS_TEMPLATES.length} diagnosis templates.`
  );
  console.log(
    `Seeded/updated ${LONGEVITY_TEMPLATES.length} longevity templates.`
  );
  console.log(`Seeded/updated ${POLICIES.length} policies.`);
  console.log(`Seeded/updated ${KICKOUTS.length} kickouts.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
