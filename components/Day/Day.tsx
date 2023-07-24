'use client'

import styles from "./Day.module.css";
import React from "react";
import {useRouter} from "next/navigation";
type DayType = {
    id: number,
    date: Date,
    routerUrl: string
}

export default function Day(day:DayType){
    const router=useRouter();
    const clickHandler = ()=>{
        router.push(day.routerUrl)
    }
    return(
        <div key={day.id} className={styles.day}  onClick={clickHandler}>{day.date.getDate()}</div>
    )
}