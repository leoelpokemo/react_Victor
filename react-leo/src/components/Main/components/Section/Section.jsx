import "./Section.css";

function Section({ children }) {
  return (
    <>
      <p>Este componente tendra childre</p>
      <div className="children">{children}</div>
    </>
  );
}

export default Section;
