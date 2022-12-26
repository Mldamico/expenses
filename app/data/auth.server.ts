import { hash } from "bcryptjs";

import { prisma } from "./database.server";
import { IUser } from "./validation.server";
interface Error {
  status?: number;
}
export async function signup({ email, password }: IUser) {
  const existingUser = await prisma.user.findFirst({ where: { email } });

  if (existingUser) {
    const error = new Error(
      "A user with the provided email address exists already."
    ) as Error;
    error.status = 422;
    throw error;
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.create({ data: { email: email, password: passwordHash } });
}
