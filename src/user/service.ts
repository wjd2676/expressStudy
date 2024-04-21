import { Request } from "express";
import { loginModel, signupModel, updateUserModel } from "./model";

export const loginService = async (req: Request) => {
  let result = "invalidValue";
  let data = {};

  const { userId, userPw } = req.body;

  //TODO validation
  //TODO JWT
  //TODO MODEL

  let validation = false;
  if (!validation) return { result, data };

  const loginHandle = await loginModel(userId, userPw);

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
      result: "error",
      data
    };
  }
};

export const signupService = async (req: Request) => {
  let result = "invalidValue";

  const { userId, userPw } = req.body;

  //TODO validation
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  const signupHandle = await signupModel(userId, userPw);

  if (signupHandle) {
    return {
      result: "success"
    };
  } else {
    return {
      result: "error"
    };
  }
};

export const updateUserService = async (req: Request) => {
  let result = "invalidValue";

  const { userId, userPw } = req.body;

  //TODO validation
  //TODO MODEL

  let validation = false;
  if (!validation) return { result };

  const updateuserHandle = await updateUserModel(userId, userPw);

  if (updateuserHandle) {
    return {
      result: "success"
    };
  } else {
    return {
      result: "error"
    };
  }
};
