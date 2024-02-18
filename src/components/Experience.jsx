import Container from "./Container";

const About = () => {
  const exp = [
    {
      id: 1,
      company: "PT. Dutagraha Afiah",
      role: "Web Developer",
      period: "Jan 2023 - Dec 2023",
      task: [
        "Create sub-system applications that support business processes",
        "Ensure the system runs properly",
        "Do testing, debugging and developing the system to make that business processes continue to run",
      ],
    },
    {
      id: 2,
      company: "UD. Sumber Makmur Gas Cilegon",
      role: "Intern Web Developer",
      period: "Mar 2022 - Jun 2022",
      task: [
        "Complete the company's transaction system",
        "Create a company asset tracing system",
      ],
    },
  ];
  return (
    <Container id="exp">
      <h1 className="text-3xl text-tertiary">Experiences</h1>
      <hr className="bg-quaternary mb-4 w-24 h-1" />
      <ul className="list-decimal ps-6">
        {exp.map((item) => (
          <li key={item.id} className="text-quaternary mb-4">
            <span className="font-bold">
              {item.company}{" "}
              <span className="text-tertiary">({item.role})</span>
            </span>
            <br />
            <span className="text-sm">({item.period})</span>
            {item.task.map((i, index) => (
              <ul key={index} className="list-disc list-inside">
                <li>{i}</li>
              </ul>
            ))}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default About;
