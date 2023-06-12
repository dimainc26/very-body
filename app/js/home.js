import Feed from "../components/Feed.vue";
import Store from "../components/Store.vue";
import Progress from "../components/Progress.vue";
import Menu from "../components/Menu.vue";

import Profile from "../views/Profile.vue";

export default {
  components: {
    Feed,
    Store,
    Progress,
  },
  data() {
    return {
      tab: "Feed",
    };
  },
  methods: {
    menu(){
      this.$showModal(Menu);
    },
    profile(){
      this.$navigateTo(Profile);
    },
    store() {
      this.tab = "Store";
    },
    feed() {
      this.tab = "Feed";
    },
    progress() {
      this.tab = "Progress";
    },
  }
};