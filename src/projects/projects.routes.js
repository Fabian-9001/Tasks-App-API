const projectServices = require("./projects.services");
const router = require("express").Router();

router.route("/").get(projectServices.getAllProjects).post(projectServices.postProject);

router
  .route("/:id")
  .get(projectServices.getProjectById)
  .patch(projectServices.patchProject)
  .delete(projectServices.deleteProject);

module.exports = router;
