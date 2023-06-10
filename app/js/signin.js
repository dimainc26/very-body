import Home from "../views/Home.vue";

export default {
  name: "Signin",
    data () {
      return {};
    },
    methods: {
      goToHome(){
        this.$navigateTo(Home);
      }
    }
  };