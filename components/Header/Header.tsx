import styles from './Header.module.css'
import Link from "next/link";
const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul className={styles.container_links}>
                    <li><Link href={'/'}>Tracker</Link></li>
                    <li><Link href={'/about'}>About</Link></li>
                </ul>

                <ul className={styles.container_links}>
                    <li><Link className={styles.login} href={'/login'}>Sign in</Link></li>
                    <li><Link className={styles.signup} href={'/register'}>Sign up</Link></li>
                </ul>



                {/*<Link href={'/track'}>Tracker</Link>*/}
            </nav>
        </header>
    );
};

export default Header;