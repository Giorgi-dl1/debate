import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  teams: [
    {
      name: "ibsu",
      logo: "/logos/ibsu.jpeg",
      key: "ibsu",
      members: [
        {
          name: "giorgi",
          id: 1,
        },
        {
          name: "mariami",
          id: 2,
        },
        {
          name: "saba",
          id: 3,
        },
        {
          id: 4,
          name: "nino",
        },
      ],
      stages: [
        {
          name: "stage1",
          rates: [
            {
              user: "giorgi",
              rate: {
                argumentative: 0,
                adequacyQ: 0,
                adequacyU: 0,
                teamwork: 0,
                analyticity: 0,
                oratory: 0,
                ComprehensiveA: 0,
              },
            },
            {
              user: "mariami",
              rate: {
                argumentative: 0,
                adequacyQ: 0,
                adequacyU: 0,
                teamwork: 0,
                analyticity: 0,
                oratory: 0,
                ComprehensiveA: 0,
              },
            },
            {
              user: "saba",
              rate: {
                argumentative: 0,
                adequacyQ: 0,
                adequacyU: 0,
                teamwork: 0,
                analyticity: 0,
                oratory: 0,
                ComprehensiveA: 0,
              },
            },
            {
              user: "nino",
              rate: {
                argumentative: 0,
                adequacyQ: 0,
                adequacyU: 0,
                teamwork: 0,
                analyticity: 0,
                oratory: 0,
                ComprehensiveA: 0,
              },
            },
          ],
        },
        {
          name: "stage2",
          rates: [
            {
              user: "giorgi",
              rate: {
                argumentative: 10,
                adequacyQ: 0,
                adequacyU: 20,
                teamwork: 0,
                analyticity: 0,
                oratory: 0,
                ComprehensiveA: 0,
              },
            },
            {
              user: "mariami",
              rate: {
                argumentative: 0,
                adequacyQ: 0,
                adequacyU: 0,
                teamwork: 10,
                analyticity: 0,
                oratory: 0,
                ComprehensiveA: 0,
              },
            },
            {
              user: "saba",
              rate: {
                argumentative: 0,
                adequacyQ: 0,
                adequacyU: 20,
                teamwork: 10,
                analyticity: 0,
                oratory: 0,
                ComprehensiveA: 0,
              },
            },
            {
              user: "nino",
              rate: {
                argumentative: 0,
                adequacyQ: 0,
                adequacyU: 0,
                teamwork: 0,
                analyticity: 0,
                oratory: 0,
                ComprehensiveA: 0,
              },
            },
          ],
        },
      ],
    },

    {
      name: "tsu",
      key: "tsu",
      logo: "/logos/tsu.png",
      members: [],
      rate: 0,
    },
  ],
  users: [
    {
      name: "giorgi",
      id: 1,
      password: "12345",
      isAdmin: false,
      team: "ibsu",
    },
    {
      name: "mariami",
      id: 2,
      password: "12345",
      isAdmin: false,
      team: "ibsu",
    },
    {
      name: "saba",
      id: 3,
      password: "12345",
      isAdmin: false,
      team: "isbu",
    },
    {
      name: "nino",
      id: 4,
      password: "12345",
      isAdmin: false,
      team: "ibsu",
    },
    {
      name: "უსერი",
      id: 5,
      password: "12345",
      isAdmin: true,
      team: null,
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

    case "JOIN_IN_TEAM":
      const key = action.payload.key;
      const userId = action.payload.id;
      const usersTeam = state.teams.filter((team) => team.key === key)[0];
      if (usersTeam) {
        const updatedUsers = state.users.map((user) => {
          if (user.id === userId) {
            return { ...user, team: usersTeam.name };
          } else {
            return user;
          }
        });
        const userInfo = updatedUsers.filter((user) => user.id === userId)[0];
        const updatedTeams = state.teams.map((team) =>
          team.name === usersTeam.name
            ? {
                ...team,
                members: [
                  ...team.members,
                  { name: userInfo.name, id: userInfo.id },
                ],
              }
            : { ...team }
        );
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        console.log(updatedTeams);
        return {
          ...state,
          userInfo: { ...userInfo },
          users: [...updatedUsers],
          teams: [...updatedTeams],
        };
      } else {
        return { ...state };
      }
    default:
      return state;
  }
};
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
