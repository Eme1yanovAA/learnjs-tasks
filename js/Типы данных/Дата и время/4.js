function getDateAgo(date, days) {
    let new_date = new Date(date);
    new_date.setDate(date.getDate() - days);
    return new_date.getDate();
}