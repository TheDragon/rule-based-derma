import { Router } from "express";
import { evaluateRecommendation } from "../controllers/recommendation.controller.js";

const router = Router();

router.post("/recommendations/evaluate", evaluateRecommendation);

export default router;
