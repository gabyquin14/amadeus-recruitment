export const formatSpanishDate = (date: Date) => {
    const dateString = new Date(date);
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
    } as Intl.DateTimeFormatOptions;
    return dateString.toLocaleDateString("es-ES", options);
};
export const formatSlashDate = (inputDate: Date | string) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}/${month}/${day}`;
};
