import express from "express";
import {editExperiment, showAll, showOne } from "../controllers/experiments.js";

const router = express.Router();

router.get("/:id",showOne );
router.get("/",showAll);
router.patch("/edit",editExperiment);

export default router;