import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";
import fs from "fs";

export const bcryptHashing = async (password: string): Promise<string> => {
  console.log(1);
  console.log('header-1')

  const saltRounds = 10; // 암호화 강도 설정
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

export const bcryptCompare = async (
  inputPassword: string,
  storedPassword: string
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(inputPassword, storedPassword);
  return isMatch;
};

require("dotenv").config();

const secretKey: string = process.env.SECRET_KEY!;

export const bscryptPassword = async (userPw: string) => {
  console.log('header')
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userPw, saltRounds);

  return hashedPassword;
};

export const jwtEncodeUserId = (userId: string) => {
  return jwt.sign({ userId }, secretKey, { expiresIn: "2h" });
};

export const jwtDecodeUserId = (token: string) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return { role: "error" };
  }
};

export const imageSaveHandle = async (src: string, title: string) => {
  const base64Data = src.replace(/^data:image\/\w+;base64,/, "");
  const dataBuffer = Buffer.from(base64Data, "base64");

  const fileExtension = path.extname(title);
  const filenameWithoutExtension = path.basename(title, fileExtension);
  const timestamp = Date.now();
  const filename = `${filenameWithoutExtension}-${timestamp}
    ${fileExtension}`;
  const dirName = `/app/upload`;

  const filePath = path.join(dirName, filename);

  await fs.promises.writeFile(filePath, dataBuffer);

  return filePath;
};
