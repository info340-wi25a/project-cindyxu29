import React from 'react';

export default function PoseButtons(props) {

    return(
        <>
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal-pose">
            Add Pose
        </button>
        {/* <!-- Button to trigger pose library --> */}
        <a href="searchpose.html" class="btn btn-dark">Search for Poses</a>


        {/* // <!-- Add Pose Modal --> */}
        <div class="modal fade" id="modal-pose" tabindex="-1" role="dialog" aria-labelledby="poseModalLabel"
        aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Add New Pose</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                    </div>
                    <div class="modal-body">
                        <form>
                        <div class="form-group">
                            <label for="class-name" class="col-form-label">Pose Name:</label>
                            <input type="text" class="form-control" id="class-name"/>
                        </div>
                        <div class="form-group">
                            <label for="duration" class="col-form-label">Duration:</label>
                            <input type="text" class="form-control" id="duration-time"/>
                        </div>
                        <div class="form-group">
                            <label for="difficulty" class="col-form-label">Difficulty:</label>
                            <input type="text" class="form-control" id="difficulty-level"/>
                        </div>
                        <div class="form-group">
                            <label for="location" class="col-form-label">Script:</label>
                            <input type="text" class="form-control" id="location-name"/>
                        </div>
                        <div class="form-group">
                            <label for="file-upload" class="col-form-label">Image:</label>
                            <input type="file" class="form-control" id="file-upload" accept="image/*"/>
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Notes:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Add Pose</button>
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}