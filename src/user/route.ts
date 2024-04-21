import express from "express";
import {
  loginController,
  signupController,
  updateUserController
} from "./controller";

const router = express.Router();

router.post("/", loginController);
router.post("/signup", signupController);
router.put("/", updateUserController);
