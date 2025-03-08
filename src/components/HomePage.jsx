import React from 'react';
import { Link } from 'react-router';

function HomePage() {
  return (
    <main>
      <div className="video-container splash">
        <div className="splash-text">
          <h1>Welcome to YogaEase</h1>
          <h2>Structure Your Flow, Elevate Your Practice.</h2>
          {/* Link to navigate to Manage Classes page */}
          <Link to="/my-classes" className="btn btn-primary">Manage your Classes</Link>
        </div>
      </div>
    </main>
  );
}

export default HomePage;