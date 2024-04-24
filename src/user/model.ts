import prismaInstance from "../prisma";

export const userIdValidationModel = async (userId: string) => {
  const result = await prismaInstance.user.findUnique({
    data: {
      userId: userId
    }
  });

  return result;
};

export const loginModel = async (userId: string, userPw: string) => {
  return null;
};

export const signupModel = async (userId: string, userPw: string) => {
  return null;
};

export const updateUserModel = async (userId: string, userPw: string) => {
  return null;
};
