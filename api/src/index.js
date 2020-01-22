import router from "restify-router-config";
import restify from "restify";

import routes from "./routes";

const port = 8080;
const server = restify.createServer();
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

router(server, true)(routes);

server.listen(port, () => {
  console.log("%s listening at %s", server.name, server.url);
});
