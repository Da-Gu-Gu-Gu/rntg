import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
  },
  entities: [Post],
  dbName: "lireddit",
  debug: !__prod__,
  type: "postgresql",
  metadataProvider: TsMorphMetadataProvider,
} as Parameters<typeof MikroORM.init>[0];
