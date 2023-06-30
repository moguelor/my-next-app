import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image alt="" src="/images/logo.svg" />
        <Link href="/docs/app"> THIS IS THE TEST LINK </Link>
        <div className={styles.footer}> Im the footer with styles </div>
      </main>
    </div>
  );
}
