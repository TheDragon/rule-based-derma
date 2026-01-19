import type { Facts, PolicyEffect, PolicyWithId, ConditionNode } from "./types.js";
import { evaluateOperator } from "./operators.js";

export type EvaluationResult = {
  diagnosis_ids: number[];
  longevity_ids: number[];
  video_ids: number[];
  kickout_id: number | null;
};

function evaluateNode(node: ConditionNode, facts: Facts): boolean {
  if ("all" in node) {
    return node.all.every((child) => evaluateNode(child, facts));
  }
  if ("any" in node) {
    return node.any.some((child) => evaluateNode(child, facts));
  }
  const factValue = facts[node.fact];
  return evaluateOperator(node.op, factValue, node.value);
}

function mergeIds(target: Set<number>, ids?: number[]) {
  if (!ids) {
    return;
  }
  for (const id of ids) {
    target.add(id);
  }
}

export function evaluatePolicies(policies: PolicyWithId[], facts: Facts): EvaluationResult {
  let chosenKickout: { mapId: number; kickoutId: number } | null = null;
  const diagnosisIds = new Set<number>();
  const longevityIds = new Set<number>();

  for (const policy of policies) {
    if (!evaluateNode(policy.rules.conditions, facts)) {
      continue;
    }

    const effect: PolicyEffect = policy.rules.effect;

    if (effect.kickout_id !== undefined) {
      if (!chosenKickout || policy.id < chosenKickout.mapId) {
        chosenKickout = { mapId: policy.id, kickoutId: effect.kickout_id };
      }
      continue;
    }

    mergeIds(diagnosisIds, effect.diagnosis_ids);
    mergeIds(longevityIds, effect.longevity_ids);
  }

  if (chosenKickout) {
    // Deterministic tie-break: choose the lowest policy map id when multiple kickouts match.
    return {
      diagnosis_ids: [],
      longevity_ids: [],
      video_ids: [],
      kickout_id: chosenKickout.kickoutId
    };
  }

  return {
    diagnosis_ids: Array.from(diagnosisIds).sort((a, b) => a - b),
    longevity_ids: Array.from(longevityIds).sort((a, b) => a - b),
    video_ids: [],
    kickout_id: null
  };
}
