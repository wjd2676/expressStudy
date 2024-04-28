import prismaInstance from "../prisma";

export const createBoardModel = async (
  boardTitle: string,
  boardDetail: string,
  imagePath: string | null,
  userId: string
) => {
  const result = await prismaInstance.board.create({
    data: {
      boardTitle,
      boardDetail,
      userId,
      imagePath
    }
  });

  return result;
};

export const findBoardModel = async (boardId: number) => {
  const result = await prismaInstance.board.findUnique({
    where: {
      boardId
    }
  });

  return result;
};

export const updateBoardModel = async (
  boardId: number,
  boardTitle: string,
  boardDetail: string,
  imagePath: string | null,
  userId: string
) => {
  const result = await prismaInstance.board.update({
    where: {
      boardId
    },
    data: {
      boardTitle,
      boardDetail,
      imagePath: imagePath !== null ? imagePath : null,
      userId
    }
  });

  return result;
};

export const deleteBoardModel = async (boardId: string, userId: string) => {
  return null;
};

export const getBoardModel = async (boardId: string, userId: string) => {
  return null;
};

export const getBoardListModel = async (
  userId: string,
  offset: number,
  limit: number
) => {
  const result = await prismaInstance.board.findMany({
    where: {
      userId
    },
    skip: offset * limit,
    take: limit,
    select: {
      boardId: true,
      boardTitle: true,
      userId: true,
      createAt: true,
      updateAt: true
    }
  });

  return result;
};
