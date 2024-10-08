export default function stringToDate(text) {
    const [date, time] = text.split(" ");
    const [day, month, year] = date.split("/").map(Number);
    const [hour, minute] = time.split(":").map(Number);
    return new Date(year, month - 1, day, hour, minute);
}
//# sourceMappingURL=stringToDate.js.map