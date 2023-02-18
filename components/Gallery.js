import styles from "@/styles/Gallery.module.css"
import React from "react"

export default function Gallery() {
    const [img, setImg] = React.useState("./images/IMG_0029.png")


    function handleClick(e) {
        setImg(e.target.src)
        
    }

    return (
        <div className={styles.galleryBox}>
            <img className={styles.mainImg} src={img} alt="" id="mainImg"/>
            <div className={styles.photosList}>
                <img src="./images/IMG_0029.png" alt="" onClick={(e) => handleClick(e)}/>
                <img src="./images/IMG_0027.png" alt="" onClick={(e) => handleClick(e)}/>
                <img src="./images/IMG_0642.png" alt="" onClick={(e) => handleClick(e)}/>
                <img src="./images/IMG_0643.png" alt="" onClick={(e) => handleClick(e)}/>
            </div>
        </div>
    )
}