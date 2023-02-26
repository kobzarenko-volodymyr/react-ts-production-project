import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import i18next from "i18next";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface loginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  { rejectValue: string }
>("login/loginByUsername", async (authData, thunkApi) => {
  try {
    const response = await axios.post<User>(
      "http://localhost:8000/login",
      authData
    );

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkApi.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue(
      i18next.t("Вы ввели неверный логин или пароль")
    );
  }
});
