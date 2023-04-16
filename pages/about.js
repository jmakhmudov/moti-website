import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '@/styles/About.module.css'
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function About() {

    return (
        <>
            <Head>
                <title>MOTI | О нас</title>
                <meta name="description" content="Ресторан азиатской кухни, где вы сможете насладиться вкусом и атмосферой Востока. Как только вы переступите порог нашего заведения, вы ощутите ароматы специй, украсившие нашу атмосферу, и услышите приятную музыку, которая перенесет вас в далекие уголки Азии." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/moti2.png" />
            </Head>
            <Navbar />
            <section className={styles.aboutBox}>
                <h1>О нас</h1>
                <section className={styles.aboutInfo}>
                    <section>

                        <p className={styles.description}>
                            <span>MOTI</span> - путь к сытой семье
                            <br />
                            <span>MOTI</span> - жемчужина счастливой семьи
                            <br />
                            Советуем всем экстренно покинуть свои дома и поспешить в ресторан паназиатской кухни - MOTI, расположенный в самом сердце столицы.
                            Мы выделяемся среди других ресторанов нашим трепетным отношением к каждому гостю и к готовке. В нашем меню вы сможете заметить более 150 позиций, которое мы регулярно обновляем.
                            В ресторане MOTI каждый посетитель найдет гармонию и баланс.
                        </p>

                        <p className={styles.hours}>
                            Ежедневно с <span>11:00 до 02:00</span>
                        </p>

                        <p className={styles.location}>
                            Афрасиаб, 41в​1 этаж
                            Афросиёб ж/м, Мирабадский район, Ташкент, 100029
                        </p>

                        <p className={styles.phone}>
                            +998 99 533 4444
                        </p>

                        <section className={styles.contacts}>
                            <div className={styles.socials}>
                                <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/motitashkent/">
                                    <FontAwesomeIcon icon={faInstagram} size="xl" />
                                </Link>

                                <Link target="_blank" rel="noreferrer" href="https://t.me/MotiPanasianRestaurant">
                                    <FontAwesomeIcon icon={faTelegram} size="xl" />
                                </Link>
                            </div>

                        </section>
                    </section>

                    <div className={styles.aboutImg}>
                        <Image src={"/images/moti-logo.png"} layout="fill" className={styles.aboutImg} />
                    </div>

                </section>

            </section>
            <Footer />
        </>
    )
}