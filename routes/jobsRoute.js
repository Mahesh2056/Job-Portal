import express from "express";
import {
    createJobcontroller, 
    getAllJobsController 
} from "../controllers/jobsController.js";
import userAuth from "../middelwares/authMiddleware.js";

const router = express.Router();

//routes
// CREATE JOB || POST
router.post("/create-job", userAuth, createJobcontroller);

//GET JOBS || GET
router.get("/get-job", userAuth, getAllJobsController);

export default router;