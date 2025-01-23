import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "cookie";

interface AuthState {
  user: Record<string, unknown> | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedUser: (
      state,
      action: PayloadAction<{
        user: AuthState["user"];
        token: string;
        refreshToken: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      // Save user and token to cookies (client-side)
      Cookies.serialize("user", JSON.stringify(action.payload.user), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
      Cookies.serialize("token", action.payload.token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
      });
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      // Remove user and token from cookies (client-side)
      Cookies.serialize("user", "", {
        httpOnly: true,
        maxAge: 0,
      });
      Cookies.serialize("token", "", {
        httpOnly: true,
        maxAge: 0,
      });
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    },
    updatedUser: (state, action: PayloadAction<AuthState["user"]>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { loggedUser, logoutUser, updatedUser } = authSlice.actions;
export default authSlice.reducer;
