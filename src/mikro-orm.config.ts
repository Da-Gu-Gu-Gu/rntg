import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";

export default {
  migrations: {
    path: "./migrations", // path to the folder with migrations
  },
  entities: [Post],
  dbName: "lireddit",
  debug: !__prod__,
  type: "postgresql",
} as Parameters<typeof MikroORM.init>[0];
