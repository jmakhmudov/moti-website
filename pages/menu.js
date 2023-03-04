import Navbar from "@/components/Navbar"
import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from "react"
import styles from '../styles/Menu.module.css'
import Image from "next/image"
import Footer from "@/components/Footer"

export default function Menu() {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        for (let i = 1; i < 15; i++) {
            setMenu(menu => [...menu, <div key={i} className={styles.menuCard}>
                <Image layout="fill" objectFit="contain" src={`/menu/${i}.jpg`} alt={i} />
            </div>])
        }
    }, [])

    return (
        <>
            <Head>
                <title>MOTI | Меню</title>
                <meta name="description" content="Ресторан азиатской кухни, где вы сможете насладиться вкусом и атмосферой Востока. Как только вы переступите порог нашего заведения, вы ощутите ароматы специй, украсившие нашу атмосферу, и услышите приятную музыку, которая перенесет вас в далекие уголки Азии." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/moti2.png" />
            </Head>
            <main>
                <Navbar />
                <section className={styles.menuList}>
                    <h1>Меню</h1>
                    {menu}
                </section>
                <Footer />
            </main>
        </>
    )
}