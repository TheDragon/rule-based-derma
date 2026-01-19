import type { Request, Response } from "express";
import { z } from "zod";
import { ApiError } from "../utils/errors.js";
import { evaluateRecommendations } from "../services/recommendation.service.js";

const requestSchema = z.object({
  appointmentId: z.string().min(1),
  answers: z.array(
    z.object({
      questionId: z.string().min(1),
      answer: z.unknown()
    })
  )
});

export async function evaluateRecommendation(req: Request, res: Response) {
  const parsed = requestSchema.safeParse(req.body);
  if (!parsed.success) {
    throw new ApiError("Invalid request body", 400, "BAD_REQUEST");
  }

  const appointmentIdRaw = parsed.data.appointmentId;
  const appointmentId = Number(appointmentIdRaw);
  if (!Number.isInteger(appointmentId) || appointmentId <= 0) {
    throw new ApiError("appointmentId must be a positive integer string", 400, "BAD_REQUEST");
  }

  const result = await evaluateRecommendations(appointmentId, parsed.data.answers);
  res.status(200).json(result);
}
