import AuthForm from "~/components/auth/AuthForm";
import { LinksFunction, ActionArgs } from "@remix-run/node";
import authStyles from "~/styles/auth.css";

const AuthPage = () => {
  return <AuthForm />;
};

export default AuthPage;

export async function action({ request }: ActionArgs) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  if (authMode === "login") {
  } else {
  }
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];
