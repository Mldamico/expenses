import AuthForm from "~/components/auth/AuthForm";
import { LinksFunction } from "@remix-run/node";
import authStyles from "~/styles/auth.css";

const AuthPage = () => {
  return <AuthForm />;
};

export default AuthPage;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];
