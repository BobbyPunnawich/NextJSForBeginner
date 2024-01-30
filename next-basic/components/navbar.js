import Link from "next/link"

export default function Navbar() {
    return(
        <nav>
            <div>
                <h1> BobbyShop </h1>
            </div>
            <ul>
                <li><Link href="/"> หน้าแรก </Link></li>
                <li><Link href="/about"> เกี่ยวกับเรา </Link> </li>
                <li><Link href="/products"> สินค้าทั้งหมด </Link> </li>
            </ul>
        </nav>
    )
}