import { useContext } from "react";
import MyContext from "../MyContext";
import Footer from "./Footer";
import JobCard from "./JobCard";

function Career() {
  const { jobs } = useContext(MyContext);
  return (
    <>
      <div className="d-flex justify-content-center mt-5 p-5">
        <div className="justify-content-center">
          <h1>Wan't to work with us?</h1>
          <h3>Check out our latest jobs</h3>
        </div>
      </div>
      <div className="w-100 justify-content-center d-flex m-auto">
        <div className="w-75">
          <div className="row d-flex">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="col-sm-6 col-md-4 col-xl-3 p-2 d-flex justify-content-center mt-3"
              >
                <JobCard job={job} key={job.id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Career;
