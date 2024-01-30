import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Product.module.css"
import Link from "next/link"
//https://dummyjson.com/products?limit=12

export async function getStaticProps(){
    const response = await fetch('https://dummyjson.com/products?limit=12');
    const data = await response.json();
    return {
        props: {products: data.products}
    }
}

export default function Index({products}) {
    return (
        <>
            <Head>
                <title> สินค้าทั้งหมด | sombobby </title>
                <meta name='keywords' content="sombobby,ร้านค้า,ขายเสื้อผ้า"/>
            </Head>
            <div className={styles.container}>
            {products.map(item => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>
                        <h2 className={styles.title}>{item.name}</h2>
                        <Image src={item.thumbnail} width={300} height={300} alt={item.title} />
                    </Link>
                    
                </div>
            ))}
            </div>
        </>
    )
}