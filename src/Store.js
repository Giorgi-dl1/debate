import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  teams: [
    {
      name: "ibsu",
      key: "ibsu",
      members: [],
      rate: 0,
    },
    {
      name: "ibsu",
      key: "ibsu",
      members: [],
      rate: 0,
    },
    {
      name: "ibsu",
      key: "ibsu",
      members: [],
      rate: 0,
    },
    {
      name: "ibsu",
      key: "ibsu",
      members: [],
      rate: 0,
    },
  ],
  users: [
    {
      name: "giorgi",
      password: "12345",
      isAdmin: true,
    },
    {
      name: "უსერი",
      password: "12345",
      isAdmin: false,
    },
  ],
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      const { name, password } = action.payload;
      const user = state.users.filter(
        (user) => name === user.name && password === user.password
      )[0];
      if (user) {
        localStorage.setItem("userInfo", JSON.stringify(user));
        return { ...state, userInfo: user };
      } else {
        return { ...state };
      }
    case "LOG_OUT":
      localStorage.removeItem("userInfo");
      return { ...state, userInfo: false };
    default:
      return state;
  }
};
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
