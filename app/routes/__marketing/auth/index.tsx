import AuthForm from "~/components/auth/AuthForm";
import { LinksFunction, ActionArgs, redirect } from "@remix-run/node";
import authStyles from "~/styles/auth.css";
import { IUser, validateCredentials } from "../../../data/validation.server";
import { login, signup } from "~/data/auth.server";

const AuthPage = () => {
  return <AuthForm />;
};

export default AuthPage;

export async function action({ request }: ActionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  try {
    validateCredentials(credentials as unknown as IUser);
  } catch (error) {
    return error;
  }

  try {
    if (authMode === "login") {
      return await login(credentials as unknown as IUser);
    } else {
      return await signup(credentials as unknown as IUser);
    }
  } catch (error: any) {
    if (error.status === 422) {
      return { credentials: error.message };
    }
  }
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];
