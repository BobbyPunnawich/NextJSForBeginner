import { useRouter } from "next/navigation"

export async function getStaticPaths() {
    const response = await fetch('https://dummyjson.com/products?limit=12');
    const data = await response.json();
    const paths = data.products.map((item) => {
        return {
            params: {id: String(item.id)}
        }     
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}){
    const id = params.id
    const response = await fetch('https://dummyjson.com/products/' + id);
    const data = await response.json();
    return {
        props: {products: data}
    }
}

export default function ProductDetail() {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <h1> รหัสสินค้า : {id}</h1>
        </>
    )
}