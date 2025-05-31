import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

export default function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }
  return (
    <Container fluid>
      <div className="copyright">
        {" "}
        &copy; ketanpaswan-2024 Corporate. All Rights Reserved.
      </div>
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.facebook.com/share/16nTVig6Zc/">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://x.com/mr__perfect_143">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ketan-anand-358782235?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
    </Container>
  );
}
