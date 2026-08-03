import { useEffect, useState } from "react";


function getTimeData() {

            const currentDate = new Date();
            const hoursRead = currentDate.getHours();
            const minutesRead = currentDate.getMinutes();
            const secondsRead = currentDate.getSeconds();

            const hours = hoursRead % 12 || 12;
            const minutes = minutesRead < 10 ? "0" + minutesRead : minutesRead;
            const seconds = secondsRead < 10 ? "0" + secondsRead : secondsRead;

            const ampm = hoursRead >= 12 ? "pm" : "am";

            const timeString = hours + ":" + minutes + ":" + seconds;

            return { timeString, ampm };
}

export default function Timer() {

    const [time, setTime] = useState(getTimeData());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(getTimeData());
        }, 1000);

        return () => clearInterval(id);
    }, []);

return <div>{time.timeString} {time.ampm}</div>;
}