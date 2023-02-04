import { lazy } from "react";

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      //artificial delay ONLY FOR TESTING!!!
      setTimeout(() => resolve(import("./AboutPage")), 1500);
    })
);
