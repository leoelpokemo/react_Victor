import logo from "../../images/logo-mexico.jpg";
import "./Header.css";  

function Header() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} />
        <h1>Mexico Magico</h1>
      </header>
    </>
  );
}

export default Header;
