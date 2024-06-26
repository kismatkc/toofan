"use server"
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import {  parseStringify } from "../utils";



export const signIn = async ({ email, password }: signInProps) => {
  // try {
  //   const { account } = await createAdminClient();
  //   const session = await account.createEmailPasswordSession(email, password);

  //   cookies().set("appwrite-session", session.secret, {
  //     path: "/",
  //     httpOnly: true,
  //     sameSite: "strict",
  //     secure: true,
  //   });

  //   const user = await getUserInfo({ userId: session.userId }) 

  //   return parseStringify(user);
  // } catch (error) {
  //   console.error('Error', error);
  // }
}


export const signUp = async ( userData : SignUpParams) => {
  const { email,password, firstName, lastName } = userData;

 

  try {
    const { account} = await createAdminClient();
    console.log('Attempting to create user...');
    const newUserAccount = await account.create(
      ID.unique(), 
      email, 
      password, 
      `${firstName} ${lastName}`
    );

    console.log('User created successfully:', newUserAccount);
    console.log('Attempting to create session...');


    const session = await account.createEmailPasswordSession(email, password);
    console.log('Session created successfully:', session);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUserAccount);
  } catch (error) {
    console.error("Error during sign up:", error);

  throw new Error("Signup failed. Please try again.");
}
}






export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}





