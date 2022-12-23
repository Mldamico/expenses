import { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import marketingStyles from "~/styles/marketing.css";

const MarketingLayout = () => {
  return <Outlet />;
};

export default MarketingLayout;

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: marketingStyles,
    },
  ];
};
