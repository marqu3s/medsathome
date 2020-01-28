import AccountController from "./app/controllers/AccountController";

const routes = [
  {
    group: "accounts",
    routes: [
      {
        match: "/register",
        method: "post",
        action: AccountController.register
      },
      {
        match: "/auth",
        method: "post",
        action: AccountController.auth
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
