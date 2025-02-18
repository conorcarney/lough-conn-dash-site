import Image from "next/image";
import LoughConnNormal from "../public/lough-conn-normal.jpg"
import LoughConnSunset from "../public/lough-conn-sunset.jpg"
import LoughConnRoute from "../public/lough-conn-route-google-maps.png"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          The Inaugural Lough Conn Dash
          <span className="block text-xl md:text-2xl text-gray-600 mt-2">
            Weekend of the 10th May
          </span>
        </h1>

        <p className="text-center max-w-2xl">Welcome to the first ever Lough Conn dash, a 50ish km (we haven&apos;t measured it yet) zip around the lovely Lough Conn in North Mayo. The </p>
        
        <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-4 text-center">Costa del Conn</h2>
        <Image
          src={LoughConnNormal}
          alt="Lough Conn Daytime view"
          width={800}
          height={500}
          className="w-full max-w-2xl object-cover"
          priority
        />
        
        <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-4 text-center">Planned Route</h2>
        <Image
          src={LoughConnRoute}
          alt="Lough Conn route"
          width={800}
          height={500}
          className="w-full max-w-2xl object-cover"
          priority
        />
        
        <p className="text-center max-w-2xl">This route will take us on all the roads closest to Lough Conn, without having to double back on ourselves. Starting from Deel Castle Bridge. 
          Do you go on the along the west bank, by Gortnor Abbey, towards(but not through, arouund) Lahardane, before going to Massbrook, the (roughly) halfway point.
          After Massbrook, cross Pontoon Bridge, through the hills there, take a sharp left at Corcoran Fuels to Brackwansha, and you&apos;ll be on the home stretch through Cloghans and Knockfree. 
          Or go East, towards Cloghans and Knockmore, 
           Google maps says it&apos;s 51.8km.  </p>
        
        <Link 
          href="https://maps.app.goo.gl/BHfpmDrfgnNcgtBZ9" 
          className="text-center text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to access route on google maps
        </Link>
        
        <h2 className="text-3xl md:text-4xl font-semibold mt-8 mb-4 text-center">Isn&apos;t she lovely?</h2>
        <Image
          src={LoughConnSunset}
          alt="Lough Conn Sunset view"
          width={800}
          height={500}
          className="w-full max-w-2xl object-cover"
          priority
        />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
      >
          Interested? 
          </a>
          
        </div>
      </main>
      <footer >
       
      </footer>
    </div>
  );
}
