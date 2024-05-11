'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Hamburger } from '@phosphor-icons/react/dist/ssr';
import Image from "next/image";

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
        <div className='relative'>

            <div onClick={handleToggle} className="hover:cursor-pointer select-none absolute sm:hidden z-10 m-2">
                {<Hamburger
                    size={40}
                    weight="light"
                />}
            </div>
            <nav className={`bg-blue-950 ${navShow ? 'block absolute sm:static w-screen opacity-95' : 'hidden'} p-7 sm:block`}>
                <ul className={`flex flex-col items-center text-center gap-2 sm:flex-row sm:gap-4`}>
                    <div className="absolute right-4 top-2 sm:static">
                        <Image src='./logo.svg' width={30} height={30} alt="logo" />
                    </div>
                    {mappedPages}
                    <li className="mt-4 sm:mt-0 sm:ml-auto px-4 py-1 rounded-md bg-blue-100 text-black transition ease-in-out hover:-translate-y-1 w-24 font-medium">
                        <Link href={'login'} className="">Log In</Link>
                    </li>
                    <li className="sm:mt-0 px-4 py-1 rounded-md bg-blue-900 w-24 font-medium">
                        <Link href={'signin'} className="">Sign In</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
