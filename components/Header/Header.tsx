import styles from './Header.module.scss'
import Link from "next/link";
const Header = () => {
    return (
        <div>
            <Link href={'/'}>Tracker</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/track'}>Tracker</Link>

        </div>
    );
};

export default Header;