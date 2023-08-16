import Head from "next/head";

export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  console.log(data);
  return {
    props: { products: data.products },
  };
}

export default function Index({ product }) {
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา | BobbyPunnawich</title>
        <meta name="keywords" content="kongruksiam,ร้านค้า,ขายเสื้อผ้า"></meta>
      </Head>
      <div></div>
    </>
  );
}
