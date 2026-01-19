import { prisma } from "../prisma/client.js";
import { evaluatePolicies } from "../rules/engine.js";
import { validatePolicy } from "../rules/policy.validator.js";
import type { Facts, Policy, PolicyWithId } from "../rules/types.js";

export type Answer = {
  questionId: string;
  answer: unknown;
};

export type RecommendationResponse = {
  appointmentId: number;
  diagnosis_ids: number[];
  longevity_ids: number[];
  video_ids: number[];
  kickout_id: number | null;
};

export async function evaluateRecommendations(
  appointmentId: number,
  answers: Answer[]
): Promise<RecommendationResponse> {
  const facts: Facts = {};
  for (const item of answers) {
    facts[item.questionId] = item.answer;
  }

  const policyRows = await prisma.skinConcernDiagnosisMap.findMany();
  const policies: PolicyWithId[] = [];

  for (const row of policyRows) {
    const rules = row.rules as unknown;
    const { valid, errors } = validatePolicy(rules);
    if (!valid) {
      console.warn("Skipping invalid policy", { id: row.id, errors });
      continue;
    }
    const policy = rules as Policy;
    if (policy.enabled === false) {
      continue;
    }
    policies.push({ id: row.id, rules: policy });
  }

  const evaluation = evaluatePolicies(policies, facts);

  const reportData = {
    appointmentId,
    diagnosisIds: evaluation.diagnosis_ids,
    longevityIds: evaluation.longevity_ids,
    videoIds: evaluation.video_ids,
    kickoutId: evaluation.kickout_id
  };

  await prisma.appointmentReport.upsert({
    where: { appointmentId },
    update: reportData,
    create: reportData
  });

  return { appointmentId, ...evaluation };
}
