import { AuroraBackground } from "@/components/ui/aurora-background";
import { FlipWords } from "@/components/ui/flip-words";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];


  return (
    <>
      <AuroraBackground>
        <div className="h-[40rem] flex justify-center items-center px-4">
        <FloatingNav navItems={navItems} />
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Build
            <FlipWords words={words} /> <br />
            websites with Aceternity UI
          </div>
        </div>
      </AuroraBackground>

      {/* <div className="bg-gradient-radial from-blue-400 to-green-400 h-screen flex items-center justify-center">
      </div> */}
    </>
  );
}
