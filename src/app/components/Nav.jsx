'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Hamburger } from '@phosphor-icons/react/dist/ssr';

export default function Nav() {
    const [navShow, setNavShow] = useState(false);

    const handleToggle = () => {
        setNavShow(prevNavShow => !prevNavShow);
    }

    const pathname = usePathname();


    const pages = ['home', 'products', 'blogs', 'contact'];
    const mappedPages = pages.map(page => {
        return (
            <li key={page}>
                <Link className={`${pathname.includes(page) || (pathname === '/' && page === 'home') ? 'font-extrabold' : ''} hover:underline underline-offset-4`} href={page === 'home' ? '/' : page}>{page.charAt(0).toUpperCase() + page.slice(1)}</Link>
            </li>
        )
    })

    return (
        <>
            <div onClick={handleToggle} className="hover:cursor-pointer select-none absolute md:hidden z-10 m-2">
                {<Hamburger
                    size={40}
                    weight="light"
                />}
            </div>
            <nav className={`p-4 bg-blue-950 ${navShow ? 'block' : 'hidden'} md:block p-7`}>
                <ul className={`flex flex-col items-center text-center gap-2 md:flex-row md:gap-4`}>
                    {mappedPages}
                    <li className="mt-4 md:mt-0 md:ml-auto px-4 py-1 rounded bg-blue-100 text-black transition ease-in-out hover:-translate-y-1 w-24 font-semibold">
                        <Link href={'login'} className="">Log In</Link>
                    </li>
                    <li className="md:mt-0 px-4 py-1 rounded bg-blue-700 w-24 font-semibold">
                        <Link href={'signin'} className="">Sign In</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
