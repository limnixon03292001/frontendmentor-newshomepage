import "./Navbar.css";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar-desktop">
      <div className="navbar-wrapper">
        <div>
          <img src={logo} className="logo"/>
        </div>

        <div className="links-wrapper">
          <a href="#">Home</a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
        </div>
      </div>
    </nav>
  );
}
