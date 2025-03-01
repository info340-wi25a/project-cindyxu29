import React from "react";
import { Link } from 'react-router-dom';


export default function ClassMain() {
  return (
    <main>
        <Link to="/pose" className="btn btn-primary">View Class</Link>
    </main>
  )
}