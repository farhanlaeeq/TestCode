const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/users/:id", userController.getUser);
router.get("/users", userController.getAllUsers);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
