import { LinksFunction, LoaderArgs } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import { getUserFromSession } from "~/data/auth.server";
import marketingStyles from "~/styles/marketing.css";

const MarketingLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default MarketingLayout;

export async function loader({ request }: LoaderArgs) {
  return getUserFromSession(request);
}

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: marketingStyles,
    },
  ];
};
