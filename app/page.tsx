import Image from 'next/image'
'use client'
import styles from './page.module.css'
import {useRouter} from "next/navigation";
import Link from "next/link";

// const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
//
// const calcPeriod = (d1:Date, d2:Date):number=>{
//     const day = 1000*60*60*24;
//     return Math.ceil((d2.getTime() - d1.getTime())/day)+1;
// }
//
// type DateType = {
//     id:number,
//     date:Date
// }
//
// const setDays = (per:number, start: Date):Array<DateType> => {
//     const days:Array<DateType> = [];
//     for (let i = 1; i < per; i++) {
//         const day = new Date(start.setDate(start.getDate()+1));
//         days.push({id:i, date:day})
//     }
//     return days
// }
//
//
// //todo: add control for input dates
// const dateStart = new Date(2023, 6, 16) //todo: correct start date
// const dateFinish = new Date(2023, 7, 20)
// const period = calcPeriod(dateStart, dateFinish);
// const days = setDays(period, dateStart);


export default function Home() {
    return(
        <div>
            <ul>Выбери свой челендж
            <li className={styles.item}>
                <Link href={'/track/1'}>Summer Training Challenge 2023 </Link>
            </li>
            </ul>
        </div>
    )
  //   const router = useRouter()
  //   const handleClickOnDay =  () => {
  //       console.log('redirect')
  //       router.push('/activity')
  //   }
  // return (
  //   <div className={styles.container}>
  //       <div className={styles.containerWeekdays}>
  //           {weekDays.map((day, ind)=><div key={ind} className={styles.weekday}>{day}</div>)}
  //       </div>
  //       <div className={styles.containerDays}>
  //           {days.map(day=><div key={day.id} className={styles.day}  onClick={()=>router.push('/activity')}>{day.date.getDate()}</div>)}
  //       </div>
  //   </div>
  // )
}
