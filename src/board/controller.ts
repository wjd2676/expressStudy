import { Request, Response } from "express";
import {
  createBoardService,
  updateBoardService,
  deleteBoardService,
  getBoardService,
  getBoardListService
} from "./service";

export const createBoardController = async (req: Request, res: Response) => {
  const { result } = await createBoardService(req);

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

export const updateBoardController = async (req: Request, res: Response) => {
  const { result } = await updateBoardService(req);

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

export const deleteBoardController = async (req: Request, res: Response) => {
  const { result } = await deleteBoardService(req);

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

export const getBoardController = async (req: Request, res: Response) => {
  const { result, data } = await getBoardService(req);

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
          data,
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

export const getBoardListController = async (req: Request, res: Response) => {
  const { result, data } = await getBoardListService(req);

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
          data,
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
