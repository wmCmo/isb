'use client'
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [navShow, setNavShow] = useState(false);

    const handleToggle = () => {
        setNavShow(prevNavShow => !prevNavShow)
    }

    const pages = ['home', 'products', 'blogs', 'contact']
    const mappedPages = pages.map(page => {
        return (
            <li key={page}>
                <Link href={page === 'home' ? '' : page}>{page.charAt(0).toUpperCase() + page.slice(1)}</Link>
            </li>
        )
    })
    return (
        <nav className="p-6">
            <div onClick={handleToggle}>Click</div>
            <ul className={`flex flex-col items-center text-center gap-2 ${navShow ? '' : 'hidden'}`}>
                {mappedPages}
                <li className="mt-4">
                    <Link href={'login'}>Log In</Link>
                </li>
                <li>
                    <Link href={'signin'}>Sign In</Link>
                </li>
            </ul>
        </nav>
    )
}