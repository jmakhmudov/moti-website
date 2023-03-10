import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

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

            <Footer />
        </>
    )
}