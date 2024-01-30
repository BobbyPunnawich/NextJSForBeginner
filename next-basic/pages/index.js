import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title> หน้าแรก | sombobby </title>
        <meta name='keywords' content="sombobby,ร้านค้า,ขายเสื้อผ้า"/>
      </Head>
      <div className="styles.container">
        <h1 className={styles.title}> หน้าแรกของเว็บไซต์ </h1>
        <Image src="/stars.png" width={300} height={300} alt="logo"/>
        <p> ยินดีต้อนรับเข้าสู่ร้าน sombobby</p>
        <Link href="/products" className={styles.btn}> ดูสินค้าทั้งหมด </Link>
      </div>
    </>
  );
}
