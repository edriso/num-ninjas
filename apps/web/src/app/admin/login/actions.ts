"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirectTo: "/admin",
    });
    return null;
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { error: "البريد الإلكتروني أو كلمة المرور غلط" };
      }
      return { error: "حصل مشكلة، حاول تاني" };
    }
    // Next.js redirect throws an error — rethrow it
    throw error;
  }
}
