import { Request } from "express";
import {
  createCommentModel,
  getCommentListModel,
  updateCommentModel,
  deleteCommentModel
} from "./model";

export const createCommentService = async (req: Request) => {
  let result = "invalidValue";

  const { boardId, comment } = req.body;

  //TODO validation
  //TODO JWT
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  let userId: string = "";

  let jwt = "good";

  const createCommentHandle = await createCommentModel(boardId, comment);

  if (createCommentHandle) {
    return {
      result: "success"
    };
  } else {
    return {
      result: "error"
    };
  }
};

export const getCommentListService = async (req: Request) => {
  let result = "invalidValue";
  let data = {};

  const { boardId } = req.body;

  //TODO validation
  //TODO JWT
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  let userId: string = "";

  let jwt = "good";

  const getCommentListHandle = await getCommentListModel(boardId);

  if (getCommentListHandle) {
    return {
      data: data,
      result: "success"
    };
  } else {
    return {
      result: "error"
    };
  }
};

export const updateCommentService = async (req: Request) => {
  let result = "invalidValue";

  const { boardId, comment, isLike } = req.body;

  //TODO validation
  //TODO JWT
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  let userId: string = "";

  let jwt = "good";

  const updateCommentHandle = await updateCommentModel(
    boardId,
    comment,
    isLike
  );

  if (updateCommentHandle) {
    return {
      result: "success"
    };
  } else {
    return {
      result: "error"
    };
  }
};

export const deleteCommentService = async (req: Request) => {
  let result = "invalidValue";

  const { commentId } = req.params;

  //TODO validation
  //TODO JWT
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  let userId: string = "";

  let jwt = "good";

  const updateCommentHandle = await deleteCommentModel(commentId);

  if (updateCommentHandle) {
    return {
      result: "success"
    };
  } else {
    return {
      result: "error"
    };
  }
};
