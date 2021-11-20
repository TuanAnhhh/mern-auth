const { Router } = require("express");
const auth = require("../middlewares/auth");
const route = Router();
const userController = require("./../controllers/userController");
route.post("/api/auth/register", userController.register);
route.post("/api/auth/activation", userController.activate);
route.post("/api/auth/signing", userController.login);
route.get("/api/auth/access", userController.access);
route.post("/api/auth/forgot_pass", userController.forgot);
route.post("/api/auth/reset_pass", auth, userController.reset);
route.get("/api/auth/user", auth, userController.info);
route.patch("/api/auth/user_update", auth, userController.update);
route.get("/api/auth/signout", userController.logout);
route.post("/api/auth/google_signing", userController.google);
module.exports = route;
