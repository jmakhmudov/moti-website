import Head from "next/head"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Book() {


    return (
        <>
            <Head>
                <title>MOTI | Забронировать</title>
                <meta name="description" content="Ресторан азиатской кухни, где вы сможете насладиться вкусом и атмосферой Востока. Как только вы переступите порог нашего заведения, вы ощутите ароматы специй, украсившие нашу атмосферу, и услышите приятную музыку, которая перенесет вас в далекие уголки Азии." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/moti2.png" />
            </Head>
            <Navbar />
            <section style={{
                marginTop: '0px',
                minHeight: '75vh',
                width: '100dvw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <p style={{
                    
                }}>Ждём вашего звонка!</p>
                <div style={{
                    color: '#BF2F21',
                    fontSize: '32px',
                    fontWeight: 800
                }}>
                    +998 99 533 4444
                </div>
            </section>
            <Footer />
        </>
    )
}