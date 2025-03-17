import React from 'react';
import { Link } from 'react-router';

function HomePage(props) {
  const userStatus = props.userStatus

  // if user is not signed in, route to log-in page
  let linkTo = '';
  let buttonText = '';
  if (!userStatus){
    linkTo = 'login'
    buttonText = 'Sign in to manage your classes'
  } else {
    linkTo = 'my-classes'
    buttonText = 'Manage your Classes'
  }

  return (
    <main>
      <div className="splash" role="img" aria-label="A yoga class practicing the volcano pose" >
        <div className="splash-text" >
          <h1>Welcome to YogaEase</h1>
          <h2>Structure Your Flow, Elevate Your Practice.</h2>
          {/* Link to navigate to Manage Classes page */}
          <Link to={linkTo} className="btn btn-dark homepage-button">{buttonText}</Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;