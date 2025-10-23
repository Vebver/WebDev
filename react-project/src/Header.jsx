import "./navbar.css";
import cartIcon from "./assets/Cart.png";
import searchIcon from "./assets/Search.png";
import accountIcon from "./assets/User.png";
import logo from "./assets/Logo.png";

function Header() {
  return (
    <header class="header">
      <div class="header-left">
        <a href="#">
          <img src={logo} alt="Yatasha" class="logo"/>
        </a>
      </div>

      <nav class="header-center">
        <a href="#" class="active">
          Shop
        </a>
        <a href="#">About</a>
        <a href="#">FAQ</a>
        <a href="#">Categories</a>
        <a href="#">Contact</a>
      </nav>

      <div class="header-right">
        <div class="search">
          <img src={searchIcon} alt="Search" class="icon" />
          <a href="#"><span>Search</span></a>
          <div class="underline"></div>
        </div>

        <div class="login">
          <div class="user-icon">
            <a href="#">
              <img src={accountIcon} alt="User" />
            </a>
          </div>
          <a href="#">
            <span>Log In</span>
          </a>
        </div>

        <div class="bag">
          <a href="#">
            <img src={cartIcon} alt="Cart" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
