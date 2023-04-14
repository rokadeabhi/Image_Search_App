import React from 'react';
import "./Work.css";
const Image = ({ data }) => {
  return (
    <>
    

{/* <section className="bg-light pt-5 pb-5 shadow-sm"> */}
        <div className="container ">
          <div className="row justify-content-md-center  align-items-start ">
           
                <div className="col-12 col-xl-6 col-lg-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="img-fluid img-thumbnail d-block mb-4 h-100"
                      src={data.urls.small}
                      alt=""
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{data.description}</h5>
                      <p className="card-text mb-4">{data.alt_description}</p>
                      <a
                        href={data.urls.regular}
                        className="btn btn-primary text-white mt-auto align-self-start"
                      >
                        Link
                      </a>
                    </div>
                  </div>
                </div>
             
          </div>
        </div>
      {/* </section> */}





    </>

  )
}

export default Image