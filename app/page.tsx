import Image from 'next/image'
import styles from './page.module.css'

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const calcPeriod = (d1:Date, d2:Date):number=>{
    const day = 1000*60*60*24;
    const diff = Math.ceil((d2 - d1)/day)+1;
    return diff;
}

const setDays = (per:number) => {
    //todo: write function
    return Array(per).fill(1)
}
//todo: add control for input dates
const dateStart = new Date(2023, 6, 17)
const dateFinish = new Date(2023, 7, 20)
const period = calcPeriod(dateStart, dateFinish);
const days = setDays(period);


export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.containerWeekdays}>
            {weekDays.map((day, ind)=><div key={ind} className={styles.weekday}>{day}</div>)}
        </div>
        <div className={styles.containerDays}>
            {days.map(day=><div key={day} className={styles.day}>{day}</div>)}
        </div>
    </div>
  )
}
