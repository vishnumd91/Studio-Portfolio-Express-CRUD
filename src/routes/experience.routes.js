import { Router } from "express";
import {
  deleteExperience,
  getExperience,
  postExperience,
  updateExperienceByPatch,
  updateExperienceByPut,
} from "../controllers/experience.controller.js";

const router = Router();

router.route("/").get(getExperience).post(postExperience);

router
  .route("/:id")
  .put(updateExperienceByPut)
  .patch(updateExperienceByPatch)
  .delete(deleteExperience);

export default router;
