import Link from "next/link";
import Container from "./Container";

const Intro = () => {
  return (
    <Container id={"intro"}>
      <div className="grid grid-cols-1 gap-4 h-[85vh] -z-10">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-7xl text-center tracking-wider font-bold uppercase text-quaternary">
            Did you know
          </h1>
          <br />
          <br />
          <h1 className="text-7xl tracking-wider font-bold uppercase text-tertiary animate-bounce text-center">
            <Link href="/#about"> me?</Link>
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Intro;
