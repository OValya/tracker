import styles from './page.module.css'
import Link from "next/link";

export default function DayPage({params}: { params:{id:string, idDay:string} }){
    return(
        <div>
            <h3>Активности дня № {params.idDay}</h3>
            <div className={styles.container}>
                <div className={styles.row}><span>{'Ира'}</span> - <span>{'бег'}</span></div>
                <div className={styles.row}><span>{'Света'}</span> - <span>{'упры'}</span></div>
                <div className={styles.row}><span>{'ВАля'}</span> - <span>{'ходьба'}</span></div>
                <div className={styles.row}><span>{'Алень'}</span> - <span>{'лестница'}</span></div>
                <Link className={styles.link} href={`/track/${params.id}/${params.idDay}/editDay`}>Добавить свою активность!</Link>
            </div>
        </div>
    )
}