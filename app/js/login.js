import Home from "../views/Home.vue";

export default {
  name: "Login",
    data () {
      return {};
    },
    methods: {
      goToHome(){
        this.$navigateTo(Home);
      }
    }
  };