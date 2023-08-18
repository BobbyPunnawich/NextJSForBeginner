export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  const paths = data.products.map((item) => {
    return {
      params: { id: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
  return {
    props: { product: data },
  };
}

export default function ProductDetail({ product }) {
  return (
    <>
      <h1>รหัสสินค้า : {product.id}</h1>
      <h1>ชิ่อ : {product.title}</h1>
      <h2>ราคา : {product.price}</h2>
    </>
  );
}
