import { Request } from "express";
import {
  createBoardModel,
  updateBoardModel,
  deleteBoardModel,
  getBoardModel,
  getBoardListModel
} from "./model";

export const createBoardService = async (req: Request) => {
  let result = "invalidValue";

  const { boardTitle, boardDetail, imageSrc } = req.body;

  //TODO validation
  //TODO JWT
  //TODO IMAGE HANDLE
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  let imagePath: string = "";
  let userId: string = "";

  const createBoardHandle = await createBoardModel(
    boardTitle,
    boardDetail,
    imagePath,
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

  const { boardId, boardTitle, boardDetail, imageSrc } = req.body;

  //TODO validation
  //TODO JWT
  //TODO IMAGEHANDLE
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  let imagePath: string = "";
  let userId: string = "";

  const loginHandle = await updateBoardModel(
    boardId,
    boardTitle,
    boardDetail,
    imagePath
  );

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

  const { boardId } = req.params;
  const { offset, limit } = req.query;

  //TODO validation
  //TODO JWT
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  let userId: string = "";

  const getBoardListHandle = await getBoardListModel(
    boardId,
    userId,
    Number(offset),
    Number(limit)
  );

  if (getBoardListHandle) {
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
