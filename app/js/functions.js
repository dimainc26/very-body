export default {
    getDaysInMonth: function getDaysInMonth() {
        var month = new Date().getMonth();
        var year = new Date().getFullYear();

        var days = new Date(year, month, 0).getDate();
        return days;
    }
}