import Image from "next/image";
import Container from "./Container";

const About = () => {
  return (
    <Container id={"about"}>
      {" "}
      <div className="grid grid-cols-3 gap-3 h-[85vh]">
        <div className="my-auto col-span-2">
          <h1 className="text-md text-4xl tracking-wider font-bold text-quaternary">
            Hi ✋, i am
            <br />
            Muhammad Nurfajri Rahman
            <br />
            <span className="text-lg text-quaternary text-center">
              Web Developer <span className="text-tertiary">FRONT-END</span> ||
              <span className="text-tertiary"> BACK-END</span> ||
              <span className="text-tertiary"> FULL-STACK</span>
            </span>
          </h1>

          <br />
          <p className="text-quaternary">
            I am a graduate of informatics engineering at UIN Syarif
            Hidayatullah Jakarta, I have an interest in software engineering,
            especially as a web developer. Has one year of experience as a web
            developer. Able to work in a team or alone. I can also adapt to the
            latest technology and learn quickly.
          </p>
        </div>
        <div className="flex items-center justify-end">
          <Image
            className="drop-shadow-lg"
            src="/img/hero.png"
            width={500}
            height={0}
            draggable="false"
          ></Image>
        </div>
      </div>
    </Container>
  );
};

export default About;
