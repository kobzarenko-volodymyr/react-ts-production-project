import { lazy } from "react";

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      //artificial delay ONLY FOR TESTING!!!
      setTimeout(() => resolve(import("./MainPage")), 1500);
    })
);
