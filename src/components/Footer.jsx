function Footer() {
  return (
    <>
      <footer className="mt-5">
        <div className="bg-dark mt-5">
          <div className="row text-white d-flex justify-content-between p-4 m-auto">
            <div className="col-12 col-sm-4 d-flex justify-content-center p-0">
              <h5>Logo</h5>
            </div>
            <div className="col-12 col-sm-4 d-flex align-items-center justify-content-center p-0">
              <ul className="list-unstyled">
                <h5>Useful Links</h5>
                <li>
                  <a href="#">Learn more</a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-4 d-flex justify-content-center p-0">
              <ul className="list-unstyled">
                <h5>Contact</h5>
                <li>
                  <i className="bi bi-house-fill"></i>{" "}
                  <span>Halmstad, 302 90, SWE</span>
                </li>
                <li>
                  <i className="bi bi-envelope-fill"></i>{" "}
                  <a href="mailto:info@example.com">info@example.com</a>
                </li>
                <li>
                  <i className="bi bi-telephone-fill"></i>{" "}
                  <a href="tel:+0123434323">+46 035 343 23</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <p className="text-white">
              ©All rights reserved - Qwerty AB - 2023
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
