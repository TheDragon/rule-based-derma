import Ajv, { type ValidateFunction } from "ajv";
import { policySchema } from "./policy.schema.js";
import type { Policy } from "./types.js";

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });

const validate: ValidateFunction<Policy> = ajv.compile(policySchema);

export function validatePolicy(policy: unknown) {
  const valid = validate(policy);
  return {
    valid,
    errors: validate.errors ?? []
  };
}
