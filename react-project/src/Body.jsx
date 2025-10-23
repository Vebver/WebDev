import "./CSS/styleBody.css";

function Body() {
  return (
    <>
      <div className="container-body">
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
        <h1>CONTENT</h1>
      </div>
      <br />
      <hr />
      {/*Added About Section*/}
      <div id="about" className="About">
        <h1>ABOUT</h1>
        <h2>
          YATASHA Anime portal is a platform dedicated to providing the latest
          news, reviews, and insights into the world of anime figurine.
        </h2>
      </div>
      <hr />
      {/*Added About FAQ*/}
      <div id="faq" className="FAQ">
        <h1>Frequently Ask Question</h1>
        <h2>
          Q: What is YATASHA Anime Portal?
          <br />
          A: YATASHA Anime portal is a
          platform dedicated to providing the latest news, reviews, and insights
          into the world of anime figurine.
        </h2>
      </div>
      <hr />
      {/*Added Contact*/}
      <div id="contact" className="Contact">
        <h1>Contact</h1>
        <ul>
          <li><a href="">Facebook</a></li>
          <li><a href="">Phone Number</a></li>
          <li><a href="">IG</a></li>
        </ul>
      </div>
    </>
  );
}

export default Body;
