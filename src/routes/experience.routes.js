import { Router } from "express";
import {
  deleteExperience,
  getExperience,
  postExperience,
  updateExperienceByPatch,
  updateExperienceByPut,
} from "../controllers/experience.controller.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Experience:
 *       type: object
 *       required:
 *         - companyName
 *         - role
 *         - startDate
 *         - endDate
 *         - responsibilities
 *       properties:
 *         companyName:
 *           type: string
 *           description: Name of the company
 *         role:
 *           type: string
 *           description: Role at the company
 *         startDate:
 *           type: string
 *           format: date
 *           description: Start date of the role
 *         endDate:
 *           type: string
 *           format: date
 *           description: End date of the role
 *         responsibilities:
 *           type: string
 *           description: Responsibilities in the role
 *       example:
 *         companyName: "TechCorp"
 *         role: "Software Engineer"
 *         startDate: "2020-01-01"
 *         endDate: "2022-01-01"
 *         responsibilities: "Developed and maintained web applications"
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve a list of experiences
 *     responses:
 *       200:
 *         description: A list of experiences
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Experience'
 *   post:
 *     summary: Create a new experience
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Experience'
 *     responses:
 *       201:
 *         description: The experience was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update an experience by ID using PUT
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The experience ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Experience'
 *     responses:
 *       200:
 *         description: The experience was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       404:
 *         description: The experience was not found
 *       500:
 *         description: Some error happened
 *   patch:
 *     summary: Update an experience by ID using PATCH
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The experience ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Experience'
 *     responses:
 *       200:
 *         description: The experience was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Experience'
 *       404:
 *         description: The experience was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Delete an experience by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The experience ID
 *     responses:
 *       200:
 *         description: The experience was successfully deleted
 *       404:
 *         description: The experience was not found
 *       500:
 *         description: Some error happened
 */

router.route("/").get(getExperience).post(postExperience);

router
  .route("/:id")
  .put(updateExperienceByPut)
  .patch(updateExperienceByPatch)
  .delete(deleteExperience);

export default router;
