import { COMMIT_UPDATE_USERNAME } from "../../../common/mutation-types";
import { getUser } from "../../../api/index";

const profileModule = {
  state() {
    return {
      username: "Robertico",
    };
  },
  getters: {
    firstName: (state) => (c) => {
      return state.username.split("").join(c);
    },
  },
  mutations: {
    [COMMIT_UPDATE_USERNAME](state, username) {
      state.username = username;
    },
  },
  actions: {
    async updateUsername({ commit, state }, username) {
      console.log("update username", state.username, username);

      const user = await getUser(1);
      console.log(user);

      commit(COMMIT_UPDATE_USERNAME, user.username);
    },
  },
};
export default profileModule;
