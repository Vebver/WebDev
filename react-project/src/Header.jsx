import "./navbar.css";
import cartIcon from './assets/Cart.png'

function Header() {
  return (
    <header>
      <div class="top-border"></div>

      <nav class="navbar">
        <div class="navbar-left">
          <a  class="logo" href="#">YATASHA</a>
          <img src={cartIcon} alt="Cart" class="logo-cart"/>
        </div>

        <div class="navbar-right">
          <div class="nav-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
            <span>Search</span>
          </div>

          <div class="nav-item cart">
            <span>CART</span>
            <div class="cart-icon">
              <span class="cart-count">0</span>
            </div>
          </div>

          <div class="nav-item login-item">
            <div class="profile-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="profile-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A4 4 0 018 16h8a4 4 0 012.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <a href="#" class="login">
              Log In
            </a>
          </div>
          <button class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div class="bottom-border"></div>
    </header>
  );
}

export default Header;
