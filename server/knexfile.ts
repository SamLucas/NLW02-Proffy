import { resolve } from "path";

module.exports = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: resolve(__dirname, "src", "database", "migrations"),
  },
  connection: {
    filename: resolve(__dirname, "src", "database", "database.sqlite"),
  },
};
