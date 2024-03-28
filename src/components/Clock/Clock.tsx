import React, { useState, useEffect } from 'react';
import styles from './clock.module.scss';

interface ClockProps {
  timeZone: string;
  locationName?: string;
  main?: boolean;
}

const Clock: React.FC<ClockProps> = ({ timeZone, locationName, main }) => {
    const getTime = () => new Date().toLocaleTimeString("pt-BR", { timeZone, hour12: false });
    const getDate = () => new Date().toLocaleDateString("pt-BR", { 
        timeZone, 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    });
    const getWeekNumber = (d: Date) => {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        const weekNo = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
        return weekNo;
    };

    const [time, setTime] = useState(getTime());
    const [date, setDate] = useState(getDate());
    const weekNumber = getWeekNumber(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(getTime());
        setDate(getDate());
      }, 1000);

      return () => clearInterval(interval);
    }, [timeZone]);

    return (
        <div>
            {main ? (
                <section>
                    <div className={styles.title}>Hora em <strong>{locationName}</strong> agora:</div>
                    <div className={styles.mainTime}>{time}</div>
                    <div className={styles.date}>{date}</div>
                </section>
            ) : (
                <section className={styles.secondaryClockItem}>
                    <span className={styles.location}>{locationName}</span>
                    <div className={styles.time}>{time}</div>
                </section>
            )}
        </div>
    );
};

export default Clock;
