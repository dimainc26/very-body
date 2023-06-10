import Feed from "../components/Feed.vue";
import Store from "../components/Store.vue";

export default {
  components: {
    Feed,
    Store,
  },
  data() {
    return {
      tab: "Feed",
    };
  },
  methods: {
    store() {
      this.tab = "Store";
    },
    feed() {
      this.tab = "Feed";
    },
  }
};