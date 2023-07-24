import Image from 'next/image'

import styles from './page.module.css'
import {useRouter} from "next/navigation";
import Link from "next/link";
import {headers} from "next/headers";

type ChallengeType = {
    id:number,
    title: string
}

export default async function Home() {
    const host = headers().get("host");
    const protocol = process?.env.NODE_ENV==="development"?"http":"https"
    let response = await fetch(`${protocol}://${host}/api/challenge`, { cache: "no-store" });
    const {result} = await response.json();

    return(
        <>
            <p className={styles.title}>Выбери свой челендж</p>
            <div className={styles.container}>
                {result.map((challenge:ChallengeType) =>
                        <Link key={challenge.id}
                              className={styles.item}
                              href={`/track/${challenge.id}`}
                        >
                            {challenge.title}
                        </Link>
                )}
            </div>

        </>
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
