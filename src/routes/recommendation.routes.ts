import { Router } from "express";
import { createPolicy } from "../controllers/policy.controller.js";
import { evaluateRecommendation } from "../controllers/recommendation.controller.js";

const router = Router();

router.post("/recommendations/evaluate", evaluateRecommendation);
router.post("/policies", createPolicy);

export default router;
