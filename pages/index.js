import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link href="/"> THIS IS THE TEST LINK </Link>
      </main>
    </div>
  );
}
