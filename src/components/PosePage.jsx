import React from "react";
import Header from './Header';
// import Header

export function PosePage() {
  return (
    <>
      <Header page='pose' />
      {/* <main>
        <section>
          <div className="text-black py-5 container-fluid">
            <div className="container">
              <h1>Poses in This Class</h1>
              <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#modal-pose"
              >
                Add Pose
              </button>
              <a href="searchpose.html" className="btn btn-dark">
                Search for Poses
              </a>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="d-flex">
                <div className="pose mb-4" style={{ width: "100%" }}>
                  <div className="pose-body">
                    <h2 className="pose-title">Tree Pose</h2>
                    <p>
                      {" "}
                      <strong>Duration</strong>: 2 min | <strong>Script</strong>:
                      Inhale, lift your hands to the the sky. Exhale, ground your
                      feet to the top of your mat.
                    </p>
                    <a href="#" className="btn btn-dark">
                      Move-up
                    </a>
                    <a href="#" className="btn btn-dark">
                      Move-down
                    </a>
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-view"
                    >
                      View Pose
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-edit"
                    >
                      Edit
                    </button>
                    <a href="#" className="btn btn-dark">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="pose mb-4" style={{ width: "100%" }}>
                  <div className="pose-body">
                    <h2 className="pose-title">Pose 2</h2>
                    <a href="#" className="btn btn-dark">
                      Move-up
                    </a>
                    <a href="#" className="btn btn-dark">
                      Move-down
                    </a>
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-edit"
                    >
                      Edit
                    </button>
                    <a href="#" className="btn btn-dark">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <div className="pose mb-4" style={{ width: "100%" }}>
                  <div className="pose-body">
                    <h2 className="pose-title">Pose 3</h2>
                    <a href="#" className="btn btn-dark">
                      Move-up
                    </a>
                    <a href="#" className="btn btn-dark">
                      Move-down
                    </a>
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-bs-toggle="modal"
                      data-bs-target="#modal-edit"
                    >
                      Edit
                    </button>
                    <a href="#" className="btn btn-dark">
                      Delete
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="pose mb-4" style={{ width: "100%" }}>
                <div className="pose-body">
                  <h2 className="pose-title">Pose 4</h2>
                  <a href="#" className="btn btn-dark">
                    Move-up
                  </a>
                  <a href="#" className="btn btn-dark">
                    Move-down
                  </a>
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-edit"
                  >
                    Edit
                  </button>
                  <a href="#" className="btn btn-dark">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          className="modal fade"
          id="modal-pose"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="poseModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  Add New Pose
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="class-name" className="col-form-label">
                      Pose Name:
                    </label>
                    <input type="text" className="form-control" id="class-name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="duration" className="col-form-label">
                      Duration:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="duration-time"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="difficulty" className="col-form-label">
                      Difficulty:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="difficulty-level"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location" className="col-form-label">
                      Script:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="file-upload" className="col-form-label">
                      Image:
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="file-upload"
                      accept="image/*"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Notes:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      defaultValue={""}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Add Pose
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-edit"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLabel">
                  Edit Pose
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="class-name" className="col-form-label">
                      Pose Name:
                    </label>
                    <input type="text" className="form-control" id="class-name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="duration" className="col-form-label">
                      Duration:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="duration-time"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location" className="col-form-label">
                      Script:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location-name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">
                      Notes:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      defaultValue={""}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Confirm Changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="modal-view"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="viewPoseModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">View Pose</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <img src="img/treepose.jpg" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="timer-container">
            <div className="timer">
              <h1 id="timerDisplay">00:00</h1>
              <input type="number" id="minutesInput" placeholder="Minutes" />
              <button id="startButton">Start Timer</button>
              <button id="resetButton">Reset</button>
            </div>
          </div>
        </div>
      </main> */}
    </>
  )
}