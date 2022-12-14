// Generated by Xata Codegen 0.18.0. Please do not edit.
import { buildClient } from "@xata.io/client";
/** @typedef { import('./types').SchemaTables } SchemaTables */
/** @type { SchemaTables } */
const tables = [
  {
    name: "customers",
    columns: [
      { name: "first_name", type: "string" },
      { name: "last_name", type: "string" },
      { name: "email", type: "email" },
      { name: "company", type: "string" },
      { name: "phone", type: "int" },
      { name: "message", type: "text" },
      { name: "budget", type: "string" },
      { name: "hear_about_us", type: "string" },
    ],
  },
];
/** @type { import('@xata.io/client').ClientConstructor<{}> } */
const DatabaseClient = buildClient();
const defaultOptions = {
  databaseURL:
    "https://Teri-Eyenike-s-workspace-14frfm.eu-west-1.xata.sh/db/collect_user_data",
};
/** @typedef { import('./types').DatabaseSchema } DatabaseSchema */
/** @extends DatabaseClient<DatabaseSchema> */
export class XataClient extends DatabaseClient {
  constructor(options) {
    super({ ...defaultOptions, ...options }, tables);
  }
}
let instance = undefined;
/** @type { () => XataClient } */
export const getXataClient = () => {
  if (instance) return instance;
  instance = new XataClient();
  return instance;
};
