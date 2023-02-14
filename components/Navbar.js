import Link from "next/link"
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <Link href="/menu" className={styles.navLinks}>
                Меню
            </Link>
            <img src="./images/moti-logo.png" alt="Moti Logo" className={styles.logo} />
            <Link href="/about" className={styles.navLinks}>
                О нас
            </Link>
        </nav>
    )
}