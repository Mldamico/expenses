import { LinksFunction } from "@remix-run/node";
import authStyles from "~/styles/auth.css";
const AuthPage = () => {
  return <div>AuthPage</div>;
};

export default AuthPage;

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: authStyles },
];
