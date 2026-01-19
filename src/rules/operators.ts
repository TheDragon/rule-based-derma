import type { Operator } from "./types.js";

function isNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export function evaluateOperator(op: Operator, factValue: unknown, value: unknown): boolean {
  switch (op) {
    case "equals":
      return factValue === value;
    case "in":
      return Array.isArray(value) ? value.includes(factValue as never) : false;
    case "includes":
      return Array.isArray(factValue) ? factValue.includes(value as never) : false;
    case "includesAny":
      return Array.isArray(factValue) && Array.isArray(value)
        ? value.some((item) => factValue.includes(item))
        : false;
    case "exists":
      return factValue !== undefined && factValue !== null;
    case "isTrue":
      return factValue === true;
    case "isFalse":
      return factValue === false;
    case ">=":
      return isNumber(factValue) && isNumber(value) ? factValue >= value : false;
    case ">":
      return isNumber(factValue) && isNumber(value) ? factValue > value : false;
    case "<=":
      return isNumber(factValue) && isNumber(value) ? factValue <= value : false;
    case "<":
      return isNumber(factValue) && isNumber(value) ? factValue < value : false;
    case "between": {
      if (!isNumber(factValue) || typeof value !== "object" || value === null) {
        return false;
      }
      const range = value as { min?: unknown; max?: unknown };
      return isNumber(range.min) && isNumber(range.max)
        ? factValue >= range.min && factValue <= range.max
        : false;
    }
    default:
      return false;
  }
}
