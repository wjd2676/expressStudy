import { Request } from "express";
import {
  createBoardModel,
  updateBoardModel,
  deleteBoardModel,
  getBoardModel,
  getBoardListModel,
  findBoardModel
} from "./model";
import path from "path";
import fs from "fs";
import { imageSaveHandle } from "../../uilts";

export const createBoardService = async (req: Request) => {
  let result = "invalidValue";

  const { boardTitle, boardDetail, imageSrc, userId } = req.body;

  const { src, title } = imageSrc;

  if (!boardTitle || !boardDetail || !boardDetail || !userId)
    return { result: "invalidBody" };

  let filePath: string | null = null;

  if (!src || !title) {
  } else {
    filePath = await imageSaveHandle(src, title);
  }

  const createBoardHandle = await createBoardModel(
    boardTitle,
    boardDetail,
    filePath,
    userId
  );

  if (createBoardHandle) {
    let jwt = "good";

    return {
      result: "success",
      data: {
        jwt
      }
    };
  } else {
    return {
      result: "error"
    };
  }
};

export const updateBoardService = async (req: Request) => {
  let result = "invalidValue";

  const { boardId, boardTitle, boardDetail, imageSrc, userId } = req.body;

  const { src, title } = imageSrc;

  if (!boardId || !boardTitle || !boardDetail || !boardDetail || !userId)
    return { result: "invalidBody" };

  const asBoardData = await findBoardModel(boardId);

  if (!asBoardData) return { result: "invalidBoardId" };

  let filePath: string | null;

  if (!src || !title) {
    filePath = null;

    if (asBoardData.imagePath !== null) {
      await fs.promises.unlink(asBoardData.imagePath);
    }
  } else {
    filePath = await imageSaveHandle(src, title);
  }

  const updateBoardHandle = await updateBoardModel(
    Number(boardId),
    boardTitle,
    boardDetail,
    filePath,
    userId
  );

  if (updateBoardHandle) {
    return {
      result: "success"
    };
  } else {
    return {
      result: "error"
    };
  }
};

export const deleteBoardService = async (req: Request) => {
  let result = "invalidValue";

  const { boardId } = req.params;

  //TODO validation
  //TODO JWT
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  let userId: string = "";

  const loginHandle = await deleteBoardModel(boardId, userId);

  if (loginHandle) {
    let jwt = "good";

    return {
      result: "success",
      data: {
        jwt
      }
    };
  } else {
    return {
      result: "error"
    };
  }
};

export const getBoardService = async (req: Request) => {
  let result = "invalidValue";

  const { boardId } = req.params;

  //TODO validation
  //TODO JWT
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  let userId: string = "";

  const getBoardHandle = await getBoardModel(boardId, userId);

  if (getBoardHandle) {
    let jwt = "good";

    return {
      result: "success",
      data: {
        jwt
      }
    };
  } else {
    return {
      result: "error"
    };
  }
};

export const getBoardListService = async (req: Request) => {
  let result = "invalidValue";

  const offset = req.query.offset as string;
  const limit = req.query.limit as string;
  const userId = req.query.userId as string;

  const token = req.headers.authorization;

  if (!offset || !limit || !userId)
    return { result: "invalidBody", data: null };

  if (!token) return { result: "invalidToken", data: null };

  const getBoardListData = await getBoardListModel(
    userId,
    Number(offset),
    Number(limit)
  );

  if (getBoardListData) {
    return {
      result: "success",
      data: getBoardListData
    };
  } else {
    return {
      result: "error"
    };
  }
};
