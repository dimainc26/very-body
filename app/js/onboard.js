
import Connection from "../views/Connection.vue";


export default {

  data() {
    return {
      onboardData: [
        { isSkip: true, title: "Training", content: "Workout plans designed to help you archieve your fitness goals - Whether losing weight or building muscle ", img: "res://a", bg: "linear-gradient(rgb(41, 40, 41), rgb(22, 20, 22))" },
        { isSkip: true, title: "Supplements", content: "Workout plans designed to help you archieve your fitness goals - Whether losing weight or building muscle ", img: "res://b", bg: "linear-gradient(rgb(19, 71, 168), rgb(40, 40, 133))" },
        { isSkip: true, title: "Interact", content: "Workout plans designed to help you archieve your fitness goals - Whether losing weight or building muscle ", img: "res://c", bg: "linear-gradient(rgb(241, 38, 174), rgb(158, 32, 127))" },
        { isSkip: true, title: "Renforce", content: "Workout plans designed to help you archieve your fitness goals - Whether losing weight or building muscle ", img: "res://f", bg: "linear-gradient(rgb(90, 211, 248), rgb(14, 105, 241))" },
        { isSkip: false, title: "Contest", content: "Workout plans designed to help you archieve your fitness goals - Whether losing weight or building muscle ", img: "res://g", bg: "linear-gradient(rgb(107, 34, 5), rgb(121, 61, 43))" },
      ],
    }
  },
  methods: {
    goToSignin() {
      this.$navigateTo(Connection);
    },
    goToLogin() {
      this.$navigateTo(Connection);
    }
  },
  computed: {
    hasItems() {
      return this.onboardData.length > 0;
    }
  },
  watch: {
    async onboardData(to) {
      await this.$nextTick()
      this.$refs.myCarousel.nativeView.refresh();
    },
  },

}