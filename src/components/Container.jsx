const Container = ({ id, children }) => {
  return (
    <section
      id={id}
      className={`px-4 md:px-24 md:my-0 my-8 md:min-h-screen flex flex-col`}
    >
      {children}
    </section>
  );
};

export default Container;
