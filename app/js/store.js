import Detail from "../components/Detail.vue";

export default {
    name: "Store",
    data() {
        return {
            storeData: [
                { img: "res://a", title: "Training", text: "Workout plans designed to help you archieve your fitness goals - Whether losing weight or building muscle ", price: 0, bg: "linear-gradient(rgb(41, 40, 41), rgb(22, 20, 22))", },
                { img: "res://b", title: "Supplements", text: "The body achieves what the mind believes.", price: 50, bg: "linear-gradient(rgb(19, 71, 168), rgb(40, 40, 133))" },
                { img: "res://c", title: "Interact", text: "Your body can do it.", price: 18, bg: "linear-gradient(rgb(241, 38, 174), rgb(158, 32, 127))" },
                { img: "res://d", title: "Renforce", text: "Stamina.", price:99, bg: "linear-gradient(rgb(90, 211, 248), rgb(14, 105, 241))" },
                { img: "res://g", title: "Contest", text: "Don't stop, continue.", price: 37, bg: "linear-gradient(rgb(107, 34, 5), rgb(121, 61, 43))" },
                { img: "res://f", title: "Harder", text: "Harder.", price: 250, bg: "linear-gradient(to right, green, rgb(2, 80, 2))" },
            ],
        };
    },
    methods: {
        goDetail(item) {
            this.$navigateTo(Detail, { props: { item: { img: item.img, title: item.title, text: item.text, price: item.price, bg: item.bg } } });
        }
    }
};