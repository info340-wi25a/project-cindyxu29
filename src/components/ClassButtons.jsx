import React from 'react';

export default function ClassButtons(props){

    return (
        <>
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal-addclass">
            Add Class
        </button>

        <a href="calendar.html" class="btn btn-dark">View Calendar</a>

        {/* <!-- MODAL !--> */}
        <div class="modal fade" id="modal-addclass" tabindex="-1" role="dialog" aria-labelledby="classModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalLabel">Create a new Class!</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="class-name" class="col-form-label">Class Name:</label>
                            <input type="text" class="form-control" id="class-name"/>
                        </div>
                        <div class="form-group">
                            <label for="duration" class="col-form-label">Duration:</label>
                            <input type="text" class="form-control" id="duration-time"/>
                        </div>
                        <div class="form-group">
                            <label for="location" class="col-form-label">Location:</label>
                            <input type="text" class="form-control" id="location-name"/>
                        </div>
                        <div class="form-group">
                            <label for="date" class="col-form-label">Date:</label>
                            <input type="text" class="form-control" id="date-s"/>
                            {/* <!--made the name 'date-s' so that its easier to seperate label and id--> */}
                        </div>
                        <div class="form-group">
                            <label for="time" class="col-form-label">Time:</label>
                            <input type="text" class="form-control" id="time-s"/>
                            {/* <!--made the name 'time-s' so that its easier to seperate label and id--> */}
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Notes:</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Add Class</button>
                    <button type="button" class="btn btn-secondary"
                        data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
