import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      //artificial delay ONLY FOR TESTING!!!
      setTimeout(() => resolve(import("./LoginForm")), 1500);
    })
);
