import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words = ["Employers", "Companies", "Jobs", "Internships", "Opportunities"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div className="h-[40rem] flex justify-center items-center px-4 ">
        <div className="text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Discover Your Potential
          {/* <FlipWords words={words} /> <br /> */}
          <br />
          at the Surrey Career Fairs 2024
        </div>
      </div>
    </main>
  );
}
