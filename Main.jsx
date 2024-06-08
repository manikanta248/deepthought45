import { useState } from "react";
import React from "react";

export default function Main({project}) {
    const [down,setDown]=useState(true);
    const task = project.tasks[0];
    const assets = task.assets;
  
    // Access the first asset directly
    const firstAsset = assets[0];
    const second = assets[1];
    const third = assets[2];
    const forth = assets[3];


  return (
    <div className="container mt-2 mb-5">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{color:"rgba(0, 41, 255, 1)" ,fontWeight:"766"}}>{project.title}</h2>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            style={{ borderRadius: "12px" }}
          >
            Submit task
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(196, 194, 194)",
          padding: "15px",
          marginBottom: "20px",
          marginTop:"2rem"
        }}
      >
        <h4>{project.tasks[0].title}</h4>

        <p>
         {project.tasks[0].description}
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
          gap: "40px",
        }}
      >
        <div className="card" style={{ height: "600px", borderRadius: "15px",boxShadow: "0 12px 14px rgba(0,0,0,0.4)" }}>
          <div
            className="card-header"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "black",
              color: "white",
            }}
          >
            {firstAsset.title}
            <i class="bi bi-info-circle-fill mx-3"></i>
          </div>
          <div className="card-body">
            <div>
              <h5>Description:</h5>
              <p>{firstAsset.description}</p>
            </div>
            <div>
              <iframe
                src={firstAsset.content}
                title="YouTube video player"
                width="100%"
                height="291px"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="card" style={{ height: "600px", borderRadius: "15px", boxShadow: "0 12px 14px rgba(0,0,0,0.4)"}}>
          <div
            className="card-header"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "black",
              color: "white",
            }}
          >
            {second.title}
            <i class="bi bi-info-circle-fill mx-3"></i>
          </div>
          <div className="card-body">
            <div>
              <h5>Description:</h5>
              <p>{second.description}</p>
            </div>
            <div>
              <a
                className="btn "
                data-bs-toggle="collapse"
                href="#multiCollapseExample1"
                role="button"
                aria-controls="multiCollapseExample1"
                style={{
                  width: "100%",
                  height: "40px",
                  boxShadow: "rgba(0, 0, 0, 0.4)",
                  marginBottom: "10px",
                  backgroundColor: "rgba(254, 255, 192, 0.2)",
                  display: "flex",
                  
                }}
                onClick={() => setDown(prevState => !prevState)}
              >
                <h3>{down?(<i  class="bi bi-chevron-down"></i>):<i class="bi bi-chevron-up"></i>}</h3>
                <h4 className="mx-auto">Thread A</h4>
              </a>
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample1"
              >
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <div
                    className="card"
                    style={{
                      width: "250px",
                      height: "95px",

                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="card-header"
                      style={{
                        border: "none",
                      }}
                    >
                      Sub Thread 1
                    </div>
                    <div
                      className="card-body"
                      style={{
                        padding: "0",
                        backgroundColor: "rgba(250, 250, 250, 1)",
                        boxShadow: "rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div
                        className="input-group mb-3"
                        style={{ width: "100%", height: "70px" }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter text here"
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                            textAlign: "left",
                            paddingLeft: "10px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="card"
                    style={{
                      width: "250px",
                      height: "95px",

                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="card-header"
                      style={{
                        border: "none",
                      }}
                    >
                      Sub interpretation 1
                    </div>
                    <div
                      className="card-body"
                      style={{
                        padding: "0",
                        backgroundColor: "rgba(250, 250, 250, 1)",
                        boxShadow: "rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div
                        className="input-group mb-3"
                        style={{ width: "100%", height: "70px" }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter text here"
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                            textAlign: "left",
                            paddingLeft: "10px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mt-5  container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "50px",
                    justifyContent: "end",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <i className="bi bi-lightbulb-fill fs-3"></i>
                    <i className="bi bi-chat-left-text-fill fs-3"></i>
                    <i className="bi bi-chat-square fs-3"></i>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div className="dropdown">
                      <button
                        className="btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                      >
                        Select Categ
                      </button>
                      <ul className="dropdown-menu"></ul>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn  dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                      >
                        select proces
                      </button>
                      <ul className="dropdown-menu"></ul>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className=" btn text-white p-3"
                    style={{
                      backgroundColor: "rgba(0, 41, 255, 1)",
                      borderRadius: "10px",
                      top: "42px",
                    }}
                  >
                    + Sub-thread
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "15px",
                  }}
                >
                  <div
                    className="card"
                    style={{
                      width: "525px",
                      height: "105px",

                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                      boxSizing: "border-box",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      className="card-header"
                      style={{
                        border: "none",
                      }}
                    >
                      Featured
                    </div>
                    <div
                      className="card-body"
                      style={{
                        padding: "0",
                        backgroundColor: "rgba(250, 250, 250, 1)",
                        boxShadow: "rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <div
                        className="input-group mb-3"
                        style={{ width: "100%", height: "70px" }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter text here"
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                            textAlign: "left",
                            paddingLeft: "10px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card"
          style={{
            height: "600px",
            borderRadius: "15px",
            boxShadow: "0 12px 14px rgba(0,0,0,0.4)",
          }}
        >
          <div
            className="card-header"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "black",
              color: "white",
            }}
          >
            {third.title}
            <i class="bi bi-info-circle-fill mx-3"></i>
          </div>
          <div className="card-body">
            <div>
              <h5>Description:</h5>
              <p>{third.description}</p>
            </div>
            <div>
              <h4>Title</h4>
              <div class="input-group mb-3">
                
                <input
                  type="text"
                  class="form-control"
                 
                  aria-describedby="basic-addon1"
                  style={{ backgroundColor:"rgba(252, 251, 251, 1)",boxShadow:"rgba(0, 0, 0, 0.15)"}}
                />
              </div>
              <div>
                <h4>Content</h4>
                <div>
                    <div style={{boxShadow:"0 2px 10px rgba(0,0,0,0.3)"}}>
                    <div  style={{display:"flex"}}>
                    <p style={{fontWeight:"400",color:"rgba(97, 97, 97, 1)",padding:"15px"}}>File</p>
                    <p style={{fontWeight:"400",color:"rgba(97, 97, 97, 1)",padding:"15px"}}>Edit</p>
                    <p style={{fontWeight:"400",color:"rgba(97, 97, 97, 1)",padding:"15px"}}>View</p>
                    <p style={{fontWeight:"400",color:"rgba(97, 97, 97, 1)",padding:"15px"}}>insert</p>
                    <p style={{fontWeight:"400",color:"rgba(97, 97, 97, 1)",padding:"15px"}}>Format</p>
                    <p style={{fontWeight:"400",color:"rgba(97, 97, 97, 1)",padding:"15px"}}>Tools</p>
                    <p style={{fontWeight:"400",color:"rgba(97, 97, 97, 1)",padding:"15px"}}>Table</p>
                    <p style={{fontWeight:"400",color:"rgba(97, 97, 97, 1)",padding:"15px"}}>Help</p>
                    </div>
                    
                    <div style={{display:"flex"}}>
                    <i class="bi bi-arrow-90deg-left p-2"></i>
                    <i class="bi bi-arrow-90deg-right p-2"></i>
                    <i class="bi bi-arrows-fullscreen p-2"></i>
                    <p className="p-2" style={{backgroundColor:"rgba(235, 235, 235, 1)"}}>Paragraph</p>
                    <i class="bi bi-three-dots p-2"></i>
                    </div>
                    </div>
                    
                    <div style={{width:"549px",height:"142px",backgroundColor:"rgba(252, 251, 251, 1)",boxShadow:"0 2px 4px rgba(0,0,0,0.3)"}}>

                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card" style={{ height: "600px", borderRadius: "15px" ,boxShadow: "0 12px 14px rgba(0,0,0,0.4)"}}>
          <div
            className="card-header"
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "black",
              color: "white",
            }}
          >
            {forth.title}
            <i className="bi bi-info-circle-fill mx-3"></i>
          </div>
          <div className="card-body">
            <div>
              <h5>Description:</h5>
              <p>{forth.description}</p>
            </div>
            <div>
              <a
                className="btn"
                data-bs-toggle="collapse"
                href="#multiCollapseExample2"
                role="button"
                aria-controls="multiCollapseExample2"
                style={{
                  width: "100%",
                  height: "40px",
                  boxShadow: "rgba(0, 0, 0, 0.4)",
                  marginBottom: "10px",
                  backgroundColor: "rgba(254, 255, 192, 0.2)",
                  display: "flex",
                }}
                onClick={() => setDown(prevState => !prevState)}
              >
                <h3>{down?(<i  class="bi bi-chevron-down"></i>):<i  class="bi bi-chevron-up"></i>}</h3>
                <h4 className="mx-auto">Introduction</h4>
              </a>
              <div
                className="collapse multi-collapse"
                id="multiCollapseExample2"
              >
                <p>The 4SA Method , How to bring a idea into progress ?</p>
                <div
                  className="mt-4"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  see more
                </div>
              </div>
            </div>
            <div>
              <a
                className="btn"
                data-bs-toggle="collapse"
                href="#multiCollapseExample3"
                role="button"
                aria-controls="multiCollapseExample3"
                style={{
                  width: "100%",
                  height: "40px",
                  boxShadow: "rgba(0, 0, 0, 0.4)",
                  marginBottom: "10px",
                  backgroundColor: "rgba(254, 255, 192, 0.2)",
                  display: "flex",
                }}
                onClick={() => setDown(prevState => !prevState)}
              >
                <h3>{down?(<i  class="bi bi-chevron-down"></i>):<i  class="bi bi-chevron-up"></i>}</h3>
                <h4 className="mx-auto">Thread A</h4>
              </a>
              <div className="collapse multi-collapse"
                id="multiCollapseExample3">
              <div
                
              >
                <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                <div
                  className="mt-4"
                  style={{ display: "flex", justifyContent: "end" }}
                >
                  see more
                </div>
              </div>
              <div >
                <div style={{marginTop:"20px", marginLeft:"35px",padding:"15px",border:"0.3px solid" }}>
                  Example
                </div>
                <p style={{ marginLeft:"35px"}}>You have a concept , How will you put into progress?</p>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
