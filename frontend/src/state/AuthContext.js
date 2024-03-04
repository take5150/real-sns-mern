import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const initialState = {
  // user: null,
  user: {
    _id: "65caf2758911a08eefb9ff3d",
    username: "takehiro3",
    email: "test3@gmail.com",
    password: "12345",
    profilePicture: null,
  },
  isFetching: false,
  error: false,
};

// 状態をグローバルで管理
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
