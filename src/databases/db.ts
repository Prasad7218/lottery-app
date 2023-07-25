import { EntityManager } from "@mikro-orm/core";
import orm from "../../mikro-orm.config";

export const db = {
  em: orm.em as EntityManager,
};
