import Globals from "./functions";


export default {
    name: "Progress",
    data() {
        return {
            progressData: [
                {day: 12, percent: "20%", dLetter: "Mon"},
                {day: 13, percent: "55%", dLetter: "Tue"},
                {day: 14, percent: "12%", dLetter: "Wed"},
                {day: 15, percent: "80%", dLetter: "Thu"},
                {day: 16, percent: "20%", dLetter: "Fri"},
                {day: 17, percent: "66%", dLetter: "Sat"},
                {day: 18, percent: "45%", dLetter: "Sun"},
            ],
        };
    },
    mounted() {
    },
    methods: {
        daysInMonth() {
            this.progressData = [];
            let days = Globals.getDaysInMonth();
            console.log("DAYS:  " + days);
            for (let i = 0; i <= days; i++) {
                this.progressData.push(i);

                // if (i == 31) {
                //     break
                // }
            }
            console.log("finis")
        }
    }
};