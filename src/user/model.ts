import prismaInstance from "../prisma";

export const userIdValidationModel = async (userId: string) => {
  const result = await prismaInstance.user.findUnique({
    where: {
      userId: userId
    }
  });

  return result;
};

export const signupModel = async (userId: string, userPw: string) => {
  const result = await prismaInstance.user.create({
    data: {
      userId,
      userPw
    }
  });

  return result;
};

export const updateUserModel = async (userId: string, userPw: string) => {
  const result = await prismaInstance.user.update({
    where: {
      userId
    },
    data: {
      userPw
    }
  });

  return result;
};
