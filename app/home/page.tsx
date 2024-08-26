import FloatingDockDemo from "@/components/example/floating-dock-demo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { link } from "fs";

export default function Home() {
  const words = ["Employers", "Companies", "Jobs", "Internships", "Opportunities"];
  const navItems = [
    {
      label: "Home",
      link: "/home",
      icon: (
        <svg
          className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
        </svg>
      ),
    },
    {
      label: "Matches",
      link: "/matches",
      icon: (
        <svg  
        className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
        xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
      )
    },
    {
      label: "Companies",
      link: "/companies",
      icon: (
        <svg 
        className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 icon icon-tabler icons-tabler-outline icon-tabler-buildings"

         xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 21v-15c0 -1 1 -2 2 -2h5c1 0 2 1 2 2v15" /><path d="M16 8h2c1 0 2 1 2 2v11" /><path d="M3 21h18" /><path d="M10 12v0" /><path d="M10 16v0" /><path d="M10 8v0" /><path d="M7 12v0" /><path d="M7 16v0" /><path d="M7 8v0" /><path d="M17 12v0" /><path d="M17 16v0" /></svg>
      )
    },
    {
      label: "Tips",
      link: "/tips",
      icon: (
        <svg
        className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 icon icon-tabler icons-tabler-filled icon-tabler-bulb"
        
        xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z" /><path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z" /><path d="M4.893 4.893a1 1 0 0 1 1.32 -.083l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 0 -1.414z" /><path d="M17.693 4.893a1 1 0 0 1 1.497 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7z" /><path d="M14 18a1 1 0 0 1 1 1a3 3 0 0 1 -6 0a1 1 0 0 1 .883 -.993l.117 -.007h4z" /><path d="M12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1 -.471 .192l-.129 .008h-6a1 1 0 0 1 -.6 -.2a6 6 0 0 1 3.6 -10.8z" /></svg>
      )
    }
  ];

  return (
    <>
      {/* <AuroraBackground>
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Build
            <FlipWords words={words} /> <br />
            websites with Aceternity UI
          </div>
        </div>
      </AuroraBackground> */}
      <div className="h-[40rem] flex justify-center items-center px-4 ">
        <div className="text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Discover Your Potential
          <FlipWords words={words} /> <br />
          <br />
          at the Surrey Career Fairs 2024
        </div>

        <div className="fixed bottom-0 z-50 w-5/6 h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-3xl mr-auto mb-5 ove">
          <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            {
              navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  className="flex flex-col items-center justify-center p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  {item.icon}
                  <span className="text-xs">{item.label}</span>
                </a>
              ))
            }
          </div>
        </div>
      </div>

      
    </>
  );
}
