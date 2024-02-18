const Container = ({ id, children }) => {
  return (
    <section id={id} className={`px-4 md:px-24 min-h-screen flex flex-col`}>
      {children}
    </section>
  );
};

export default Container;
