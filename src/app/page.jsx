import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="pt-16">
      <Intro />
      <About />
      <Experience />
    </main>
  );
}
