import Image from "next/image";
import Container from "./Container";

const Project = () => {
  const projects = [
    {
      id: 1,
      name: "Company Profile",
      image: "/img/prev-rsummi.png",
      preview: "https://rsummi.co.id",
      lang: ["HTML", "CSS", "JavaScript", "PHP", "NodeJS", "MySQL"],
      tech: [
        "CodeIgniter",
        "ExpressJS",
        "Flight",
        "JQuery",
        "Bootstrap",
        "SocketIO",
      ],
    },
    {
      id: 2,
      name: "Sistem Jaminan Mutu (Sijamu)",
      image: "/img/prev-sijamu.png",
      preview: null,
      lang: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      tech: ["JQuery", "Bootstrap"],
    },
    {
      id: 3,
      name: "Portfolio",
      image: "/img/prev-portfolio.png",
      preview: "https://fynx.vercel.app",
      lang: ["HTML", "CSS", "JavaScript"],
      tech: ["Tailwind", "ReactJS", "NextJS", "DaisyUI"],
    },
  ];
  return (
    <Container id="projects">
      <h1 className="text-3xl text-tertiary">Projects</h1>
      <hr className="bg-quaternary mb-4 w-24 h-1" />
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card outline-quaternary outline outline-2 shadow-xl"
          >
            {project.image && (
              <figure className="max-h-40">
                <img src={project.image} loading="lazy" alt={project.name} />
              </figure>
            )}
            <div className="card-body rounded-lg text-quaternary gap-4">
              <h2 className="text-2xl font-bold text-tertiary">
                {project.name}
              </h2>
              {project.preview && (
                <a
                  className="badge badge-secondary"
                  target="_blank"
                  href={project.preview}
                >
                  Preview
                </a>
              )}
              <div className="flex flex-col gap-2">
                <p className="text-md font-bold">Language</p>
                <hr />
                <div className="card-actions justify-start">
                  {project.lang.map((item, index) => (
                    <div key={index} className="badge badge-outline">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-md font-bold">Tech</p>
                <hr />
                <div className="card-actions justify-start">
                  {project.tech.map((item, index) => (
                    <div key={index} className="badge badge-outline">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Project;
