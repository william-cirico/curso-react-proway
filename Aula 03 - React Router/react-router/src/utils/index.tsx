/**
 * formats a ISO date (2015-03-25T12:00:00Z) to DD/MM/YYYY.
 */
export function convertISODateToDate(dateInString: string): string {
    const date = new Date(dateInString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const formatedMonth = month < 10 ? "0" + month : month;
    const formatedDay = day < 10 ? "0" + day : day;

    return `${formatedDay}/${formatedMonth}/${year}`;
}