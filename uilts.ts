import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";

export const bcryptHashing = async (password: string): Promise<string> => {
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
