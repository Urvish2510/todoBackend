import express from "express";

import { getActivities, addActivity, deleteActivity } from "../controllers/activity.controller.js";

const router = express.Router();

router.get("/activities", getActivities);
router.post("/activity", addActivity);
router.delete("/delete/:id", deleteActivity);

export {router};