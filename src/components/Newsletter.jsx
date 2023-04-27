import "./Newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="news">
        <div className="news-text">
          <h2>Stay in the Loop</h2>
          <p>
            Subscribe to our newsletter and be the first to know about exclusive offers, new products, and the latest news from our store.
          </p>
          <form>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Sign me up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
