import "./CSS/styleBody.css";
import luffyGear4 from "./assets/items/Luffy.png";
function Body() {
  return (
    <>
      <div class="product-grid">
        <div class="product-card">
          <span class="badge">Top Sellers</span>
          <img src={luffyGear4} alt="Product Luffy Gear 4" />
          <h3>I'm a product</h3>
          <p>$15.00</p>
        </div>

        <div class="product-card">
          <span class="badge">Top Sellers</span>
          <img />
          <h3>I'm a product</h3>
          <p>$15.00</p>
        </div>

        <div class="product-card">
          <span class="badge">Top Sellers</span>
          <img />
          <h3>I'm a product</h3>
          <p>$15.00</p>
        </div>

        <div class="product-card">
          <span class="badge">Top Sellers</span>
          <img />
          <h3>I'm a product</h3>
          <p>$15.00</p>
        </div>
      </div>

      <hr />
      {/*Added About FAQ*/}
      <div id="faq" className="FAQ">
        <h1>Frequently Ask Question</h1>
        <h2>
          Q: What is YATASHA Anime Portal?
          <br />
          A: YATASHA Anime portal is a platform dedicated to providing the
          latest news, reviews, and insights into the world of anime figurine.
        </h2>
      </div>
      <hr />
      {/*Added Contact*/}
      <div id="contact" className="Contact">
        <h1>Contact</h1>
        <ul>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Phone Number</a>
          </li>
          <li>
            <a href="">IG</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Body;
