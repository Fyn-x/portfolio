import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="pt-16">
      <Intro />
      <About />
      <Experience />
      <Project />
    </main>
  );
}
