const userServices = require("./users.services");
const router = require("express").Router();

router.route("/").get(userServices.getAllUsers).post(userServices.postUser);

router
  .route("/me")
  .get(userServices.patchMyUser)
  .patch(userServices.patchMyUser)
  .put(userServices.deleteMyUser);

router
  .route("/:id")
  .get(userServices.getUserById)
  .patch(userServices.patchUser)
  .put(userServices.softDeleteUser)
  .delete(userServices.deleteUser);

module.exports = router;
