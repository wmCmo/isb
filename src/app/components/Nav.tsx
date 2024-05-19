'use client'
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { List } from '@phosphor-icons/react/dist/ssr';
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
                <Link
                    className={`${pathname.includes(page) || (pathname === '/' && page === 'home') ? 'font-extrabold' : ''} hover:underline underline-offset-4`}
                    href={page === 'home' ? '/' : page}>{page.charAt(0).toUpperCase() + page.slice(1)}
                </Link>
            </li>
        )
    })

    const logo = <Image src='/logo.svg' width={30} height={30} alt="logo" />;

    return (
        <div className='relative'>
            <div onClick={handleToggle} className="hover:cursor-pointer select-none absolute sm:hidden z-10 mx-8 my-4">
                {<List
                    size={40}
                    weight="light"
                />}
            </div>
            <div className="absolute top-4 right-8 sm:hidden">
                {logo}
            </div>
            <nav className={`bg-neutral-50/90 dark:bg-neutral-800/95 ${navShow ? 'block absolute sm:static w-screen' : 'hidden'} p-7 sm:block`}>
                <ul className={`flex flex-col items-center text-center gap-2 sm:flex-row sm:gap-4`}>
                    <div className="hidden sm:block mr-4">
                        {logo}
                    </div>
                    {mappedPages}
                    <li className="text-neutral-700 bg-neutral-300 mt-4 sm:mt-0 sm:ml-auto px-4 py-2 rounded-md transition ease-in-out hover:-translate-y-1 font-medium">
                        <Link href={'login'} className="">เข้าสู่ระบบ</Link>
                    </li>
                    <li className="text-neutral-100 bg-blue-800 sm:mt-0 px-4 py-2 rounded-md font-medium">
                        <Link href={'signin'} className="">สมัครสมาชิก</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
