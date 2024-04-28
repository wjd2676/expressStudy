import express from "express";
import {
  createCommentController,
  getCommentListController,
  deleteCommentController,
  updateCommentController
} from "./controller";

const router = express.Router();

router.post("/", createCommentController);
router.get("/", getCommentListController);
router.delete("/:commentId", deleteCommentController);
router.put("/:commentId", updateCommentController);

export default router