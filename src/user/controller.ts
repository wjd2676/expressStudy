import { Request, Response } from "express";
import { loginService, signupService, updateUserService } from "./service";

export const loginController = async (req: Request, res: Response) => {
  const { result, data } = await loginService(req);

  try {
    switch (result) {
      case "success":
        res.send({
          code: 200,
          message: "Success",
          data: data
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

export const signupController = async (req: Request, res: Response) => {
  const { result } = await signupService(req);

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

export const updateUserController = async (req: Request, res: Response) => {
  const { result } = await updateUserService(req);

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
