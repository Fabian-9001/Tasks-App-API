const taskServices = require("./tasks.services");
const router = require("express").Router();

router.route("/").get(taskServices.getAllTasks).post(taskServices.postTask);

router
  .route("/:id")
  .get(taskServices.getTaskById)
  .patch(taskServices.patchTask)
  .delete(taskServices.deleteTask);

module.exports = router;
