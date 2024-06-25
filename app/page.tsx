"use client";
import styles from "./Page.module.css";
import { frameworks, defaultText } from "./config";
export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.card_title}>{defaultText.title}</h1>
      <div className={styles.cards_container}>
        {frameworks.map((item) => (
          <div className={styles.card} key={item.title}>
            <div className={styles.img_container}>
              <img className={styles.img} src={`./img/${item.img}`} />
            </div>
            <div className={styles.card_content}>
              <div className={styles.card_title}>{item.title}</div>
              <div className={styles.card_des}>{item.des}</div>
            </div>
            <div className={styles.more} onClick={() => window.open(item.url)}>
              {defaultText.detail}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
