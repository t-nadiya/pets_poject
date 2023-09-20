export const formatTime = (date: string) => {
    const dateObject = new Date(date);

    const hours = dateObject.getUTCHours().toString().padStart(2, '0');
    const minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');

    const time = `${hours}:${minutes}`;

    return time;
};

