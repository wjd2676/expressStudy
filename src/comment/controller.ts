import { Request, Response } from "express";
import {
  createCommentService,
  getCommentListService,
  deleteCommentService,
  updateCommentService
} from "./service";

export const createCommentController = async (req: Request, res: Response) => {
  const { result } = await createCommentService(req);

  try {
    switch (result) {
      case "success":
        res.send({
          code: 200,
          message: "Success"
        });
        break;

      default:
        res.send({
          code: 500,
          message: "unexpected Error"
        });
        break;
    }
  } catch (error) {
    console.log(error);
    res.send({
      code: 500,
      error: error
    });
  }
};

export const getCommentListController = async (req: Request, res: Response) => {
  const { result, data } = await getCommentListService(req);

  try {
    switch (result) {
      case "success":
        res.send({
          data,
          code: 200,
          message: "Success"
        });
        break;

      default:
        res.send({
          code: 500,
          message: "unexpected Error"
        });
        break;
    }
  } catch (error) {
    console.log(error);
    res.send({
      code: 500,
      error: error
    });
  }
};

export const deleteCommentController = async (req: Request, res: Response) => {
  const { result } = await deleteCommentService(req);

  try {
    switch (result) {
      case "success":
        res.send({
          code: 200,
          message: "Success"
        });
        break;

      default:
        res.send({
          code: 500,
          message: "unexpected Error"
        });
        break;
    }
  } catch (error) {
    console.log(error);
    res.send({
      code: 500,
      error: error
    });
  }
};

export const updateCommentController = async (req: Request, res: Response) => {
  const { result } = await updateCommentService(req);

  try {
    switch (result) {
      case "success":
        res.send({
          code: 200,
          message: "Success"
        });
        break;

      default:
        res.send({
          code: 500,
          message: "unexpected Error"
        });
        break;
    }
  } catch (error) {
    console.log(error);
    res.send({
      code: 500,
      error: error
    });
  }
};
