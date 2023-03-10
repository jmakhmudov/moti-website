import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

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
            <button className={styles.actionBtn}>
              Забронировать стол
            </button>
          </div>

          <img src="./images/hero-moti.png" alt="Hero Image" className={styles.heroImg} />
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
          <h1>Доставка <span>бесплатная</span> до <span>10</span>км</h1>
          <img src="./images/car.png" alt="delivery" />
        </section>

        <Footer />
      </main>
    </>
  )
}
