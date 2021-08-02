import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <Link href='/'><img className={styles.logo} src='/img/logo.png' alt='Logo' width='293' height='62' /></Link>
            <div className={styles.links}>
                <Link href='/#about-us'>About Us</Link>
                <Link href='/pets'>All Pets</Link>
                <Link href='/donate'>Donate</Link>
                <Link href='/volunteer'>Volunteer</Link>
                <Link href='/#contact'>Contact</Link>
            </div>
        </div>
    )
}