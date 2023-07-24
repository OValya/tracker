import React from 'react';
import {useRouter} from "next/navigation";
import styles from "./page.module.css";
import {headers} from "next/headers";
import Day from "@/components/Day/Day";

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const calcPeriod = (d1:Date, d2:Date):number=>{
    const day = 1000*60*60*24;
    return Math.ceil((d2.getTime() - d1.getTime())/day)+1;
}

type DateType = {
    id:number,
    date:Date
}

const setDays = (per:number, start: Date):Array<DateType> => {
    const days:Array<DateType> = [];
    for (let i = 1; i < per; i++) {
        const day = new Date(start.setDate(start.getDate()+1));
        days.push({id:i, date:day})
    }
    return days
}


//todo: add control for input dates
const dateStart = new Date(2023, 6, 16) //todo: correct start date
const dateFinish = new Date(2023, 7, 20)
const period = calcPeriod(dateStart, dateFinish);
const days = setDays(period, dateStart);

type Props = {
    params:{
        id:number;
    }
}

const Tracker = async ({params:{id}}:Props) => {
    const host = headers().get("host");
    const protocol = process?.env.NODE_ENV==="development"?"http":"https"
    let response = await fetch(`${protocol}://${host}/api/tracker/${id}`, { cache: "no-store" });
    const {result} = await response.json();



    return (
        <div className={styles.container}>
            <h3>Добро пожаловать в {result.title}</h3>
            <div className={styles.containerWeekdays}>
                {weekDays.map((day, ind)=><div key={ind} className={styles.weekday}>{day}</div>)}
            </div>
            <div className={styles.containerDays}>
                {days.map(day=><Day key={day.id} id={day.id} date={day.date} routerUrl={`/track/${result.id}/${day.id}`}/>
                    // <div key={day.id} className={styles.day}  >{day.date.getDate()}</div>
                )}
            </div>
        </div>
    )
};
//
export default Tracker;