import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>MOTI | Panasian Kitchen</title>
        <meta name="description" content="Ресторан азиатской кухни, где вы сможете насладиться вкусом и атмосферой Востока. Как только вы переступите порог нашего заведения, вы ощутите ароматы специй, украсившие нашу атмосферу, и услышите приятную музыку, которая перенесет вас в далекие уголки Азии." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/moti2.png" />
      </Head>
      <main>
        <Navbar />
        <section className={styles.heroBox}>
          <div className={styles.heroInfo}>
            <div className={styles.heroTitle}>
              Почувствуйте вкус <span>паназиатской</span> кухни
            </div>
            <Link href="/book" className={styles.actionBtn}>
              Забронировать стол
            </Link>
          </div>

          <div className={styles.heroImg}>
            <Image src="/images/hero-moti.png" layout='fill' alt="Hero Image" className={styles.heroImg} loading='eager' priority={true} />
          </div>
        </section>

        <div className={styles.textLine}>
          <span>MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI · MOTI</span>
        </div>

        <section className={styles.galleryBox}>
          <Gallery />
          <div className={styles.galleryInfo}>
            <h1>Прекрасная <span>атмосфера</span></h1>
            <p>Добро пожаловать в наш ресторан азиатской кухни, где вы сможете насладиться вкусом и атмосферой Востока. Как только вы переступите порог нашего заведения, вы ощутите ароматы специй, украсившие нашу атмосферу, и услышите приятную музыку, которая перенесет вас в далекие уголки Азии.</p>
          </div>
        </section>

        <section className={styles.deliveryBox}>
          <div>
            <h1>Доставка <span>бесплатная</span> до <span>10</span>км</h1>
            <Link target='_blank' rel="noreferrer" href="https://t.me/motideliverybot" className={styles.actionBtn}>
              Заказать
            </Link>
          </div>
          <img src="./images/car.png" alt="delivery" />
        </section>

        <Footer />
      </main>
    </>
  )
}
