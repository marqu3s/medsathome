import AccountController from "./app/controllers/AccountController";
import MedicineController from "./app/controllers/MedicineController";

import restrictedRoute from "./app/middlewares/restrictedRoute";

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
    group: "medicines",
    middleware: restrictedRoute,
    routes: [
      {
        match: "/",
        method: "get",
        action: MedicineController.list
      },
      {
        match: "/",
        method: "post",
        action: MedicineController.store
      },
      {
        match: "/:medicineId",
        method: "patch",
        action: MedicineController.update
      },
      {
        match: "/:medicineId",
        method: "del",
        action: MedicineController.delete
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
