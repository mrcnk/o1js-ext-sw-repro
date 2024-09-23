import { Field } from "o1js";
import { runtime } from "webextension-polyfill";

runtime.onInstalled.addListener(async () => {
  console.log(Field.from(5));
});
