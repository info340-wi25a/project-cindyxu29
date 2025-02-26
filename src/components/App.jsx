import React, { useState } from 'react';
import "..style.css";


function App() {
  const [count, setCount] = useState(0)
  // nav bar
  // class card
  //class header
  return (
    <div>
    <head>

        <html lang="en"/>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    
        <meta name="author" content="Christian Kaylan Alviz, James Chen, Nam Tran, Cindy Xu"/>
        <meta name="description" content="Yoga Class Planner Web App where yoga teachers can easily add classes and poses to streamline their class preparation process"/>
        <title>Yoga Planner My Classes</title>
        <link rel="icon" type="image/x-icon" href="img/favicon.png"/>
    
        {/* <!-- Bootstrap CSS (via CDN) for styling components and layout --> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
        {/* <!-- Bootstrap JS (via CDN) for interactivity and Bootstrap components --> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Google Fonts: Oswald font --> */}
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
        {/* <!-- Font Awesome icons for adding the hamburgure icon --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
    
        <link rel="stylesheet" href="css/style.css"/>
    </head>
    
    <body class="custom-page">
        <header>
            <nav>
                <div class="nav-container">
                    <div class="brand-name"><a href="/">YogaEase</a></div>
                    <div id="hamburger-menu"><a href="#"><i class="fa fa-bars" aria-label="menu"></i></a></div>
                    <div class="menu-links">
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="index.html">My Classes</a></li>
                            <li><a href="/login">Sign-in</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    
        <main>
            <section>
                <div class="text-black py-5 container-fluid">
                    <div class="container">
                        <h1>Classes</h1>
                        <!-- Button to trigger modal -->
                        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#modal-addclass">
                            Add Class
                        </button>
    
                        <!-- Button to trigger calendar -->
                        <a href="calendar.html" class="btn btn-dark">View Calendar</a>
    
                        <!-- MODAL !-->
                        <div class="modal fade" id="modal-addclass" tabindex="-1" role="dialog" aria-labelledby="classModalLabel"
                            aria-hidden="true">
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
                                                <input type="text" class="form-control" id="class-name">
                                            </div>
                                            <div class="form-group">
                                                <label for="duration" class="col-form-label">Duration:</label>
                                                <input type="text" class="form-control" id="duration-time">
                                            </div>
                                            <div class="form-group">
                                                <label for="location" class="col-form-label">Location:</label>
                                                <input type="text" class="form-control" id="location-name">
                                            </div>
                                            <div class="form-group">
                                                <label for="date" class="col-form-label">Date:</label>
                                                <input type="text" class="form-control" id="date-s">
                                                <!--made the name 'date-s' so that its easier to seperate label and id-->
                                            </div>
                                            <div class="form-group">
                                                <label for="time" class="col-form-label">Time:</label>
                                                <input type="text" class="form-control" id="time-s">
                                                <!--made the name 'time-s' so that its easier to seperate label and id-->
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
                    </div>
                </div>
    
                <div class="container">
                    <div class="row">
                        <!-- card 1 -->
                        <div class="col-md-6 col-xl-3 d-flex">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="col-sm">
                                        <h2 class="card-title">Gentle Yoga</h2>
                                        <p>30 min | @UW HUB | 03/10/2025 | 2:00 pm | Beginning lesson for UW students</p>
                                        <a href="index2.html" class="btn btn-dark">View Class</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card 2 -->
                        <div class="col-md-6 col-xl-3 d-flex">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="col-sm">
                                        <h2 class="card-title">Flow Yoga</h2>
                                        <p>60 min | @IMA | 03/11/2025 | 3:30 pm | Weekly lesson for Yoga Beginner
                                            (not-limited to students)</p>
                                        <a href="index2.html" class="btn btn-dark">View Class</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card 3 -->
                        <div class="col-md-6 col-xl-3 d-flex">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="col-sm">
                                        <h2 class="card-title">Restorative Yoga</h2>
                                        <p>75 min | @IMA | 03/13/2025 | 10:00 am | One-to-one class</p>
                                        <a href="index2.html" class="btn btn-dark">View Class</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card 4 -->
                        <div class="col-md-6 col-xl-3 d-flex">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="col-sm">
                                        <h2 class="card-title">Restorative Yoga</h2>
                                        <p>75 min | @Yoga Studio | 03/13/2025 | 2:00 pm | Intermediate level</p>
                                        <a href="index2.html" class="btn btn-dark">View Class</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    
        <footer>
            <div class="container mt-5 text-center">
              <p>&copy; 2025 UW INFO340 All Rights Reserved.</p>
            </div>
        </footer>
    </body>
    </html>

    </div>
  )
}

export default App
