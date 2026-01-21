import type { Request, Response } from "express";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import { prisma } from "../prisma/client.js";
import { validatePolicy } from "../rules/policy.validator.js";
import { ApiError } from "../utils/errors.js";

const createPolicySchema = z.object({
  id: z.number().int().positive().optional(),
  concernName: z.string().min(1),
  rules: z.unknown()
});

export async function createPolicy(req: Request, res: Response) {
  const parsed = createPolicySchema.safeParse(req.body);
  if (!parsed.success) {
    throw new ApiError("Invalid request body", 400, "BAD_REQUEST");
  }

  const { id, concernName, rules } = parsed.data;
  const { valid, errors } = validatePolicy(rules);
  if (!valid) {
    console.warn("Invalid policy rules", errors);
    throw new ApiError("Invalid policy rules", 400, "BAD_REQUEST");
  }

  const data: { id?: number; concernName: string; rules: unknown } = {
    concernName,
    rules
  };
  if (id !== undefined) {
    data.id = id;
  }

  try {
    const created = await prisma.skinConcernDiagnosisMap.create({ data });
    res.status(201).json({
      id: created.id,
      concernName: created.concernName,
      rules: created.rules
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        throw new ApiError("Policy id already exists", 409, "CONFLICT");
      }
    }
    throw error;
  }
}
