export const policySchema = {
  $id: "policySchema",
  type: "object",
  required: ["version", "conditions", "effect"],
  properties: {
    version: { type: "number" },
    enabled: { type: "boolean" },
    conditions: { $ref: "#/definitions/conditionNode" },
    effect: { $ref: "#/definitions/effectNode" }
  },
  additionalProperties: true,
  definitions: {
    conditionNode: {
      anyOf: [
        {
          type: "object",
          required: ["all"],
          properties: {
            all: {
              type: "array",
              minItems: 1,
              items: { $ref: "#/definitions/conditionNode" }
            }
          },
          additionalProperties: false
        },
        {
          type: "object",
          required: ["any"],
          properties: {
            any: {
              type: "array",
              minItems: 1,
              items: { $ref: "#/definitions/conditionNode" }
            }
          },
          additionalProperties: false
        },
        {
          type: "object",
          required: ["fact", "op"],
          properties: {
            fact: { type: "string", minLength: 1 },
            op: { type: "string", minLength: 1 },
            value: {}
          },
          additionalProperties: false
        }
      ]
    },
    effectNode: {
      type: "object",
      properties: {
        diagnosis_ids: {
          type: "array",
          items: { type: "integer" }
        },
        longevity_ids: {
          type: "array",
          items: { type: "integer" }
        },
        kickout_id: { type: "integer" }
      },
      additionalProperties: false
    }
  }
} as const;
