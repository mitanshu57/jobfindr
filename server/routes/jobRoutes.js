import express from "express";
import {
  createJob,
  getJobs,
  getJobsByUser,
  searchJobs,
  applyJob,
  likeJob,
  getJobById,
  deleteJob,
} from "../controllers/jobController.js";
import protect from "../middleware/protect.js";

const router = express.Router();

router.post("/jobs", protect, createJob);
router.get("/jobs", getJobs);
router.get("/jobs/user/:id", protect, getJobsByUser);

// search jobs
router.get("/jobs/search", searchJobs);

// apply for job
router.put("/jobs/apply/:id", protect, applyJob);

// like job and unlike job
router.put("/jobs/like/:id", protect, likeJob);

// getJobById
router.get("/jobs/:id", protect, getJobById);

// delete job
router.delete("/jobs/:id", protect, deleteJob);

export default router;