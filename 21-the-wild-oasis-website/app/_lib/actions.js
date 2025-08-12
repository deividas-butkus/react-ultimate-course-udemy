"use server";

import { signIn, signOut } from "@/_lib/auth";

export async function updateGuest(formData) {
  console.log(formData);
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
