import "./CSS/navbar.css";
import cartIcon from "./assets/Cart.png";
import searchIcon from "./assets/Search.png";
import accountIcon from "./assets/User.png";
import logo from "./assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <a href="#">
          <img src={logo} alt="Yatasha" className="logo" />
        </a>
      </div>

      <nav className="header-center">
        <a href="#" className="active">
          Shop
        </a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
        <a href="#">Categories</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="header-right">
        <div className="search">
          <img src={searchIcon} alt="Search" className="icon" />
          <a href="#">
            <span>Search</span>
          </a>
          <div className="underline"></div>
        </div>

        <div className="login">
          <div className="user-icon">
            <a href="#">
              <img src={accountIcon} alt="User" />
            </a>
          </div>
          <a href="#">
            <span>Log In</span>
          </a>
        </div>

        <div className="bag">
          <a href="#">
            <img src={cartIcon} alt="Cart" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
