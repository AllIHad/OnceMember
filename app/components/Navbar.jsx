import Link from "next/link"
import Image from "next/image"
import TwiceLogo from "./TwiceLogo.png"

export default function Navbar() {
    return (
        <nav>
            <Image 
             src={TwiceLogo}
             alt="Twice Logo"
             width={50}
             quality={100}
             placeholder="blur"
            />
            <h1>Once</h1>
            <Link href='/' >Dashboard</Link>
            <Link href='/member' >Members</Link>
        </nav>
    )
}
