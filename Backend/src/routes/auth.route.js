import { Router } from "express";
import { getMe, login, register } from "../controllers/auth.controller.js";
import { authenticateUser } from "../middlewares/auth.middleware.js";
import { loginvalidator, registerValidator } from "../validators/auth.validator.js";

const authRouter = Router();

authRouter.post("/login", loginvalidator, login);
authRouter.post("/register", registerValidator, register);
authRouter.get("/get-me", authenticateUser, getMe)

export default authRouter;