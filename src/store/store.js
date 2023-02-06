import { reactive } from "vue";

const store = reactive({
  username: "rMootie",
  updateUsername(username) {
    this.username = username;
  },
});

export default store;
