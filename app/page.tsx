import Image from "next/image";
import LoughConnNormal from "../public/lough-conn-normal.jpg"
import LoughConnSunset from "../public/lough-conn-sunset.jpg"
import LoughConnRoute from "../public/lough-conn-route-google-maps.png"
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>The Inaugural Lough Conn Dash - weekend of the 10th May</h1>
<p>Welcome to the first ever Lough Conn dash, a 50ish km (we haven't measured it yet) zip around the lovely Lough Conn in North Mayo. The </p>
        <h2>Costa del Conn</h2>
        <Image
          src={LoughConnNormal}
          alt="Lough Conn Daytime view"
          priority
        />
        <h2>Planned Route</h2>
         <Image
          src={LoughConnRoute}
          alt="Lough Conn route"
          priority
        />
        <p>This route will take us on all the roads closest to Lough Conn, without having to double back on ourselves. Starting from Deel Castle Bridge. 
          Do you go on the along the west bank, by Gortnor Abbey, towards(but not through, arouund) Lahardane, before going to Massbrook, the (roughly) halfway point.
          After Massbrook, cross Pontoon Bridge, through the hills there, take a sharp left at Corcoran Fuels to Brackwansha, and you'll be on the home stretch through Cloghans and Knockfree. 
          Or go East, towards Cloghans and Knockmore, 
           Google maps says it's 51.8km.  </p>
     <a href="https://maps.app.goo.gl/BHfpmDrfgnNcgtBZ9"> Link to access route on google maps</a>
      <h2>Isn't she lovely?</h2>
      <Image
          src={LoughConnSunset}
          alt="Lough Conn Sunset view"
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
