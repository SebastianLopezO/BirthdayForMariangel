import {useEffect, useState} from "react";

const START_DATE = new Date(2004, 1, 11); // February 11, 2004

interface TimeUnits {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTime = (): TimeUnits => {
    const now = new Date();
    const diff = now.getTime() - START_DATE.getTime();

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const years = Math.floor(totalDays / 365.25);
    const remainingDaysAfterYears = Math.floor(totalDays - years * 365.25);
    const months = Math.floor(remainingDaysAfterYears / 30.44);
    const days = Math.floor(remainingDaysAfterYears - months * 30.44);

    return {
        years,
        months,
        days,
        hours: totalHours % 24,
        minutes: totalMinutes % 60,
        seconds: totalSeconds % 60,
    };
};

const CounterUnit = ({value, label}: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <div className="bg-background rounded-2xl px-3 py-2 sm:px-5 sm:py-3 border-2 border-birthday-gold/30 shadow-md">
      <span className="text-2xl sm:text-4xl font-display text-birthday-chocolate font-bold">
        {String(value).padStart(2, "0")}
      </span>
        </div>
        <span className="text-xs sm:text-sm text-muted-foreground mt-1.5 font-body font-semibold">{label}</span>
    </div>
);

const LoveCounter = () => {
    const [time, setTime] = useState<TimeUnits>(calculateTime());

    useEffect(() => {
        const interval = setInterval(() => setTime(calculateTime()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-display text-birthday-chocolate">
                Desde que naciste han pasado... 🎂
            </h2>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <CounterUnit value={time.years} label="Años"/>
                <CounterUnit value={time.months} label="Meses"/>
                <CounterUnit value={time.days} label="Días"/>
                <CounterUnit value={time.hours} label="Horas"/>
                <CounterUnit value={time.minutes} label="Minutos"/>
                <CounterUnit value={time.seconds} label="Segundos"/>
            </div>
            <p className="text-muted-foreground font-cursive text-3xl">
                ...y cada segundo el mundo es mejor contigo en él
            </p>
        </div>
    );
};

export default LoveCounter;
