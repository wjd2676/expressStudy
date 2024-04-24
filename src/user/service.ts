import { Request } from "express";
import {
  loginModel,
  signupModel,
  updateUserModel,
  userIdValidationModel
} from "./model";
import {
  bcryptCompare,
  bscryptPassword,
  jwtDecodeUserId,
  jwtEncodeUserId
} from "../../uilts";

export const loginService = async (req: Request) => {
  let result = "invalidValue";
  let data = {};

  const { userId, userPw } = req.body;

  if (userId === undefined || userPw === undefined)
    return { result: "invalidBody", data: null };

  const validation = await userIdValidationModel(userId);

  if (!validation) return { result: "invalidValue", data };

  const user = await userIdValidationModel(userId);

  const pwCompareResult = await bcryptCompare(user!.userPw, userPw);

  if (pwCompareResult) {
    const token = jwtEncodeUserId(userId);

    return {
      result: "success",
      data: token
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

  if (!userId || !userPw) return { result: "invalidBody" };

  //TODO validation
  //TODO MODEL

  const validation = await userIdValidationModel(userId);

  if (!validation) return { result: "exsistUserId" };

  const hashedPassword = await bscryptPassword(userPw);

  const signupHandle = await signupModel(userId, hashedPassword);

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
