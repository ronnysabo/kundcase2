import Footer from "./Footer";

function About() {
  return (
    <>
      <section className="hero mb-5">
        <div
          className="bg-hero d-flex justify-content-center align-items-center position-relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1655720828083-96a45b0a48b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VzdGFpbmFiaWxpdHklMjBhbmQlMjBFZmZpY2llbmN5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
          ></div>
          <div
            className="d-flex w-75 justify-content-center align-items-center"
            style={{ zIndex: "2" }}
          >
            <div>
              <h1 className="text-white d-flex justify-content-center">
                We strive for...{" "}
              </h1>
              <h1 className="text-white d-flex justify-content-center">
                <span style={{ zIndex: "4" }} className="text-success">
                  Sustainability
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <h2 className="d-flex justify-content-center m-5">About us</h2>
      <div className="d-flex m-auto justify-content-center w-75">
        <div className="mb-5">
          At Energy Management Systems, with our headquarters based in Halmstad,
          Sweden, we have established ourselves as a global leader in energy
          management solutions. Our commitment to innovation and sustainability
          has allowed us to expand our presence worldwide, with offices located
          in key strategic locations across the globe.<br></br>
          <br></br> From our humble beginnings in Halmstad, Sweden, we have
          grown into a multinational company with a strong presence in the
          United States, Thailand, Norway, Denmark, and India. These offices
          serve as vital hubs for our operations, enabling us to cater to the
          diverse energy management needs of businesses in different regions.
          <br></br>
          <br></br> Our expansion into international markets has been driven by
          our mission to empower organizations globally to optimize their energy
          consumption and make a positive impact on the environment. We
          recognize that energy management is a universal challenge that
          transcends borders, and by establishing local offices, we ensure that
          our solutions are tailored to meet the specific requirements of each
          region.<br></br>
          <br></br> With our dedicated teams in each office, we combine local
          expertise with our global knowledge to provide comprehensive energy
          management solutions to businesses worldwide. Our talented
          professionals work closely with clients, understanding their unique
          needs and delivering customized strategies that maximize energy
          efficiency, reduce costs, and support their sustainability goals.
          <br></br>
          <br></br> By having a global presence, we have gained invaluable
          insights into the diverse energy landscapes and regulatory frameworks
          of different countries. This allows us to stay at the forefront of
          industry trends and technologies, ensuring that our solutions remain
          innovative and adaptable to changing market dynamics.<br></br>
          <br></br> No matter where our customers are located, they can rely on
          our extensive network and expertise to access world-class energy
          management solutions. Our international offices serve as a testament
          to our commitment to providing exceptional service and support to our
          clients, no matter their geographical location.<br></br>
          <br></br> Join us on our journey towards a more sustainable future.
          Explore our range of energy management products and solutions, and
          discover how we can help your organization achieve efficient energy
          management, reduce costs, and contribute to a greener planet.<br></br>
          <br></br>
          Headquartered in Halmstad, Sweden, with offices in the United States,
          Thailand, Norway, Denmark, and India, Energy Management Systems is
          your trusted global partner in energy optimization and sustainability.
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
