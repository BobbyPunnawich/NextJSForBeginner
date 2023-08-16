import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  console.log(data);
}

export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก | BobbyPunnawich</title>
        <meta name="keywords" content="kongruksiam,ร้านค้า,ขายเสื้อผ้า"></meta>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไซต์</h1>
        <Image src="/shopping.svg" width={300} height={300} alt="logo" />
        <p>ยินดีต้อนรับเข้าสู่ร้านส้มบ๊อบบี้</p>
        <Link href="/products" className={styles.btn}>
          ดูสินค้าทั้งหมด
        </Link>
      </div>
    </>
  );
}
