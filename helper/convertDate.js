function convertDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let newDate = `${day}/${month}/${year}`;
    
    return newDate;
}

module.exports = convertDate;