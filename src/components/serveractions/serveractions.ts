// src/lib/serverActions.ts

import { db } from "@/lib/db";



export const removeProfileImage = async (userId: string) => {
  const response = await db.user.update({
    where: {
      clerkId: userId,
    },
    data: {
      profileImage: '',
    },
  });
  return response;
};

export const uploadProfileImage = async (userId: string, image: string) => {
  const response = await db.user.update({
    where: {
      clerkId: userId,
    },
    data: {
      profileImage: image,
    },
  });
  return response;
};
