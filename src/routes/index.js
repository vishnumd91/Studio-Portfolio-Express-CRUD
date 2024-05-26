import { Router } from "express";
import experienceRoutes from "./experience.routes.js";

const router = Router();

router.use("/experience", experienceRoutes);

export { router };
