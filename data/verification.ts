import { db } from "@/lib/db";

export const getVerficationTokenByEmail = async (email: string) => {
  try {
    const verficationToken = await db.verificationToken.findFirst({
      where: {
        email: email,
      },
    });

    return verficationToken;
  } catch (error) {
    throw null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        token,
      },
    });

    return verificationToken;
  } catch (error) {
    throw null;
  }
};
