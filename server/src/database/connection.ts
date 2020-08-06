import knex from "knex";
import { resolve } from "path";

const db = knex({
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: resolve(__dirname, "database.sqlite"),
  },
});

export default db;
