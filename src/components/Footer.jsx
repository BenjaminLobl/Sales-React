import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
        <a href="#">Our Story</a>
        <a href="#">Find a Store</a>
        <a href="#">Help Center</a>
        <a href="#">Latest Updates</a>
        <a href="#">Join Our Team</a>
        <a href="#">Get in Touch</a>
        </div>
        <p className="love">
          Designed &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/BenjaminLobl"
          >
            &nbsp; Benjamin
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
