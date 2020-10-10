function dateNow () {
    var dateNow = new Date();
    var month =["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    var date = dateNow.getDate() + "." + month[dateNow.getMonth()] + "." + dateNow.getFullYear();
    return date;
}

export default dateNow;