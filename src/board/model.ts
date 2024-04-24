import prismaInstance from "../prisma";

export const createBoardModel = async (
  boardTitle: string,
  boardDetail: string,
  imagePath: string,
  userId: string
) => {
  return null;
};

export const updateBoardModel = async (
  boardId: string,
  boardTitle: string,
  boardDetail: string,
  imagePath: string
) => {
  return null;
};

export const deleteBoardModel = async (boardId: string, userId: string) => {
  return null;
};

export const getBoardModel = async (boardId: string, userId: string) => {
  return null;
};

export const getBoardListModel = async (
  boardId: string,
  userId: string,
  offset: number,
  limit: number
) => {
  return null;
};
