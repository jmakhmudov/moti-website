import Link from "next/link"
import styles from '@/styles/Navbar.module.css'
import { useRouter } from "next/router"

export default function Navbar() {
    const router = useRouter()

    return (
        <nav className={styles.navbar}>
            <Link href="/menu" className={styles.navLinks}>
                Меню
            </Link>
            <img onClick={() => router.push('/')} src="./images/moti-logo.png" alt="Moti Logo" className={styles.logo} />
            <Link href="/about" className={styles.navLinks}>
                О нас
            </Link>
        </nav>
    )
}