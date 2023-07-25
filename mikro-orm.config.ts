import { MikroORM } from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";

const config = {
  entities: ["./path/to/entities"], // Replace with the path to your entity files
  dbName: "your_database_name",
  driver: PostgreSqlDriver,
  clientUrl:
    "postgresql://your_username:your_password@localhost:5432/your_database_name",
  debug: process.env.NODE_ENV !== "production",
};
let orm: any;
(async () => {
  orm = await MikroORM.init(config);
  // Rest of your code
})();

export default orm;
