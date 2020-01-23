import { register, auth } from "./app/controllers/account";

const routes = [
  {
    group: "accounts",
    routes: [
      {
        match: "/register",
        method: "post",
        action: register
      },
      {
        match: "/auth",
        method: "post",
        action: auth
      }
    ]
  },
  {
    match: "/ping",
    method: "get",
    action: (req, res, next) => res.send("pong")
  }
];

export default routes;
