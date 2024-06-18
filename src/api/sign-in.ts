export interface SignInBody {
  email: string;
}

export async function signIn({ email }: SignInBody) {
  await fetch(process.env.NEXT_API_URL, { method: "POST" });
}
