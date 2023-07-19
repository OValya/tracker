import styles from './Header.module.css'
import Link from "next/link";
const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href={'/'}>Tracker</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/login'}>Sign in</Link>
                <Link href={'/activity'}>activity</Link>
                {/*<Link href={'/track'}>Tracker</Link>*/}
            </nav>
        </header>
    );
};

export default Header;