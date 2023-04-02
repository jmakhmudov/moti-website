import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '@/styles/About.module.css'
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegram } from "@fortawesome/free-brands-svg-icons";

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
                    <section className={styles.aboutInfo}>
                        <h1>О нас</h1>
                        <p>Добро пожаловать в наш ресторан азиатской кухни, где вы сможете насладиться вкусом и атмосферой Востока.</p>

                        <section className={styles.contacts}>
                            <div className="socials">
                                <FontAwesomeIcon icon={faInstagram} size="xl"/>
                                
                                <FontAwesomeIcon icon={faTelegram} size="xl"/>
                            </div>
                            
                        </section>
                    </section>

                </section>
            <Footer />
        </>
    )
}