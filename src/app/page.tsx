
export default function Home() {
  return (
    <>
      <main className="h-max pt-20 px-16">
        <h1 className="mt-16 sm:mt-32 text-neutral-800 dark:text-white sm:text-7xl text-vw font-black leading-none">
          A company <span className="text-blue-700 italic">that you trust.</span>
        </h1>
        <h3 className="mt-6 sm:mt-10 text-2xl font-extrabold text-neutral-800 dark:text-white">Looking for insurance? We got you covered.</h3>
        <div className="mt-8 sm:mt-12 mb-20">
          <button className="text-neutral-800 font-semibold rounded-md bg-white mr-4 py-2 px-4 mb-4 text-xl border-solid border-2 border-neutral-300 transition ease-in-out hover:-translate-y-1">Check Price</button>
          <button className="text-white font-semibold rounded-md bg-blue-800 py-2 px-4 text-xl transition ease-in-out hover:-translate-y-1">Contact Us</button>
        </div>
      </main>
      <section>
      </section>
    </>
  )
}
