export type Operator =
  | "equals"
  | "in"
  | "includes"
  | "includesAny"
  | "exists"
  | "isTrue"
  | "isFalse"
  | ">="
  | ">"
  | "<="
  | "<"
  | "between";

export type ConditionLeaf = {
  fact: string;
  op: Operator;
  value?: unknown;
};

export type ConditionNode =
  | { all: ConditionNode[] }
  | { any: ConditionNode[] }
  | ConditionLeaf;

export type PolicyEffect = {
  diagnosis_ids?: number[];
  longevity_ids?: number[];
  kickout_id?: number;
};

export type Policy = {
  version: number;
  enabled?: boolean;
  conditions: ConditionNode;
  effect: PolicyEffect;
};

export type PolicyWithId = {
  id: number;
  rules: Policy;
};

export type Facts = Record<string, unknown>;
