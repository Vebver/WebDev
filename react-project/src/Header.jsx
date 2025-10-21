import "./navbar.css";
import wishList from "./assets/Wish.png";
import accountIcon from "./assets/Account.png";
import cartIcon from "./assets/Cart.png";
import phoneIcon from "./assets/phone.png";
import mailIcon from "./assets/Mail.png";

function Header() {
  return (
    <header>
      <div class="top-bar">
        <div className="contact-bar">
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone"/>
            <span>+1 (704) 567 7894</span>
          </div>

          <div className="contact-item">
            <img src={mailIcon} alt="Email" />
            <span>support@example.com</span>
          </div>
        </div>

        <div class="utilities">
          <a href="#">Track Order</a>
          <a href="#">English</a>
          <a href="#">USD</a>
        </div>
      </div>

      <div class="main-nav">
        <div class="logo">
          <a>Yatasha</a>Cart
        </div>
        <input
          type="text"
          class="search"
          placeholder="Search for products..."
        />
        <div class="icons">
          <a class="nav-item" href="#">
            <img src={accountIcon} alt="My Account" />
            <span>Account</span>
          </a>

          <a class="nav-item" href="#">
            <img src={wishList} alt="My Wishlist" />
            <span>Wishlist</span>
          </a>

          <a class="nav-item" href="#">
            <img src={cartIcon} alt="My Cart" />
            <span>Cart</span>
          </a>
        </div>
      </div>

      <div class="menu-bar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Category</a>
        <a href="#">Product Details</a>
        <a href="#">Cart</a>
        <a href="#">Checkout</a>
        <a href="#">Dropdown</a>
        <a href="#">Megamenu V1</a>
        <a href="#">Megamenu V2</a>
        <a href="#">Contact</a>
      </div>

      <div class="promo-banner">
        🎉 20% off on your first order — Use code: <strong>FIRST20</strong>
      </div>
    </header>
  );
}

export default Header;
