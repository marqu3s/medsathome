import mongoose from "mongoose";

import databaseConfig from "../config/database";

class Database {
  constructor() {
    this.init();
  }

  init() {
    mongoose.connect(
      `mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@${databaseConfig.host}/${databaseConfig.database}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    this.db = mongoose.connection;
    this.db.on("error", console.error.bind(console, "connection error:"));
    this.db.once("open", function() {
      // connected!
    });
  }
}

export default new Database();
