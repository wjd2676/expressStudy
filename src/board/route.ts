import express from "express";
import {
  createBoardController,
  deleteBoardController,
  updateBoardController,
  getBoardController,
  getBoardListController
} from "./controller";

const router = express.Router();

router.post("/", createBoardController);
router.get("/:boardId", getBoardController);
router.get("/list", getBoardListController);
router.put("/", updateBoardController);
router.delete("/:boardId", deleteBoardController);
