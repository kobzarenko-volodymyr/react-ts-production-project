import { lazy } from "react";

export const ProfilePageAsync = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      //artificial delay ONLY FOR TESTING!!!
      setTimeout(() => resolve(import("./ProfilePage")), 1500);
    })
);
