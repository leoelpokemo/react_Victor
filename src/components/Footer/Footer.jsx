import "./Footer.css";

function Footer({ companyName, setCompanyName }) {
  return (
    <footer classname="footer">
      <h1 className="footer__title">{companyName}</h1>
      <button
        onClick={() => {
          setCompanyName("Esto lo va a actualizar en ambos componentes");
        }}
      >
        Click to update company name
      </button>
    </footer>
  );
}

export default Footer;
