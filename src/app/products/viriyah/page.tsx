import Image from "next/image";
import ViriyahPlan from "@/app/components/ViriyahPlan";

export default function Viriyah() {
    return (
        <main className="p-16">
            <div className="flex gap-8">
                <Image src='/viriyah.svg' alt="Viriyah Insurance logo" width={120} height={120}></Image>
                <div>
                    <h2 className="text-5xl text-neutral-800 font-medium">วิริยะประกันภัย</h2>
                    <h4 className="text-2xl mt-4 text-neutral-800">The Viriyah Insurance</h4>
                </div>
            </div>
            <div>
                <h5>แผน</h5>
                <ViriyahPlan/>
            </div>

        </main>
    )
}