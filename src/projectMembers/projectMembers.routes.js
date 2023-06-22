const projectMemberServices = require("./projectMembers.services");
const router = require("express").Router();

router
  .route("/")
  .get(projectMemberServices.getAllProjectMembers)
  .post(projectMemberServices.postProjectMember);

router
  .route("/:id")
  .get(projectMemberServices.getProjectMemberById)
  .patch(projectMemberServices.patchProjectMember)
  .delete(projectMemberServices.deleteProjectMember);

module.exports = router;
