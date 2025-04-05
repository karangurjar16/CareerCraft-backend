const express = require("express");
const router = express.Router();

const {
  createJobs,
  getAllJob,
  updateJobById,
  deleteJobByTitle,
  getRecentLiveJobs,
  searchJobs,
  getJobById,
  getJobsByEmployerId,
  getJobsByCompanyId, // Import the new function
} = require("../controller/job");

router.post("/addJob", createJobs);
router.get("/getAllJob", getAllJob);
router.get("/getJobById/:id", getJobById);
router.put("/updateJobById/:id", updateJobById);
router.delete("/deleteJob/:title", deleteJobByTitle);
router.get("/getJobsByEmployerId/:id", getJobsByEmployerId);
router.get("/live", getRecentLiveJobs);
router.get("/search", searchJobs);

router.get("/company/:companyId", getJobsByCompanyId); // Add this line

module.exports = router;
