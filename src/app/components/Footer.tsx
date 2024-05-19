import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-blue-900 px-16 py-10 text-white sm:flex gap-6 justify-between">
            <div className="mt-4">
                <h4 className="font-semibold mb-1">เวลาทำการ</h4>
                <p>จันทร์-เสาร์ (8:30-17:00)</p>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold mb-1">ที่อยู่-ติดต่อ</h4>
                <p>บริษัท ไอเอสบี อินชัวรันส์โบรกเกอร์ จำกัด</p>
                <p>95/2 หมู่5 ตำบลสำโรงเหนือ อำเภอเมือง สมุทรปราการ 10270</p>
                <p>โทร: 027571717</p>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold mb-1">Social Media</h4>
                <p className="underline underline-offset-2">
                    <Link href='https://page.line.me/ztc4820b'>Line Official</Link>
                </p>
                <p className="underline underline-offset-2">
                    <Link href='https://www.facebook.com/isbinsurancebroker/'>Facebook Page</Link>
                </p>
            </div>
        </footer>
    )
}
