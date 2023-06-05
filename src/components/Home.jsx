import "../Home.css";
import Footer from "./Footer";

function Home() {
  return (
    <div className="page-wrapper">
      <section className="hero mb-5">
        <div
          className="bg-hero d-flex justify-content-center align-items-center position-relative"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5309166/pexels-photo-5309166.jpeg?auto=compress&cs=tinysrgb&w=1600')",
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
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          ></div>
          <div
            className="d-flex w-75 justify-content-center align-items-center"
            style={{ zIndex: "2" }}
          >
            <div>
              <h1 className="text-white d-flex justify-content-center">
                Innovate with Qwerty AB
              </h1>
              <h4 className="text-white d-flex justify-content-center align-items-center">
                Our purpose is to empower all to make the most of our energy and
                resources, bridging progress and sustainability for all.
              </h4>
            </div>
          </div>
        </div>
      </section>

      <section className="head-info">
        <div className="p-5">
          <div className="min-vh-75 row align-items-center m-auto">
            <div className="col-md-6">
              <div>
                <h3 className="m-2">
                  Empowering Energy Efficiency with Energy Management Systems
                </h3>
                <p className="m-2">
                  Welcome to our world of Energy Management Systems (EMS), where
                  we pave the way for a sustainable and efficient future. Our
                  cutting-edge solutions enable businesses and industries to
                  take full control of their energy consumption, optimize
                  resource utilization, and reduce environmental impact.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <img
                className="img-fluid w-100"
                style={{ objectFit: "cover", maxHeight: "500px" }}
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3VzdGFpbmFiaWxpdHklMjBhbmQlMjBFZmZpY2llbmN5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                alt=".."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="head-info bg-light">
        <div className="p-5 w-100">
          <div className="min-vh-75 row align-items-center m-auto">
            <div className="col-md-6 d-flex justify-content-center">
              <img
                className="img-fluid w-100"
                style={{ objectFit: "cover", maxHeight: "500px" }}
                src="https://images.pexels.com/photos/6303712/pexels-photo-6303712.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=".."
              />
            </div>
            <div className="col-md-6">
              <div>
                <h3 className="m-2">
                  Your digital partner for Sustainability and Efficiency
                </h3>
                <p className="m-2">
                  Our partners and customers inspire us every day to find new
                  ways to empower all to do more with less. We are honored to be
                  recognized and awarded globally and locally in areas of
                  sustainability, trustworthiness, reliability, and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
