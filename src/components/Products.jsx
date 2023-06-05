import React, { useContext } from "react";
import MyContext from "../MyContext";
import Footer from "./Footer";
import ProductCard from "./ProductCard";

function Products() {
  const { products } = useContext(MyContext);
  return (
    <>
      <section className="hero mb-5">
        <div
          className="bg-hero d-flex justify-content-center align-items-center position-relative"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/268782/pexels-photo-268782.jpeg?auto=compress&cs=tinysrgb&w=1600')",
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
                We believe in our
              </h1>
              <h1 className="text-white d-flex justify-content-center">
                <span style={{ zIndex: "4" }} className="text-info">
                  products
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <h2 className="d-flex justify-content-center m-3">
                Energy Management Systems
              </h2>
              <div className="p-5">
                Welcome to our range of energy management products. We offer
                innovative solutions to make energy consumption more efficient
                and optimize sustainability within industries and companies.
                With advanced measuring and monitoring systems, data-driven
                analytics and smart control devices we help our customers reduce
                energy costs, improve energy efficiency and reduce environmental
                impact. Explore our range and take the next step towards
                efficient energy management and sustainability.
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 justify-content-center d-flex">
          <div className="w-75">
            <div className="row d-flex">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="col-sm-6 col-md-4 col-xl-3 p-2 d-flex justify-content-center"
                >
                  <ProductCard key={item.id} item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Products;
