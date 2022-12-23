import { json, LoaderArgs, redirect } from "@remix-run/node";

export function loader({ params }: LoaderArgs) {
  if (params["*"] === "exp") {
    return redirect("/expenses");
  }

  throw json("Not Found", {
    status: 404,
  });
}
