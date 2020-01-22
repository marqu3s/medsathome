import register from "./controllers/account";

const routes = [
  {
    group: "accounts",
    routes: [
      {
        match: "/register",
        method: "post",
        action: register
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
