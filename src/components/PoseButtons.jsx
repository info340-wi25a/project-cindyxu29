import React from 'react';

export default function PoseButtons() {
  return (
    <>
      <div>
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
      </div>
    </>
  )
}