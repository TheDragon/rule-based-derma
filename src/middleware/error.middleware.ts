import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/errors.js";

export function errorMiddleware(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      error: {
        message: err.message,
        code: err.code
      }
    });
    return;
  }

  console.error("Unhandled error", err);
  res.status(500).json({
    error: {
      message: "Internal server error"
    }
  });
}
