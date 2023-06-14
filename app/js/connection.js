import Login from "../components/Login.vue";
import Signin from "../components/Signin.vue";

export default {
  props: ["from"],
  components: {
    Login,
    Signin
  },
  data() {
    return {
      tab: "Login",
      isLogin: true,
      bg: "linear-gradient(to left, #746d69, #cccdc6)"
    };
  },
  mounted(){
    this.whereTab();
  },
  methods: {
    whereTab(){
      this.from == "signin" ? this.tab = "Signin" : this.tab = "Login";
    },

    changeTabSign() {
      this.tab = "Signin";
      this.isLogin = false;
      this.bg = "linear-gradient(to left, #cccdc6, #746d69)"

    },
    changeTabLog() {
      this.tab = "Login";
      this.isLogin = true;
      this.bg = "linear-gradient(to left, #746d69, #cccdc6)"
    },
  }
};