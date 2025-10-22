import "./Main.css";
import Row from "./components/Row/Row";
import Section from "./components/Section/Section";
function Main() {
  return (
    <main>
      <p>Estamos dentro del componente main</p>
      <Section>
        <Row />
      </Section>
    </main>
  );
}

export default Main;
